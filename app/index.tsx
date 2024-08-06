import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text>Home Screen</Text>
            <Link href="/Settings" asChild>
                <Button title="Settings"/>
            </Link>
        </View>
    );
}