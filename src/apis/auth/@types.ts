export interface UserInfo {
  id: string;
  name: string;
  permissions: {
    admin: boolean;
    teacher: boolean;
    exhibition: boolean;
    executive: boolean;
    reservation: boolean;
  };
}
