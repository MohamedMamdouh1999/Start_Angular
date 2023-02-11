import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgSrc = ""
  isShow = false
  changeSrc(event:any){
    this.imgSrc = event.target.src;
    this.isShow = true
  }
}
