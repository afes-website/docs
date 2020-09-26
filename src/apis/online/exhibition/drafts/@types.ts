import { UserInfo } from "apis/auth/@types";

export interface Draft {
  id: number;
  exh_id: string;
  content: string;
  status: DraftStatus;
  published: boolean;
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
 * draft の状態
 *
 * @remarks
 * - `waiting` : admin の審査待ち
 * - `accepted`: 承認済 この状態の draft のみ公開可能
 * - `rejected`: 却下済
 */
export type DraftStatus = "waiting" | "accepted" | "rejected";

export interface DraftParameter
  extends Partial<Omit<Draft, "author" | "comments">> {
  author_id?: string;
}
