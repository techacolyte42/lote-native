import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';
//import MapContainer from './MapContainer';
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

class NewLote extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'New Lote',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() {
    const {lotecation, userLocation} = this.props;
    return (
      <View style={styles.container}>
        <MapView provider="google"
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        </MapView>
      </View>
    );
  }
}

export default NewLote;

// <View>
//         <Header headerText='New Lote' />
//         <Text>New Lote Form Goes Here</Text>
//       </View>
