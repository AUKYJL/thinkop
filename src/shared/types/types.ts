export interface ISelectOption {
  value: string;
  label: string;
}
export const Genres = {
  GENRE1: { value: "GENRE1", label: "GENRE1" },
  GENRE2: { value: "GENRE2", label: "GENRE2" },
  GENRE3: { value: "GENRE3", label: "GENRE3" },
} as const;
export const Format = {
  ONLINE_PLATFORM: { value: "ONLINE_PLATFORM", label: "Онлайн-платформа" },
  BIG_SCREEN: { value: "BIG_SCREEN", label: "Большой экран" },
  INTERNET: { value: "INTERNET", label: "Интернет" },
} as const;
export interface IFormOptionsPage1 {
  projectName: string;
  genre: keyof typeof Genres;
  format: keyof typeof Format;
  numberUNF: string;
  country: string;
  estimatedCost: number;
  synopsis: string;
}
