import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile-details-layout',
  templateUrl: './my-profile-details-layout.component.html',
  styleUrls: ['./my-profile-details-layout.component.css']
})
export class MyProfileDetailsLayoutComponent implements OnInit {



  public myProfile = './my-profile';
  public orders = './orders';

  public userMenuItems: any = [];
  public userDetails:any=[];
  constructor(
    private router:Router
  ) { }



  ngOnInit(): void {
    this.userMenuItems = [
      {
        "menuHeader": "My Profile",
        "subMenu": "Notification,password",
        "path":this.myProfile,
        "className":'active-menu'
      },
      {
        "menuHeader": "My Orders",
        "subMenu": "Already have 12 orders",
        "path": this.orders,
        "className":'active-menu'
      },
      {
        "menuHeader": "Shipping Addresses",
        "subMenu": " 3 addresses",
        "className":"active-menu"
      },
    ]
    let userInfo={
      "userName":"Grishk",
      "userMail":"griishkaim@gmail.com",
      "profilePic":"../../../../assets/images/profile-pic.jpg"
    }
    this.userDetails.push(userInfo);
    console.log(this.userMenuItems);
    console.log(this.userDetails);
  }

  showMenuContent(path){
    path=path.split('/');
    let menuRoute="./user/"+ path[1];
    this.router.navigate([menuRoute]);

    
  
  }

}
