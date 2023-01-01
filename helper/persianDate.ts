export default function persianDate(date: Date): string {
  return new Date(date).toLocaleDateString("fa-IR");
}
