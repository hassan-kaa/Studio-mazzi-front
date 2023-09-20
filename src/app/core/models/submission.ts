import { Template } from './template';
import { User } from './user';

export interface Submission {
  _id: string;
  client: User;
  template: Template;
  data: Record<string, string>;
  deletedAt: Date | null;
}
