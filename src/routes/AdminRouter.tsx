import { ChakraProvider } from '@chakra-ui/react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthGuard } from '../authGuard';
import { LayoutAdmin } from '../layout';
import { NoFound } from '../pages/PageNoFound';
import { EditProduct, Login, NewProduct, TableProducts } from '../pages/admin';

export const AdminRouter = () => {
    return (
        <ChakraProvider>
            <Switch>
                <Redirect from={'/admin'} to={'/admin/products'} exact />
                <Route exact path={'/admin/login'}>
                    <Login />
                </Route>
                <Route path="/admin/products">
                    <AuthGuard>
                        <LayoutAdmin>
                            <TableProducts />
                        </LayoutAdmin>
                    </AuthGuard>
                </Route>
                <Route path="/admin/product/new-product">
                    <AuthGuard>
                        <LayoutAdmin>
                            <NewProduct />
                        </LayoutAdmin>
                    </AuthGuard>
                </Route>
                <Route path="/admin/product/edit-product/:id">
                    <AuthGuard>
                        <LayoutAdmin>
                            <EditProduct />
                        </LayoutAdmin>
                    </AuthGuard>
                </Route>
                <Route path={'*'}>
                    <AuthGuard>
                        <LayoutAdmin>
                            <NoFound />
                        </LayoutAdmin>
                    </AuthGuard>
                </Route>
            </Switch>
        </ChakraProvider>
    );
};
