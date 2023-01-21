export function useCreateYear() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const years = [];

  for (let i = currentYear; i >= currentYear - 70; i--) {
    years.push(i);
  }

  return years;
}
