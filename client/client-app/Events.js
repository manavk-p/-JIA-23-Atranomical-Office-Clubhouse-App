import styles from "./styles";
import {React, useState} from "react";
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  AppRegistry
} from "react-native";
import EventComponent from "./EventComponent";
import { EVENTS } from "./data/DummyData";
import { APPDATA } from "./data/AppData";






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
          data={APPDATA.getEventList()}
          keyExtractor={(item) => item.id}
          renderItem={renderEventComponent}
        />

      </View>
    </SafeAreaView>
  );
}


export default Events;
