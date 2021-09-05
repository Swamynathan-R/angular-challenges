import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public myProfile="./user/my-profile";
  public myOrders="./user/orders";
  public isboolean;
  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
    
  }
  

  navigateToHome(){
     this.router.navigate(['']);
  }

  showHamburger(){
    let menuItem = document.getElementById("navBar");
    if (menuItem.className === "navigation") {
      menuItem.className = "side-nav-active";
    } else {
      menuItem.className = "navigation";
    }
  }

  

}
