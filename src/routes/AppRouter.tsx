import { Redirect, Route, Switch } from 'react-router-dom';
import { StoreRouter } from './StoreRouter';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/store" />} />
            <Route path="/store" component={StoreRouter} />
            <Route path="/admin" render={() => <h1>Admin</h1>} />
        </Switch>
    );
};
