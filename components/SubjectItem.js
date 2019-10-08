import React, { Component } from 'react';
import { View, Text } from "react-native";


class SubjectItem extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <Text>{this.props.count}</Text>
            </View>
        );
    }
}
export default SubjectItem;