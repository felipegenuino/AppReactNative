import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

/* Não possuem valor semântico
 * Não possuem estilizacao propria
 * Todos components possuem por padrao display:flex
 *  
 * View: div, footer, header, main, aside, section
 * Text: p, span, strong, h1, h2, h3
 */


export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden
      />
      <View style={styles.container}>
        <Text style={styles.title}> Hello Evento </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8de9e5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  }
})