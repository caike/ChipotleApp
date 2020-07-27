import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

const ItemList = () => {
  const [splitSection, setSplitSection] = React.useState();
  const [showError, setShowError] = React.useState();
  const selectedSections = React.useRef({});

  const clearError = () => {
    setShowError(false);
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Filling",
            data: [
              "chicken",
              "steak",
              "barbacoa",
              "carnitas",
              "sofritas",
              "veggie",
            ],
            maxSelection: 2,
          },
          {
            title: "Rice",
            data: ["White Rice", "Brown Rice", "No Rice"],
          },
          {
            title: "Beans",
            data: ["Black beans", "Pinto Beans"],
          },
        ]}
        renderItem={({ item, section }) => {
          const sectionTitle = section.title;
          const addToSection = (isAddingItem, selectItemCB) => {
            const ss = selectedSections.current;

            if (isAddingItem) {
              ss[sectionTitle]
                ? (ss[sectionTitle] += 1)
                : (ss[sectionTitle] = 1);
              if (ss[sectionTitle] <= section.maxSelection) {
                selectItemCB();
              } else {
                setShowError(item);
                ss[sectionTitle] -= 1;
              }
              if (ss[sectionTitle] > 1) {
                setSplitSection(sectionTitle);
              }
            } else {
              selectItemCB();
              setSplitSection(null);
              ss[sectionTitle] -= 1;
            }
          };
          return (
            <MenuItem
              item={item}
              splitSection={splitSection}
              section={sectionTitle}
              showError={showError}
              clearError={clearError}
              addToSection={addToSection}
            />
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const MenuItem = ({
  item,
  showError,
  clearError,
  splitSection,
  section,
  addToSection,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const shouldSplit = splitSection === section;
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

const getImageSource = (item) => {
  switch (item) {
    case "chicken":
      return require("./assets/chicken.png");
      break;
    case "steak":
      return require("./assets/steak.png");
      break;
    case "barbacoa":
      return require("./assets/barbacoa.png");
      break;
    case "carnitas":
      return require("./assets/carnitas.png");
      break;
    case "sofritas":
      return require("./assets/sofritas.png");
      break;
    case "veggie":
      return require("./assets/veggie.png");
      break;
    default:
      break;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "white",
  },
  sectionHeader: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: "rgb(243,235,233)",
    color: "rgb(119,100,97)",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 2,
  },
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

export default ItemList;
