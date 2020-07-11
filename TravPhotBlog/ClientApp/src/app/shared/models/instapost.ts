export interface InstaModel {
  Pagination: any;
  Data: InstaPost[];
  Meta: Meta;
}

interface Meta {
  Error_Type: string;
  Code: number;
  Error_Message: string;
}

export class InstaPost {
  Id: string;
  Media_Url: string;
  Caption: string;
  Media_Type: string;
  Timestamp: Date;
  Permalink: string;
  Thumbnail_Url: string;
  //User_Has_Liked: boolean;
  //Likes: Likes;
  //Tags: string[];
  //Filter: string;
  //Type: string;
  //Link: string;
  //Location?: Location;
  //Attribution?: any;
  //constructor(
  //  public Id: number,
  //  public Standard_Resolution: ImageDetails,
  //  public Likes: number,
  //  public Link: string,
  //  public Location: Location
  //) { }
}

interface ImageDetails {
  Width: number;
  Height: number;
  Url: string;
}

interface Location {
  Latitude: number;
  Longitude: number;
  Name: string;
  Id: number;
}

interface User {
  Id: string;
  Full_Name: string;
  Profile_Picture: string;
  Username: string;
}

interface Images {
  Thumbnail: ImageDetails;
  Low_Resolution: ImageDetails;
  Standard_Resolution: ImageDetails;
}

interface Caption {
  Id: string;
  Text: string;
  Created_Time: string;
  From: User;
}

interface Likes {
  Count: number;
}
