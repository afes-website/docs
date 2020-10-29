export interface Exhibition {
  id: string;
  name: string;
  type: ExhibitionType;
  thumbnail_image_id: string;
  room_id: string | null;
  content: string | null;
  draft_id: number | null;
  updated_at: string;
}

export type NewExhibition = Omit<
  Exhibition,
  "content" | "updated_at" | "room_id"
>;

export type UpdateExhibition = Partial<
  Omit<Exhibition, "content" | "updated_at" | "id">
>;

export type ExhibitionType = "normal" | "frontier" | "stage";

export type ExhibitionSummary = Pick<Exhibition, "id" | "name">;

export type ExhibitionParameter = Partial<
  Omit<Exhibition, "thumbnail_image_id" | "content" | "updated_at">
>;
