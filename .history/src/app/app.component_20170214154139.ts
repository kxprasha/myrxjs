import { Component } from '@angular/core';
import { Observable } from "rxjs";


let numbers=[1,2,3,4,4,5];
let source = Observable.from(numbers);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  next(value){

    console.log(`value:  ${value}`);
  }

  error(e){

    console.log(`error: ${e}`);
  }

  complete(){

    console.log('complete');
  }
}

source.sub
