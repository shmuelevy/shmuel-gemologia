import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';

  pictures = [
    "../assets/image1.jpg",
    "../assets/image2.jpg",
    "../assets/image3.jpg",
    "../assets/image4.jpg",
    "../assets/image5.jpg",
    "../assets/image6.jpg",
  ]
  videos = [
    "../assets/video1.mp4",
    "../assets/video2.mp4"
  ]
index = 0;
nextD = false
prevD = false

indexV = 0;
nextVD = false
prevVD = false

next(){
if(this.index>=0&&this.index<5){
this.prevD = false
this.index+=1;
}
if(this.index===5){
  this.nextD = true
}
}
prev(){
  if(this.index<=5&&this.index>0){
    this.index-=1;
    this.nextD = false
    }
    if(this.index===0){
      this.prevD = true
    }
}

nextV(){
  if(this.indexV>=0&&this.indexV<1){
  this.prevVD = false
  this.indexV+=1;
  }
  if(this.indexV===5){
    this.nextVD = true
  }
  }
  prevV(){
    if(this.indexV<=1&&this.indexV>0){
      this.indexV-=1;
      this.nextVD = false
      }
      if(this.indexV===0){
        this.prevVD = true
      }
  }

}
