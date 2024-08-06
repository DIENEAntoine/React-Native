import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Styles from "../styles";

export default function Box({ children }) {
    return (
        <View style={Styles.box}>
            <Text style={Styles.boxText}>{children}</Text>
        </View>
    );
}

Box.PropTypes = {
    Children: PropTypes.node.isRequired,
};