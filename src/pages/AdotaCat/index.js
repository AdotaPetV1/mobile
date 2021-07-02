import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor, ButtonGhost} from "./style"; 

export default function AdotaCat({navigation}){


  function onClickButtonPerfilCat(){
    navigation.navigate("PerfilCat");
  };

  const renderSelectorIcons = () => {
    return(
      <>
      <ButtonGhost onPress={onClickButtonPerfilCat}>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/soneca.png")}/>
            <HeaderSelectorName>Nome gato</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
      </ButtonGhost>
      <ButtonGhost onPress={onClickButtonPerfilCat}>
        <SelectorBlock>
          <SelectorBlockDiv>
              <Image source={require("../../../assets/soneca.png")}/>
                <HeaderSelectorName>Nome gato</HeaderSelectorName>
            </SelectorBlockDiv>
          </SelectorBlock>
          </ButtonGhost>
          </>)
  };

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Adota Cat"/>
            <ScrollView>
              <Anchor>
              <DetailsPage>
               {renderSelectorIcons()}
              </DetailsPage>
              <DetailsPage>
              {renderSelectorIcons()}
              </DetailsPage>
              <DetailsPage>
              {renderSelectorIcons()}
              </DetailsPage>
              <DetailsPage>
              {renderSelectorIcons()}
              </DetailsPage>
              <DetailsPage>
              {renderSelectorIcons()}
              </DetailsPage>
              <DetailsPage>
              {renderSelectorIcons()}
              </DetailsPage>
              </Anchor>
            </ScrollView>
          </SafeAreaView>
          <NavBar navigation={navigation}/>
        </>
      );
}
