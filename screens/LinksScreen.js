import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, Button, Switch} from 'react-native';
import {Component} from 'react';

class LinksScreen extends Component {

  static navigationOptions = {
    title: 'Proposer',
  };

  constructor(props) {
    super(props);
    this.state = {
      question: [],
      title: '',
      answer: '',
    };
  }

  addQuestion() {
    const question =  { title: this.state.title, answer: this.state.answer, subject: this.state.subject };
    this.setState({
      question: [...this.state.question, question]
    })};

    render() {
      console.log('render Linkscreen')
      return (
    <ScrollView>
      {<Text>Ajouter une question</Text>}
      {<Text>Menu déroulant sujet</Text>}
      <TextInput onChangeText={text => this.setState({ title: text })}
                     value={this.state.title}
                     placeholder='Question'/>
      <Switch/><TextInput onChangeText={text => this.setState({ answer: text })}
                     value={this.state.answer.toString()}placeholder='Réponse 1'/>
      <Switch/><TextInput onChangeText={text => this.setState({ answer: text })}
                     value={this.state.answer.toString()}placeholder='Réponse 2'/>
      <Switch/><TextInput onChangeText={text => this.setState({ answer: text })}
                     value={this.state.answer.toString()}placeholder='Réponse 3'/>

      <Button onPress={() => this.addQuestion()} title='Ajouter une question'/>
    </ScrollView>
    );
  }
}

export default LinksScreen;