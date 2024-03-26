import { useMutation } from '@tanstack/react-query';
import apiClient from '../apiClient';
import { UserInfo } from '../types/UserInfo';

const useSigninMutation = () => useMutation({

    mutationFn: async ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => {
        console.log("Inside useSigninMutation");
        const { data } = await apiClient.post<UserInfo>('api/users/signin', {
            email,
            password,
        })
        console.log("Data here is ", data)
        return data
    }
})


export default useSigninMutation;