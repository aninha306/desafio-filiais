import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { ScrollView } from "react-native-gesture-handler";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texto}>Perfil</Text>
        <Image source={require('../../../assets/ana ju.jpg')} style={styles.imagem} />
        <View style={styles.user}>
          <Text style={styles.titulo}>Desenvolvedora</Text>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.email}</Text>
          <Text style={styles.text}>{data.desc}</Text>
          <Text style={styles.text}>{data.address.city}</Text>
          <Text style={styles.text}>{data.address.state}</Text>
        </View>
        <View style={styles.redes}>

          <Image source={require('../../../assets/redess.png')} style={styles.imagemm} />
        </View>
      </View>
    </ScrollView>
  );
}