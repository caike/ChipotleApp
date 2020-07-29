import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { getImageSource } from "./../lib/utils";

const MenuItem = ({
  item,
  showError,
  clearError,
  splitSection,
  sectionTitle,
  addToSection,
}) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const shouldSplit = splitSection === sectionTitle;
  const shouldShowError = showError === item;

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.itemRow}
        onPress={() => {
          addToSection(!isSelected, () => setIsSelected((state) => !state));
        }}
      >
        <View style={styles.itemInfo}>
          {shouldShowError && setTimeout(() => clearError(), 2500) && (
            <Text style={styles.itemMaxError}>
              You can only choose 2 fillings
            </Text>
          )}
          <Image style={styles.itemImage} source={getImageSource(item)} />
          <View>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        </View>
        {isSelected && (
          <View style={styles.itemIsSelected}>
            <Text style={styles.itemIsSelectedText}>
              {shouldSplit ? "1/2" : "✓"}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 40,
  },
  itemText: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 50,
    fontSize: 20,
    height: 44,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "rgb(75,25,20)",
  },
  itemInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 120,
    height: 120,
  },
  itemIsSelected: {
    width: width / 9,
    height: width / 9,
    borderRadius: width / 9,
    backgroundColor: "rgb(188, 142, 54)",
    alignItems: "center",
    justifyContent: "center",
  },
  itemIsSelectedText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  itemMaxError: {
    position: "absolute",
    backgroundColor: "#451400",
    color: "white",
    fontWeight: "bold",
    marginLeft: width / 20,
    padding: 10,
    zIndex: 10,
  },
});

export default MenuItem;
