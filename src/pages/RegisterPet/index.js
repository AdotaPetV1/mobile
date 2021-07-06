import React from 'react';
import { Image, TextInput } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, TextInputLabel, Anchor} from "./style"; 

export default function RegisterPet({navigation}){


  const renderBlockRegister = (nome) => {
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
      <Image source={require("../../../assets/adotapet-cadastro-pet.png")}/>
      </SelectorBlockDiv>
      <TextInputLabel>
        <TextInput
        placeholder="Nome"
        ></TextInput>
      </TextInputLabel>
      <TextInputLabel>
        <TextInput
        placeholder="Porte"
        ></TextInput>
      </TextInputLabel>
      <TextInputLabel>
        <TextInput
        placeholder="Idade"
        ></TextInput>
      </TextInputLabel>
      <TextInputLabel>
        <TextInput
        placeholder="Sexo"
        ></TextInput>
      </TextInputLabel>
      <TextInputLabel>
        <TextInput
        placeholder="Castração"
        ></TextInput>
      </TextInputLabel>
      <TextInputLabel>
        <TextInput
        placeholder="Vacinação"
        ></TextInput>
      </TextInputLabel>
      <TextInputLabel>
        <TextInput
        placeholder="Raça"
        ></TextInput>
      </TextInputLabel>
      <TextInputLabel>
        <TextInput
        placeholder="Limitações"
        ></TextInput>
      </TextInputLabel>
    </>
    )
  };

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Perfil Cat"/>
            <ScrollView>
              <Anchor>
              <DetailsPage>
               {renderBlockRegister()}
              </DetailsPage>
              </Anchor>
            </ScrollView>
          </SafeAreaView>
          <NavBar navigation={navigation}/>
        </>
      );
}
