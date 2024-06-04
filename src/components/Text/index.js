import React from 'react'
import { Text as RNText } from 'react-native' 
export default function Text({
    fontSize = 16,
    color = '#160502',
    children,
    style,
    ...props
}) {
  return (
    <RNText
    {...props}
    style={[
        {
            fontSize: fontSize,
            color: color,
        },
        style,
    ]}
    >
    {children}
    </RNText>
  )
}
