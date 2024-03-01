import { useState } from "react";
import { View, Text, Switch } from "react-native-web";
import Btn from "../components/Btn";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("fsdfs");
  const updateResult = (newResult) => {
    setResult(newResult)
  }

  const colors = {
    dark: "#22252d",
    dark1: "#292b36",
    dark2: "#272b33",
    light: "#fff",
    light1: "#f1f1f1",
    light2: "#f7f7f7",
  };

  const getColor = (light, dark) => (darkTheme ? dark : light);
  

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: "center",
      }}
    >
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />

      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: "100%",
          marginTop: 260,
          paddingBottom: 20,
          textAlign: "right",
          paddingRight: 20,
        }}
      >
        {result}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          position: 'absolute',
          bottom: 0,
          justifyContent: "center",
          backgroundColor: getColor(colors.light1, colors.dark1),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Btn result={result} updateResult={updateResult} title={"C"} darkTheme={darkTheme} colors={colors} type='top'/>
        <Btn result={result} updateResult={updateResult} title={"DL"} darkTheme={darkTheme} colors={colors} type='top'/>
        <Btn result={result} updateResult={updateResult} title={"/"} darkTheme={darkTheme} colors={colors} type='top'/>
        <Btn result={result} updateResult={updateResult} title={"%"} darkTheme={darkTheme} colors={colors} type='top'/>
        <Btn result={result} updateResult={updateResult} title={"1"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"2"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"3"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"*"} darkTheme={darkTheme} colors={colors} type= 'right'/>
        <Btn result={result} updateResult={updateResult} title={"4"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"5"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"6"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"-"} darkTheme={darkTheme} colors={colors} type= 'right'/>
        <Btn result={result} updateResult={updateResult} title={"7"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"8"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"9"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"+"} darkTheme={darkTheme} colors={colors} type= 'right'/>
        <Btn result={result} updateResult={updateResult} title={"00"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"0"} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"."} darkTheme={darkTheme} colors={colors} type= 'number'/>
        <Btn result={result} updateResult={updateResult} title={"="} darkTheme={darkTheme} colors={colors} type= 'right'/>
      </View>
    </View>
  );
}
