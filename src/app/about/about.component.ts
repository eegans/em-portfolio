import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit, AfterViewInit {
  loadingImg: boolean = true;
  imageCollection = <any>[];

  constructor() {
    this.imageCollection = [
      { url: '/assets/Images/me3.jpg', show: false },
      { url: '/assets/Images/me2.jpg', show: false },
      { url: '/assets/Images/me4.jpg', show: false },
      { url: '/assets/Images/me10.jpg', show: false },
      { url: '/assets/Images/me8.jpg', show: false }
    ];
  }

  ngOnInit() {
    this.loadingImg = false;
  }

  ngAfterViewInit() {
    //  this.waitForImages();
  }

  waitForImages() {
    // const imgHeader = new Image();
    // const topHeader = document.querySelector('.largeImg');
    // imgHeader.src = topHeader.getAttribute('src');

    // const imgBottom = new Image();
    // const sectionFacts = document.querySelector('.facts');
    //const bgStyle = getComputedStyle(sectionFacts).backgroundImage;
    //const src = bgStyle.replace(/(^url\()|(\)$|[\"\'])/g, '');
    //imgBottom.src = src;

    // imgHeader.addEventListener('load', () => {
    //   imgBottom.addEventListener('load', () => {
    //     this.loadingImg = false;
    //   });
    // });

    // imgHeader.addEventListener('load', () => {
    //   this.loadingImg = false;
    // });
  }

  imagesHaveLoaded(): boolean {
    console.log(Array.from(document.images).every(i => i.complete));
    return Array.from(document.images).every(i => i.complete);
  }
}
