import { Text, TextInput, TouchableOpacity, View, Image, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";
import Cadastro from "../../models/cadastro";
import Cadastros from "../../models/cadastros";


export default function Filiais({ route }) {
    let { edit, user } = route.params;

    const [nome, setName] = useState("");
    const [email, setEmail] = useState("");
    const [responsavel, setResp] = useState("");
    const [telefone, setTel] = useState("");
    const [endereco, setEnder] = useState("");
    const [turmas, setTurmas] = useState("");
    const [funcionarios, setFunc] = useState("");

    const [isUpdate, setIsUpdate] = useState(edit);

    const navigation = useNavigation();

    useEffect(() => {
        if (edit) {
            setName(user.nome);
            setEmail(user.email);
            setResp(user.responsavel);
            setTel(user.telefone);
            setEnder(user.endereco);
            setTurmas(user.turmas);
            setFunc(user.funcionarios);
            setIsUpdate(true);
        } else {
            clearInputs();
        }
    }, [user, edit]);

    const handleUserAction = () => {
        if (isUpdate) {
            Cadastros.update(user.id, nome, email, responsavel, telefone, endereco, turmas, funcionarios);
            clearInputs();
        } else {
            const newUser = new Cadastro(nome, email, responsavel, telefone, endereco, turmas, funcionarios);
            Cadastros.add(newUser);
            clearInputs();
        }
        navigation.navigate("Users");
    };

    const clearInputs = () => {
        setIsUpdate(false);
        edit = false;
        setName("");
        setEmail("");
        setResp("");
        setTel("");
        setEnder("");
        setTurmas("");
        setFunc("");
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Title title={isUpdate ? "Editar" : "Cadastre Filiais"} />
            <View style={styles.cont}>
                <TextInput
                    placeholder="Nome da Filial"
                    style={styles.userInput}
                    onChangeText={setName}
                    value={nome}
                />
                <TextInput
                    placeholder="Digite o email"
                    style={styles.userInput}
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    placeholder="Nome do responsável"
                    style={styles.userInput}
                    onChangeText={setResp}
                    value={responsavel}
                />
                <TextInput
                    placeholder="Digite o telefone"
                    style={styles.userInput}
                    onChangeText={setTel}
                    value={telefone}
                />
                <TextInput
                    placeholder="Digite o endereço"
                    style={styles.userInput}
                    onChangeText={setEnder}
                    value={endereco}
                />
                <TextInput
                    placeholder="Quantidade de turmas"
                    style={styles.userInput}
                    onChangeText={setTurmas}
                    value={turmas}
                />
                <TextInput
                    placeholder="Número de funcionários"
                    style={styles.userInput}
                    onChangeText={setFunc}
                    value={funcionarios}
                />

                <TouchableOpacity style={styles.button} onPress={handleUserAction}>
                    <Text style={styles.txt}>{isUpdate ? "Salvar Alterações" : "Criar Filial"}</Text>
                </TouchableOpacity>

                {isUpdate && (
                <TouchableOpacity style={styles.button} onPress={clearInputs}>
                    <Text style={styles.but}>Cancelar Edição</Text>
                </TouchableOpacity>
            )}
            
            </View>
            <Image source={require('../../../assets/livroo.png')} style={styles.imagemm} />


            
        </View>
        </ScrollView>
    );
}