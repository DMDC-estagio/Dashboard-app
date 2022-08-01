import React, { useEffect, useState }  from 'react';
import { Text, View, Dimensions, ScrollView, StatusBar } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { style } from '../styles'

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
    getData(data.logs);
    return (
      <ScrollView>
        <View style={style.loadingScreen}>
          <Text>Gráfico Tensão</Text>
          <LineChart
            data={ DATA[0] }
            width={(Dimensions.get("window").width)-5} height={220}
            yAxisLabel="" yAxisSuffix=" V" yAxisInterval={1}
            chartConfig={ vChartConf } bezier
            style={{ marginVertical: 8, borderRadius: 10 }} />

          <Text>Gráfico Corrente</Text>
          <LineChart
            data={ DATA[1] }
            width={(Dimensions.get("window").width)-5} height={220}
            yAxisLabel="" yAxisSuffix=" A" yAxisInterval={1}
            chartConfig={ cChartConf } bezier
            style={{ marginVertical: 8, borderRadius: 10 }} />
        </View>
      </ScrollView>
    );
  }
}


function getData(logs) {
  for(let i=0 ; i < 6 ; i++) {
      DATA[0].datasets[0].data[i] = logs[i].voltage.med;
      DATA[1].datasets[0].data[i] = logs[i].current.med;

      let date = logs[i].date.split(" ")[1].split(":")

      DATA[0].labels[i] = date[0] + ":" + date[1];
      DATA[1].labels[i] = date[0] + ":" + date[1];
  }
  for(let i in DATA){
    DATA[i].datasets[0].data = DATA[i].datasets[0].data.reverse();
    DATA[i].labels = DATA[i].labels.reverse();
  }
}

var DATA = [
  {labels: [], datasets: [{ data: [] }] },
  {labels: [], datasets: [{ data: [] }] }
]