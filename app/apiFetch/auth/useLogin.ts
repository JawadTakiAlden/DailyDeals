import useFcmToken from "@/lib/useFCMToken";
import { request } from "../base/request";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useSnackbar } from "notistack";
import { noInternetMessage } from "../base/staticMessages";

const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { fcmToken } = useFcmToken();
  const loginUser = (data: any) => {
    return request({
      url: "/auth/login",
      method: "POST",
//       headers : {
// "Content-Type" : "application/json"
//       },
      data: {
        ...data,
        notification_token: fcmToken,
      },
    });
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data: AxiosResponse<DailyDealsResponse>) => {
      enqueueSnackbar(data.data.message, { variant: "success" });
    },
    onError: (error: AxiosError<DailyDealsResponse>) => {
      if (error.response)
        enqueueSnackbar(error.response?.data.message, { variant: "error" });
      else enqueueSnackbar(noInternetMessage, { variant: "error" });
    },
  });

  return mutation;
};

export default useLogin;
