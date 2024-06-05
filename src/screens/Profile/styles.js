import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07396b",
  },
  user: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#afcdea",
    borderRadius: 5,
    opacity: 0.7,
    width: 260
  },
  text: {
    fontSize: 16,
    color: "#07396b",
    textAlign: "center"

  },
  texto: {
    fontSize: 45,
    color: "#afcdea",
    margin: 50,
    fontFamily: "Cochin"
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 500,
    marginBottom: 30
  },
  imagemm: {
    width: 196,
    height: 196,
  },
  titulo: {
    fontSize: 25,
    color: "#07396b",
    marginBottom: 8,
    textAlign: "center"
  },
  desc: {
    fontSize: 18,
    color: "#07396b",
    textAlign: "center"

  }
});

export default styles;