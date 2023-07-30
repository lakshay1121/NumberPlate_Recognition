/* eslint-disable prettier/prettier */
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};

const Password = ({navigation}) => {
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
          Password
        </Text>
        <Text
          style={{
            color: '#606060',
            fontSize: 12,
            lineHeight: 18,
            fontWeight: '400',
          }}>
          Enter your password to register
        </Text>
      </View>

      <View style={styles.inputTextContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={'#909090'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Re - Password"
          placeholderTextColor={'#909090'}
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Welcome');
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 21,
              color: 'white',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Password;

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

  loginButton: {
    width: 343,
    height: 53,
    borderRadius: 8,
    backgroundColor: '#05BE71',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
