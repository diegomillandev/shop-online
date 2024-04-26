import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { AppTheme } from './theme';
import { ModalItem } from './components';

export const App = () => {
    return (
        <BrowserRouter>
            <AppTheme>
                <AppRouter />
                <ModalItem />
            </AppTheme>
        </BrowserRouter>
    );
};
