import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#07396b"
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 10,
    
  },
  userDetailButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#afcdea",
    marginRight: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
  },
  userName: {
    fontSize: 20,
    color: "#07396b",
    fontWeight: "bold",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#afcdea",
    marginRight: 5,
    minWidth: 90,
    alignItems: "center",
  },
  detailsButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#07396b",
    minWidth: 90,
    alignItems: "center",
    color: "#afcdea",
  },
  text: {
    color: "#afcdea",
    fontSize: 18,
    margin: 30,
    marginBottom: 50
  },
  userList: {
    backgroundColor: "#afcdea",
    opacity: 0.6,
    borderRadius: 5
  },
  txt: {
    fontSize: 18,
    color: "#afcdea"
  }
});

export default styles;