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
  FlatList,
  ScrollView,
} from 'react-native';
import BottomTabs from '../components/BottomTabs';

type Props = {};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'DL5S CG',
    lines: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'HR36 AA 7263',
    lines: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'DL9C AM 1123',
    lines: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-144571e29d72',
    title: 'DL9B AM 1123',
    lines: 1,
  },

  {
    id: '58694a1f-3da1-471f-bd96-144571e29d72',
    title: 'HR26 1135',
    lines: 1,
  },
  {
    id: '58694a1f23da1-471f-bd96-144571e29d72',
    title: 'HR267 11115',
    lines: 1,
  },

  {
    id: '58694a1f-3da1-471f12d96-144571e29d72',
    title: 'RJ09 1231',
    lines: 1,
  },
  {
    id: '58694a1f-3da1-471f123d96-144571e29d72',
    title: 'UK09 11232',
    lines: 1,
  },
  {
    id: '58694a1f-3d1121471f123d96-144571e29d72',
    title: 'UK110 11232',
    lines: 1,
  },
];
const Item = ({title, lines}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.linesContainer}>
      <TouchableOpacity>
        <Image
          style={styles.tab}
          source={require('../assets/images/EditScreen.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.tab}
          source={require('../assets/images/delete.png')}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Edit = ({navigation}) => {
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
          Edit Scan's
        </Text>
        <Text
          style={{
            color: '#606060',
            fontSize: 19,
            lineHeight: 18,
            fontWeight: '400',
          }}>
          Your recent scans !
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollbar}>
        <FlatList
          contentContainerStyle={styles.list}
          data={DATA}
          renderItem={({item}) => (
            <Item title={item.title} lines={item.lines} />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>

      <View style={styles.footer}>
        <BottomTabs navigation={navigation} />
      </View>
    </View>
  );
};

export default Edit;

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  item: {
    width: 400,
    marginTop: 40,
    backgroundColor: '#F9F9F9',
    height: 55,
    borderRadius: 11,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    marginRight: 150,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    color: 'black',
  },

  scrollbar: {
    width: '100%',
    height: '90%',
  },
  tab: {
    width: 34,
    height: 40,
    marginHorizontal: 5,
  },

  linesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
