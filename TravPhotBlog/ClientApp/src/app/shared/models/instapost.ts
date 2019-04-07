export class InstaPost {
  constructor(
    public Id: number,
    public Standard_Resolution: ImageDetails,
    public Likes: number,
    public Link: string,
    public Location: Location
  ) { }
}

class ImageDetails {
  Width: number;
  Height: number;
  Url: string;
}

class Location {
  Latitude: number;
  Longitude: number;
  Name: string;
  Id: number;
}
