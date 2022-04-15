export class LeadingZeros {
  leadingZeros(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }

    return s;
  }
}
