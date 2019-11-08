/**
 * Vídeo #9:AsyncStorage - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/asyncstorage
 * by: Vagner Pinto
 */

import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage, TextInput} from 'react-native';

/*
  Ele está deprecated, vai ser removido em novas versões do Native (segundo a mensagem de alerta do Metro Bundler)
 */
export default class AsyncStorageExemplo extends Component{

  constructor(props){
    super(props);
    this.state={
      nome:''
    };
    this.setNome = this.setNome.bind(this);

    //pega do AsyncStorage (cria um listener assíncrono ao construir o componente)
    AsyncStorage.getItem('nome').then((value)=>{
      this.setState({nome:value});
    })

  }

  setNome(nome){
    let s = this.state;
    s.nome = nome;
    this.setState(s);
    //salva no AsyncStorage
    AsyncStorage.setItem('nome', nome);
  }

  render(){
    return(
        <View style={styles.body}>
          <TextInput style={styles.input} value={this.state.nome} onChangeText={(text)=>this.setNome(text)}/>
        </View>
    );
  }

}//fim classe

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    //backgroundColor:'#222222'
  },
  input:{
    marginLeft:10,
    marginRight:10,
    height:40,
    width:200,
    borderWidth:1,
    borderColor:'#CCCCCC',
    padding:10,
    fontSize:16
  }
});
