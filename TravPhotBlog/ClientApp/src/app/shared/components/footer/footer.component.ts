import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showInstagram: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showInstagram = !window.location.href.endsWith("admin");
  }

}
