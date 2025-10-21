export function isEmail(v: string): boolean {
  return /\S+@\S+\.\S+/.test(v);
}

export function isMobile(v: string): boolean {
  return /^\+?\d{10,14}$/.test(v.replace(/\s|-/g, ""));
}
