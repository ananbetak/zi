import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    Statusbar: {
        marginTop: Constants.statusBarHeight + 5,
    },
    MainContainer : {
        flexDirection : 'row',
        paddingBottom:10
    },
    TextInputContainer : {
        width: '69%',
        marginLeft:'1%'
    },
    TextInput: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft:20
    },
    ButtonContainer : {
        width: '28%',
        marginLeft:'1%'
    },
    Button: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft:'1%',
    }
});

