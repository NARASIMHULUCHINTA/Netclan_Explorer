import { StyleSheet } from 'react-native';
import { Colors, Typography, minxmins } from '../styles';

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: Colors.PRIMARY
    },
    topcontainer: {
        flex: 0.08,
        marginTop: 10,
        backgroundColor: Colors.PRIMARY
    },
    drawercontainer: {
        flexDirection: 'row',
        columnGap: 90,
        marginLeft: 20
    },
    menu: {
        flexDirection: 'row',
        columnGap: 20
    },
    maintext: {
        color: Colors.WHITE,
        fontSize: 20
    },
    location: {
        flexDirection: 'row',
        marginRight: 10
    },
    locationtext: {
        color: Colors.WHITE,
        fontSize: 15
    },
    refinecontainer: { flexDirection: 'column', rowGap: 2 }
})

export default styles;