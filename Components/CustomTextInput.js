import styled from 'styled-components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React from 'react'
import { TouchableOpacity } from 'react-native'


const RoundView = styled.View`
    width: 80%;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 30px;
    padding-right: 10px;
    flex-direction: row;
    align-self: center;
    justify-items: center;
    align-items: center;
    padding-left: 10px;
    border-width: 1px;
    background-color: white;
    border-color: ${props => props.borderColor};
`
const Input = styled.TextInput`
    width: 75%;
    font-size:16px;
`

export const TextCustom = ({
    iconLeftName, iconSize,
    iconColor, borderColor,
    placeholder, onFocus,
    onBlur, onChangeText,
    secureTextEntry, iconRightName, onPressIcon }) => {

    return <RoundView borderColor={borderColor}>
        <FontAwesome5
            style={{ margin: 10 }}
            name={iconLeftName}
            size={iconSize}
            color={iconColor} />
        <Input
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry} />
        <TouchableOpacity onPress={onPressIcon}>
            <FontAwesome5
                style={{ margin: 10}}
                color={iconColor}
                name={iconRightName}
                size={18} />
        </TouchableOpacity>
    </RoundView>
}

