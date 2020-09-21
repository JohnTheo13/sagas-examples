const size = {
  small: 2,
  borderRadius: 3,
  borderRadiusButton: 24,
  gutter: 8,
};

export const spacing = (nr: number): number => Math.round(nr * size.gutter);

export default size;
