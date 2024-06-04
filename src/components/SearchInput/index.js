import { View, TextInput, Text } from "react-native";
import React from "react";

export default function SearchInput({
  title= "",
  titleColor= "#A6A6A6",
  error = "",
  placeholder= "Text Input",
  textColor= "#000000",
  borderColor= "#004AAD",
  vertical=15,
  horizontal=10,
  right= 20,
  left= 20,
  fontSize= 20,
  leftIcon = null,
  rightIcon = null,
  borderRadius = null,
  width = null,
  padding = null,
  italic = false,
  ...props
}) {
  return (
    <View style={{paddingBottom: 20}}>
      {title === "" ? null : (
        <Text style={{ 
          paddingBottom: 10, 
          color: titleColor, 
          fontSize: 18
        }}>
          {title}
        </Text>
      )}
      <View style={[{
        borderWidth: 3,
        borderColor: borderColor,
        backgroundColor: "#FFFFFF",
        paddingVertical: vertical,
        paddingHorizontal: horizontal,
        width: width ? width : null,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: "center",
        flexDirection: "row",
      },
        borderRadius && {borderRadius: borderRadius},
      ]}>
        
        {leftIcon && <View style={{ marginRight: right }}>{leftIcon}</View>}
        <TextInput
          style={{
            color: textColor,
            fontSize: fontSize,
            flex: 1,
            fontStyle: italic ? 'italic' : 'normal',
          }}
          placeholder={placeholder}
          {...props}
        />
        
        {rightIcon && <View style={{ marginLeft: left }}>{rightIcon}</View>}
      </View>
    </View>
  );
}
