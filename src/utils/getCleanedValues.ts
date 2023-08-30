export const getCleanedValues = (values: Record<string, string>) => {
  const cleanedValues = {};
  Object.keys(values).forEach((key) => {
    if (values[key] !== undefined) {
      (cleanedValues as any)[key] = values[key];
    }
  });
  return cleanedValues;
};
