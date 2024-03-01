import { Text, TouchableOpacity } from "react-native";

const Btn = ({ title, darkTheme, colors, type, result, updateResult }) => {
  const getBtnColor = (type) => {
    if (type === "top") {
      return "#35fbd6";
    } else if (type === "right") {
      return "#eb6363";
    } else {
      return darkTheme ? colors.light : colors.dark;
    }
  };

  const calculate = (title) => {
    if (title == 'C'){
        updateResult('')
    }
    else if (title == 'DL'){
        updateResult(result.substring(0, result.length - 1))
    }
    else if (title == '='){
        updateResult(Number(eval(result).toFixed(3)).toString())
    }
    else updateResult(result + title)
  }

  return (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        height: 70,
        width: 70,
        backgroundColor: darkTheme ? colors.dark2 : colors.light1,
        margin: 16,
      }}
    >
      <Text
        style={{
          fontSize: 37,
          color: getBtnColor(type),
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
