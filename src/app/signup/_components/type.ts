export type SignupFormFieldType = {
  confirmedPassword?: string;
  email?: string;
  password?: string;
};

export type CreateUserResponse = {
  email: string;
  password: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
