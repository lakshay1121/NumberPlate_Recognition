/* eslint-disable prettier/prettier */
import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState} from 'react';
import DocumentScanner from 'react-native-document-scanner-plugin';

import TextRecognition from '@react-native-ml-kit/text-recognition';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import BottomTabs from '../components/BottomTabs';

type Props = {};

const ScannerScreen = ({navigation}) => {
  const [scannedImage, setScannedImage] = useState(null);
  const [isSelectedOne, setSelectionOne] = useState(false);
  const [isSelectedTwo, setSelectionTwo] = useState(false);
  const [isSelectedThree, setSelectionThree] = useState(false);
  const [text, setText] = useState('');

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument({
      croppedImageQuality: 100,
    });

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
  }, []);

  useEffect(() => {
    (async () => {
      if (scannedImage) {
        let result = await TextRecognition.recognize(scannedImage);

        console.log(result);

        setText(result?.blocks[0]?.text);
      }
    })();
  }, [scannedImage]);

  return (
    <View style={styles.mainView}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'black',
          marginBottom: 20,
          marginTop:30
        }}>
        Scan Images to Generate texts
      </Text>

      {scannedImage != null && (
        <Image
          resizeMode="contain"
          style={{width: '90%', height: '40%', bottom: 40}}
          source={{uri: scannedImage}}
        />
      )}
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.selectRowContainer}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '600',
              color: 'black',
              marginBottom: 115,
              marginLeft: 60,
            }}>
            Row's to Extract
          </Text>

          <View style={styles.checkboxContainer}>
            <View style={styles.oneCheckbox}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: 'black',
                  marginRight: 200,
                }}>
                1st
              </Text>
              <CheckBox
                style={styles.checkbox}
                tintColors={{true: 'black', false: 'black'}}
                value={isSelectedOne}
                onValueChange={setSelectionOne}
              />
            </View>

            <View style={styles.oneCheckbox}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: 'black',
                  marginRight: 200,
                }}>
                2nd
              </Text>
              <CheckBox
                style={styles.checkbox}
                tintColors={{true: 'black', false: 'black'}}
                value={isSelectedTwo}
                onValueChange={setSelectionTwo}
              />
            </View>

            <View style={styles.oneCheckbox}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: 'black',
                  marginRight: 200,
                }}>
                All
              </Text>
              <CheckBox
                style={styles.checkbox}
                tintColors={{true: 'black', false: 'black'}}
                value={isSelectedThree}
                onValueChange={setSelectionThree}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: '95%',
            height: 100,
            backgroundColor: '#F9F9F9',
            borderRadius: 8,
            marginBottom: 30,
          }}>
          {text !== '' ? (
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '700',
                margin: 15,
                marginLeft: 50,
              }}>
              {text}
            </Text>
          ) : (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              width: 130,
              height: 53,
              borderRadius: 8,
              backgroundColor: '#05BE71',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 30,
              marginRight: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 21,
                color: 'white',
              }}>
              Save Text
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 130,
              height: 53,
              borderRadius: 8,
              backgroundColor: '#353535',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 30,
            }}
            onPress={() => {
              navigation.navigate('ScannerScreen');
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 21,
                color: 'white',
              }}>
              Retake
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 21,
              color: 'white',
            }}>
            Generate Text
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  checkboxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 20,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 25,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  selectRowContainer: {
    width: '100%',
    height: 200,
    marginBottom: 70,
  },

  oneCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    width: '100%',
    height: 50,
    marginBottom: 15,
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

  scroll: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
