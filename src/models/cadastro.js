export default class Cadastro {
    constructor(nome, email, responsavel, telefone, endereco, turmas, funcionarios) {
      this.id = this.generateId();
      this.nome = nome;
      this.email = email;
      this.responsavel = responsavel;
      this.telefone = telefone;
      this.endereco = endereco;
      this.turmas = turmas;
      this.funcionarios = funcionarios;
    }
  
    generateId() {
      return Math.floor(Math.random() * 1000);
    }
  }