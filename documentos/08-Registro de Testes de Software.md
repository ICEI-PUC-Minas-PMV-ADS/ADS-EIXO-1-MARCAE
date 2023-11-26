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
| Resultados obtidos | 1. Após clicar no botão "Ativo", o usuário é direcionado para a os ingressos comprados.|
| |2. Após clicar no botão "Imprimir Ingresso", o usuário é direcionado a escolha do tipo de ingresso.|
| |3. Escolha o tipo de ingresso.|
| |4. Após a escolha do tipo de ingresso, o  usuário tem a possibilidade de imprimir o ingresso selecionado.|
| |5. Após clicar no botão "Encerrado", o usuário visualizará o histórico de ingressos encerrados.|
| |6.Após digitar o feedback na caixa de texto e clicar no botão "Enviar Feedback", o usuário recebe alerta de "Feedback Enviado".|
| Responsável pela execução do caso de Teste | Rogério Rodrigues Mendes |

1. Ingresso Ativo.
![Captura de tela 2023-11-25 174805](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/cfacffc5-1b68-4397-894e-9d1e7dcbe3c4)

2. Imprimir Ingresso Ativo.
![Captura de tela 2023-11-25 173257](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/0fb023c9-cdac-4d2c-a35e-8e49ecf4e85b)

3. Escolher Tipo de Ingresso.
![Captura de tela 2023-11-25 173525](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/2b8793c1-8aa6-4cf5-9fd4-b28f58cdae71)

4. Imprimir Ingresso Selecionado.
![Captura de tela 2023-11-25 173947](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/9f5239d2-cecf-4aab-885b-99c521f10554)

5. Ingresso Encerrado.
![Captura de tela 2023-11-25 174230](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/a857525b-0c41-466b-8184-358ea4d760d0)

6. Enviar Feedback.
![Captura de tela 2023-11-25 174618](https://github.com/ICEI-PUC-Minas-PMV-ADS/ADS-EIXO-1-MARCAE/assets/146504095/39d50ce1-246c-4053-bb54-5f0e2279d1ea)

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











































