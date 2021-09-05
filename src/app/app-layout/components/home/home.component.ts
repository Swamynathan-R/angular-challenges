import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public testimonialDetails:any=[];
  public collectionDetails:any=[];

  ngOnInit(): void {
    this.testimonialDetails=[
      {
        "name":"Jose",
        "image":"../../../../assets/images/testimonial-1.jpg",
        "review":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod magni voluptatibus cupiditate Ipsum deleniti aliquid, voluptas, iure ab aut pariatur exercitationem doloribus molestias aspernatur at. Animi enim repellat ut maxime.",
        "rating":5
      },
      {
        "name":"Aaron",
        "image":"../../../../assets/images/testimonial-2.jpg",
        "review":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod magni voluptatibus cupiditate Ipsum deleniti aliquid, voluptas, iure ab aut pariatur exercitationem doloribus molestias aspernatur at. Animi enim repellat ut maxime.",
        "rating":4
      },
      {
        "name":"Alex",
        "image":"../../../../assets/images/testimonial-3.jpg",
        "review":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod magni voluptatibus cupiditate Ipsum deleniti aliquid, voluptas, iure ab aut pariatur exercitationem doloribus molestias aspernatur at. Animi enim repellat ut maxime.",
        "rating":3
      },
    ];
    console.log(this.testimonialDetails);
    this.collectionDetails=[
      // {
      //   "name":"Denim Jeans",
      //   "image":"../../../../assets/images/collection-1.jpg",
      //   "price":"1,499.00"
      // },
      {
        "name":"Printed Denim Shirts",
        "image":"../../../../assets/images/collection-2.jpg",
        "price":"1,500.00"
      },
      // {
      //   "name":"Denim Jeans",
      //   "image":"../../../../assets/images/collection-1.jpg",
      //   "price":"1,499.00"
      // },
      {
        "name":"Printed Denim Shirts",
        "image":"../../../../assets/images/collection-2.jpg",
        "price":"1,500.00"
      },
      // {
      //   "name":"Denim Jeans",
      //   "image":"../../../../assets/images/collection-1.jpg",
      //   "price":"1,499.00"
      // },
    ];
    console.log(this.collectionDetails);
  }


}
