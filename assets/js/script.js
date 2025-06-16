const sobre = document.querySelector('#about')

const formulario = document.querySelector("#formulario")

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub() {
	try {
		// Enviar uma Requisição HTTP para a API do Github
		const dadosPerfil = await fetch(
			`https://api.github.com/users/feperonica`
		)

		// Converte a Resposta HTTP para o formato JSON
		const perfil = await dadosPerfil.json()

		// Criando o conteúdo da Seção about
		let conteudo = `
    
            <!-- Imagem da seção Sobre -->
            <img src="${perfil.avatar_url}" alt="Foto do perfil do Github - ${perfil.name}" />

            <!-- Texto da seção Sobre -->
            <article id="about_texto">
                <h2>Quem é Felipe por trás do código?</h2>
                <p>Antes de ser desenvolvedor, sou curioso por natureza. Gosto de entender a engrenagem por trás das coisas, conectar pontas soltas, construir algo do zero e ver funcionando.</p>
                <p>Minha jornada no desenvolvimento começou com pequenos testes, linhas soltas, erros frustrantes e descobertas incríveis. Hoje, aplico lógica, criatividade e empatia para criar soluções reais, com código limpo e propósito claro.</p>
                <p> Atualmente, estudo Desenvolvimento Full Stack com foco em Java e React, mas minha maior habilidade continua sendo aprender rápido, a fundo e com intenção.</p>
                <p>Este espaço é um recorte da minha evolução. Aqui, compartilho não só o que construí, mas o que aprendi em cada parte do caminho.</p>

                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github</a>
                    <p>${perfil.followers} seguidores</p>
                    <p>${perfil.public_repos} repositórios</p>
                </div>
            </article>
            
    `
		// Adicionar o conteúdo na página index.html, na Seção about
		sobre.innerHTML += conteudo

	} catch (error) {
		console.error(error)
	}
}

formulario.addEventListener("submit", function(event){

    event.preventDefault()

    const campoNome = document.querySelector("#nome")
    const txtNome = document.querySelector("#txtNome")

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres"
        campoNome.focus()
        return
    }else{
        txtNome.innerHTML = ""
    }

     const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido"
        campoEmail.focus()
        return
    }else{
        txtEmail.innerHTML = ""
    }

    const campoAssunto = document.querySelector("#assunto")
    const txtAssunto = document.querySelector("#txtAssunto")

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres"
        campoAssunto.focus()
        return
    }else{
        txtAssunto.innerHTML = ""
    }

    // Enviar o e-mail
    formulario.submit()
})

getApiGithub()