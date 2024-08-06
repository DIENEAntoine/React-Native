import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";

type Props = NativeStackScreenProps<RootStackParamList>;
export default function Home({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Text>Home Screen</Text>
            <Button 
            title="first Item" 
            onPress={() => 
                navigation.navigate("Details", 
                    {
                        title: "first Item", 
                        content: "First Item Content",
                        stock: 1
                    })
            } 
            />
            <Button 
            title="Second Item" 
            onPress={() => 
                navigation.navigate("Details", 
                    {
                        title: "Second Item", 
                        content: "Second Item Content",
                        stock: 0
                    })
            } 
            />
            <Button 
            title="Third Item" 
            onPress={() => 
                navigation.navigate("Details", 
                    {
                        title: "Third Item", 
                        content: "Third Item Content",
                        stock: 200
                    })
            } 
            />
        </View>
    );
}