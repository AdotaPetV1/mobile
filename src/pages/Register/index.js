import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBarLogin from '../../components/NavBarBackToLogin';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor, ButtonGhost} from "./style"; 

export default function Register({navigation}){

  function onClickButtonRegisterUser(){
		navigation.navigate("RegisterUser");
	}

  function onClickButtonRegisterOng(){
		navigation.navigate("RegisterOng");
	}

  const renderSelectorIconOng = () => {
    return(
      <>
      <ButtonGhost onPress={onClickButtonRegisterOng}>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/adotapet-ong-icon.png")}/>
            <HeaderSelectorName>Organizações</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
      </ButtonGhost>  
          </>)
  };

  const renderSelectorIconUser = () => {
    return(
      <>
      <ButtonGhost onPress={onClickButtonRegisterUser}>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/adotapet-user-icon.png")}/>
            <HeaderSelectorName>Usuário</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
      </ButtonGhost>  

          </>)
  };

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Cadastro"/>
            <ScrollView>
              <Anchor>
              <DetailsPage>
               {renderSelectorIconOng()}
              </DetailsPage>
              <DetailsPage>
               {renderSelectorIconUser()}
              </DetailsPage>
              </Anchor>
            </ScrollView>
          </SafeAreaView>
          <NavBarLogin navigation={navigation}/>
        </>
      );
}
