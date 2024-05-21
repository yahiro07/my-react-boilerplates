export const flexCentered = (gap?: number) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: gap && `${gap}px`,
});

export const flexVertical = (gap?: number) => ({
  display: "flex",
  flexDirection: "column",
  gap: gap && `${gap}px`,
});

export const flexHorizontal = (gap?: number) => ({
  display: "flex",
  gap: gap && `${gap}px`,
});

export const flexAligned = (gap?: number) => ({
  display: "flex",
  alignItems: "center",
  gap: gap && `${gap}px`,
});
