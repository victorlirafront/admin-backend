export type UserFormProps = {
  user: {
    id: string;
    username: string;
    score: string;
    state: string;
    occupation: string;
    method: string;
  };

  onCloseModal: () => void;
};
