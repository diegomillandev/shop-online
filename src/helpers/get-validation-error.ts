import { TypeWithKey } from '../models';

export const getValidationError = (errorCode: any) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_BAD_REQUEST:
            'Bad request, please check your request and try again.',
    };

    return codeMatcher[errorCode] || 'An error occurred';
};
