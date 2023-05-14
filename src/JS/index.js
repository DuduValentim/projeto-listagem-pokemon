
/* 
        O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - Verificar se o body ja tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/


//O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

//objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

const botaoalterartema = document.getElementById("botao-alterar-tema")

// getElementById - Serve para procurar o elemento pelo ID no Document (site)

//const botaoalterartema - Variavel constante nome dela "botaoalterartema"

//- passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body

const body = document.querySelector("body")
        
const imagembotaotrocadetema = document.querySelector(".imagem-botao")
        
// "." no JS também é ultilizado para indicar uma classe

//document.querySelector() - serve para consultar um seletor (.classe, tag, elemento)

//- passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

 botaoalterartema.addEventListener("click",() => {
    //addEventListener(Avento, ação a ser disparada após o evento () => {ação})= Funciona como um espião para indentificar a ação do usuario e efetuar o codigo

//- objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

//- - passo 6 - Verificar se o body ja tem a classe modo-escuro

const modoescuroestaativo = body.classList.contains("modo-escuro")

//body.classList - serve para consultar as classes na variavel body definida anteriormente

// body.classList.contains(nome da classe) - vai verificar se contem a classe que esta dentro dos parenteses, se tiver vai retornar true, se não tiver vai retornar false

//poderiamos usar o body.classlist.toggle("modo-escuro") - o toggle ele alterna entre retirar e adicionar classes, ele faria a função do body.classlist.remove e add que temos no codigo. OBS: ele teria qye ficar fora do IF, exatamente onde o comentario está que ele teria que ficar, mas preferi deixar o IF pois o Toggle é meio confuso para iniciante.

    if(modoescuroestaativo) {
//- passo 7 - remover a classe do modo-escuro do body
//Se a condição dentro do IF for verdadeira, ele irá realziar a ação dentro das "{}"
        body.classList.remove("modo-escuro")

//- passo 8 - trocar a imagem do botão de alterar tema pra sol

        imagembotaotrocadetema.setAttribute("src", "./src/Imagens/imagens/sun.png")}
    
        else{
        
        //- passo 4 - adicionar a classe modo-escuro no body
        
        body.classList.add("modo-escuro");
                
        //body.classList.add - serve para adicionarmos uma classe no lista de classes do body
        
        //- passo 5 - trocar a imagem do botão de alterar tema pra lua

        imagembotaotrocadetema.setAttribute("src", "./src/Imagens/imagens/moon.png")}
        
        //imagembotaotrocadetema.setAttribute(atributo que desejamos mudar, novo atributo) - ultilizado para alterar informações no codigo
        })




