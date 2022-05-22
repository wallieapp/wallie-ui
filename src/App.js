import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Switch, Route, withRouter } from 'react-router-dom';

import Auth from './Auth';

dayjs.locale('pt-br');
dayjs.extend(customParseFormat);

const App = () => (
    <Switch>
        <Route exact path="/(login|sign-up|forgot-password|reset-password|activate|register-success)" component={Auth} />
    </Switch>
);

export default withRouter(App);
