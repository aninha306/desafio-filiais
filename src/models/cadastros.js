import { user } from "../data/Escola";
import Cadastro from "./cadastro";

class Escola {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, nome, email, responsavel, telefone, endereco, turmas, funcionarios) {
    const user = this.get(id);

    if (user) {
      user.nome = nome;
      user.email = email;
      user.responsavel = responsavel;
      user.telefone = telefone;
      user.endereco = endereco;
      user.turmas = turmas;
      user.funcionarios = funcionarios;
    }
    return user;
  }
}

const escola = new Escola();
const newUser = new Cadastro(user.nome, user.email, user.responsavel, user.telefone, user.endereco, user.turmas, user.funcionarios);

escola.add(newUser);

export default escola;