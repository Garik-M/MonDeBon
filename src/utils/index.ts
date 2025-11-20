import type { InputData } from "@/types";
import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .matches(
      /^[A-Za-z\u0531-\u058F]+ [A-Za-z\u0531-\u058F]+$/,
      "Պետք է պարունակի միայն տառեր"
    )
    .min(3, "Անունը շատ կարճ է")
    .required("Պարտադիր դաշտ"),

  phone: yup
    .string()
    .min(8, "Պետք է լինի 8 նիշ")
    .max(8, "Պետք է լինի 8 նիշ")
    .required("Պարտադիր դաշտ"),

  email: yup.string().email("Սխալ էլ. հասցե").required("Պարտադիր դաշտ"),

  address: yup.string().min(4, "Շատ կարճ է").required("Պարտադիր դաշտ"),

  message: yup.string().required("Պարտադիր դաշտ")
});

export const inputArr: InputData[] = [
  {
    value: "Անուն Ազգանուն",
    id: "name",
  },
  {
    value: "Էլ. Հասցե",
    id: "email",
  },
  {
    value: "Հասցե",
    id: "address",
  },
  {
    value: "Հեռախոսահամար",
    id: "phone",
  },
];
