import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#07396b"
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#afcdea",
    borderRadius: 5,
  },
  user: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#afcdea",
    opacity: 0.7,
    borderRadius: 5,
  },
  userDetail: {
    marginBottom: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#FF6347",
    minWidth: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#07396b"
  },
  msg: {
    fontSize: 25,
    textAlign: "center",
    color: "#07396b",
    marginTop: 400,
    marginLeft: 10,
    marginRight: 10
  },
  txt: {
    fontSize: 18,
    color: "#afcdea",
    margin: 30,
    marginBottom: 30
  },
  
});

export default styles;