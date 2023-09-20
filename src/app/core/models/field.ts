export interface Field {
  _id: string;
  name: string;
  fieldType: string;
  templateType: string;
  options: [];
  required: boolean;
  expirationDate: string;
}
