export enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export interface IFormInput {
  name: string;
  age: number;
  email: string;
  gender?: GenderEnum;
  message: string;
}
