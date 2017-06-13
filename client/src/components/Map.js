import React, { Component } from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { Header } from './common';

class Map extends Component {
  render() {
    return (
      <Container>
        <Header headerText='New Lote' />
        <Text>map placeholder page</Text>
      </Container>
    )
  }
}

export default Map