import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App';
import { FontsStyle } from '../shared/lib/fonts/index';
import { persistor, store } from '../shared/lib/store/store';
import { AppWrapper } from './style';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontsStyle />
        <AppWrapper>
          <App />
        </AppWrapper>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
