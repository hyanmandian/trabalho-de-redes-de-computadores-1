# Trabalho de Redes de Computadores 1 - Uniritter
Para realizar este trabalho, escolha a sua linguagem de preferência, só atente para o fato de que precisamos fazer comunicação entre hosts, então a linguagem deve implementar isto de alguma forma (certamente vamos comunica# Trabalho de Redes de Computadores 1 - Uniritter
Para realizar este trabalho, escolha a sua linguagem de preferência, só atente para o fato de que precisamos fazer comunicação entre hosts, então a linguagem deve implementar isto de alguma forma (certamente vamos comunicar utilizando Sockets, então certifique-se que a linguagem escolhida os implementa de alguma forma)

## Instalação
+ Instale o Nodejs [Node.js](http://nodejs.org/ "Node.js")
+ Instale a versão 4: `nvm install 4` 
+ Sete a versão padrão de execução para a versão 4: `nvm alias default 4`

## Exercicios
1. Implementar um leitor de arquivos - no seu programa, crie uma rotina que receba o nome de um arquivo e que valide se o arquivo existe; caso exista, abra-o em memória e retorne os dados para futuro uso do programa principal; caso não exista, retorne algum tipo de aviso (erro, exception, etc.);
Para executar é necessário utilizar o seguinte comando no bash: `node task-1/app.js CAMINHODOARQUIVO (task-1/test.txt por exemplo)`

2. Implementar em seu programa a criação de disponibilização de um servidor de comunicação através de uma porta, utilizando sockets. Para testar, crie outro programa que faça as vezes do cliente, conectando-se ao servidor.r utilizando Sockets, então certifique-se que a linguagem escolhida os implementa de alguma forma);
Primeiro executamos o arquivo server.js que será nosso servidor: `node task-2/server.js` e depois executamos o arquivo client.js que será o nosso cliente: `node task-2/client.js`