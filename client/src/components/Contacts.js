import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Right, Left } from 'native-base';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';

class Contacts extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Contacts',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() {
  //   return (
  //     <View>
  //       <Header headerText='Contacts' />
  //       <Button
  //         title="Edward Kim"
  //         onPress={() => navigate('Lotes', {user: 'Edward Kim'})}
  //       />
  //       <Button
  //         title="Alana Turangan"
  //         onPress={() => navigate('Lotes', {user: 'Alana Turangan'})}
  //       />
  //       <Button
  //         title="Conor Wilson"
  //         onPress={() => navigate('Lotes', {user: 'Conor Wilson'})}
  //       />
  //       <Button
  //         title="Ivana He"
  //         onPress={() => navigate('Lotes', {user: 'Ivana He'})}
  //       />
  //     </View>
  //   );
  // }
  return (
            <Container>
              <Header headerText='Contacts' />
                <Content>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri:'http://2.bp.blogspot.com/-7QtAHIv-hv4/UoF0zik3A5I/AAAAAAAAAEU/2w-GywiTse8/s1600/happy-face-clip-art-1.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    
}

export default Contacts;
