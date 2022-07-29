import * as React from 'react';
import { View, StatusBar } from 'react-native';
import BeautifulHorizontalList from "react-native-beautiful-horizontal-list";

import { style } from '../styles'

const voltageArr = [
  {
    title: "Tensão Média",
    value: "215",
    unit: "Volts",
    primaryColor: "#2d95f7",
    imageSource: require('../../assets/lightning.png')
  },
  {
    title: "Tensão Máxima",
    value: "230",
    unit: "Volts",
    primaryColor: "#f73a2d",
    imageSource: require('../../assets/lightning.png')
  },
];

const currentArr = [
  {
    title: "Corrente Média",
    value: "8,0",
    unit: "Amperes",
    primaryColor: "#2d95f7",
    imageSource: require('../../assets/current.png')
  },
  {
    title: "Corrente Máxima",
    value: "15,6",
    unit: "Amperes",
    primaryColor: "#f73a2d",
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