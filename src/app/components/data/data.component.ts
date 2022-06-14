import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  final_data:any;
  constructor(private data:DataService) {

    this.data.getData().subscribe(data=>{
      this.final_data=data
    })
   }



  ngOnInit(): void {
  }

}
