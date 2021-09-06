import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  constructor() { }

  public orderDetails:any=[];
  ngOnInit(): void {
    this.orderDetails=[
      {
        "orderId":"#123456789",
        "orderItemImg":"assets/images/collection-2.jpg",
         "orderedItemName":"Madeup White Cotton Blend Checkered Slim Fit Shirt",
        "deliveredDate":"Express Delivery by Sat,Sep 10",
        "paymentMethod":"Debit Card Payment",
        "orderTotalAmount":"1,899",
        "orderStatus":"Pending",
        "isPending":true
      },
      {
        "orderId":"#871681754",
        "orderItemImg":"assets/images/collection-1.jpg",
         "orderedItemName":"Madeup White Cotton Blend Checkered Slim Fit Denim",
        "deliveredDate":"Express Delivery by Mon,Julys 20",
        "paymentMethod":"Cash on delivery",
        "orderTotalAmount":"1,500",
        "orderStatus":"Pending",
        "isPending":true
      },
      {
        "orderId":"#275127891",
        "orderItemImg":"assets/images/collection-2.jpg",
         "orderedItemName":"Madeup White Cotton Blend Checkered Slim Fit Shirt",
        "deliveredDate":"Express Delivery by Sat,April 30",
        "paymentMethod":"Debit Card Payment",
        "orderTotalAmount":"1,900",
        "orderStatus":"Delivered",
        "isPending":false
      },
      {
        "orderId":"#123461242",
        "orderItemImg":"assets/images/collection-1.jpg",
        "orderedItemName":"Madeup blue Jeans Slim Fit Pant",
        "deliveredDate":"Express Delivery by Fri,March 30",
        "paymentMethod":"Cash on delivery",
        "orderTotalAmount":"1,800",
        "orderStatus":"Delivered",
        "isPending":false
      },
      
    ]
  }


}
