export class MinorService {
  static getFormattedCardNumber = (str: string): string => {
    const src = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;
    const dst = '$1  $2  $3  $4';
    return str.replace(src, dst);
  };
  static get4LastCharsOfCardNumber = (str: string): string => {
    const length = str.length;
    return str.substring(length - 4, length);
  };
}
