import debounce from 'lodash/debounce';
import numeral from 'numeral';

export class NumberService {
  private static moneyPattern = '0,0[.]00';

  static debouncedFormat = debounce((callback = () => {}): void => {
    callback();
  }, 600);

  static formatMoney = (data: number | string): string => {
    return 'S$' + numeral(data).format(NumberService.moneyPattern);
  };

  static formatPositiveMoney = (data: number | string): string => {
    if (data === '') return '';
    const dataInNumber = NumberService.getValue(data);
    if (dataInNumber === null) return '';
    return dataInNumber > 0
      ? numeral(data).format(NumberService.moneyPattern)
      : '';
  };

  static getValue = (text: string | number): number | null => {
    return numeral(text).value();
  };
}
