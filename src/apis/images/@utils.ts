export function get_image_url(id: string): string {
  return `${process.env.VUE_APP_API_BASE_URL}/images/${id}`;
}
