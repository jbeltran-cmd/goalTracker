import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalListItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem } >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalListItem: {
    margin: 4,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
  },
  goalText: {
    color: "#1b4d80",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.8,
  },
});
