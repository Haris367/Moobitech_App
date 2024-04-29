import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import  Card from "../components/Card";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* <TouchableOpacity style={styles.filterIcon}>
          <Ionicons name="filter" size={25} color="black" />
        </TouchableOpacity> */}
          <TouchableOpacity style={styles.avatarIcon} onPress={() => navigation.navigate("Details")}>
            {/* Replace 'user' with your actual icon name */}
            <Ionicons name="person-circle" size={40} color="black" />
          </TouchableOpacity>
        </View>
      <ScrollView verticle showsVerticalScrollIndicator={false} style={styles.container}>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.welcomeText2}>To MobiTech App</Text>

        {/* Search Bar */}
        <View style={styles.iconContainer}>
          <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchIcon}>
              <Ionicons name="search" size={25} color="#666666" />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Search..." />
          </View>
          <Ionicons name="filter-circle-sharp" size={40}></Ionicons>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardsContainer}
        >
          <View>
            <Image
              style={styles.card}
              source={require("../../assets/card1.png")}
            />
          </View>
          <View>
            <Image
              style={styles.card}
              source={require("../../assets/card2.png")}
            />
            {/* <Text>Card 2</Text> */}
          </View>
          <View>
            <Image
              style={styles.card}
              source={require("../../assets/card3.png")}
            />
          </View>
        </ScrollView>
        <Text style={{fontSize:20,left:15,paddingTop:20}}>Featured Phones</Text>
        <Card/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        paddingHorizontal: 10,
      },
      android: {
        paddingHorizontal: 30,
      },
    }),  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3%",
    marginLeft:"3%"
  },
  filterIcon: {
    padding: 10,
  },
  avatarIcon: {
    padding: 10,
    paddingLeft:1,
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  welcomeText2: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
    color: "#666666",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#F3F4F5",
    height: 50,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  searchIcon: {
    padding: 10,
  },
  cardsContainer: {
    marginTop: 25,
    flexDirection: "row",
    marginBottom: 20,
  },
  card: {
    width: 230,
    height: 160,
    // backgroundColor: "lightgray",
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;