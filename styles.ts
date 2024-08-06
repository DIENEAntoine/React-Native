import { Platform, StyleSheet, StatusBar } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "ghostwhite",
        alignItems: "center",
        justifyContent: "space-around",
        ...Platform.select({
            ios: { paddingTop: 40},
            android: { paddingTop: StatusBar.currentHeight }
        })
    },
    box: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darklategray",
        margin: 10
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold"
    }, 
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "stretch",
    },
    column: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "stretch",
    },
})