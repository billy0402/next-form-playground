enum Sex {
  male = 'male',
  female = 'female',
}

type User = {
  firstName: string;
  lastName: string;
  age: number;
  sex: Sex;
};

export type { User, Sex };
