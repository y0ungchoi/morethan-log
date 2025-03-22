import {
  gray,
  blue,
  red,
  green,
  bronze,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
  bronzeDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
    ...bronze,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...bronzeDark,
  },
}
