import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { IImageInfo } from '../../models/image-info.model';
import { ChanalData } from '../../data/chanal-data';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit, OnChanges {
  @Input()
  public isTvOnInfo:boolean;
  @Input()
  public volumeInfo:number;
  @Input()
  public chanalIdInfo:number;

  public chanal:IImageInfo;
  public volume:number;
  public isVolume:boolean;

  constructor() {
    this.chanal= ChanalData[0];
    this.isVolume = false;
   }

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.isTvOnInfo){
      if(this.chanalIdInfo >= 0){
        this.chanal = ChanalData[this.chanalIdInfo];
      }
      if(this.volumeInfo !== this.volume){
          this.isVolume = true;
          this.volume =  this.volumeInfo;
          setTimeout(()=>{
            this.isVolume = false;
          },2000);
        
      }

  }
    
    
  }

}
