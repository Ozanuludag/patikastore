import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'purple'
  }
})
