import { UserInterface } from "@/app/interfaces/UserInterface";
import { request } from "../base/request";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { noInternetMessage } from "../base/staticMessages";

interface RegisterdUser extends DailyDealsResponse {
  data: {
    user: UserInterface;
    token: string;
  };
}

const useRegister = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const registerUser = (data: any) => {
    return request({
      url: "/auth/register",
      method: "POST",
      data,
    });
  };

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
    onSuccess: (data: AxiosResponse<RegisterdUser>) => {
      enqueueSnackbar(data.data.message, { variant: "success" });
      const user = data.data.data.user;
      router.push(`/auth/verify?email=${user.email}`);
    },
    onError: (error: AxiosError<DailyDealsResponse>) => {
      if (error.response)
        enqueueSnackbar(error.response?.data.message, { variant: "error" });
      else
        enqueueSnackbar(
         noInternetMessage,
          { variant: "error" }
        );
    },
  });

  return mutation;
};

export default useRegister;
