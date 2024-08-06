import React, { Children } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Styles from "../styles";

type Props = {
    children: React.ReactNode;
}

export default function Row({ children }: Props) {
    return <View style={Styles.row}>{children}</View>
}

Row.PropTypes = {
    Children: PropTypes.node.isRequired,
};