/* eslint-disable prettier/prettier */
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

type Props = {};

const Welcome = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.inputTextContainer}>
        <Image
          style={styles.welcomeLogo}
          source={require('../../assets/images/welcome.png')}
        />
      </View>

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
          Welcome Lakshay!
        </Text>
        <Text
          style={{
            color: '#606060',
            fontSize: 12,
            lineHeight: 18,
            fontWeight: '400',
          }}>
          Start converting images to text!
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 21,
              color: 'white',
            }}>
            Let's start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

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
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  welcomeLogo: {
    width: 300,
    height: 300,
  },
});
