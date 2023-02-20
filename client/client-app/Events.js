import styles from "./styles";
import React from "react";
import {
  Text,
  SafeAreaView,
  View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import EventComponent from "./EventComponent";
import { EVENTS } from "./data/DummyData";

function renderEventComponent(itemData) {
  return (<EventComponent
            name={itemData.item.name}
            date={itemData.item.date}
            time={itemData.item.time}
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
          <View>

          </View>
        </View>
        <View style={styles.headerSeperator}>
          
        </View>
      </View>
      <View style={styles.eventListContainer}>
        <FlatList style={{height: 800}}
          data={EVENTS}
          keyExtractor={(item) => item.id}
          renderItem={renderEventComponent}
          showsVerticalScrollIndicator={false}
        />

      </View>
    </SafeAreaView>
  );
}

export default Events;
