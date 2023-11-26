# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-1 - Cadastro de Eventos |
|:---|:---|
| Requisitos Associados | RF-10 |
| Objetivo do Teste | Permitir o cadastro de novos eventos presenciais ou virtuais. |
| Passos | 1. Clique no botão "Criar Evento" presente na tela inicial no canto superior direito.|
| | 2. Escolha o Tipo de Evento que deseja cadastrar;|
| |3. Após escolha, será direcionado ao formulário para cadastro do evento;|
| |4. Preencha todos os campos obrigatórios e clique no botão "Cadastrar";|
| |5. Caso o cadastro tenha ocorrido com êxito, será direcionado para a página do Evento.|
| Critérios de êxito | # Página Inicial conter o botão "Criar Evento";  |
| | # Botão conter duas ações, eventos presenciais e virtuais. E direcionar para formulário com campos diferentes.|
| | # Caso o usuário não informe algum campo não obrigatório, permitir conclusão do cadastro do evento.|
| | # Ao clicar no botão "Mais"no cadastro dos ingressos, criar mais uma linha para registro dos detalhes.|
| | # Ao clicar no botão "Menos"no cadastro dos ingressos, remover as linhas e detalhes.|
| | # Caso o tamanho da mídia ultrapasse o máximo permitido, exibir mensagem de erro e não permitir conclusão do cadastro.|
| | # Caso ocorra, algum erro no processo de registro do evento, o site deve salvar automaticamente as informações.|
| Responsável pela elaborar do caso de Teste | Mariana V. Santos |

|Caso de Teste    | CT-2 - Visualização de Ingressos |
|:---|:---|
| Requisitos Associados | RF-05 |
| Objetivo do Teste | Permitir que o usuário consulte o histórico de compras de ingressos. |
| Passos | 1. Clique no botão "Ativo" presente na tela inicial no canto superior esquerdo. |
|| 2.Clique no botão "Imprimir Ingresso" presente na tela inicial ao lado direito da imagem.|
|| 3.Escolha o tipo de ingresso.|
|| 4.Após a escolha, clique no botão "Imprimir Ingresso".|
|| 5.Clique no botão "Encerrado" presente na tela inicial no canto superior esquerdo.|
|| 6.Digite o seu feedback dentro da caixa de texto e clique no botão "Enviar Feedback".|
|Critérios de êxito | # Página inicial conter o botão "Imprimir Ingresso".|
|| # Botão conter duas ações, selecionar o Tipo de Ingresso e permitir a impressão do ingresso selecionado.|
|| # Ao clicar no botão "Tipo de Ingresso", permitir a escolha na lista suspensa.|
|| # Ao clicar no botão "Imprimir Ingresso", mostrar alerta correspondente a escolha que foi impressa.|
| Responsável pela elaboração do caso de Teste | Rogério Rodrigues Mendes |

|Caso de Teste    | CT-3 - registre-se |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | Permitir que o usuario cadastre sua conta. |
| Passos | 1. na tela de login clique em inscreva-se, sera redirecionado a tela de registro.|
| | 2. preencha todos os campos obrigatorios e clique no botao "finalizar";|
| |3. ou se preferir, temos a opção de registrar pelo google e facebook;|
| |4. Caso o cadastro tenha ocorrido com êxito, será direcionado para a página inicial.|
| Critérios de êxito | # Página Inicial conter o botão "Criar Conta";  |
| # Página de login conter o botão "inscreva-se".|
| | # dois botões, para cadastro com facebook ou google. E direcionar para formulário diferentes.|
| | # Caso o usuário não informe algum campo não obrigatório, não permitir conclusão do cadastro.|
| Responsável pela elaborar do caso de Teste | João Victor Oliveira |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
