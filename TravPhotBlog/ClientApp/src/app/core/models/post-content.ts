import { Panorama } from './panorama';

export class PostContent {
  public Id: number;
  public Intro_Highlight: string;
  public Introduction: string;
  public Quote: Date;
  public Description_Start: string;
  public Image_BeforeHighlights: string;
  public Highlights: boolean;
  public Image_AfterHighlights: number;
  public Description_End: string;
  public Image_End: boolean;
  public Closing_Statements: boolean;
  public Image_Direction: number;
  public Direction: number;
  public ArrivingHere: number;
  public Attractions: string;
  public Accommodation: string;
  public PanoramaId: number;
  public Panorama: Panorama;
}
