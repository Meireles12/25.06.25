function Aluno(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
  }
  
  Aluno.prototype.mostrarDados = function() {
    console.log(`Aluno: ${this.nome}, Matrícula: ${this.matricula}`);
  };
  
  const aluno1 = new Aluno('Hygor', '77982');
  const aluno2 = new Aluno('Emilly', '29574');
  
  aluno1.mostrarDados();
  aluno2.mostrarDados();