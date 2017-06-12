import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, View, Text, ScrollView } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Body, Right, Left, Item, Input, Form, Button } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { Header } from './common';
import config from '../../../config/config.js';

const apiBaseUrl = config.API_BASE_URL;
//header is not showing up

class Contacts extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Contacts',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  constructor (props) {
    super(props);
    this.state = {
      email: ''

  }

    this.handleClickContact = this.handleClickContact.bind(this);
    this.handleSubmitContact = this.handleSubmitContact.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleClickContact(receiver) {
    this.props.setActiveContact(receiver);
  }

  handleEmailInput(e) {
    this.setState({
      email: e
    });
  }

  handleSubmitContact (e) {
    console.log('this has been clicked')
    e.preventDefault();
    console.log('expect my email', this.props.profile.id)
   axios.post(`${apiBaseUrl}/profiles/${this.props.profile.id}/contacts`, {
    // axios.post(`http://localhost:3000/api/profiles/${this.props.profile.id}/contacts`, {
      senderId: this.props.profile.id,
      receiverEmail: this.state.email
    })
    .then((res) => {
      this.props.getContacts(this.props.profile.id);
      console.log (res);
    })
    .catch((err) => {
      console.log (err);
    });

    this.setState({email:''})

  }

  render() {
    return (
      <Container>

          <Header headerText='Contacts' />

        <Content>
          <List>
            { this.props.contacts.map( (contact)=>{
              return (<ListItem key={ contact.receiver.id } onPress={ () => this.handleClickContact(contact.receiver) }>
                <Text>{ contact.receiver.email }</Text>
              </ListItem>)
            }) }
          </List>
        </Content>
          
        <Item regular>
          <Input ref="email" onChangeText={ this.handleEmailInput } value={this.state.email} placeholder="Enter a contact"/>
        </Item>

        <View><Text></Text></View>

        <Button block primary onPress={ this.handleSubmitContact }>
          <Text>Submit</Text>
        </Button>
      
      </Container>
      
    );
 }
}

export default Contacts;
