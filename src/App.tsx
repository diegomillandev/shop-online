import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { AppTheme } from './theme';
import { ModalItem } from './components';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesCongifurator } from './helpers/snackbar.manager';

export const App = () => {
    return (
        <>
            <SnackbarProvider maxSnack={2}>
                <SnackbarUtilitiesCongifurator />
                <BrowserRouter>
                    <AppTheme>
                        <AppRouter />
                        <ModalItem />
                    </AppTheme>
                </BrowserRouter>
            </SnackbarProvider>
        </>
    );
};
