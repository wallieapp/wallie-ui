import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Switch, Route } from 'react-router-dom';

import LoginContainer from './containers/Login';

dayjs.locale('pt-br');
dayjs.extend(customParseFormat);

const App = () => (
    <Switch>
        <Route path="/" element={LoginContainer} />
    </Switch>
);

export default App;
