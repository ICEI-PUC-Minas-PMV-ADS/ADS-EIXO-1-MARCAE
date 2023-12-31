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
| Objetivo do Teste | Permitir que o usuário consulte o histórico de compras de ingressos para impressão e deixe feedback sobre o evento. |
| Passos | 1. Clique no botão "Ativo" presente na tela inicial no canto superior esquerdo. |
|| 2.Clique no botão "Imprimir Ingresso" presente na tela inicial ao lado direito da imagem.|
|| 3.Escolha o tipo de ingresso.|
|| 4.Após a escolha, clique no botão "Imprimir Ingresso".|
|| 5.Clique no botão "Ver Pedido" presente na tela inicial ao lado direito da imagem.|
|| 6.Após o clique, será direcionado a pagina "Compra" de ingressos.|
|| 7.Clique no botão "Encerrado" presente na tela inicial no canto superior esquerdo.|
|| 8.Clique no botão "Adicionar Feedback" presente na tela inicial abaixo da imagem.|
|| 9.Após o clique, será direcionado a pagina "Feedback".|
|Critérios de êxito | # Página inicial conter o botão "Imprimir Ingresso".|
|| # Botão conter duas ações, selecionar o Tipo de Ingresso e permitir a impressão do ingresso selecionado.|
|| # Ao clicar no botão "Tipo de Ingresso", permitir a escolha na lista suspensa.|
|| # Ao clicar no botão "Imprimir Ingresso", mostrar alerta correspondente a escolha que foi impressa.|
|| # Página inicial conter o botão "Ver Pedido"|
|| # Botão conter ação redirecionando o usuário para a página "Compra".|
|| # Página inicial conter o botão "Adicionar Feedback"|
|| # Botão conter ação redirecionando o usuário para a página "Feedback".|
| Responsável pela elaboração do caso de Teste | Rogério Rodrigues Mendes |

|Caso de Teste    | CT-3 - Registre-se |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Permitir que o usuario cadastre sua conta. |
| Passos | 1. Na tela de login clique em inscreva-se, sera redirecionado a tela de registro.|
| | 2. Preencha todos os campos obrigatorios e clique no botao "finalizar";|
| |3. Ou se preferir, temos a opção de registrar pelo google e facebook;|
| |4. Caso o cadastro tenha ocorrido com êxito, será direcionado para a página inicial.|
| Critérios de êxito | # Página Inicial conter o botão "Criar Conta";  |
| |# Página de login conter o botão "inscreva-se".|
| | # Dois botões, para cadastro com facebook ou google. E direcionar para formulário diferentes.|
| | # Caso o usuário não informe algum campo obrigatório, não permitir conclusão do cadastro.|
| Responsável pela elaborar do caso de Teste | João Victor Oliveira |

|Caso de Teste    | CT-4 - Login |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Permitir que o usuario acesse sua conta já criada. |
| Passos | 1. Na tela inicial (homepage) clique em login e será redirecionado a tela para acessar sua conta;|
| |2. Preencha os campos obrigatórios como e-mail e senha, logo depois clique em "Login";|
| |3. Caso sua conta foi criada pelo Google ou Facebook, fica disponibilizado você acessar por essas redes;|
| |4. Caso o login tenha ocorrido com êxito, será redirecionado para a página inicial (homepage).|
| Critérios de êxito | # Página inicial conter o botão "Login";  |
| |# Página de "Inscrever-se" conter o botão "Login";|
| |# Dois botões, para login com Facebook ou Google. E direcionar para formulário diferentes.|
| Responsável pela elaborar do caso de teste | Nicholas Deway |

|Caso de Teste    | CT-5 - Seleção e compra de ingressos |
|:---|:---|
| Requisitos Associados | RF-08, RF-11 |
| Objetivo do Teste | Permitir que o usuário visualize e selecione ingressos.|
| Passos | 1. Na tela inicial (homepage) selecione o evento que deseja participar;|
| |2. Após visualizar as informaçoes na página de eventos clique no botão "Comprar ingressos"|
| Critérios de êxito  |3. Selecione os ingressos desejados na e a quantidade através dos botões de incremento e decremento;|
| |4. No botão de seleção em cascata, escolha uma forma de pagamento;|
| |5.1 Cartão de crédito|
| |5.2 Preencha os campos solicitados com as informações do seu cartão;|
| |6. Preencha os campos da seção "Envio do ingresso" referente a onde deseja receber o mesmo;|
| |6. Clique no botão "Confirmar e pagar" para finalizar a compra|
| Responsável pela elaborar do caso de teste | Riniel Rodrigo |

|Caso de Teste    | CT-6 - Página inicial |
|:---|:---|
| Requisitos Associados | RF-04, RF-05 |
| Objetivo do Teste | Permitir que o usuário visualize a página inicial, mesmo sem ter uma conta.|
| Passos | 1. Na tela inicial, caso não tenha uma conta, clique em "Criar conta";|
| |2. Na tela inicial, caso tenha uma conta, clique em "Login";|
| Critérios de êxito  |3. Possibilidade de verificar os eventos destaques e filtrar por seus gostos;|
| Responsável pela elaborar do caso de teste | Nicholas Deway |

|Caso de Teste    | CT-7 - Informações do evento |
|:---|:---|
| Requisitos Associados | RF-11 |
| Objetivo do Teste | Permitir que o usuário visualize os detalhes do evento.|
| Passos | 1. Viualize as informações na página de eventos clique no botão "Comprar ingressos";|
| |2. Consiga acessar links contidos ao longo do texto;|
| Critérios de êxito  |3. Ao clicar no botão "Comprar ingrssos" deverá ser encaminhado à pagina de compra;|
| |4. Ao clicar no link "Saiba mais sobre o cancelamento" deverá ser encaminhado à Política de Cancelamento;|
| |5.Ao clicar no link "Saiba como editar participantes" deverá ser encaminhado à Política de Edição de Participantes;|
| |6. Ao clicar no botão "Voltar", deverá retornar à página anterior;|
| Responsável pela elaborar do caso de teste | Guilherme Morato |

|Caso de Teste    | CT-8 - adicionar feedback |
|:---|:---|
| Requisitos Associados | RF-12 |
| Objetivo do Teste | Permitir que o usuário adicione seu feedback.|
| Passos | 1. na parte de ingressos encerrados clique em "adicionar feedback";|
| |2. na caixa de texto escreva o que achou do evento; |
| |3. se quiser, adicione fotos e/ou videos do evento; |
| Critérios de êxito  |4. Ao clicar no botão "adicionar feedback" deverá ser encaminhado à pagina de feedback;|
| |5. o tamanho máximo da mídia anexada deverá ser de 2mb;|
| Responsável pela elaborar do caso de teste | João Victor Oliveira |
