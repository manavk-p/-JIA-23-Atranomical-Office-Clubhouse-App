import styles from "./styles";
import {React, useState} from "react";
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList
} from "react-native";
import EventComponent from "./EventComponent";
import { EVENTS } from "./data/DummyData";




function renderEventComponent(itemData) {
  return (<EventComponent
            name={itemData.item.name}
            date={itemData.item.date}
            time={itemData.item.time}
            description={itemData.item.description}
          />
        );
}



const Events = ({}) => {


  return (
    <SafeAreaView>
      <View>
        <View style={styles.screenHeader}>
          <Text style={styles.titleText}>
            {'Events'}
          </Text>
            <Text style={styles.addEventText}>
              Add
            </Text>

        </View>
        <View style={styles.headerSeperator}>
          
        </View>
      </View>
      <View style={styles.eventListContainer}>
        <FlatList style={{height: 800}}
          data={EVENTS}
          keyExtractor={(item) => item.id}
          renderItem={renderEventComponent}
        />

      </View>
    </SafeAreaView>
  );
}

export default Events;
