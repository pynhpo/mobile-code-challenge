import { KeyboardAvoidingScrollView } from '@components/keyboard-avoiding-scroll-view.component';
import { signInAction } from '@redux/auth/action';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput as RNTextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSignInSchema } from '@constants/validation-schema.constant';
import LogoSvg from '@assets/svg/logo.svg';
import { TextInput } from '@components/text-input.component';
import { ProfileSvg } from '@components/svg/profile-svg';
import { HomeSvg } from '@components/svg/home-svg';
import { Button } from '@components/button.component';

type FormValues = {
  phone: string;
  password: string;
};

export const SignInScreen = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const passwordInput =
    useRef<RNTextInput>() as React.MutableRefObject<RNTextInput>;

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(getSignInSchema(t)),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(signInAction({ phone: data.phone, password: data.password }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingScrollView>
        <View style={styles.headerContainer}>
          <LogoSvg />
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            render={({ fieldState, field }) => (
              <TextInput
                leftComponent={<ProfileSvg />}
                autoCapitalize="none"
                returnKeyType={'next'}
                value={field.value}
                keyboardType="numeric"
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                onSubmitEditing={() => {
                  passwordInput && passwordInput.current.focus();
                }}
                error={fieldState?.error?.message}
                placeholder={t<string>('screens.sign_in.phone_number')}
              />
            )}
            name="phone"
            defaultValue="0123456789"
          />
          <Controller
            control={control}
            render={({ fieldState, field }) => (
              <TextInput
                containerStyle={styles.passwordInput}
                leftComponent={<HomeSvg />}
                autoCapitalize="none"
                secureTextEntry={true}
                ref={passwordInput}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                onSubmitEditing={handleSubmit(onSubmit)}
                error={fieldState?.error?.message}
                placeholder={t<string>('screens.sign_in.password')}
              />
            )}
            name="password"
            defaultValue="123456"
          />
          <Button
            style={styles.signInButton}
            onPress={() => handleSubmit(onSubmit)}>
            {t<string>('screens.sign_in.sign_in')}
          </Button>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};
