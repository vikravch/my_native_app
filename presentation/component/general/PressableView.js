import React, {useState} from 'react';
import {Pressable} from "react-native";
// onPress, style, children
function PressableView(props) {
    return (
        <Pressable
            onPress={props.onPress}
            style={({pressed}) => [
                {
                    backgroundColor: pressed ?
                        'rgb(210, 230, 255)' : 'transparent',
                },
                props.style,
            ]}>
            {props.children}
        </Pressable>
    );
}

export default PressableView;
