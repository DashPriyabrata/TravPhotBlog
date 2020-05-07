import { Injectable } from '@angular/core';
import { Constants } from '../../core/configs/constants';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public getImageUrl(imagePath: string, folderName: string) {
    if (imagePath.startsWith("https") || imagePath.startsWith("http"))
      return imagePath;
    else if (folderName)
      return Constants.CLOUDIMG_BASEURL + folderName + "/" + imagePath;
    else
      return Constants.CLOUDIMG_BASEURL + imagePath;
  }
}
