import React, { memo, useEffect, useState } from 'react';
import { tryit } from 'radash';

import { useLockFn } from 'ahooks';

import { Button, Checkbox, Form, Grid, Input, Toast } from 'antd-mobile';

import Disclaimer from '@/components/Stroberi/Disclaimer';
import TermsAndConditions from '@/components/Stroberi/TermsAndConditions';

import type { SetOptional } from 'type-fest';

import * as styles from '@/components/Stroberi/RegistrationForm/styles';

const RegistrationForm = ({ user, onFormSuccess }: RegistrationFormProps) => {
  const [form] = Form.useForm<RegistrationFormType>();

  const [tnc, setTnc] = useState(false);
  const [iframe, setIframe] = useState(false);

  const onTermsAndConditionsClick = useLockFn(async () => {
    setTnc(true);
    setIframe((iframe) => !iframe);
  });

  const onFormSubmitClick = useLockFn(async () => {
    const [errorPassword, dataPassword] = await tryit(() => form.validateFields(['password', 'rePassword']))();
    const [errorTnc, dataTnc] = await tryit(() => form.validateFields(['tnc']))();
    const [errorPhoneNumber, dataPhoneNumber] = await tryit(() => form.validateFields(['phoneNumber', 'phoneNumberMask']))();

    if (!errorPassword && !errorTnc && !errorPhoneNumber) {
      if (dataTnc.tnc) {
        await onFormSuccess({
          phoneNumber: dataPhoneNumber.phoneNumber,
          phoneNumberMask: dataPhoneNumber.phoneNumberMask,
          password: dataPassword.password
        });
      } else {
        Toast.show({ icon: 'fail', maskClassName: 'toast-center', content: 'Anda harus menyetujui syarat dan ketentuan yang berlaku.' });
      }
    }
  });

  return (
    <>
      <Form
        form={form}
        mode={'default'}
        layout={'vertical'}
        css={styles.form}
        initialValues={{
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          phoneNumberMask: user.phoneNumber,
          tnc: false,
          password: '',
          rePassword: ''
        }}
        footer={
          <Form.Subscribe to={['password', 'rePassword', 'tnc']}>
            {({ password, rePassword, tnc }) => {
              return (
                <Button
                  color={'primary'}
                  shape={'rounded'}
                  block={true}
                  loading={'auto'}
                  disabled={!(String(password).length >= 8 && String(rePassword).length >= 8 && tnc)}
                  onClick={onFormSubmitClick}
                >
                  Submit dan Kirim OTP
                </Button>
              );
            }}
          </Form.Subscribe>
        }
      >
        <div className={'d-flex'}>
          <h2 css={styles.title}>Belum punya akun Stroberi Kasir? Yuk buat sekarang!</h2>

          <div>
            <Form.Item name={'name'} label={<span>Nama</span>}>
              <Input className={'general-input-disabled'} disabled={true} />
            </Form.Item>

            <Form.Item name={'email'} label={<span>Email</span>}>
              <Input className={'general-input-disabled'} disabled={true} />
            </Form.Item>

            <Form.Item name={'phoneNumber'} label={<span>Nomor WhatsApp</span>}>
              <Input placeholder={'No. WhatsApp akun Stroberi Kasir'} className={'general-input-disabled'} disabled={true} />
            </Form.Item>
          </div>

          <h3 css={styles.title}>Masukkan Kata Sandi Baru</h3>

          <p css={styles.info}>Kata Sandi ini digunakan untuk login langsung dan terhubung ke aplikasi Stroberi Kasir.</p>

          <Form.Item
            name={'password'}
            dependencies={['rePassword']}
            label={<span>Kata Sandi</span>}
            rules={[
              { min: 8, message: 'Kata sandi minimal 8 karakter.' },
              { required: true, message: 'Kata sandi tidak boleh kosong.' },
              { pattern: /[0-9]/, message: 'Kata sandi harus mengandung angka.' },
              { pattern: /[a-z]/, message: 'Kata sandi harus mengandung huruf kecil.' },
              { pattern: /[A-Z]/, message: 'Kata sandi harus mengandung huruf besar.' }
            ]}
            validateFirst={true}
          >
            <Input placeholder={'kata Sandi'} className={'general-input'} type={'password'} />
          </Form.Item>

          <Form.Item
            name={'rePassword'}
            dependencies={['password']}
            label={<span>Konfirmasi Kata Sandi</span>}
            rules={[
              { required: true, message: 'Konfirmasi kata sandi tidak boleh kosong.' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || String(getFieldValue('password')) === String(value)) return Promise.resolve();
                  return Promise.reject(new Error('Pastikan password anda sama.'));
                }
              })
            ]}
          >
            <Input placeholder={'Konfirmasi Kata Sandi'} className={'general-input'} type={'password'} />
          </Form.Item>

          <Disclaimer />

          <Form.Item className={'d-flex'} noStyle={true}>
            <div className={'flex'}>
              <Form.Item name={'tnc'} noStyle={true}>
                <Checkbox disabled={!tnc} />
              </Form.Item>

              <Button css={styles.tnc} fill={'none'} onClick={onTermsAndConditionsClick}>
                Saya telah menyetujui semua <b>Syarat dan Ketentuan</b> Stroberi Kasir.
              </Button>
            </div>
          </Form.Item>
        </div>
      </Form>

      <TermsAndConditions show={iframe} onClose={onTermsAndConditionsClick} />
    </>
  );
};

export type RegistrationFormProps = {
  user: { [key: string]: string };
  onFormSuccess: (params: { phoneNumber: string; phoneNumberMask: string; password: string }) => Promise<void>;
};

export default memo(RegistrationForm);
