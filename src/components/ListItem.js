import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ListItem = ({item}) => {
  return (
    <View style={styles.listItem}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: item.imgURL}}
      />
      <Text style={styles.title}> {item.title} </Text>
      <Text style={styles.price}> {item.price} </Text>

      {item.inStock === true ? null : (
        <Text style={styles.notInStock}>Stokta Yok</Text>
      )}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    margin: 5,
    borderRadius: 10,
    width: windowWidth / 2,
  },
  image: {
    height: windowHeight / 4,
    borderRadius: 10,
    resizeMode: 'contain',
    margin: 10,
    backgroundColor: '#ffffff',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 5,

  },
  price: {
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 5,
    //borderWidth: 1,
  },

  notInStock: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 10,
  },
});
