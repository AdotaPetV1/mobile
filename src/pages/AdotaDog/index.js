import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor} from "./style"; 

export default function Home({navigation}){


  const renderSelectorIcons = () => {
    return(
      <>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/serafim.png")}/>
            <HeaderSelectorName>Nome cachorro</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
        <SelectorBlock>
          <SelectorBlockDiv>
              <Image source={require("../../../assets/serafim.png")}/>
                <HeaderSelectorName>Nome cachorro</HeaderSelectorName>
            </SelectorBlockDiv>
          </SelectorBlock>
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
