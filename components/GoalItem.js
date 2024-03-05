import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    //pressable is used to press the items and it will deleted
    //Bind is a standard JavaScript function which basically allows you pre-configure a function for future execution.
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: { color: "white", padding: 8 },
});
