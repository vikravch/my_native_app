import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import ActivityRepository from "./domain/repository/ActivityRepository";
import {useEffect, useMemo, useState} from "react";
import {emptyActivity} from "./domain/model/Activity";
import SelectDropdown from "react-native-select-dropdown";

const repository = new ActivityRepository();

export default function App() {

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
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Uncle Bob
// Clean Architecture

