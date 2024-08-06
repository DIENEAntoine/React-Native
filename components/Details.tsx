import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";
import { StackRouter } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;
export default function Details({ route, navigation }: Props) {
    const { content, title, stock } = route.params;
    React.useEffect(() => {
        navigation.setOptions({ title })
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text>{content} ans stock is {stock}</Text>
        </View>
    );
}