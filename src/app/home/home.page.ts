import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { isUndefined } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  txtInput : string;
  theOne: string;
  list: string[];

  constructor(public toastController: ToastController) {
    this.theOne = " ";    
  }

  start(){
    if(!(this.txtInput===undefined)){
      this.list = this.txtInput.split(",");
      if(this.list.length > 1){
        var r = 0;
        for (var i = 0; i < 50; i++) {
          setTimeout(()=> {
            this.theOne = this.list[this.random(1, this.list.length, r)-1];
        },100 * (i + 1));
        }
      }
      else{
        this.presentToast();
      }
    }
    else{
      this.presentToast();
    }
  }

 

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ingrese nombres separados por comas (,)',
      duration: 2000
    });
    toast.present();
  }

  random(min: number, max: number, last:number): number{
    var r = last;
    while(r==last)
      r = Math.floor(Math.random() * (max - min + 1)) + min;
    return r;
  }

}
