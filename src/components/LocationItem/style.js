import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',   
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    textType: {
        color: colors.red,
    },
    textAddressGray: {
        color: colors.gray,
        marginLeft: 5,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    textAddressBlack: {
        color: colors.black,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    }
})