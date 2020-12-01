import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import './custom.css'
import AddBookPage from "./components/AddBookPage";
import AddAuthorPage from "./components/AddAuthorPage";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/books' component={FetchData} />
        <Route path='/add-book' component={AddBookPage} />
        <Route path='/add-author' component={AddAuthorPage} />
      </Layout>
    );
  }
}
