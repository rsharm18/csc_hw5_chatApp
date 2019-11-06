import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor(private aFireStore:AngularFirestore,private route:Router ) { }

  validUser:boolean;
  name:String;

  getUser(userName:String,pwd:String):boolean
  {

    this.validUser=false;
    let inValidUSer:boolean;
    //get all rows
    //this.aFireStore.collection('user').valueChanges().subscribe(val => console.log(val))

    this.aFireStore.collection('user',ref=>ref.where('user_id','==',userName.trim())
    .where('password','==',pwd.trim()) ).get().toPromise().then((response) => {
      console.log(response['docs'][0])
      if(response['docs'][0])
      {
        
        console.log(response['docs'][0]['_document']['proto']['fields']['full_name'].stringValue)
        this.name=response['docs'][0]['_document']['proto']['fields']['full_name'].stringValue
        this.validUser=true;
        this.route.navigate(['chatPage'])
      }
      else
      {
        inValidUSer=false;

      }
      
    });

    
  return !this.validUser;
  }

  logout()
  {
    console.log("I am trying to logout!")
    this.validUser=false;
    this.route.navigate(['/login']);
  }
}
