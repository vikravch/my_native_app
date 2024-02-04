import React from 'react';
import {View, Text, Pressable} from "react-native";
import {navigation} from "../../style/styles";
import PressableView from "../general/PressableView";

function NavLayout() {
    return (
        <View
            style={navigation.navContainer}
        >
            <PressableView
                style={navigation.navItem}
                onPress = {()=>{
                    console.log("Home clicked")
                }}
            >
                <Text> Home </Text>
            </PressableView>
            <Text style={navigation.navItem}> Profile </Text>
            <Text style={navigation.navItem}> About </Text>
        </View>
    );
}
export default NavLayout;
