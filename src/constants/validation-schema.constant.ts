import { TFunction } from 'i18next';
import * as yup from 'yup';

const phoneRegExp = /^[0-9]{8,16}$/;

export const getSignInSchema = (t: TFunction): yup.AnyObjectSchema =>
  yup.object().shape({
    phone: yup
      .string()
      .required(t<string>('warnings.required'))
      .min(8, t<string>('warnings.too_short'))
      .max(16, t<string>('warnings.too_long'))
      .matches(phoneRegExp, t<string>('warnings.invalid')),
    password: yup
      .string()
      .required(t<string>('warnings.required'))
      .min(6, t<string>('warnings.too_short')),
  });
