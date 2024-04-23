import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { AppTheme } from './theme';

export const App = () => {
    return (
        <BrowserRouter>
            <AppTheme>
                <AppRouter />
            </AppTheme>
        </BrowserRouter>
    );
};
