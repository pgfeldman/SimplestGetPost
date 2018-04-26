import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-getposttest',
  templateUrl: './getposttest.component.html',
  styleUrls: ['./getposttest.component.scss']
})

export class GetposttestComponent {
  mobj: object;
  mkeys;

  constructor(private http: HttpClient) {
  }

  doPost(event) {
    let payload = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    this.http.post('http://localhost:4200/uli/script.php', payload, httpOptions)
      .subscribe((data) => {
        console.log('Got some data from backend ', data);
        this.extractMessage(data, "getPostInfo");
      }, (error) => {
        console.log('Error! ', error);
      });
  }

  doGet(event) {
    let payload = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    let message = 'message='+encodeURIComponent(JSON.stringify(payload));
    let target = 'http://localhost:4200/uli/script.php?';

    //this.http.get(target+'title=\'my title\'&body=\'the body\'&userId=1')
    this.http.get(target+message)
      .subscribe((data) => {
        console.log('Got some data from backend ', data);
        this.extractMessage(data, "getGetInfo");
      }, (error) => {
        console.log('Error! ', error);
      });
  }

  extractMessage(obj, name: string){
    let item = obj[name];
    try {
      if (item) {
        let mstr = item.message;
        this.mobj = JSON.parse(mstr);
      }
    }catch(err){
      this.mobj = {};
      this.mobj["message"] = "Error extracting 'message' from ["+name+"]";
    }
    this.mkeys = Object.keys(this.mobj);
  }
}
