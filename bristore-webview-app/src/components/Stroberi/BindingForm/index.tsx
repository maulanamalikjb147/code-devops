import React, { memo, useState } from 'react';
import { tryit } from 'radash';

import { Button, Checkbox, Form, Input, Toast } from 'antd-mobile';

import Disclaimer from '@/components/Stroberi/Disclaimer';
import TermsAndConditions from '@/components/Stroberi/TermsAndConditions';

import { useLockFn } from 'ahooks';

import * as styles from '@/components/Stroberi/BindingForm/styles';

const BindingForm = ({ onFormSuccess }: BindingFormProps) => {
  const [form] = Form.useForm<BindingFormType>();

  const [tnc, setTnc] = useState(false);
  const [iframe, setIframe] = useState(false);

  const onTermsAndConditionsClick = useLockFn(async () => {
    setTnc(true);
    setIframe((iframe) => !iframe);
  });

  const onFormSubmitClick = useLockFn(async () => {
    const [errorTnc, dataTnc] = await tryit(() => form.validateFields(['tnc']))();
    const [errorPhoneNumber, dataPhoneNumber] = await tryit(() => form.validateFields(['phoneNumber']))();

    if (!errorTnc && !errorPhoneNumber) {
      if (dataTnc.tnc) {
        await onFormSuccess({ phoneNumber: dataPhoneNumber.phoneNumber });
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
        css={styles.containerForm}
        initialValues={{
          phoneNumber: '',
          tnc: false
        }}
        footer={
          <Form.Subscribe to={['phoneNumber', 'tnc']}>
            {({ phoneNumber, tnc }) => (
              <Button
                color={'primary'}
                size={'middle'}
                shape={'rounded'}
                type={'submit'}
                block={true}
                disabled={!(phoneNumber.toString().length >= 8 && tnc)}
                onClick={onFormSubmitClick}
              >
                Submit dan Kirim OTP
              </Button>
            )}
          </Form.Subscribe>
        }
      >
        <Form.Item
          name={'phoneNumber'}
          label={<span>Nomor WhatsApp</span>}
          validateFirst={true}
          rules={[
            () => ({
              validator(_, value) {
                if (value.toString().length >= 8) return Promise.resolve();
                return Promise.reject(new Error('Minimal 8 angka.'));
              }
            })
          ]}
        >
          <Input placeholder={'No. WhatsApp akun Stroberi Kasir'} className={'general-input'} type={'tel'} />
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
      </Form>

      <TermsAndConditions show={iframe} onClose={onTermsAndConditionsClick} />
    </>
  );
};

export type BindingFormProps = {
  onFormSuccess: (params: { phoneNumber: string }) => Promise<void>;
};

export default memo(BindingForm);
