import { UserInfo } from "../../../auth/@types";

export interface Draft {
  id: number;
  exh_id: string;
  content: string;
  review_status: ReviewStatus;
  teacher_review_status: ReviewStatus;
  status: ReviewStatus;
  published: boolean;
  deleted: boolean;
  comments: DraftComment[];
  created_at: string;
}

export interface NewDraft {
  content: Draft["content"];
  exh_id?: Draft["exh_id"];
}

export interface DraftComment {
  author: UserInfo;
  message: string;
}

/**
 * draft の review の状態
 *
 * @remarks
 * - `waiting` : レビュー待ち
 * - `accepted`: 承認済
 * - `rejected`: 却下済
 */
export type ReviewStatus = "waiting" | "accepted" | "rejected";

export interface DraftParameter
  extends Partial<Omit<Draft, "author" | "comments">> {
  author_id?: string;
}
