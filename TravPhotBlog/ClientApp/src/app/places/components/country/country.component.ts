import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ImageService } from '../../../core/services/image.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryName: string;
  countryImage: string;

  constructor(private route: ActivatedRoute, private imgService: ImageService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.countryName = params.get('countryName');
    });
  }

  ngOnInit(): void {
    this.countryImage = this.imgService.getImageUrl(this.countryName + ".jpeg", "Clipart/Places") + "?width=1920&height=900";
  }

}
