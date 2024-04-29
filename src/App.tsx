import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { ModalItem } from './components';
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
                    </AppTheme>
                </BrowserRouter>
            </SnackbarProvider>
        </>
    );
};
