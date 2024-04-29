import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { ModalItem, ModalLogin } from './components';
import { SnackbarUtilitiesCongifurator } from './helpers/snackbar.manager';
import { AppRouter } from './routes';
import { AppTheme } from './theme';

export const App = () => {
    return (
        <>
            <SnackbarProvider maxSnack={2}>
                <SnackbarUtilitiesCongifurator />
                <BrowserRouter>
                    <AppTheme>
                        <AppRouter />
                        <ModalItem />
                        <ModalLogin />
                    </AppTheme>
                </BrowserRouter>
            </SnackbarProvider>
        </>
    );
};
