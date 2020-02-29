import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  MainContainer: {
    flex: 0.9,
    alignItems: 'center',
  },
  Loadingcontainer: {
    flex: 1,
    justifyContent: 'center'
  },
  MainTitle: {
    fontSize: 22,
    textDecorationLine: 'underline',
    paddingTop: 5,
    marginBottom: 5,
    textAlign: 'left'
  },
  ProductTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    textAlign:'left',
  },
  FlatList: {
    marginBottom: 5,

  },
});

