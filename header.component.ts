import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 username = "Nourhan Medhat"

  username1 ="enter your username";
  pasword = " enter your pasword"
  numbervar =5;

  red = true
  green = false

  callphone(parm: any){
    console.log(parm)
  }
  address="enter your address"

  calladdress(parm: any){
    console.log(parm)
  }
}
[]