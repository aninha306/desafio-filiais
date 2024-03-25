import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import {user} from "../../data/Profile";
export default function Escolas() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista Filiais</Text>
    </View>
  );
}