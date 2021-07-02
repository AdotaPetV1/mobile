import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor, ButtonGhost} from "./style"; 

export default function Home({navigation}){

  function onClickButtonPerfilDog(){
    navigation.navigate("PerfilDog");

  };

  const renderSelectorIcons = () => {
    return(
      <>
      <ButtonGhost onPress={onClickButtonPerfilDog}>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/serafim.png")}/>
            <HeaderSelectorName>Nome cachorro</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
      </ButtonGhost>
      <ButtonGhost onPress={onClickButtonPerfilDog}>
        <SelectorBlock>
          <SelectorBlockDiv>
              <Image source={require("../../../assets/serafim.png")}/>
                <HeaderSelectorName>Nome cachorro</HeaderSelectorName>
            </SelectorBlockDiv>
          </SelectorBlock>
      </ButtonGhost>
          </>)
  };

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Adota Dog"/>
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
