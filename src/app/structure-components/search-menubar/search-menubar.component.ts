import { KeyedWrite } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OtherServicesService } from '../../services/other-services.service';

@Component({
  selector: 'app-search-menubar',
  templateUrl: './search-menubar.component.html',
  styleUrls: ['./search-menubar.component.css'],
})
export class SearchMenubarComponent implements OnInit {
@Output() emitter:EventEmitter<string> = new EventEmitter<string>()

emit(keyword:any){
  this.emitter.emit(keyword)
}
  newdata!: boolean;
  data: boolean = false;

  newdata2!: boolean;
  data2: boolean = false;

  hit() {
    this.data = !this.data;
    this.Oservice.launchBool(this.data);
    console.log(this.newdata);
  }
  hit2() {
    this.data2 = !this.data2;
    this.Oservice.launchBool(this.data2);
    console.log(this.newdata2);
  }




  searchProduct!:any

  constructor(private Oservice: OtherServicesService) {}

  ngOnInit(): void {
    this.Oservice.currentstat.subscribe((stat) => (this.newdata = stat));
    this.Oservice.currentstat.subscribe((stat) => (this.newdata2 = stat));
    this.Oservice.setSearch(this.searchProduct)
    console.log(this.searchProduct)                        
  }


}
