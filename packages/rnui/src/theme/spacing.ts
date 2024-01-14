const spacing = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  "2xl": 16,
} as const;
type Spacing = typeof spacing;

export { type Spacing, spacing };
