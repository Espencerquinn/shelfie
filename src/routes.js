import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Form from './Component/Form';

export default (
    <Switch>
        <Route component={ Dashboard } exact path ="/" />
        <Route component={ Form } path="/add" />
        <Route component={ Form } path="/edit" />
    </Switch>
)