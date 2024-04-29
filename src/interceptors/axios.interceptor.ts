import axios, { AxiosResponse } from 'axios';
import { getValidationError } from '../helpers';
import { SnackbarUtilities } from '../helpers/snackbar.manager';

export const AxiosInterceptor = () => {
    axios.interceptors.request.use((request) => {
        return request;
    });
    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            SnackbarUtilities.error(getValidationError(error.code));
            return Promise.reject(error);
        },
    );
};
