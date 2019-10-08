import React from 'react';
import {ScrollView,Text,View,FlatList, StyleSheet, Platform} from 'react-native';
import {Component} from 'react';
import QuestionItem from '../components/QuestionsItem';


function Item({ title }){
  return(
 <View>
   <Text>{title}</Text>
 </View>
  );
}

  export default class QuestionsScreen extends Component {
    

    static navigationOptions = {
      title: 'Questions',
    };
  
    constructor(props) {
      super(props);
      this.state = {
        subjects: [],
        title: '',
      };
    }

    componentDidMount() {
      this.fetchQuestions();
    }
  
    fetchQuestions() {
      console.log('http://178.128.172.170:8000/subjects');
      fetch('http://178.128.172.170:8000/subjects')
        .then(response => response.json())
        .then(questions => this.setState({ questions:questions }))
        .catch(err => console.log(err))
    }

    render() {
      return (
      <View>
      <ScrollView>
        <View>
        <FlatList data={this.state.questions}
                      renderItem={({item}) => <QuestionItem title={item.title}/>}
                      keyExtractor={(item, index) => index.toString()}/>
        </View>
      </ScrollView>
    </View>
  )}
}