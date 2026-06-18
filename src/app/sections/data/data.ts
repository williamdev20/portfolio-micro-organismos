import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.html',
  //styleUrl: './data.css',
})
export class Data implements AfterViewInit {

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoPlayer.nativeElement;

    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;

    video.play().catch(err => console.error(err));
  }
}