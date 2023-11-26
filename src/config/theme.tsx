import {
  type MantineThemeOverride,
  type MantineColorsTuple,
} from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#efedff",
  "#dad6fd",
  "#b1abf2",
  "#877ce9",
  "#6254e0",
  "#4b3bdc",
  "#3e2fdb",
  "#3021c2",
  "#281eaf",
  "#1f179b",
];
export const theme: Partial<MantineThemeOverride> = {
  primaryColor: "primary",
  colors: {
    primary: myColor,
  },
};
