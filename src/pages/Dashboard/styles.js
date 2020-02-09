import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 5;
  align-items: center;
  flex-direction: column;
  margin-top: 80%;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 35px;
  height: 64px;
  width: 64px;
  background: #000;
  border-radius: 32px;

  align-items: center;
  justify-content: center;
`;

export const IconComponent = styled(MDIcon).attrs(({...rest}) => ({
  ...rest,
  size: 30,
}))`
  color: #fff;
`;
