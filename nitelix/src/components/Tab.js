import React, {useRef} from 'react';
import styled from 'styled-components/native';

import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';



const Container = styled.View`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${props => (props.focused ? Colors.tabActive : Colors.tabPassive)};
  border-radius: 10px;
  margin: 10px;
  
`;

const IconText = styled.Text`
display: ${props => (props.focused ? 'flex' : 'none')};
  margin: 6px;
  color:white;
  font-weight:bold;
`;

const Wrapper = styled.TouchableWithoutFeedback``;


function Tab({label,iconname,piconname, accessibilityState, onPress}) {
      const focused = accessibilityState.selected;
  return (
    <Wrapper
      onPress={() => {
        onPress();
      }}>
      <Container focused={focused}>
        <Image
          source={focused ? iconname : piconname}
          color={Colors.tabIconColor}
          size={20}
        />
        <IconText focused={focused}>
          <Text> {label}</Text>
        </IconText>
      </Container>
    </Wrapper>
  );
}

export default Tab;
