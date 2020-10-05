export interface Exhibition {
  id: string;
  name: string;
  type: ExhibitionType;
  thumbnail_image_id: string;
  content: string;
  updated_at: string;
}

export type ExhibitionType = "normal" | "frontier" | "stage";

export type ExhibitionSummary = Pick<Exhibition, "id" | "name">;

export type ExhibitionParameter = Partial<
  Omit<Exhibition, "thumbnail_image_id" | "content" | "updated_at">
>;
