import React from 'react';
import { Image, Text } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, TextInputLabel, Anchor} from "./style"; 

export default function PerfilDog({navigation}){


  const renderBlockPerfilDog = (nome) => {
    return(
      <>
        <SelectorBlock>
          {renderInfo()}
        </SelectorBlock>
          </>
          )
  };
  const renderInfo = () => {
    return(
    <>
     <SelectorBlockDiv>
      <Image source={require("../../../assets/adotapet-dog-perfil.png")}/>
      </SelectorBlockDiv>
      <TextInputLabel>
        <Text>{"Nome:"}</Text>
      </TextInputLabel>
      <TextInputLabel>
        <Text>{"Porte:"}</Text>
      </TextInputLabel>
      <TextInputLabel>
        <Text>{"Idade:"}</Text>
      </TextInputLabel>
      <TextInputLabel>
        <Text>{"Sexo:"}</Text>
      </TextInputLabel>
      <TextInputLabel>
        <Text>{"Castração:"}</Text>
      </TextInputLabel>
      <TextInputLabel>
        <Text>{"Vacinação:"}</Text>
      </TextInputLabel>
      <TextInputLabel>
        <Text>{"Raça:"}</Text>
      </TextInputLabel>
      <TextInputLabel>
        <Text>{"Limitações:"}</Text>
      </TextInputLabel>
    </>
    )
  };

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Perfil Dog"/>
            <ScrollView>
              <Anchor>
              <DetailsPage>
               {renderBlockPerfilDog("Nome")}
              </DetailsPage>
              </Anchor>
            </ScrollView>
          </SafeAreaView>
          <NavBar navigation={navigation}/>
        </>
      );
}
