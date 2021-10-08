import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import data from './data';
import ListItem from './components/ListItem';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

const App = () => {
  

  return (
    <View style={styles.container}>
      <Header title="PATIKASTORE"/>
      <SearchBar />
      <FlatList
        style={{alignContent: 'space-between'}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem item={item}/>}
        numColumns={2}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
 
});
