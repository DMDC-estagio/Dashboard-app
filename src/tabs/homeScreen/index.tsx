import * as React from 'react';
import { View, StatusBar } from 'react-native';
import BeautifulHorizontalList from "react-native-beautiful-horizontal-list";

import { style } from '../styles'

var recValues = {
  vmed: 215.2,
  vmax: 231.8,
  cmed: 0.8,
  cmax: 3.6
}

function colorPicker(value: number, type: string) {
  if (type === 'voltage') {
    if(value > 229 || value < 200) { return "#f73a4d" }
    else { return "#16c402" }
  } 
  else {
    if(value > 3) { return "#f73a4d" }
    else if(value > 0.7){ return "#2d95f7" }
    else { return "#16c402" }
  }
}

function descPicker(value: number, type: string) {
  if (type === 'voltage') {
    if(value > 229) { return "Tensão Alta" }
    else if(value < 200) { return "Tensão Baixa" }
    else { return "Tensão Normal" }
  }
  else {
    if(value > 3) { return "Corrente Crítica"}
    else if(value > 0.7) { return "Alto Consumo"}
    else { return "Baixo Consumo" }
  }
}

const voltageArr = [
  {
    title: "Tensão Média",
    value: recValues.vmed.toString() + " V",
    unit: descPicker(recValues.vmed, "voltage"),
    primaryColor: colorPicker(recValues.vmed, "voltage"),
    imageSource: require('../../assets/lightning.png')
  },
  {
    title: "Tensão Máxima",
    value: recValues.vmax.toString() + " V",
    unit: descPicker(recValues.vmax, "voltage"),
    primaryColor: colorPicker(recValues.vmax, "voltage"),
    imageSource: require('../../assets/lightning.png')
  },
];

const currentArr = [
  {
    title: "Corrente Média",
    value: recValues.cmed.toString() + " A",
    unit: descPicker(recValues.cmed, "current"),
    primaryColor: colorPicker(recValues.cmed, "current"),
    imageSource: require('../../assets/current.png')
  },
  {
    title: "Corrente Máxima",
    value: recValues.cmax.toString() + " A",
    unit: descPicker(recValues.cmax, "current"),
    primaryColor: colorPicker(recValues.cmax, "current"),
    imageSource: require('../../assets/current.png')
  },
];

export function HomeScreen() {
    return (
      <View style={ style.tabDefaults }>
        <StatusBar  barStyle="dark-content" translucent={true} />
        <BeautifulHorizontalList data={ voltageArr } />
        <BeautifulHorizontalList data={ currentArr } />
      </View>
    );
}