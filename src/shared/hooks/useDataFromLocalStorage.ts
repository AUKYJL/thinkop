import { useEffect } from "react";
import {
  FieldValues,
  UseFormReset,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";

import { OPTIONS } from "../types/consts";

export const useDataFromLocalStorage = <T extends FieldValues>(
  keyName: string,
  watch: UseFormWatch<T>,
  reset: UseFormReset<T>,
  trigger: UseFormTrigger<T>,
) => {
  const saveDataOnBlur = () => {
    const currentData = watch();
    const prevData = localStorage.getItem(OPTIONS);
    const newData = {
      ...JSON.parse(prevData ?? "{}"),
      [keyName]: { ...currentData },
    };
    localStorage.setItem(
      OPTIONS,
      JSON.stringify({
        ...newData,
      }),
    );
  };

  useEffect(() => {
    const storedOptions = localStorage.getItem(OPTIONS);
    if (storedOptions) {
      reset(JSON.parse(storedOptions)[keyName]);
      setTimeout(() => {
        trigger();
      }, 0);
    }
  }, [reset]);
  return { saveDataOnBlur };
};
