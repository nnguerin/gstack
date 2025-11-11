export interface LoginScreenProps {
  email?: string;
  password?: string;
  onEmailChange?: (email: string) => void;
  onPasswordChange?: (password: string) => void;
  onSignIn: () => void;
  onSignUp: () => void;
  loading?: boolean;
}