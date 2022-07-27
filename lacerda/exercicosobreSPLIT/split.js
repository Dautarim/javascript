
//Aqui podemos transformar uma cadeia de strings em um arrow veja

let nomeexemplo = 'Vava, carlos, junior, ernesto, silvia, juliana, elso'

//agora vou pegar essa cadeia de string e dividir em elementos de  arrow a cada virgula, pra isso o parametro par o metodo split vai ser virgula mesmo

let fazerdordearrows = nomeexemplo.split(',')

//agora vamos mostra o array na tela


console.log(fazerdordearrows)




//para conseguir o efeito contrário a isso (fazer um array ser string) seria com o metodo join, e o parametro seria para definir o que vai separar os elementos exemplo

let arrayexemplo = ['vava', 'carlos', 'junior', 'elson', 'nelson', 'kelson']

//agora vamos juntar

let juntadordearray = arrayexemplo.join('**') //e se tiver preguiça de colocar parametro, pode susbstituir o join por toString(), que vai fazer a mesma coisa, mas vai separar por virgula automaticamente

console.log(juntadordearray)

//e para achar a posição de qualquer elemento num array, é com o metodo indexOf()

//para remover algum item da lista, usa o pop(para remover o ultimo) e o shift(para remover uprimeirto) e para adicionar usa o push(nome do elemento), ou pode usar o proprio idice do array, por exemplo

arrayexemplo[6] = 'ana'

//é assim também que se altera algum elemento já existente do array