export type User = {
  id: string;
  username: string;
  score: string;
  createdAt?: string;
  state: string;
  occupation: string;
};

export type HomeProps = {
  data: User[];
};
