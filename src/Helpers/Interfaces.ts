export interface DisplayUser {
  name: string;
  email: string;
  password: string;
}

export interface Recipe {
  area: string;
  category: string;
  createdAt: string;
  description: string;
  favorite: boolean;
  ingredients: {
    id: string;
    measure: string;
    name: {
      desc: string;
      t: string;
      thb: string;
      ttl: string;
      _id: string;
    };
  }[];
  instructions: string;
  preview: string;
  saved: boolean;
  tags: string[];
  thumb: string;
  title: string;
  time: string;
  updatedAt: string;
  youtube: string;
  _id: string;
}
