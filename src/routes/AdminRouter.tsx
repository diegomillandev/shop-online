import { Redirect, Route, Switch } from "react-router-dom"
import { NoFound } from "../pages/PageNoFound"
import { AuthGuard } from "../authGuard"


export const AdminRouter = () => {
  return (
    <Switch>
        <Redirect from={'/admin'} to={'/admin/dashboard'} exact />
        <Route exact path={'/admin/login'}>
            <h1>Admin Login</h1>
        </Route>
        <Route path="/admin/dashboard">
          <AuthGuard>
            <h1>Admin Dashboard</h1>
          </AuthGuard>
        </Route>
        <Route path={'*'}>
            <NoFound />
        </Route>
    </Switch>
  )
}