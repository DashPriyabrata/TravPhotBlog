import { Injectable } from '@angular/core';
import { Constants } from '../../core/configs/constants';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public getImageUrl(imageName: string, folderName: string) {
    if (folderName)
      return Constants.CLOUDIMG_BASEURL + folderName + "/" + imageName;
    else
      return Constants.CLOUDIMG_BASEURL + imageName;
  }
}
