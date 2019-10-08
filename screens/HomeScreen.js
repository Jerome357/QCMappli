import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { Component } from 'react';
import SubjectItem from '../components/SubjectItem';

function Item({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Thèmes'
};

  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      title: '',
    };
  }
  componentDidMount() {
    this.fetchSubjects();
  }
  
  fetchSubjects() {
    console.log('http://178.128.172.170:8000/subjects');
    fetch('http://178.128.172.170:8000/subjects')
      .then(response => response.json())
      .then(subjects => this.setState({ subjects:subjects }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <SafeAreaView>
      <FlatList
        data={this.state.subjects}
        renderItem={({ item }) => <SubjectItem title={item.title} count={item.questions} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
    );
  }
};
export default HomeScreen;