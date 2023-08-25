# Introdução ao React

No diretório do projeto, você pode executar usando:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.\
Você também pode ver erros de lint no console.

# Projeto
## Estrutura
A estrutura do projeto pode ser compreendida por meio de suas pastas e arquivos, sendo que cada uma dessas partes é responsável por funções específicas.
### components
Esta pasta é destinada a componentes que serão reutilizados em vários lugares do projeto.
### configs
Onde é armazenado as configurações globais do sistema. Também é utilizada para sobrescrever as configurações padrões de bibliotecas.
### contants
Utilizada para armazenar arquivos de constantes que serão reutilizadas em várias partes do sistema.
### contexts
Nesta pasta ficam os contexts do sistema. O context é uma maneira de passar as props entre componentes sem precisar deixar isto explicito no código. Para mais detalhes, consulte a documentação oficial do React. [https://pt-br.reactjs.org/docs/context.html](https://pt-br.reactjs.org/docs/context.html)
### helpers
Esta pasta é utilizada para armazenar funções úteis do sistema, como por exemplo, formatadores de CPF, data, etc. Estas funções podem ser utilizadas para implementar regras de negócio do sistema.
### hooks
É utilizado para extrair lógicas contendo o estado de um componente de uma forma que estas lógicas possam ser reutilizadas de forma independente em vários lugares do código. Para mais detalhes, consulte a documentação oficial do React. [https://pt-br.reactjs.org/docs/hooks-intro.html](https://pt-br.reactjs.org/docs/hooks-intro.html)
### layouts
Onde é armazenado os layouts da aplicação. Por exemplo, quando o usuário acessa a página de login, utilizamos o layout de **Auth** que está implementado dentro da pasta layouts. Após o usuário se autenticar, utilizamos o layout **Main**.
### providers
Providers é um pattern de compartilhamento de props entre componentes.
Para mais detalhes, consulte o seguinte artigo: [https://medium.com/@oieduardorabelo/padr%C3%B5es-em-react-provider-pattern-b520c37ed733](https://medium.com/@oieduardorabelo/padr%C3%B5es-em-react-provider-pattern-b520c37ed733)
### service
Esta pasta contém arquivos e diretórios relacionados à parte de requisições externas da nossa aplicação React. Alguns dos arquivos presentes nesta pasta são:
- **api.js**: é um interceptador de requisições e respostas que adiciona um token de autenticação às requisições e converte as chaves de dados enviados para snake_case. As chaves de dados recebidos são convertidos para camelCase.
- **env.js**: responsável por montar a URL para qual o sistema irá realizar as requisições, com base na variável global que informa em qual ambiente estamos.
- **history.js**: responsável por criar um histórico de navegação e compartilhá-lo com o restante do sistema.
- **modules**: contém os arquivos de requisição para as API's externas.
