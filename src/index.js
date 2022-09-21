import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/firebase-auth-context';
import { BlogsContextProvider } from './context/firebase-blog-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BlogsContextProvider>
      <App />
    </BlogsContextProvider>
  </AuthContextProvider>
);
