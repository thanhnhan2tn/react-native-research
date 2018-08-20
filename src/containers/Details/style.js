import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageBackground: {
        flex: 7,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: {
        position: 'absolute',
        top: 200,
        bottom: 0,
        flex: 3,
        width: '100%',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    textInput: {
        width: '90%',
        // marginTop: 100,
        bottom: 180,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: colors.red,
        padding: 10,
    }
})