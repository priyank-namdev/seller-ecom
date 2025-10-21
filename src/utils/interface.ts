export interface CommonInputProps {
  label: string;
  name: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  required?: boolean;
}