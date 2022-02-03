import { Component, OnInit } from '@angular/core';
import { OtherServicesService } from '../../services/other-services.service';

@Component({
  selector: 'app-search-menubar',
  templateUrl: './search-menubar.component.html',
  styleUrls: ['./search-menubar.component.css'],
})
export class SearchMenubarComponent implements OnInit {
  newdata!: boolean;
  data: boolean = false;

  hit() {

    this.data = !this.data;
    this.Oservice.launchBool(this.data);
    console.log(this.newdata);

  }


  constructor(private Oservice: OtherServicesService) {}

  ngOnInit(): void {
    this.Oservice.currentstat.subscribe((stat) => (this.newdata = stat));
  }
}
