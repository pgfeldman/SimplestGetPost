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
    const payload = {
      title: 'hello from POST',
      body: 'bar',
      userId: 1
    };

    this.http.post('http://localhost:4200/getPostServer/script.php', payload, httpOptions)
      .subscribe((data) => {
        console.log('Got some data from backend ', data);
        this.mobj = data['getPostInfo'];
        this.mkeys = Object.keys(this.mobj);
        // this.extractMessage(data, 'getPostInfo');
      }, (error) => {
        console.log('Error! ', error);
      });
  }

  doGet(event) {
    const payload = {
      title: 'hello from GET',
      body: 'bar',
      userId: 1
    };
    const message = 'message=' + encodeURIComponent(JSON.stringify(payload));
    const target = 'http://localhost:4200/getPostServer/script.php?';

    // this.http.get(target+'title=\'my title\'&body=\'the body\'&userId=1')
    this.http.get(target + message)
      .subscribe((data) => {
        console.log('Got some data from backend ', data);
        this.mobj = data['getGetInfo'];
        this.mkeys = Object.keys(this.mobj);
      }, (error) => {
        console.log('Error! ', error);
      });
  }
}
