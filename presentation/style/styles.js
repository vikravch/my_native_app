import {StyleSheet} from "react-native";

export const containers = StyleSheet.create({
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const navigation = StyleSheet.create({
    navContainer: {
        flexDirection: "row",
        backgroundColor: "#11dd11",
        height: "15%",
        paddingHorizontal: "10%"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
})
