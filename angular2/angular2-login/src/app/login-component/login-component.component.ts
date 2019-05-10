import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  actUname: string;
  actPword: string;
  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  loginClick() {
    this.actUname = (<HTMLInputElement>document.getElementById('uname')).value;
    this.actPword = (<HTMLInputElement>document.getElementById('pword')).value;

    // this.httpservice.getLoginDetails(this.actUname)
    //   .subscribe(
    //   data => {
    //     const myArray = [];
    //     for (let key in data) {
    //       myArray.push(data[key]);
    //     }

    //     if (myArray.pass_word === this.actPword) {
    //       // password matches
    //       // perform success method
    //     } else {
    //       // prompt error message
    //     }
    //   }
    //   );
  }

}
