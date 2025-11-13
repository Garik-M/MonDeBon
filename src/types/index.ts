export type InputData = {
  value: string;
  id: string;
};

export type InputProps = {
  value: InputData;
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
};
