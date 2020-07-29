import React from "react";
import { StyleSheet, View, SectionList, Text } from "react-native";
import MenuItem from "./MenuItem";

const ItemList = () => {
  const [splitSection, setSplitSection] = React.useState();
  const [showError, setShowError] = React.useState();
  const selectedSections = React.useRef({});

  const clearError = () => setShowError(false);

  const renderItem = ({ item, section }) => {
    const sectionTitle = section.title;
    const ss = selectedSections.current;

    const addToSection = (isAddingItem, selectItemCB) => {
      if (isAddingItem) {
        ss[sectionTitle] ? (ss[sectionTitle] += 1) : (ss[sectionTitle] = 1);
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
        {...{
          item,
          splitSection,
          sectionTitle,
          showError,
          clearError,
          addToSection,
        }}
      />
    );
  };

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

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
        keyExtractor={(_item, index) => index}
        {...{ renderItem, renderSectionHeader }}
      />
    </View>
  );
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
});

export default ItemList;
