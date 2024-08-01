import { useMutation } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { useSnackbar } from "notistack"
import { request } from "../base/request"

const useVerifyCode = () => {
    const {enqueueSnackbar} = useSnackbar()
    const verifyCodeRequest = (data : any) => {
        return request({
            url : '/verifyCode' ,
            method : 'post',
            data
        })
    }

    const mutation = useMutation({
        mutationKey : ['verify-code'],
        mutationFn : verifyCodeRequest,
        onSuccess : (data : AxiosResponse<DailyDealsResponse>) => {
            
        },
        onError : (error : AxiosError<DailyDealsResponse>) => {

        }
    })

    return mutation
}

export default useVerifyCode