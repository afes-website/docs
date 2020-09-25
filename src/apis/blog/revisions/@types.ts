import { UserInfo } from "../../auth/@types";

export interface BlogRevision {
  id: number;
  title: string;
  article_id: string;
  author: UserInfo;
  handle_name: string | null;
  timestamp: string;
  content: string;

  /**
   * 記事の状態
   *
   * @remarks
   * `waiting` : admin の審査待ち
   * `accepted`: 承認済 この状態の revision のみ公開可能
   * `rejected`: 却下済
   */
  status: "waiting" | "accepted" | "rejected";
}

export type NewBlogRevision = Omit<
  BlogRevision,
  "id" | "timestamp" | "author" | "status"
>;

export interface BlogRevisionParameter
  extends Partial<Omit<BlogRevision, "author">> {
  author_id?: string;
}
