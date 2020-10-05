export interface Exhibition {
  id: string;
  name: string;
  thumbnail_image_id: string;
  content: string;
  updated_at: string;
}

export type NewExhibition = Omit<Exhibition, "content" | "updated_at">;

export type ExhibitionSummary = Pick<Exhibition, "id" | "name">;
