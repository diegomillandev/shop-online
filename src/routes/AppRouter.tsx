import { Route, Switch } from 'react-router-dom';
import { LayoutApp } from '../layout';
import { Cart, Home, ItemDetail, Profile } from '../pages';
import { NoFound } from '../pages/PageNoFound';

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
                    <NoFound />
                </Route>
            </Switch>
        </LayoutApp>
    );
};
