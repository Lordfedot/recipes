export interface DisplayUser {
  name: string;
  email: string;
  password: string;
}

export interface Recipe {
  title: string;
  area: string;
  instructions: string;
  description: string;
  thumb: string;
  preview: string;
  time: string;
  youtube: string;
  tags: string[];
  createdAt: {
    $date: {
      $numberLong: string;
    };
  };
  updatedAt: {
    $date: {
      $numberLong: string;
    };
  };
  ingredients: {
    measure: string;
  }[];
}
