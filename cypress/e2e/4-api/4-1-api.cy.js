describe("Teste de API", () => {
  const dojo = {
    aula: "API",
    duracao: 3,
    professor: "Renato",
  };

  it("Validar dojo", () => {
    expect(dojo.aula).to.equal("API");
    expect(dojo.duracao).to.equal(3);
    expect(dojo.professor).to.equal("Renato");
  });

  var numero = [0, 2, 4, 6, 8, 10]

  it('Validar array', () => {
    cy.log(`Posicao 1 do array, ${numero[3]}`)
    
    expect(numero).to.have.lengthOf(6)
    expect(numero[1]).to.eql(2)
  })

  const alunos = [
    { usuario: "william", cargo: "qa" }, //0
    { usuario: "Graciane", cargo: "qa" }, //1
  ];

  it("Validar aluno", () => {
    expect(alunos[0].usuario).to.equal("william");
    expect(alunos[1].cargo).to.equal("qa");
  });
});


//########### aula de introodução sobre array e objetos para usar com JSON