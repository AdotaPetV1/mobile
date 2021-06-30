import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBarHome from '../../components/NavBarBackToHome';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor, ButtonGhost} from "./style"; 

export default function Register({navigation}){

  function onClickButtonRegister(){
		navigation.navigate("RegisterUser");
	}

  const renderSelectorIconOng = () => {
    return(
      <>
      <ButtonGhost>
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
      <ButtonGhost onPress={onClickButtonRegister}>
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
          <NavBarHome navigation={navigation}/>
        </>
      );
}
