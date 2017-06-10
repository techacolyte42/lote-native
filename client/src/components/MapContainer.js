import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class WrappedMap extends React.Component {
  constructor(props) {
    super(props);

    this.searchBox = {getPlace: () => {
      console.log('searchBox not loaded');
    }};
    this.onSubmit = this.onSubmit.bind(this);
    this.centerMoved = this.centerMoved.bind(this);
  }

  componentDidMount() {
    this.renderSearchBox();
  }

  componentDidUpdate(prevProps) {
    // const {google, map, searchBox} = this.props;
    // if (map !== prevProps.map) {
    //   this.renderSearchBox();
    // } else if (searchBox !== prevProps.searchBox) {
    //   this.renderSearchBox();
    // }
  }

  centerMoved(mapProps, map) {
    // let location = map.getCenter();
    // this.props.updateLotecation({lat: location.lat(), lng: location.lng()});
  }

  onSubmit(event) {
    event.preventDefault();
  }

  renderSearchBox() {

    const {google, map} = this.props;

    if (!google || !map || !this.props.searchBox) { return; }
    const aref = this.props.searchBox;
    const node = ReactDOM.findDOMNode(aref);
    console.log('node: ', node);
    const searchBox = new google.maps.places.SearchBox(node);
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      const place = places[0];

      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      let {lat, lng} = place.geometry.location;
      this.props.updateLotecation({lat: lat(), lng: lng()});
    });

    this.searchBox = searchBox;
  }

  render() {
    const {lotecation, userLocation} = this.props;
    return (
      <View style={styles.container}>
        <MapView provider="google">
        </MapView>
      </View>
    );
  }
}

export default WrappedMap;