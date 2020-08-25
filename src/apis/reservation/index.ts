import { ReservationWithPrivateInfo } from "./@types";

export interface Methods {
  post: {
    reqBody: Omit<ReservationWithPrivateInfo, "id">;
    resBody: { id: string };
  };
}
