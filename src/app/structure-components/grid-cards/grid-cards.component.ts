import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
      
  }

  GridCardArray:any=[
    {img:"../../assets/images/Banner160.jpg"},
    {img:"../../assets/images/Banner166.jpg"},
    {img:"../../assets/images/Banner206.jpg"},
    {img:"../../assets/images/Banner208.png"},
    {img:"../../assets/images/Banner239.jpg"},
    {img:"../../assets/images/Banner240.jpg"},
    {img:"../../assets/images/Banner243.jpg"} 
  ]



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}





