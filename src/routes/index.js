import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Lutador from '../views/lutador';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/lutador" exact component={Lutador}/>
                <Route path="/lutador/:id" exact component={Lutador}/>
            </Switch>
        </BrowserRouter>
    )
}