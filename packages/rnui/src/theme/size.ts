const size = {
  sm: 32,
  md: 40,
  lg: 46,
} as const;
type Size = typeof size;

export { type Size, size };
