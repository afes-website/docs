export interface UserInfo {
  id: string;
  name: string;
  permissions: {
    admin: boolean;
    blogAdmin: boolean;
    blogWriter: boolean;
    exhibition: boolean;
    general: boolean;
    reservation: boolean;
  };
}
