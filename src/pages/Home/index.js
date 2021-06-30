import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor, ButtonGhost} from "./style"; 

export default function Home({navigation}){

  function onClickButtonRegisterOng(){
		navigation.navigate("AdotaDog");
	}

  const renderSelectorIconPets = () => {
    return(
      <>
      <ButtonGhost onPress={onClickButtonRegisterOng}>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/adotapet-dog-icon.png")}/>
            <HeaderSelectorName>Adota Dog</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
      </ButtonGhost>  
      <ButtonGhost>
        <SelectorBlock>
          <SelectorBlockDiv>
              <Image source={require("../../../assets/adotapet-cat-icon.png")}/>
                <HeaderSelectorName>Adota Cat</HeaderSelectorName>
            </SelectorBlockDiv>
          </SelectorBlock>
      </ButtonGhost>
          </>)
  };

  const renderSelectorIconDonates = () => {
    return(
      <>
      <ButtonGhost>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/adotapet-donate-icon.png")}/>
            <HeaderSelectorName>Doações</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
      </ButtonGhost>
      <ButtonGhost>  
        <SelectorBlock>
          <SelectorBlockDiv>
              <Image source={require("../../../assets/adotapet-cash-icon.png")}/>
                <HeaderSelectorName>Contribuições</HeaderSelectorName>
            </SelectorBlockDiv>
          </SelectorBlock>
      </ButtonGhost>    
          </>)
  };

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Categorias"/>
            <ScrollView>
              <Anchor>
              <DetailsPage>
               {renderSelectorIconPets()}
              </DetailsPage>
              <DetailsPage>
               {renderSelectorIconDonates()}
              </DetailsPage>
              </Anchor>
            </ScrollView>
          </SafeAreaView>
          <NavBar navigation={navigation}/>
        </>
      );
}
