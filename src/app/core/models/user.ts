export interface User {
  email: string;
  password: string;
  role: RoleType;
  active: boolean;
  deletedAt: null;
}
export enum RoleType {
  Client = 'client',
  Admin = 'admin',
  Reviewer = 'reviewer',
}
