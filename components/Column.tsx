import React, { Children } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Styles from "../styles";

type Props = {
    children: React.ReactNode;
}

export default function Column({children}: Props){
    return <View style={Styles.column}>{children}</View>
}

Column.PropTypes = {
    Children: PropTypes.node.isRequired,
};