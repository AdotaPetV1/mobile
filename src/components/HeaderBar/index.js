import React from 'react';
// import { View,Text } from 'react-native';
import {  Container, HeaderName } from './style';

export default function HeaderBar({headerName}){

    return(
        <Container>
                <HeaderName>{headerName}</HeaderName>
        </Container>
    )
}
