import { Field } from './field';

export enum FormTemplateType {
  Client = 'Client',
  Property = 'Property',
  Income = 'Income',
  Deduction = 'Deduction',
}
export interface Template {
  _id: string;
  templateType: FormTemplateType;
  fields: Field[];
  expirationDate: Date;
  deletedAt: Date | null;
  createdAt: string;
  updatedAt: string;
}
