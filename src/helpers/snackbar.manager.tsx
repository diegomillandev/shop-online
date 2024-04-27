import { VariantType, WithSnackbarProps, useSnackbar } from 'notistack';

let useSnackbarRef: WithSnackbarProps;
export const SnackbarUtilitiesCongifurator: React.FC = () => {
    useSnackbarRef = useSnackbar();
    return null;
};

export const SnackbarUtilities = {
    toast(msg: string, variant: VariantType = 'default') {
        useSnackbarRef.enqueueSnackbar(msg, { variant });
    },
    success(message: string) {
        this.toast(message, 'success');
    },
    error(message: string) {
        this.toast(message, 'error');
    },
    warning(message: string) {
        this.toast(message, 'warning');
    },
    info(message: string) {
        this.toast(message, 'info');
    },
};
