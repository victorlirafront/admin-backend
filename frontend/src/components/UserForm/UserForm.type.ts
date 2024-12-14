export type UserFormProps = {
  user: {
    id: string;
    username: string;
    score: number;
    state: string;
    occupation: string;
    method: string;
  };

  onCloseModal: () => void;
};
