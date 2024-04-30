import {  Route, Switch } from 'react-router-dom';
import { LayoutApp } from '../layout';
import { Cart, Home, ItemDetail, Profile } from '../pages';
import { NoFound } from '../pages/PageNoFound';
export const StoreRouter = () => {
    return (
            <LayoutApp>
                <Switch>
                    <Route exact path={'/store'}>
                        <Home />
                    </Route>
                    <Route exact path={'/store/cart'}>
                        <Cart />
                    </Route>
                    <Route exact path={'/store/profile/user/:id'}>
                        <Profile />
                    </Route>
                    <Route exact path={'/store/product/:itemId/:percentage'}>
                        <ItemDetail />
                    </Route>
                    <Route path={'*'}>
                        <NoFound />
                    </Route>
                </Switch>
            </LayoutApp>
    );
};
