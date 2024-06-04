import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, InputText, Text } from '../../components';
import { HEIGHTSCREEN, WIDTH } from '../../assets/styles';
import ICONS from '../../assets/icons';
import IMAGES from '../../assets/images';
import { EMAILREGEX } from '../../utils/regex';
import satellite from '../../services/satellite';
import { CommonActions } from '@react-navigation/native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../storage/actions/actionLogin';

export default function Login({ navigation, route }) {
  const [isEnable, setIsEnable] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const login = useSelector((state) => state.dataLogin, shallowEqual);
  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  });

  const [errorLogin, setErrorLogin] = useState({
    email: '',
    password: '',
  });

  const handleForm = (text, type) => {
    const empty = `${type} must be filled in`;
    const invalid = `${type} is invalid`;

    if (type === 'email') {
      if (text === '') {
        setErrorLogin({
          ...errorLogin,
          [type]: empty,
        });

        return;
      }
      // invalid email
      if (!EMAILREGEX.test(text)) {
        setErrorLogin({
          ...errorLogin,
          [type]: invalid,
        });

        return;
      }
    }
    setErrorLogin({ ...errorLogin, [type]: '' });

    if (type === 'password') {
      // empty password
      if (text === '') {
        setErrorLogin({
          ...errorLogin,
          [type]: empty,
        });

        return;
      }
    }

    setErrorLogin({ ...errorLogin, [type]: '' });
  };

  useEffect(() => {
    if (dataLogin.email && dataLogin.password && errorLogin.email === '' && errorLogin.password === '') {
      setIsEnable(false);
    } else {
      setIsEnable(true);
    }
  }, [dataLogin]);

  const onsubmit = async () => {
    console.log('URL:', satellite.defaults.baseURL);

    await satellite
      .post('/login', dataLogin, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setTimeout(() => {
          console.log('proses login', response.data);
          if (response.data.status == 200) {
            dispatch(setLogin(response.data.data));
            const data = response.data.data;
            console.log('data:', data);
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'Main' }],
              })
            );
          }
        });
      })
      .catch((error) => {
        console.error('Errorserver:', error);
      });
  };

  return (
    <ImageBackground
      style={{
        width: WIDTH,
        height: '100%',
        flex: 1,
      }}
      source={IMAGES.bgLogin}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            gap: 20,
            paddingTop: 122,
            marginHorizontal: 16,
          }}
        >
          <Text
            fontSize={30}
            style={{
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
            color={'#fff'}
          >
            Atma Kitchen
          </Text>
          <InputText
            title="Email"
            keyboardType="email-address"
            placeholder="Enter Your Email"
            value={dataLogin.email}
            error={errorLogin.email}
            onChangeText={(value) => {
              setDataLogin({ ...dataLogin, email: value });
              handleForm(value, 'email');
            }}
          />
          <InputText
            title="Password"
            placeholder="Password"
            value={dataLogin.password}
            error={errorLogin.password}
            onChangeText={(value) => {
              setDataLogin({ ...dataLogin, password: value });
              handleForm(value, 'password');
            }}
            secureTextEntry={!isShowPassword}
            rightIcon={
              <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                <Image
                  style={{
                    width: 20,
                    height: 17,
                  }}
                  source={isShowPassword ? ICONS.eyeSlash : ICONS.eye}
                />
              </TouchableOpacity>
            }
          />
          <Button title="Login" backgroundColor="#273C75" disabled={isEnable} onPress={() => onsubmit()} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
