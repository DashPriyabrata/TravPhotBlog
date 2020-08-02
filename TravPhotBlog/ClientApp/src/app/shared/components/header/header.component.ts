import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class HeaderComponent implements OnInit {
  location: Location
  constructor(location: Location) { this.location = location; }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    "use strict";
    jQuery(document).ready(function () {
      jQuery('.sayit_header_menu .sub-menu').wrap('<div class="sayit_sub_menu_wrapper"></div>');

      // Header Menu Hover
      jQuery('header .sayit_menu li').on({
        mouseenter: function (e) {
          e.stopPropagation();

          var menu_item = jQuery(this);

          jQuery(menu_item).find('.sayit_sub_menu_wrapper:first').css('display', 'block');
          setTimeout(function (menu_item) {
            jQuery(menu_item).find('.sayit_sub_menu_wrapper:first').addClass('visible');
          }, 100, menu_item);
        },

        mouseleave: function (e) {
          // e.stopPropagation();

          var menu_item = jQuery(this);

          jQuery(menu_item).find('.sayit_sub_menu_wrapper:first').removeClass('visible');
          setTimeout(function (menu_item) {
            jQuery(menu_item).find('.sayit_sub_menu_wrapper:first').css('display', 'none');
          }, 100, menu_item);
        }
      });

      // Header Mobile Menu & Click Operations
      jQuery('.sayit_menu_mobile_trigger').on('click', function () {
        jQuery(this).toggleClass('active');
        jQuery('.sayit_menu_mobile').slideToggle(300);
      });

      function sayit_main_menu_marker_move_on_hover(sayit_menu_item_this) {
        var sayit_menu_marker = jQuery('.sayit_menu_marker'),
          sayit_left_items = jQuery(sayit_menu_item_this).prevAll(),
          sayit_width_left_items = 0,
          sayit_left_items_count = sayit_left_items.length;

        sayit_left_items.each(function () {
          sayit_width_left_items = sayit_width_left_items + jQuery(this).width();
        });

        sayit_menu_marker.width(jQuery(sayit_menu_item_this).width()).css('left', (sayit_width_left_items + (sayit_left_items_count * 28)));
      }

      function sayit_main_menu_marker_back() {
        var sayit_menu_item = jQuery('ul.sayit_header_menu > li'),
          sayit_current_item = jQuery('ul.sayit_header_menu > .current-menu-item'),
          sayit_current_ancestor = jQuery('ul.sayit_header_menu > .current-menu-ancestor'),
          sayit_scroll_current = jQuery('ul.sayit_header_menu > .active');

        if (sayit_menu_item.is('.active')) {
          var sayit_active_item = sayit_scroll_current;
        } else {
          if (sayit_menu_item.is('.current-menu-item')) {
            sayit_active_item = sayit_current_item;
          } else if (sayit_menu_item.is('.current-menu-ancestor')) {
            sayit_active_item = sayit_current_ancestor;
          } else {
            sayit_active_item = sayit_menu_item.first();
          }
        }

        var sayit_menu_marker = jQuery('.sayit_menu_marker'),
          sayit_left_items = sayit_active_item.prevAll(),
          sayit_width_left_items = 0,
          sayit_left_items_count = sayit_left_items.length;

        sayit_left_items.each(function () {
          sayit_width_left_items = sayit_width_left_items + jQuery(this).width();
        });

        sayit_menu_marker.width(sayit_active_item.width()).css('left', (sayit_width_left_items + (sayit_left_items_count * 28)));
      }

      jQuery('.sayit_header_menu > .menu-item').on({
        mouseenter: function () {
          sayit_main_menu_marker_move_on_hover(this)
        },
        mouseleave: function () {
          sayit_main_menu_marker_back();
        }
      });
    });
  }

  isActiveAncestor(viewLocation: string) {
    var urlPath = this.location.path();

    //Check if not homepage
    if (urlPath) {
      //The menu item isn't home item so highlight
      if (viewLocation) {
        return urlPath.startsWith(viewLocation);
      }
      //The menu item is home item thus don't highlight
      return false;
    }
    //It's homepage and home item called the method
    else if (!viewLocation) {
      return true;
    }
    //It's homepage but non-home item called the method
    return false;
  }

  isActiveItem(pageName: string) {
    var urlPath = this.location.path();

    if (urlPath) {
      if (pageName) {
        return urlPath.endsWith(pageName);
      }
    }
    return false;
  }
}
