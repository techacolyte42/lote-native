import React from 'react';
import { TextInput, View, Text, ScrollView, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { Header } from './common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //height: 100%,
    //width: 100%,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class Map extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'New Lote',
    tabBarIcon: () => (<Icon size={24} color="white" name="add-location" />)
  }

  render() {
    return (
      <Container>
        <View style={ styles.container }>
          <Header headerText='New Lote' { ...this.props } />
          <MapView provider="google"
            style={ styles.map }
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
          </MapView>
        </View>
      </Container>
    )
  }
}

export default Map