import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges, ElementRef } from '@angular/core';
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
  public poster:string = "h1.jpg?x11217";

  constructor(private elRef:ElementRef) {
    this.chanal= ChanalData[0];
    this.isVolume = false;
   }

  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges){
    if(this.isTvOnInfo ){
      if(this.chanalIdInfo >= 0 && changes.hasOwnProperty("chanalIdInfo")){
        
        this.chanal = ChanalData[this.chanalIdInfo];
        this.poster = this.chanal.src.substr(0,this.chanal.src.indexOf(".mp4")) + ".jpg?x11217";
        const player = this.elRef.nativeElement.querySelector('video');
        player.load();
        // console.log(changes.chanalIdInfo.currentValue);

             
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
