import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Text, Button, IconComponent} from './styles';
import Keyboard from '../../components/Keyboard';
import {withNavigationFocus} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
// import {Button} from 'react-native-material-ui';

import Background from '../../components/Background';
import {callRequest} from '../../store/modules/call/actions';

function Dashboard() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const profile = useSelector(state => state.user.profile);

  return (
    <Background>
      <Container>
        <Text>{value}</Text>
        <Keyboard
          color="white"
          pressMode="string"
          onPress={number => setValue(number)}
        />
        <Button onPress={() => dispatch(callRequest(profile, value))}>
          <IconComponent name="call" />
        </Button>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Teclado',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
