import { View, TextInput } from "react-native";
import Text from "../Text";
import React from "react";

export default function InputText({
  title = "",
  rightIcon = <View />,
  error = "",
  titleColor="black",
  ...props
}) {
  return (
    <View style={{paddingBottom: 20}}>
      <Text style={{ paddingBottom: 10, color: titleColor }}>{title}</Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#132040",
          backgroundColor: "#273C75",
          padding: 12,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <TextInput
          placeholderTextColor="#fff"
          style={{
            color: "#fff",
            fontSize: 16,
          }}
          {...props}
        />
        {rightIcon && <View>{rightIcon}</View>}
      </View>
      {error && (
        <Text color="red" style={{ textAlign: "right", paddingTop:5 }}>
          {error}
        </Text>
      )}
    </View>
  );
}
