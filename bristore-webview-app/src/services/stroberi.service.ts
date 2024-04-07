import request from 'umi-request';

type ResponseType = { responseCode: string; responseDesc: string; responseData?: { [key: string]: string } };

export const User = async (params: { token: string }) => {
  const user = await request.post<ResponseType>(`${process.env.NEXT_PUBLIC_STROBERI_API_URI_V1}v3/api/stroberi/webview_user`, {
    data: { token: params.token }
  });
  return user?.responseData;
};

export const Binding = async (params: { token: string; phoneNumber: string | number }) => {
  return await request.post<ResponseType>(`${process.env.NEXT_PUBLIC_STROBERI_API_URI_V1}v3/api/stroberi/binding`, {
    data: { token: params.token, phoneNumber: params.phoneNumber }
  });
};

export const Registration = async (params: { token: string }) => {
  return await request.post<ResponseType>(`${process.env.NEXT_PUBLIC_STROBERI_API_URI_V1}v3/api/stroberi/registration`, {
    data: { token: params.token }
  });
};

export const BindingOTP = async (params: { token: string; passcode: string }) => {
  return await request.post<ResponseType>(`${process.env.NEXT_PUBLIC_STROBERI_API_URI_V1}v3/api/stroberi/binding_otp`, {
    data: { token: params.token, otp: params.passcode }
  });
};

export const RegistrationOTP = async (params: { token: string; passcode: string; password: string }) => {
  return await request.post<ResponseType>(`${process.env.NEXT_PUBLIC_STROBERI_API_URI_V1}v3/api/stroberi/registration_otp`, {
    data: { token: params.token, otp: params.passcode, password: params.password }
  });
};

export const GenerateStroberiToken = async (params: { token: string }) => {
  return await request.post<ResponseType>(`${process.env.NEXT_PUBLIC_STROBERI_API_URI_V1}v3/api/stroberi/webview_generate_stroberi_auth`, {
    data: { token: params.token }
  });
};
