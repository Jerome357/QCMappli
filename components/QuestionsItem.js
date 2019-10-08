import React, { Component } from 'react';
import { View, Text } from "react-native";


class QuestionItem extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.question}</Text>
            </View>
        );
    }
}
export default QuestionItem;