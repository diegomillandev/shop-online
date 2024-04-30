import { Redirect, Route, Switch } from 'react-router-dom';
import { StoreRouter } from './StoreRouter';
import { NoFound } from '../pages/PageNoFound';
import { AdminRouter } from './AdminRouter';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/store" />} />
            <Route path="/store" component={StoreRouter} />
            <Route path="/admin" >
                <AdminRouter />
            </Route>
            <Route path="*">
                <NoFound />
            </Route>
        </Switch>
    );
};
