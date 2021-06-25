import styled from 'styled-components';

export const View = styled.View`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #A9CB73;
    height: 70px;
    display: flex;
    flex-flow: row wrap;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: 300;
    color: #FFF;
`;

export const Container = styled.TouchableOpacity`
    padding-left: 45%;
    margin-right: 6%;
`;
