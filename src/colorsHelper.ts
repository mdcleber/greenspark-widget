export const ColorsCode = {
  white: '#FFFFFF',
  black: "#212121",
  blue: "#2E3A8C",
  green: "#3B755F",
  beige: "#F2EBDB",
  lightGray: "#F9F9F9"
}

export enum ColorsType {
  White = "white",
  Black = "black",
  Blue = "blue",
  Green = "green",
  Beige = "beige"
}

export const getColorCodeFromName = (color: ColorsType): string => {
  switch (color) {
    case ColorsType.White:
      return ColorsCode.white;
    case ColorsType.Black:
      return ColorsCode.black;
    case ColorsType.Blue:
      return ColorsCode.blue;
    case ColorsType.Beige:
      return ColorsCode.beige;
    case ColorsType.Green:
      return ColorsCode.green;
  }
};


export const getColorNameFromCode = (color: string) => {
  switch(color) {
    case ColorsCode.green:
      return ColorsType.Green;
    case ColorsCode.beige:
      return ColorsType.Beige;
    case ColorsCode.white:
      return ColorsType.White;
    case ColorsCode.black:
      return ColorsType.Black;
    default:
    case ColorsCode.blue:
      return ColorsType.Blue;
  }
}
