import { UserInfo } from "../../auth/user";

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

export type BlogArticleParameter = Partial<
  Omit<BlogArticle, "id" | "created_at" | "updated_at">
>;
