import type { InputProps } from "@/types";
import styles from "./Input.module.scss";
import { useState } from "react";


const Input = ({ value }: InputProps) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const filled = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(e.target.value.trim() !== "");
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={value.id} className={isFilled ? styles.filled : ""}>
        {value.value}
      </label>
      <input name={`user_${value.id}`} id={value.id} onChange={filled} autoComplete="off" />
    </div>
  );
};

export default Input;
