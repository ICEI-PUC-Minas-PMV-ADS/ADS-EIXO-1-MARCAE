# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste executado]

|Caso de Teste    | CT-1 - Cadastro de Eventos |
|:---|:---|
| Resultados obtidos | 1. Ao tentar enviar formulário sem campos obrigatórios, é exibida uma mensagem de erro.|
| |2. Preenchidos apenas os campos obrigatórios, é possivel prosseguir com o cadastro.|
| |3. Após envio dos dados, usuário é redirecionado para a página do evento criado.|
| |4. Após clicar no botão "Mais", é criada mais uma linha na tabela para preenchimento dos dados.|
| |5. Após clicar no botão "Menos", a linha recém criada foi removida.|
| |6. Ao selecionar um arquivo maior que 2MB é exibida uma mensagem de erro.|
| Responsável pela execução do caso de Teste | Mariana V. Santos |

1. Campos obrigatórios.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/32981763/a2a691e4-5e61-4f3a-ab39-d5f6dafb708a)

2. Campos obrigatórios preenchidos.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/32981763/e41a2535-e518-4dd7-9a28-018732703c44)

3. Página do Evento criado.
   
[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]

4. Nova linha criada.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/32981763/58ccad07-5e8a-4c77-b24c-5ed23883741d)


5. Linha removida.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/32981763/e5dbf401-24e4-4492-ace2-2ebe99fa23d6)

6. Tamanho excedido.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/32981763/2af2ae75-af35-4229-833d-801c330e4319)

|Caso de Teste    | CT-2 - Tela de Ingressos |
|:---|:---|
| Resultados obtidos | 1. Após clicar no botão "Ativo", o usuário é direcionado para os ingressos comprados.|
| |2. Após clicar no botão "Imprimir Ingresso", o usuário é direcionado a escolha do tipo de ingresso.|
| |3. Escolha o tipo de ingresso.|
| |4. Após a escolha do tipo de ingresso, o  usuário tem a possibilidade de imprimir o ingresso selecionado.|
| |5. Ao clicar no botão "Ver Pedido", o usuario é direcionado a pagina de "Compras" de ingressos.|
| |6. Após o clique, será direcionado a pagina "Compra" de ingressos.|
| |7. Ao clicar no botão "Encerrado", o usuário visualiza todos os ingressos encerrados.|
| |8. Ao clicar no botão "Adicionar Feedback", o usuario é redirecionado a pagina "Feedback".|
| |9. Após o clique, será direcionado a pagina "Feedback".|
| Responsável pela elaboração do caso de Teste | Rogério Rodrigues Mendes |

1. Ingresso Ativo.
![Captura de tela 2023-11-25 174805](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/cfacffc5-1b68-4397-894e-9d1e7dcbe3c4)

2. Imprimir Ingresso Ativo.
![Captura de tela 2023-11-25 173257](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/0fb023c9-cdac-4d2c-a35e-8e49ecf4e85b)

3. Escolher Tipo de Ingresso.
![Captura de tela 2023-11-25 173525](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/2b8793c1-8aa6-4cf5-9fd4-b28f58cdae71)

4. Imprimir Ingresso Selecionado.
![Captura de tela 2023-11-25 173947](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/9f5239d2-cecf-4aab-885b-99c521f10554)

5. Ver Pedido.
![Captura de tela 2023-11-26 153608](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/e691547d-e991-4d3f-874e-909266c4b960)

6. Ingresso Encerrado.
![Captura de tela 2023-11-26 171747](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/c8a85a44-965f-41ac-a29e-c75d50f71661)

7. Adicionar Feedback.
![Captura de tela 2023-11-26 171548](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/34d558c2-833a-439c-bd50-9ba072752269)

8. Enviar Feedback.
![Captura de tela 2023-11-26 171046](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/9870ad9f-52c5-4195-824a-11ea01bf3367)

|Caso de Teste    | CT-3 - Tela de Login |
|:---|:---|
| Resultados obtidos | 1. Após clicar no botão "Login" na tela inicial, o usuário é direcionado para preencher seus dados pessoais.|
| |2. Depois de preencher os dados corretamentes, deverá clicar em "Login" para acessar sua conta.|
| |3. Se o usuário não lembrar sua senha, poderá clicar em "Esqueci minha senha" e ser redirecionado para uma outra página, digitando seu e-mail de recuperação.|
| |4. Caso o usuário não tiver cadastro, basta clicar na opção "Inscreva-se".|
| Responsável pela execução do caso de Teste | Nicholas Deway |

