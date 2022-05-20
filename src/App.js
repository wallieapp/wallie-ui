import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Switch, Route, withRouter } from 'react-router-dom';

import LoginContainer from './containers/Login';

dayjs.locale('pt-br');
dayjs.extend(customParseFormat);

const App = () => (
    <Switch>
        <Route exact path="/login" component={LoginContainer} />
    </Switch>
);

export default withRouter(App);
