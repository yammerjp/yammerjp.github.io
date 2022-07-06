export function description(str: string) {
  const maxLength = 400;
  if (str.length && str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength - 1)}...`;
}

export function iso8601toStr(isoDate: string): string {
  const d = new Date(isoDate);
  const yyyy = `${d.getFullYear()}`;
  const mm = (`00${d.getMonth() + 1}`).slice(-2);
  const dd = (`00${d.getDate()}`).slice(-2);
  return `${yyyy}/${mm}/${dd}`;
}
