import { Route, Switch } from "react-router-dom"
import { NoFound } from "../pages/PageNoFound"

export const AdminRouter = () => {
  return (
    <Switch>
        <Route exact path={'/admin'}>
            <h1>Admin</h1>
        </Route>

        <Route path={'*'}>
            <NoFound />
        </Route>
    </Switch>
  )
}