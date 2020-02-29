import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchResult from './components/SearchResult/SearchResult';
import { NativeRouter, Switch, Route } from 'react-router-native';
import styles from './app.styles';

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <NativeRouter>
          <View style={styles.container}>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/ProductDetails" component={ProductDetails} />
              <Route path="/SearchResult" component={SearchResult} />
            </Switch>
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

export default App;
