import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    SafeAreaViewcontainer: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    scrollView: {
        marginHorizontal: 5,
    },
    ButtonContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    BackButton: {
        color: 'blue',
    },
    ProductDetailsContainer: {
        paddingLeft: 10,
        paddingRight: 10
    },
    ProductDetailsContent: {
        textAlign: 'left',
    },
    ProductDetailsId: {
        paddingTop: 5,
        fontSize: 30,
        color: 'green',
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    },
    ProductDetailsUserId: {
        fontSize: 30,
        paddingTop: 5,
        color: 'green',
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    },
    ProductDetailsTitle: {
        fontSize: 24,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    ProductDetailsBody: {
        fontSize: 24,
        paddingTop: 10,
        color: 'blue',
    },
});

