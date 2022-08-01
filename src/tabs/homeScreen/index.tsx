import React, { useEffect, useState } from 'react';
import { View, StatusBar, Text } from 'react-native';
import BeautifulHorizontalList from "react-native-beautiful-horizontal-list";

import { style } from '../styles'

function getData(data: any, type: string){
  var recValues = {
    vmed: data.logs[0].voltage.med.toFixed(1),
    vmax: data.logs[0].voltage.max.toFixed(1),
    cmed: data.logs[0].current.med.toFixed(1),
    cmax: data.logs[0].current.max.toFixed(1)
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
  
  var voltageArr = [
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
  
  var currentArr = [
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
  if(type === "voltage") { return voltageArr }
  if(type === "current") { return currentArr }
}

export function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dmdc-stagging.herokuapp.com/api/logs')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  if(isLoading){
    return(
    <View style={ style.loadingScreen }>
        <StatusBar  barStyle="dark-content" translucent={true} />
        <Text> Loading... </Text>
    </View>
    );
  } else {
    return (
      <View style={ style.tabDefaults }>
        <StatusBar  barStyle="dark-content" translucent={true} />
          <BeautifulHorizontalList data={ getData(data, "voltage") } />
          <BeautifulHorizontalList data={ getData(data, "current") } />
      </View>
    );
  }
}