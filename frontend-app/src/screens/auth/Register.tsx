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

const Register = ({navigation}) => {
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
          Register
        </Text>
        <Text
          style={{
            color: '#606060',
            fontSize: 12,
            lineHeight: 18,
            fontWeight: '400',
          }}>
          Create an account to start converting images to text!
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Email');
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 21,
              color: 'white',
            }}>
            Register with Email
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingBottom: '90%',
  },

  headingContainer: {
    width: 340,
    height: 82,
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
});
