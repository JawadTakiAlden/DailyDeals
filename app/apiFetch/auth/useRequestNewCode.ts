import { useMutation } from "@tanstack/react-query";
import { request } from "../base/request";
import { AxiosError, AxiosResponse } from "axios";
import { useSnackbar } from "notistack";

const useRequestNewCode = () => {
  const { enqueueSnackbar } = useSnackbar();
  const requestNewCode = (data: any) => {
    return request({
      url: "/requestNewCode",
      method: "post",
      data,
    });
  };

  const mutation = useMutation({
    mutationKey: ["request-new-code"],
    mutationFn: requestNewCode,
    onSuccess: (data: AxiosResponse<DailyDealsResponse>) => {},
    onError: (error: AxiosError<DailyDealsResponse>) => {},
  });

  return mutation;
};

export default useRequestNewCode;
