import { StyleSheet } from "react-native";
import { Colors, Typography } from "../styles";

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        paddingHorizontal: 20,
        columnGap: 20,
    },
    searchInputContainer: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 17,
        color: '#012E57',
    },
    maincontainer: {
        height: 160,
        width: 350,
        borderWidth: 1,
        marginLeft: 30,
        borderRadius: 25,
        marginTop: 25,
    },
    innercontainer: {
        flexDirection: 'row',
        margin: 4,
        columnGap: 5,
    },
    namecontainer: {
        justifyContent: 'flex-end',
        rowGap: 5,
    },
    nametext: {
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.PRIMARY,
        fontWeight: Typography.FONT_WEIGHT_MEDIUM,
    },
    locationtext: {
        color: Colors.PRIMARY,
        fontSize: Typography.FONT_SIZE_14,
    },
    intrestcontainer: {
        justifyContent: 'flex-start',
        marginLeft: 25,
        marginTop: 5,
    },
    intresttext: {
        fontWeight: Typography.FONT_WEIGHT_MEDIUM,
    },
});

export default styles;