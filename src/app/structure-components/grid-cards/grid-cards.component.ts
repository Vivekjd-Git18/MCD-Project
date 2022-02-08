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
    {img:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1637569169/WebBanner/Banner258.jpg"},
    {img:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1632130374/WebBanner/Banner239.png"},
    {img:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1619179735/WebBanner/Banner208.jpg"},
    {img:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1617985988/WebBanner/Go_Free_1140x690.jpg"},
    {img:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1617986771/WebBanner/McD_April_Update_30_1140x690.jpg"},
    {img:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1600168800/WebBanner/Banner166.png"},
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





