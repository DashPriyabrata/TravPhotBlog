import { BlogCommenter } from './blog-commenter';

export class BlogComment {
  public Id: number;
  public PostId: number;
  public ParentId: number;
  public UserId: number;
  public Comment: string;
  public Mark_Read: boolean;
  public IsEnabled: boolean;
  public Date: Date;
  public Commenter: BlogCommenter;
}
