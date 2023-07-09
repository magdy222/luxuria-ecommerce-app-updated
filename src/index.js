import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { AuthProvider } from './Auth';
import { store } from './redux/store';
import './i18n';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
            <App />
        </Provider>
      </AuthProvider>  
  </React.StrictMode>
);


