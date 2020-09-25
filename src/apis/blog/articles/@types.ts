import { UserInfo } from "../../auth/@types";

export interface BlogArticle {
  id: string;
  category: string;
  title: string;
  revision_id: number;
  created_at: string;
  updated_at: string;
  content: string;
  author: UserInfo;
  handle_name: string | null;
}

export interface BlogArticleParameter
  extends Partial<Omit<BlogArticle, "title" | "content" | "author">> {
  author_id?: string;
  q?: string;
}
