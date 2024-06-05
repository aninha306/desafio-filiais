import React from "react";
import { Text, TouchableOpacity, View , ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import Cadastros from "../../models/cadastros";

export default function Detalhes({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;


  const editUser = () => {
    navigation.navigate("Filiais", { user: data, edit: true });
  };

  const deleteUser = () => {
    Cadastros.remove(data.id);
    navigation.navigate("Lista");
  };

  return (
    <View style={styles.container}>
     
      {data ? (
         <Title title="Detalhes" />
      ) : (
        <Text style={styles.txt}>Selecione uma filial para exibir seus detalhes</Text>

      )}
      <View style={styles.user}>
        <View style={styles.userDetail}>
          <Text style={styles.text}>{data.nome}</Text>
          <Text style={styles.text}>{data.email}</Text>
          <Text style={styles.text}>{data.responsavel}</Text>
          <Text style={styles.text}>{data.telefone}</Text>
          <Text style={styles.text}>{data.endereco}</Text>
          <Text style={styles.text}>{data.turmas}</Text>
          <Text style={styles.text}>{data.funcionarios}</Text>
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