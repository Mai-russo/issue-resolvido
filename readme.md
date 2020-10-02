# Simulador de loteria

Este projeto é um simulador da *megassena*, onde o usuario digita seis numeros.
E sorteamos aleatoriamente outros seis numeros e comparamos para verificar.
quantos numeros o usuario acertou.

**Não é para jogos oficiais.**

## Tecnologias utilizadas
1. **HTML**: é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.
2. **CSS**: é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.
3. **JS**: JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).

## Função principal
Aqui estão as duas funções principais do codigo.

### Sortear Numeros
```
function sortearNumeros()
{
  numSort = []
  for (var i=0; i<6; i++)
  {
    do
    {
      sort = Math.ceil(Math.random() * 60)
      sort = (sort == 0) ? 1 : sort
    }
    while (numSort.includes(sort))
    numSort.push(sort)
  }
}
```
### Lendo os numeros digitados
```
function addToList(num, pos)
{
  if(num.length == 2)
  {
    if (numEsco.includes(num))
    {
        alert("Porfavor Não repetir números")
    }
    else if (parseInt(num) <= 0|| parseInt(num) > 60)
    {
      alert("O Número digitado deve ser de 1 a 60")
    }
        else
        {
            numEsco[pos-1] = num
        }
  }
}
```

## Como rodar o codigo
-> Simplismente baixa o codigo e abra o arquivo **_index.html_** no seu navegador

## Imagens da tela
tela 1: tela de abertura
![](\Aula 4\img\Loteria Vazia.png)
tela 2: 6 numeros digitados nenhum sorteado
![](\Aula 4\img\Loteria Erro 61.png)

#### Referências
1. **HTML**: [WikipédiA](https://pt.wikipedia.org/wiki/HTML)
2. **CSS**: [WikipédiA](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets)
3. **JS**: [WikipédiA](https://pt.wikipedia.org/wiki/JavaScript)
