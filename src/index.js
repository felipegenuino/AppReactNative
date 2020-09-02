import React, { useEffect, useState, Fragment } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, StatusBar, FlatList } from 'react-native'

import api from './services/api'

/* Não possuem valor semântico
 * Não possuem estilizacao propria
 * Todos components possuem por padrao display:flex
 *  
 * View: div, footer, header, main, aside, section
 * Text: p, span, strong, h1, h2, h3
 * 
 *  android com Emulador: 10.0.2.2
 *  
 */


export default function App() {

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    api.get('eventos').then(response => {
      console.log(response.data);
      setEventos(response.data);
    })
  }, [])

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        hidden
      />
      {/* <Text style={styles.title}> Hello Evento </Text> */}
      <SafeAreaView
        style={styles.container}
      >
        <Text style={styles.title}>Eventos</Text>

        <FlatList
          style={styles.eventos}
          data={eventos}
          keyExtractor={evento => evento.id}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          renderItem={({ item: evento }) => (
            <View style={styles.evento}>
              <Image
                style={styles.eventoImagem}
                source={{
                  uri: evento.acf.imagem_evento.url,
                }}
              />
              <View style={styles.eventoContent}>
                <Text style={styles.eventoTipo}> {evento.acf.tipo_evento} </Text>
                <Text style={styles.eventoTitle}> {evento.title.rendered} </Text>
                <Text> {evento.acf.descricao_evento} </Text>
                <Text style={styles.eventoData}> {evento.acf.data_evento} </Text>
                <Text> -  {evento.acf.horario_evento} - </Text>
                {/* <Button /> */}
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8de9e5',
  },
  title: {
    color: '#363f44',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 50,
    textAlign: 'center'
  },
  eventos: {
    padding: 20,
    width: '100%',
  },
  evento: {
    backgroundColor: '#fff',
    marginBottom: 30,
    width: '100%',
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  eventoContent: {
    padding: 20
  },
  eventoImagem: {
    height: 120,
    width: '100%'
  },
  eventoTitle: {
    fontSize: 22,
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
    lineHeight: 30
  },
  eventoTipo: {
    color: '#8a8a8a',
    fontSize: 14,
    fontWeight: '700'
  }
})