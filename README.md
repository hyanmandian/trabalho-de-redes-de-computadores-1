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

3.Implementar em seu programa, na rotina do servidor, as seguintes funcionalidades:
- Perguntar ao executar em qual porta o servidor vai atender;
- Perguntar ao executar a quantidade máxima de conexões a serem atendidas (gerenciadas por alguma estrutura de dados, com dados sobre o cliente como o IP e a porta de origem e o status da conexão, por exemplo);
- Gerenciar múltiplas conexões - permitir que o servidor receba e atenda, de alguma forma, mais de uma conexão de forma "simultânea";
- Validar uma ou duas mensagens enviadas pelos clientes - se são esperadas, se estão em um formato correto;
- Retornar algum tipo de mensagem de erro caso as mensagens recebidas não estejam no formato correto.

Implementar também um cliente para teste, com as seguintes funcionalidades:
- Perguntar ao executar o ip ou nome do servidor;
- Perguntar ao executar a porta do servidor;
- Enviar uma mensagem simples para o servidor e aguardar alguma resposta.

4.Implementar em seu programa, na rotina do servidor, as seguintes funcionalidades:
- Receber de qualquer um dos clientes um comando que deve ser implementado para representar a abertura de arquivo;
- O formato do comando deve ser o seguinte "ENVIAR <caminho do arquivo\nome do arquivo>";
- Validar se o comando recebido está correto;
- Validar se o arquivo existe;
- Caso exista, abrir o arquivo com a funcionalidade desenvolvida na Tarefa 1 e enviar o arquivo para o cliente que o solicitou.