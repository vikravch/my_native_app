import React, {useEffect, useState} from 'react';
import {emptyActivity} from "../../domain/model/Activity";
import {Button, StatusBar, Text, View} from "react-native";
import * as Styles from "../style/styles";
import SelectDropdown from "react-native-select-dropdown";
import {repository} from "../../App";

function MainPage() {
    const [activity, setActivity] = useState(emptyActivity);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] =
        useState('');
    console.log(activity);
    const getNewRandomActivity = ()=>{
        repository.getRandomActivity().then((randomActivity)=>{
            setActivity(randomActivity);
        });
    }
    const getActivityByCategory = ()=>{
        repository.getRandomFromCategory(selectedCategory)
            .then((categoryActivity)=>{
                setActivity(categoryActivity);
            })
    }
    useEffect(()=>{
        getNewRandomActivity();
        repository.getCategories().then((categories)=>{
            setCategories(categories)
        })
    },[]);
    return (
        <View style={ [
            Styles.containers.centerContainer,
            {backgroundColor:"#774455"}
        ]}>
            <Text>{activity.activity}</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Button onPress={()=>{
                getNewRandomActivity();
            }} title={"Get new random activity"} >
            </Button>
            <SelectDropdown
                data={categories}
                onSelect={(selectedItem, index) => {
                    setSelectedCategory(selectedItem)
                }}
            />
            <Button onPress={()=>{
                getActivityByCategory();
            }} title={'Get activity by category'}
            ></Button>
            <StatusBar style="auto" />
        </View>
    );
}

export default MainPage;
