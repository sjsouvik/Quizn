export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type AuthContext = {
  login: (email: string, password: string) => void;
  loginError: string | null;
  logout: () => void;
  authToken: string | null;
  authUser: User | null;
};
