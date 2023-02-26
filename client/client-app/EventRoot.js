
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddEvent from "./AddEvent";
import Events from "./Events";

const EventStack = createNativeStackNavigator();

const EventRoot = () => {
    return (
        <EventStack.Navigator screenOptions={{headerShown: false}}>
            <EventStack.Screen name="DisplayEvents" component={Events}></EventStack.Screen>
            <EventStack.Screen name="AddEvent" component={AddEvent}></EventStack.Screen>
        </EventStack.Navigator>
    );
}
export default EventRoot;
