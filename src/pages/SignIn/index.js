import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../../assets/logo.png';
import Background from '../../components/Background';
import {signInRequest} from '../../store/modules/auth/actions';
import {Container, FormInput, Form, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(username, password));
  }
  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu username"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={username}
            onChangeText={setUsername}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
