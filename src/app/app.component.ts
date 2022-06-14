import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';
  display=false;
  message="View Data"


  toggle(){
    this.display=!this.display;
    if(!this.display){
      this.message="View Data"
    }
    else{
      this.message="Hide Data"
    }
  }
}
