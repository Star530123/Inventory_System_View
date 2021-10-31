export interface NewUserReq {
  account: string;
  password: string;
  userName: string;
  email: string;
  userGroup?: string;
}
