function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    // Obtém o texto digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o usuário digitou algum termo de pesquisa
    if (!campoPesquisa) {
        // Se o campo estiver vazio, exibe uma mensagem informando que nada foi encontrado
        section.innerHTML = "<h3>Você não buscou nada</h3>"; // Corrigido o HTML
        return; // Encerra a função
    }

    // Converte o campo de pesquisa para minúsculas (correção do método)
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar o HTML dos resultados da pesquisa
    let resultados = "";

    // Itera sobre cada piloto no array de pilotos
    for (let piloto of pilotos) {
        // Converte título e descrição para minúsculas (correção do método)
        let titulo = piloto.titulo.toLowerCase();
        let descricao = piloto.descricao.toLowerCase();
        let tags = piloto.tags.toLowerCase();
        
        // Verifica se o título ou a descrição do piloto contém o termo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria uma nova div para exibir as informações do piloto
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${piloto.link}" target="_blank">${piloto.titulo}</a></h2>
                    <p class="descricao-meta">${piloto.descricao}</p>
                    <a href="${piloto.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se nenhum resultado foi encontrado
    if (!resultados) {
        section.innerHTML = "<h3>Nenhum resultado encontrado</h3>";
    } else {
        // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
        section.innerHTML = resultados;
    }
}
