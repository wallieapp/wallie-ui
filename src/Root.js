import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/pt-br';

import Auth from './Auth';

dayjs.locale('pt-br');
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);

const Root = () => (
	<>
        <ToastContainer/>
        <ChakraProvider>
            <Router basename="/">
                <Switch>
                    <Route exact path="/(login|sign-up|forgot-password|reset-password|activate|register-success)" component={Auth} />
                </Switch>
            </Router>
        </ChakraProvider>
	</>
);

export default Root;