import React from 'react';
import { Image } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';
import {DetailsPage, SelectorBlock, SelectorBlockDiv, HeaderSelectorName, Anchor, ButtonGhost} from "./style"; 

export default function Home({navigation}){

  function onClickButtonRegisterDog(){
		navigation.navigate("AdotaDog");
	}

  function onClickButtonRegisterCat(){
		navigation.navigate("AdotaCat");
	}
  

  const renderSelectorIconPets = () => {
    return(
      <>
      <ButtonGhost onPress={onClickButtonRegisterDog}>
        <SelectorBlock>
          <SelectorBlockDiv>
            <Image source={require("../../../assets/adotapet-dog-icon.png")}/>
            <HeaderSelectorName>Adota Dog</HeaderSelectorName>
          </SelectorBlockDiv>
        </SelectorBlock>
      </ButtonGhost>  
      <ButtonGhost onPress={onClickButtonRegisterCat}>
        <SelectorBlock>
          <SelectorBlockDiv>
              <Image source={require("../../../assets/adotapet-cat-icon.png")}/>
                <HeaderSelectorName>Adota Cat</HeaderSelectorName>
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
              </Anchor>
            </ScrollView>
          </SafeAreaView>
          <NavBar navigation={navigation}/>
        </>
      );
}
