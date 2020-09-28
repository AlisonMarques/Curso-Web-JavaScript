// Map sempre instaciado pelo (new)
const tecnologias = new Map();
tecnologias.set("chave", "valor");
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// forma errada de chamar
console.log(tecnologias.react);

// forma correta
console.log(tecnologias.get("react"));

// Criando um Map já atribuindo os valores
// cada nova chave e valor deve ser criada dentro de um colchete
const chavesVariadas = new Map([
    [function () {}, "Função"],
    [{}, "Objeto"],
    [123, "Número"],
]);

// imprindo chavesVariadas
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
});

// função que diz se o elemento está ou nao está contido dentro do Map
// (has)
console.log(chavesVariadas.has(123));
// deleta um atributo
chavesVariadas.delete(123);
// Informa quantos elementos têm dentro do Map
console.log(chavesVariadas.size);

// no Map nao aceita chave repetida, ele substitui pela última informada
