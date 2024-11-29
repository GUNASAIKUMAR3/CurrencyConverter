import { StyleSheet } from "react-native";

const lightstyles = StyleSheet.create({
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    height: "100%",
    margin: 0,
  },
  container: {
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#343a40",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#6c757d",
    marginBottom: 20,
  },
  converter: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 10,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    textAlign: "left",
  },
  label: {
    fontSize: 14,
    color: "#343a40",
    marginBottom: 10,
  },
  converterAmount: {
    width: "100%",
    padding: 10,
    fontSize: 24,
    marginBottom: 20,
    border: "1px solid #ced4da",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  converterSelect: {
    marginTop: 10,
    //width: "calc(50% - 10px)",
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    border: "1px solid #ced4da",
    borderRadius: 5,

    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  Swap: {
    display: "inline-block",
    width: 20,
    textAlign: "center",
    fontSize: 24,
    color: "#6c757d",

    marginBottom: 15,
    marginLeft: "50%",
    marginRight: "50%",
  },
  convertedAmount: {
    display: "block",
    fontSize: 24,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 5,
    textAlign: "center",
  },
  exchangeRate: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 13,
    marginLeft: 25,
  },
  itemText: {
    fontSize: 16,
    marginRight: 15,
  },
  iconContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "50%",
    padding: 10,
  },
});
export default lightstyles;
