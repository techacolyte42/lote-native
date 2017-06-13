import React, { Component } from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Header } from './common';
import Moment from 'moment';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  chat: {
    // ...StyleSheet.absoluteFillObject,
    display: 'flex',
  },
  senderStyle: {
    backgroundColor: '#afd9e0',
    marginTop: 5,
    padding: 10,
    position: 'relative',
    // margin: 5 45 5 20,
    alignItems: 'flex-end',
  },
  receiverStyle: {
    backgroundColor: '#ffff99',
    marginTop: 5,
    padding: 10,
    position: 'relative',
  },
  loteMessage: {
    fontSize: 1.2,
  },
  loteTimeStamp: {
    color: '#777',
    textAlign: 'right',
  }
});


class ChatHistory extends Component {  
  static navigationOptions = {
    tabBarLabel: 'Lotes',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />),
  }

  render() {
    let lotesDisplayCount = 0;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <Text>{ this.props.activeContact.display ? this.props.activeContact.display : this.props.activeContact.email }
          { !this.props.activeContact.email && 'No Contact Selected'}</Text>
        </View>
        <View style={styles.chat}>
          { (this.props.activeContact.id !== this.props.profile.id)
              ? this.props.lotes.map((lote, i) => {

                if (lote.sender_id === this.props.activeContact.id || lote.lotesReceived[0].receiver_id === this.props.activeContact.id) {
                  lotesDisplayCount++;

                  if (lote.sender_id === this.props.profile.id) {
                    return (
                      <View style={styles.senderStyle} key={ lote.id } onClick={ () => this.handleClick(lote.id) }>
                        <View style={styles.loteMessage}><Text>{ lote.lote.message }</Text></View>
                        <View style={styles.loteTimeStamp}><Text>sent { Moment(lote.created_at).fromNow() }</Text></View>
                     
                      </View>
                    );
                  } else if (lote.lotesReceived[0].receiver_id === this.props.profile.id) {
                    return (
                      <View style={styles.receiverStyle} key={ lote.id } onClick={ () => this.handleClick(lote.id) }>
                        <View style={styles.senderStyle}><Text>{ lote.lote.message }</Text></View>
                        <View style={styles.loteTimeStamp}><Text>sent { Moment(lote.created_at).fromNow() }</Text></View>
                        
                      </View>
                    );
                  }
                }

              })
              : this.props.lotes.map((lote, i) => {
                if (lote.sender_id === this.props.profile.id && lote.lotesReceived[0].receiver_id === this.props.profile.id) {
                  lotesDisplayCount++;
                  return (
                    <View style={styles.senderStyle} key={ lote.id } onClick={ () => this.handleClick(lote.id) }>
                      <View style={styles.loteMessage}><Text>{ lote.lote.message }</Text></View>
                      <View style={styles.loteTimeStamp}><Text>sent { Moment(lote.created_at).fromNow() }</Text></View>
                      
                    </View>
                  );
                }
              })
          }
        </View>
      </View>
    );
  }
}

export default ChatHistory
