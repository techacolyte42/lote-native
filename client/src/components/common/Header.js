import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Header extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={ styles.navBar }>
        <View style={ styles.leftContainer }>
          { this.props.backButton && <Button title="<" onPress={ () => goBack() } /> }
        </View>
        <Text style={ [styles.text, { fontSize: 20 }] }>
          { this.props.headerText }
        </Text>
        <View style={ styles.rightContainer }>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export { Header };
