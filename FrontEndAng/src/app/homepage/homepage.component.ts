import { Component } from '@angular/core';
import {  OnInit, Renderer2 ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  constructor(private el: ElementRef,private renderer: Renderer2,private router:Router) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'full-page-background');
  }

  // ngAfterViewInit(){

  //   this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#DCF2F1');
    
  //   }

    navigate()
    {
      console.log("hi")
      this.router.navigateByUrl("/home");
    }

}
