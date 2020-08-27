import { BlogRevision } from "../@types";

export type NewBlogContribRevision = Omit<
  BlogRevision,
  "id" | "article_id" | "timestamp" | "author" | "status"
>;
