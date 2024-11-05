import React from "react";
import { useForm } from "react-hook-form";

import { useCountries } from "../../hooks/useCountries";
import { useDataFromLocalStorage } from "../../hooks/useDataFromLocalStorage";
import { Format, Genres, IFormOptionsPage1 } from "../../types/types";
import { FormInput } from "../../ui/formInput";
import FormSelect from "../../ui/formSelect";
import { FormTextArea } from "../../ui/formTextArea";
import { FormWrapper } from "../form/formWrapper";

export const FormSlide4: React.FC = () => {
  const { countries } = useCountries();
  const { register, formState, watch, reset, trigger } =
    useForm<IFormOptionsPage1>({
      mode: "onChange",
    });

  const { saveDataOnBlur } = useDataFromLocalStorage<IFormOptionsPage1>(
    "page4",
    watch,
    reset,
    trigger,
  );

  return (
    <FormWrapper isValid={formState.isValid} slideIndex={3}>
      <div className="flex-1">
        <FormInput
          {...register("projectName", { required: "Заполните поле" })}
          title="Название проекта"
          placeholder="Название"
          error={formState.errors.projectName?.message}
          onBlur={saveDataOnBlur}
        />
        <FormSelect
          title="Жанр"
          placeholder="Жанр"
          selected={Genres[watch("genre")]}
          options={[
            {
              value: Genres.GENRE1.value,
              label: Genres.GENRE1.label,
            },
            {
              value: Genres.GENRE2.value,
              label: Genres.GENRE2.label,
            },
            {
              value: Genres.GENRE3.value,
              label: Genres.GENRE3.label,
            },
          ]}
          error={formState.errors.genre?.message}
          {...register("genre", { required: "Выберите жанр" })}
          onBlur={saveDataOnBlur}
        />
        <FormSelect
          title="Формат (для онлайн-платформ, большого экрана, интернета, другое)"
          placeholder="Формат"
          selected={Format[watch("format")]}
          options={[
            {
              value: Format.ONLINE_PLATFORM.value,
              label: Format.ONLINE_PLATFORM.label,
            },
            {
              value: Format.BIG_SCREEN.value,
              label: Format.BIG_SCREEN.label,
            },
            {
              value: Format.INTERNET.value,
              label: Format.INTERNET.label,
            },
          ]}
          error={formState.errors.format?.message}
          {...register("format", { required: "Выберите формат" })}
          onBlur={saveDataOnBlur}
        />
        <FormInput
          {...register("numberUNF", {
            pattern: {
              value: /^\d{3}-\d{3}-\d{3}-\d{3}-\d{3}$/,
              message: "Неверный формат",
            },
          })}
          maskFn={(value: string) => {
            const cleanedValue = value.replace(/\D/g, "");
            return cleanedValue.replace(/(\d{3})(?=\d)/g, "$1-");
          }}
          title="№ УНФ или отсутствует"
          placeholder="890-000-000-000-000"
          error={formState.errors.numberUNF?.message}
          onBlur={saveDataOnBlur}
        />
      </div>
      <div className="flex-1">
        <FormSelect
          title="Страна-производитель (копродукция)"
          placeholder="Страна"
          options={countries}
          selected={
            watch("country")
              ? { value: watch("country"), label: watch("country") }
              : undefined
          }
          error={formState.errors.country?.message}
          {...register("country", { required: "Выберите страну" })}
          onBlur={saveDataOnBlur}
        />
        <FormInput
          {...register("estimatedCost")}
          type="number"
          title="Сведения о сметной стоимости производства фильма 
на территории Нижегородской области, если есть"
          placeholder="Сметная стоимость"
          error={formState.errors.estimatedCost?.message}
          onBlur={saveDataOnBlur}
        />
        <FormTextArea
          {...register("synopsis")}
          title="Синопсис"
          placeholder="Напишите краткое изложение"
          error={formState.errors.synopsis?.message}
          onBlur={saveDataOnBlur}
        />
      </div>
    </FormWrapper>
  );
};