1. Tela de login.
![Etapa 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/a4a98c14-3c4f-470a-98f6-f0c33d8038fb)

2. Tela de login preenchido com os dados do usuário.
![Etapa 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/92b94d10-24a6-4ec7-9aa5-978f3c466505)

3. Tela de login com acesso ao visualizar senha digitada.
![Etapa 3](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/ad4b15cd-0f89-49a8-8cd1-4b2fc9fe6572)

4. Login efetuado.
![Etapa 4](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/049ade58-9ed1-4682-8274-02536b34bd53)

5. Ação ao clicar em "Esqueci minha senha".
![Etapa 5](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/e8067cce-0c5f-4589-b992-1a537f1cf36b)

6. Código de recuperação enviado.
![Etapa 6](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/83b37646-6e81-4ee7-9fe9-e2a36148532c)

|Caso de Teste    | CT-4 - Cadastro Usuário |
|:---|:---|
| Resultados obtidos | 1. Após clicar no botão "criar conta" na tela inicial, o usuário é direcionado para a tela de cadastro.|
| |1.2 Tela de cadastro
| |2. Depois de preencher os dados corretamentes, deverá clicar em "finalizar" para criar sua conta.|
| |2.2 Caso não preencha todos os campos não será possível o cadastro.|
| |3. O usuário poderá se cadastrar se preferir com Facebook ou Google.|
| Responsável pela execução do caso de Teste | João Victor Oliveira |

1. Tela Inicial
![inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/cfa4de01-e223-4fb0-a5de-2972ac26f8ee)

1.2 Tela de Cadastro
![Captura de tela 2023-11-26 193058](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/763547e8-ed36-4cb7-acb0-dca591c25c10)

2. Tela de registro preenchido com os dados do usuário
![Captura de tela 2023-11-26 193341](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/b1e1451a-d5fc-47a8-bee7-bf72f77d7e97)

2.2 Aviso
![preencha esse campo](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/57d82284-9e2d-4f47-a590-7ec2bdaa6439)

3. Opções de login.
![att](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/25d981e5-a91b-4c94-a97b-1f9766d1fa7d)

|Caso de Teste    | CT-5 - Tela inicial |
|:---|:---|
| Resultados obtidos | 1. Tela inicial sem login.|
| |2. Tela inicial com interação no botão de login.|
| |3. Tela inicial com interação no botão de criar sua conta.|
| |4. Tela inicial com interação no botão de "Ver detalhes" referente aos eventos destaques.|
| |5. Tela inicial com interação no botão de "Seja um produtor".|
| Responsável pela execução do caso de Teste | Nicholas Deway |

1. Eventos destaques.
![Screenshot_1](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/18b23082-590f-4b56-9bca-2252f835e9f3)

2. Eventos mais buscados.
![Screenshot_2](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/a857d772-f5f2-4250-928a-4a85181d86d8)

3. Categoria de festas e shows e logo abaixo uma vasta variedade de filtros do público.
![Screenshot_3](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/ba33c76b-6f64-4923-9975-4e58b32de246)

4. Filtrar eventos pelos estados.
![Screenshot_4](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/9ad5eeaf-3076-44df-95fe-220d7c565987)

5. Feedback do público, sobre eventos passados.
![Screenshot_5](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/65633444/4137fe28-1931-4907-bf23-c9f7c537595a)


|Caso de Teste    | CT-6 - Seleção, compra de ingressos, reponsividade |
|:---|:---|
| Requisitos Associados |RF-08, RF-11 |
| Objetivo do Teste |PáginaCompra - Permitir que o usuário visualize e selecione ingressos e acesse em qualquer dispositivo|
| Passos | 1. Na tela inicial (homepage) selecione o evento que deseja participar;|
| Êxito |2. Após visualizar as informaçoes na página de eventos clique no botão "Comprar ingressos"|
| Êxito |3. Selecione os ingressos desejados na e a quantidade através dos botões de incremento e decremento;|
| Êxito |4. Botão de incremento - incrimenta +1 no número de ingresso ao clicar|
| Êxito |5. Botão de decremento - decrementa +1 no número de ingresso ao clicar|
| Êxito |6. Atualiza o valor total do ingresso ao decrementar o número de ingressos|
| Êxito |7. Atualiza o valor total do ingresso ao incrementar o número de ingressos|
|Sem êxito |8. No botão de seleção em cascata, escolha uma forma de pagamento;|
| Êxito |9.1 Cartão de crédito|
| Êxito |9.2 Preencha os campos solicitados com as informações do seu cartão;|
| Êxito |10. Preencha os campos da seção "Envio do ingresso" referente a onde deseja receber o mesmo;|
| Êxito |10. Atualiza o valor total da compra dependendo da quantidade de ingressos selecionados|
| Sem êxito |11. Clique no botão "Confirmar e pagar" para finalizar a compra|
| Êxito |12 responsividade para dispositivos mobile|
| Responsável pela elaborar do caso de teste | Riniel Rodrigo |


