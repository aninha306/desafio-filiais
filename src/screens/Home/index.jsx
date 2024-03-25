import { Text, View, Image } from "react-native";

import styles from "./styles";

export default function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SosoNaju Sistemy</Text>
      <Image source={require('../../../assets/escolaa.png')} style={styles.imagem} />

      <Text style={styles.txt}>O SosoNaju Sistemy é um sistema inovador projetado para simplificar
        o processo de cadastramento de escolas.
        Com uma interface intuitiva, este aplicativo tem como
        objetivo facilitar a entrada de dados importantes e relevantes
        sobre instituições educacionais.
        tornando o processo mais eficiente e acessível para todos os envolvidos.</Text>
        <Image source={require('../../../assets/livroo.png')} style={styles.imagemm} />
        <Text style={styles.txt}>@SosoNajuSistemy</Text>
    </View>
  );
}