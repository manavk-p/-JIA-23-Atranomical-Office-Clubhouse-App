import styles from "../styles";
import {React, useState} from "react";
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList
} from "react-native";
import EventComponent from "./EventComponent";
import { EVENTS } from "../data/DummyData";




function renderEventComponent(itemData) {
  return (<EventComponent
            name={itemData.item.name}
            date={itemData.item.date}
            time={itemData.item.time}
            description={itemData.item.description}
          />
        );
}


const Events = ({navigation}) => {

  function addEventHandler() {
    navigation.navigate("AddEvent");
  }



  return (
    <SafeAreaView style={styles.SafeAreaView}>

      <View>
        <View style={styles.screenHeader}>
          <Text style={styles.titleText}>
            {'Events'}
          </Text>

          <Pressable onPress={addEventHandler}>

            <Text style={styles.addEventText}>
                Add
            </Text>

          </Pressable>

        </View>
        <View style={styles.headerSeperator}>
          
        </View>
      </View>
      <View style={styles.eventListContainer}>
        <FlatList showsVerticalScrollIndicator={false}
          data={EVENTS}
          keyExtractor={(item) => item.id}
          renderItem={renderEventComponent}
        />

      </View>
    </SafeAreaView>
  );
}


export default Events;