1. Página de compras de ingressos e suas funcionalidades (Tablet).
(Aguarde o carregamentos dos gifs).

![mobile (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/80684745/8e51967e-aacc-4fe4-907f-abfaf2f0e863)
<br>

3. Página de compras de ingressos (celular).
<br>

![mobile](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/80684745/cffbd9a0-fc42-416a-a8fc-cd87cbc4798d)
<br>

5. Página de compras de ingressos (Desktop).
![mobile (2)](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/80684745/706b87b4-64bd-422c-9dc0-b3535463eebe)
<br>

|Caso de Teste    | CT-7 - Informações do evento |
|:---|:---|
| Requisitos Associados | RF-11 |
| Objetivo do Teste | Permitir que o usuário visualize os detalhes do evento.|
| Passos | 1. Viualize as informações na página de eventos clique no botão "Comprar ingressos";|
|Êxito |2. Consiga acessar links contidos ao longo do texto;|
| Critérios de êxito  |3. Ao clicar no botão "Comprar ingrssos" deverá ser encaminhado à pagina de compra;|
| Êxito |4. Ao clicar no link "Saiba mais sobre o cancelamento" deverá ser encaminhado à Política de Cancelamento;|
| Êxito |5.Ao clicar no link "Saiba como editar participantes" deverá ser encaminhado à Política de Edição de Participantes;|
| Êxito |6. Ao clicar no botão "Voltar", deverá retornar à página anterior;|
| Responsável pela elaborar do caso de teste | Guilherme Morato |


1.Página do evento

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/61d8a8fd-2fd5-4ace-b882-71c4a7ca3b92)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/c8d3385f-8845-4512-b4fe-442cd75b203f)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/0cc3b958-6072-446c-9a2c-851ee285286a)


2.Acesso aos links do texto

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/7b37809e-7b7a-4bd6-8927-cb0048469a4a)



3.Ao clicar no botão "Comprar ingrssos" deverá ser encaminhado à pagina de compra

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/18055ef1-031d-42aa-941f-bf308107f1ea)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/268f0903-fde9-4be3-8510-69f45f0bb1c1)



4.Ao clicar no link "Saiba mais sobre o cancelamento" deverá ser encaminhado à Política de Cancelamento

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/61aef2e7-1681-4b9b-8486-1fcad5603a5a)



5.Ao clicar no link "Saiba como editar participantes" deverá ser encaminhado à Política de Edição de Participantes

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/f7b54f46-aeba-48a3-badd-881f66442c5c)


6.Ao clicar no botão "Voltar", deverá retornar à página anterior

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/e490f52e-a755-471a-83c9-fa19bbba59ce)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/141197033/5587de29-8df7-416e-9c6d-aeb9abffe802)






|Caso de Teste    | CT-8 - tela de feedback |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Permitir que o usuario adicione seu feedback.|
| Passos | 1. na pagina de ingressos, na seção encerrados clique no botão "adicionar feedback";|
|Passos | 2. comente o que achou do evento, e se preferir adicione foto e/ou vídeo do mesmo.
| Critérios de êxito  |3. o arquivo anexado não deverá ultrapassar 2mb;|
| Responsável pela elaborar do caso de teste | João Victor Oliveira|

1.ingressos encerrados (adicionar feedback)
![adicionar feedback](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/385943e4-def6-44aa-91c2-22c02205569c)

2. tela de feedback
![tela de feedback](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/e7cad7f3-688c-431a-a06d-5e5a15d2fda8)

3.area de upload
![Captura de tela 2023-11-26 225806](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/144181666/4ae07ec9-4626-44a9-8435-1a67eaeb09c1)

   


















































