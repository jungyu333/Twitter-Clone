export function useCreateDate(num: number) {
  const dateArray = Array.from({ length: num }, (_, i) => i + 1);
  return dateArray;
}
