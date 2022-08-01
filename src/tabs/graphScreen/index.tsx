import * as React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import {DATA, style } from '../styles'


const vChartConf = {
  backgroundGradientFrom: "#1f782e", backgroundGradientTo: "#1f787e",
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#fff"
  }
}

const cChartConf = {
  backgroundGradientFrom: "#78281f", backgroundGradientTo: "#78286f",
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#fff"
  }
}

export function GraphScreen() {
  return (
    <ScrollView>
      <View style={style.loadingScreen}>
        <Text>Gráfico Tensão</Text>
        <LineChart
          data={ DATA }
          width={(Dimensions.get("window").width)-5} height={220}
          yAxisLabel="" yAxisSuffix=" V" yAxisInterval={1}
          chartConfig={ vChartConf } bezier
          style={{ marginVertical: 8, borderRadius: 10 }} />

        <Text>Gráfico Corrente</Text>
        <LineChart
          data={ DATA }
          width={(Dimensions.get("window").width)-5} height={220}
          yAxisLabel="" yAxisSuffix=" A" yAxisInterval={1}
          chartConfig={ cChartConf } bezier
          style={{ marginVertical: 8, borderRadius: 10 }} />
      </View>
    </ScrollView>
  );
}