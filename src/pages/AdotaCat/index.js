import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor} from "./style"; 

export default function AdotaCat({navigation}){


  const renderSelectorIcons = () => {
    return(
      <>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/soneca.png")}/>
            <HeaderSelectorName>Nome gato</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
        <SelectorBlock>
          <SelectorBlockDiv>
              <Image source={require("../../../assets/soneca.png")}/>
                <HeaderSelectorName>Nome gato</HeaderSelectorName>
            </SelectorBlockDiv>
          </SelectorBlock>
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
