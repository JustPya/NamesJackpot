import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  txtInput : string;
  theOne: string;
  list: string[];

  constructor() {
    this.theOne = " ";    
  }

  start(){
    if(this.txtInput!=null){
      this.list = this.txtInput.split(",")
      var r = 0;
      for (var i = 0; i < 50; i++) {
        setTimeout(()=> {
          this.theOne = this.list[this.random(0, this.list.length-1, r)];
      },100 * (i + 1));
      }
    }
    else{
      console.log("e");
    }
  }




  random(min: number, max: number, last:number): number{
    var r = last;
    
    while(r==last)
      r = Math.floor(Math.random() * (max - min + 1) + min);
    return r;
  }

}
