import { View, TouchableOpacity } from "react-native";
import Text from "../Text";
import React from "react";

export default function Button({
  title = "",
  style2,
  disabled = false,
  backgroundColor = "#18DCFF",
  fontColor= "white",
  ...props
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          backgroundColor: backgroundColor,
          padding: 12,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          opacity: disabled ? 0.8 : 1,
        },
        style2,
      ]}
      {...props}
    >
      <Text color={fontColor}>{title}</Text>
    </TouchableOpacity>
  );
}
