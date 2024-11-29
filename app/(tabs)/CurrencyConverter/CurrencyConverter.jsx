import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Modal,
  Button,
} from "react-native";

import lightstyles from "./Styles/lightstyles.js";
import darkstyles from "./Styles/darkstyles.js";
import fetchCurrencies from "./apis/fetchCurrencies";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Ionicons";

export default function CurrencyConverter() {
  const [isStyleOne, setIsStyleOne] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    setIsStyleOne(!isStyleOne);
  };

  let Currencies = fetchCurrencies();

  const [loadingimg, setLoadingimg] = useState(true);

  let [selectedValue1, setSelectedValue1] = useState(null);
  let [selectedValue2, setSelectedValue2] = useState(null);

  const [selectedLabel1, setSelectedLabel1] = useState(null);
  const [selectedLabel2, setSelectedLabel2] = useState(null);

  const [amount, setAmount] = useState(0);

  const swapValues = () => {
    const temp1 = selectedValue1;
    setSelectedValue1(selectedValue2);
    setSelectedValue2(temp1);

    const temp2 = selectedLabel1;
    setSelectedLabel1(selectedLabel2);
    setSelectedLabel2(temp2);
  };

  return (
    <View style={isStyleOne ? lightstyles.body : darkstyles.body}>
      <View
        className="container"
        style={isStyleOne ? lightstyles.container : darkstyles.container}
      >
        <Text
          className="title"
          style={isStyleOne ? lightstyles.title : darkstyles.title}
        >
          Currency Converter
        </Text>
        <Text
          className="subtitle"
          style={isStyleOne ? lightstyles.subtitle : darkstyles.subtitle}
        >
          Fast and reliable currency conversion
        </Text>
        <View style={isStyleOne ? lightstyles.converter : darkstyles.converter}>
          <Text style={isStyleOne ? lightstyles.label : darkstyles.label}>
            Amount
          </Text>
          <TextInput
            style={
              isStyleOne
                ? lightstyles.converterAmount
                : darkstyles.convertedAmount
            }
            placeholder="Enter Amount"
            value={amount}
            onChangeText={(text) => {
              setAmount(text);
            }}
          />
          <View
            style={
              isStyleOne
                ? lightstyles.converterInline
                : darkstyles.converterInline
            }
          >
            <Dropdown
              style={
                isStyleOne
                  ? lightstyles.converterSelect
                  : darkstyles.converterSelect
              }
              data={Currencies}
              labelField="label"
              valueField="value"
              value={selectedValue1}
              onChange={(item) => {
                setSelectedValue1(item.value);
                setSelectedLabel1(item.label);
              }}
              search
              renderItem={(item) => (
                <View
                  style={
                    isStyleOne
                      ? lightstyles.dropdownItem
                      : darkstyles.dropdownItem
                  }
                >
                  <Image
                    source={item.icon}
                    style={isStyleOne ? lightstyles.icon : darkstyles.icon}
                    required
                  />
                  <Text
                    style={
                      isStyleOne ? lightstyles.itemText : darkstyles.itemText
                    }
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={
                      isStyleOne ? lightstyles.itemText : darkstyles.itemText
                    }
                  >
                    {item.country}
                  </Text>
                </View>
              )}
            ></Dropdown>
            <View style={{ justiftyContent: "center", alignItems: "center" }}>
              <Icon
                name="swap-vertical"
                size={30}
                color="#6c757d"
                onPress={swapValues}
                style={isStyleOne ? lightstyles.Swap : darkstyles.Swap}
              />
            </View>
            <Dropdown
              style={
                isStyleOne
                  ? lightstyles.converterSelect
                  : darkstyles.converterSelect
              }
              data={Currencies}
              labelField="label"
              valueField="value"
              value={selectedValue2}
              onChange={(item) => {
                setSelectedValue2(item.value);
                setSelectedLabel2(item.label);
              }}
              search
              renderItem={(item) => (
                <View
                  style={
                    isStyleOne
                      ? lightstyles.dropdownItem
                      : darkstyles.dropdownItem
                  }
                >
                  <Image
                    source={item.icon}
                    style={isStyleOne ? lightstyles.icon : darkstyles.icon}
                  />
                  <Text
                    style={
                      isStyleOne ? lightstyles.itemText : darkstyles.itemText
                    }
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={
                      isStyleOne ? lightstyles.itemText : darkstyles.itemText
                    }
                  >
                    {item.country}
                  </Text>
                </View>
              )}
            ></Dropdown>
          </View>
          <Text
            className="subtitle"
            style={isStyleOne ? lightstyles.subtitle : darkstyles.subtitle}
          >
            Converted amount
          </Text>
          <Text
            style={
              isStyleOne
                ? lightstyles.convertedAmount
                : darkstyles.convertedAmount
            }
          >
            {`${(selectedValue2 / selectedValue1) * amount} ${selectedLabel2}`}
          </Text>
          <Text
            style={
              isStyleOne ? lightstyles.exchangeRate : darkstyles.exchangeRate
            }
            className="exchange-rate"
          >
            {`1 ${selectedLabel1} = ${
              selectedValue2 / selectedValue1
            } ${selectedLabel2}`}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={toggleMode}
        activeOpacity={0.7}
        style={
          isStyleOne ? lightstyles.iconContainer : darkstyles.iconContainer
        }
      >
        <Icon
          name={isDarkMode ? "moon-outline" : "sunny-outline"}
          size={50}
          color={isDarkMode ? "#FFF" : "#FFD700"}
        />
      </TouchableOpacity>
    </View>
  );
}
