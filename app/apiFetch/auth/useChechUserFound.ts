import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useSnackbar } from "notistack";
import { request } from "../base/request";

const useChechUserFound = () => {
  const { enqueueSnackbar } = useSnackbar();
  const checkUserFOundRequest = (data: any) => {
    return request({
      url: "/checkUserFound",
      method: "post",
      data,
    });
  };

  const mutation = useMutation({
    mutationKey: ["check-user-found"],
    mutationFn: checkUserFOundRequest,
    onSuccess: (data: AxiosResponse<DailyDealsResponse>) => {},
    onError: (error: AxiosError<DailyDealsResponse>) => {},
  });

  return mutation;
};

export default useChechUserFound;
