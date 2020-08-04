import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('body').removeAttr('class data-bgcolor style');
      
      $(".sayit_title_container").each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
      });
      $(".sayit_js_height").each(function () {
        $(this).css('height', $(this).attr('data-height'));
      });
    });
  }
}
