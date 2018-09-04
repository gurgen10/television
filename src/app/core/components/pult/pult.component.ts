import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pult',
  templateUrl: './pult.component.html',
  styleUrls: ['./pult.component.css']
})
export class PultComponent implements OnInit {
  public buttons:Array<number> = [];

  @Output()
  public power: EventEmitter<boolean> = new EventEmitter();
  public isOn:boolean = false;

  @Output()
  public volume: EventEmitter<number> = new EventEmitter();
  private volumeValue:number;

  @Output()
  public chanalId:EventEmitter<number> = new EventEmitter();
  
 
  constructor() { 
    for(let i = 0; i < 6; i+=1){
      this.buttons[i] = i + 1;
    }
    this.volumeValue = 10;
  }
  public changeVolume(event): void {
    let sign = event.path[0]["innerText"].trim();
    
    if (this.isOn) {
      if(sign === "+"){
        if(this.volumeValue < 16){   
          this.volumeValue +=1;
          this.volume.emit(this.volumeValue);
        }else{
          this.volume.emit(this.volumeValue);
        }
        
      }else{
        if(sign === "-"){
          if(this.volumeValue >=0){   
            this.volumeValue -=1;
            this.volume.emit(this.volumeValue);
          }else{
            this.volume.emit(this.volumeValue);
          }
        }
      }
    }
   
  }

  public turnOffTv():void{
    this.isOn = !this.isOn;
    this.power.emit(this.isOn);
  }

  public getChanalId(index){
    if (this.isOn === true) {
      this.chanalId.emit(index);
    }

  }

  ngOnInit() {
  }

}




