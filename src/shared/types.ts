export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type BenefitType = {
  icon: string;
  title: string;
  description: string;
};

export type LessonsType = {
  name: string;
  description?: string;
  image: string;
};
