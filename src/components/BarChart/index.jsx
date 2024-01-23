import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";

const BarChart = ({ users }) => (
  <VictoryChart height={200} domainPadding={{ x: 1 }}>
    <VictoryAxis tickValues={users.map((user) => user.login)} style={{ tickLabels: { angle: 45 } }}/>
    <VictoryAxis dependentAxis />
    <VictoryBar
      data={users.map((user) => ({ x: user.login, y: user.followers }))}
    />
  </VictoryChart>
);

export default BarChart;