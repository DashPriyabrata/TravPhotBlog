import { Blogger } from './blogger';

export class BlogPost {
  public BlogId: number;
  public Title: string;
  public TitleImage: string;
  public PostDate: Date;
  public City: string;
  public Country: string;
  public IsActive: boolean;
  public BloggerId: number;
  public Category; string;
  public IsFeatured: boolean;
  public IsCommentsEnabled: boolean;
  public Views: number;
  public ContentId: number;
  public BlogTagId: number;
  public NavUrlString: string;
  public ReadingTime: string;
  public Blogger: Blogger;
}
