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
    ["../assets/image1.jpg",
    "../assets/image2.jpg",],
   [ "../assets/image3.jpg",
    "../assets/image4.jpg",],
   [ "../assets/image5.jpg",
    "../assets/image6.jpg",],
    ["../assets/image7.jpg",
    "../assets/image8.jpg",],
    ["../assets/image9.jpeg",
    "../assets/image10.jpeg",],
   ["../assets/image11.jpeg",],

  ]
  videos = [
   [ "../assets/video1.mp4",
    "../assets/video2.mp4",
    "../assets/video3.mp4",],
   [ "../assets/video4.mp4",
    "../assets/video5.mp4",
    "../assets/video6.mp4",],
   [ "../assets/video7.mp4",
    "../assets/video8.mp4",],
  ]
index = 0;
nextD = false
prevD = false

indexV = 0;
nextVD = false
prevVD = false

next(){
if(this.index>=0&&this.index<this.pictures.length-1){
this.prevD = false
this.index+=1;
}
if(this.index===this.pictures.length-1){
  this.nextD = true
}
}
prev(){
  if(this.index<=this.pictures.length-1&&this.index>0){
    this.index-=1;
    this.nextD = false
    }
    if(this.index===0){
      this.prevD = true
    }
}

nextV(){
  if(this.indexV>=0&&this.indexV<this.videos.length-1){
  this.prevVD = false
  this.indexV+=1;
  }
  if(this.indexV===this.videos.length-1){
    this.nextVD = true
  }
  }
  prevV(){
    if(this.indexV<=this.videos.length-1&&this.indexV>0){
      this.indexV-=1;
      this.nextVD = false
      }
      if(this.indexV===0){
        this.prevVD = true
      }
  }

 isFullSize: boolean = false;

    biggerPic(event: MouseEvent) {
        const imgElement = event.target as HTMLImageElement;
        if (this.isFullSize) {
            imgElement.style.height = '100%'; 
            imgElement.style.width = '100%'; 
            imgElement.style.zIndex = 'auto'
            imgElement.style.position = 'relative'
        } else {
            imgElement.style.height = '100%';
            imgElement.style.width = '100%';
            imgElement.style.zIndex = '999'
            imgElement.style.position = 'absolute'
            imgElement.style.right = '0%'
        }
        this.isFullSize = !this.isFullSize; 
    }
}
