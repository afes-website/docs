import { UserInfo } from "../../auth/@types";
import { ExhibitionSummary } from "../exhibition/@types";

export interface Draft {
  id: number;
  exhibition: ExhibitionSummary;
  author: UserInfo;
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
  exh_id: Draft["exhibition"]["id"];
}

export interface DraftComment {
  author: UserInfo;
  message: string;
  created_at: string;
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
