import type { FieldErrors, UseFormRegister } from "react-hook-form";

export type FieldType = "name" | "phone" | "email" | "address";

export type InputData = {
  value: string;
  id: FieldType;
};

export type InputProps = {
  value: InputData;
  register: UseFormRegister<{
    name: string;
    phone: string;
    email: string;
    address: string;
    message: string;
  }>;
  errors: FieldErrors<{
    name: string;
    phone: string;
    email: string;
    address: string;
    message: string;
  }>;
};

export type ServicesData = {
  id: number;
  name: string;
  ages: string;
  duration: string;
  price: number | null;
  quantity: string | null;
  is: boolean;
  image: string;
  disabled: boolean;
  description: string;
};
