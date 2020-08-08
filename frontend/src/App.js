import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import GenericNotFound from './GenericNotFound'

function App() {
    return (
        <main>
            <BrowserRouter>

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/404" component={GenericNotFound} />
                <Redirect to="/404" />
            </Switch>
            </BrowserRouter>

        </main>
    )
}

export default App;