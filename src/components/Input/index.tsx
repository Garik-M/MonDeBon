import type { InputProps } from "@/types";
import styles from "./Input.module.scss";
import { useState } from "react";

const Input = ({ value, register, errors }: InputProps) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const filled = (e: React.ChangeEvent<HTMLInputElement>) => {
    const is = e.target.value.trim() !== ""
    setIsFilled(is);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={value.id} className={isFilled ? styles.filled : ""}>
        {value.value}
      </label>
      <input
        {...register(value.id, {
          onChange: filled,
        })}
        id={value.id}
        autoComplete="off"
      />
      <p className={styles.err}>{errors?.[value.id]?.message}</p>
    </div>
  );
};

export default Input;
