import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public istvOn:boolean;
  public volumeChange:number;
  public changeId:number;

  public isTVOnOrOff(event){
    this.istvOn = event;
  }

  public getVolumeChange(event){
    this.volumeChange = event;
  }

  public getChanalid(event){
    this.changeId = event;
  }
}
