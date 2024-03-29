import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";
import Cadastros from "../../models/cadastros";

export default function Lista() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const users = Cadastros.getAll();
      setAllUsers(users);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title title="Filiais" />
      <Text style={styles.text}>Tela de listagem de todas as filiais</Text>

      {allUsers.length > 0 ? (
        <View style={styles.userList}>
          {allUsers.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <View>
                <Text style={styles.userName}>{user.nome}</Text>
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Detalhes", { user: user })}
                >
                  <Text style={styles.txt}>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há filiais cadastradas</Text>
      )}
    </View>
  );
}