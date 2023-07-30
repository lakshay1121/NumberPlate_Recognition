/* eslint-disable prettier/prettier */
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};

const Login = ({navigation}) => {
  
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.mainView}>
      <View style={styles.headingContainer}>
        <Text
          style={{
            color: 'black',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 48,
            textAlign: 'left',
            paddingBottom: 16,
          }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            color: '#606060',
            fontSize: 12,
            lineHeight: 18,
            fontWeight: '400',
          }}>
          Convert images to text!
        </Text>
      </View>

      <View style={styles.inputTextContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor={'#909090'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={'#909090'}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          tintColors={{true: 'black', false: 'black'}}
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text
          style={{
            color: '#2D2D2D',
            fontSize: 12,
            lineHeight: 16.8,
            paddingRight: 120,
            paddingLeft: 8,
          }}>
          Remember Me
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#2D2D2D', fontSize: 12, lineHeight: 16.8}}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 21,
              color: 'white',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text
          style={{
            fontSize: 14,
            color: '#2D2D2D',
            fontWeight: '400',
            lineHeight: 21,
          }}>
          Don't have an account?{' '}
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{
              color: '#05BE71',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 21,
            }}>
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  headingContainer: {
    width: 340,
    height: 82,
  },

  inputTextContainer: {
    padding: 16,
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: 343,
    height: 20,
  },

  loginButton: {
    width: 343,
    height: 53,
    borderRadius: 8,
    backgroundColor: '#05BE71',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },

  checkbox: {
    width: 20,
    height: 20,
  },

  textInput: {
    color: 'black',
    width: 343,
    height: 71,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: '#ECECEC',
    borderWidth: 1,
    padding: 16,
  },

  footer: {
    top: 150,
  },
});
