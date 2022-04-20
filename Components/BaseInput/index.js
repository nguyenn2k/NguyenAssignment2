import styled from 'styled-components'
import React from 'react'

//Khi nhan vao nut 'Button':
const TouchableOpacity = styled.TouchableOpacity`
    //Mau nen:
    background-color: blue;
    //Do bo goc cong cua nut:
    border-radius: 30px;
    //Chieu rong:
    width: 100%;
    //Chieu dai:
    height: 50px;
    //Can chinh toan bo o giua:
    align-self: center;
    //Can chinh item o giua:
  
    margin-top: 20px;
`
//Chu 'Logo' ben trong:
const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 20px;
    align-self: center;
`
s
const Container = styled.View`
background-color: red ;
height: 50px;
align-items: center;
justify-content: center;
margin:30px;
border-radius: 30px;
`

const BaseInput = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <Container>
   
        <ButtonText>Login</ButtonText>

    </Container>
    </TouchableOpacity>
    );
}
export default BaseInput;