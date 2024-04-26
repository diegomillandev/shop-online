import { Route, Switch } from 'react-router-dom';
import { Cart, Home, ItemDetail, Profile } from '../pages';
import { LayoutApp } from '../layout';

export const AppRouter = () => {
    return (
        <LayoutApp>
            <Switch>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route exact path={'/cart'}>
                    <Cart />
                </Route>
                <Route exact path={'/profile/user/:id'}>
                    <Profile />
                </Route>
                <Route exact path={'/item/:itemId/:percentage'}>
                    <ItemDetail />
                </Route>
                <Route path={'*'}>
                    <h1>No Found</h1>
                </Route>
            </Switch>
        </LayoutApp>
    );
};
