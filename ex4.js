let alunos = [
    {
      nome: "Joice",
      idade: 33,
      skills: ["html", "css", "javascript", "c++"],
    },
    {
      nome: "Aline",
      idade: 29,
      skills: ["c#", "phyton", "nodejs", "vuejs"],
    },
    {
      nome: "Guilherme",
      idade: 26,
      skills: ["javascript", "java", "php", "typescript"],
    },
    { nome: "João", idade: 25, skills: ["html", "css", "javascript"] },
    {
      nome: "Pedro",
      idade: 20,
      skills: ["java", "c", "phyton"],
    },
  ];
  
  function encontraAluno() {
    let skillFound = prompt("Digite a skill para encontrar o aluno:").toLowerCase();
  
  if(!skillFound){
    return alert ('Por favor digite um valor válido !')
  } 
  
    let result = alunos.filter((alunos) => {
      return alunos.skills.find((e, i, a) => {
        if (e == skillFound) {
          return true;
        }
      });
    });
  
    console.log(result);
  }
  
  encontraAluno();