import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";

const BarChart = ({ users }) => (
  <View style={styles.chartContainer}>
    <VictoryChart height={300} domainPadding={{ x: 20 }}>
      <VictoryAxis
        tickValues={users.map((user, index) => index)}
        tickFormat={users.map((user) => user.login)}
        style={{
          tickLabels: { angle: 45, fontSize: 8, padding: 5 },
          axis: { stroke: "transparent" },
        }}
      />
      <VictoryAxis dependentAxis tickFormat={(t) => `${t}`} />
      <VictoryBar
        data={users.map((user, index) => ({ x: index, y: user.followers }))}
        style={{ data: { fill: "#007BFF" } }}
      />
    </VictoryChart>
  </View>
);

const styles = StyleSheet.create({
  chartContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
});

export default BarChart;
