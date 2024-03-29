import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import Cadastros from "../../models/cadastros";

export default function Detalhes({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;

  const editUser = () => {
    navigation.navigate("Filiais", { user: user, edit: true });
  };

  const deleteUser = () => {
    Cadastros.remove(user.id);
    navigation.navigate("Lista");
  };

  return (
    <View style={styles.container}>
      <Title title="Filiais" />

      {data ? (
        <Text>Detalhes da filial</Text>
      ) : (
        <Text>Selecione uma filial para exibir seus detalhes</Text>
      )}

      <View style={styles.user}>
        <View style={styles.userDetail}>
          <Text style={styles.text}>{user.nome}</Text>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.text}>{user.responsavel}</Text>
          <Text style={styles.text}>{user.telefone}</Text>
          <Text style={styles.text}>{user.endereco}</Text>
          <Text style={styles.text}>{user.turmas}</Text>
          <Text style={styles.text}>{user.funcionarios}</Text>
        </View>

        <View style={styles.userActions}>
          <TouchableOpacity style={styles.editButton} onPress={editUser}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}