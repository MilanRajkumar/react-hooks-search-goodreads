import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import BookDetails from './components/books/book-details';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/book-details" component={BookDetails} />
    </BrowserRouter>
  );
};
export default Router;
