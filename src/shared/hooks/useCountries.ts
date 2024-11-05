import { useQuery } from "react-query";

import { ISelectOption } from "../types/types";

export const useCountries = () => {
  const { data: countries } = useQuery("countries", () =>
    fetch("https://restcountries.com/v3.1/all?fields=name").then(
      async (res) => {
        const data = (await res.json()).map(
          (c: { name: { common: string } }) => {
            return { value: c.name.common, label: c.name.common };
          },
        );
        data.sort((a: ISelectOption, b: ISelectOption) =>
          a.value === "Russia" ? -1 : b.value === "Russia" ? 1 : 0,
        );
        return data;
      },
    ),
  );
  return { countries };
};
