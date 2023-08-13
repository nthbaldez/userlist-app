export function formatName(name: string) {
  const count = 14;
  const formattedString = name.slice(0, count) + (name.length > count ? "..." : "");

  return formattedString;
}
