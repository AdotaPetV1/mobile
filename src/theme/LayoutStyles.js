import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
    padding-right: 5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const ScrollView = styled.ScrollView`
    margin-left:20px;
    margin-right: 10px;
`;

export const SafeAreaView = styled.SafeAreaView`
    padding-top: 15%;
`;