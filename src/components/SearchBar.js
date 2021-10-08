import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = () => {
  return (
    <View style={{marginVertical:5}}>
     <TextInput style={styles.input} placeholder="Ara..."/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  input:{
    borderRadius:20,
    padding:10,
    backgroundColor:'#F2F2F2'
  }
})
