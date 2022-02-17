import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider } from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <SpeechProvider appId='478f5de4-928c-4fea-a00f-6e6b1331b0db' language='en-US'>
            <Provider>
                <App />
            </Provider>
        </SpeechProvider>
    </React.StrictMode>
    ,  
    document.getElementById('root')
);