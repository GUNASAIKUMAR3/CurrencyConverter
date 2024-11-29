import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
} from "react-native";
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter.jsx";
import { SafeAreaView } from "react-native-safe-area-context";

export default App = () => {
  return (
    <SafeAreaView>
      <CurrencyConverter></CurrencyConverter>
    </SafeAreaView>
  );
};
