# 🌐 Aplicação Fullstack de Gestão de Usuários

Este é um projeto fullstack de gestão de usuários. Decidi desenvolver minha própria API para ter mais flexibilidade e controle sobre os métodos HTTP. Tanto o frontend quanto o backend foram criados por mim e estão hospedados. No entanto, caso queira rodar o projeto localmente, deixei um README detalhado com todas as instruções necessárias.

### Deploy da aplicação: 

<br/>

<a href="https://bossa-nova-solutions-challenge-9ifu.vercel.app/" target="_blank" >
  ---->  Deploy Bossa Nova Challenge <----
</a>

<br/>
<br/>
<br/>
<br/>

![Servidor Backend Rodando](https://img.wine.com.br/testes/2022/27-12/banner.gif)

## 🧰 Tecnologias Utilizadas no Projeto

### Frontend
- **Next.js / React**
- **TypeScript**
- **Redux**
- **Styled-components**
- **ESLint**: Ferramenta de linting para identificar e corrigir padrões de código.
- **Prettier**: Formatação automática de código para garantir consistência.

### Backend
- **NestJS**
- **TypeORM**

### Banco de Dados
- **MySQL**
- **Clever Cloud**: Plataforma na nuvem utilizada para hospedar o banco de dados.

### Testes Automatizados
- **Jest**

---

## API Criada e Hospedada na Railway

Acesse a API através do link:  

<a href="https://bossa-nova-solutions-challenge-production.up.railway.app/" target="_blank">
  Deploy -> Bossa Nova API
</a>

### Endpoints para interação com a API

- **Buscar todos os usuários**

```bash
GET /users
```
- **Buscar usuários específico**

```bash
GET /users/{id}
```

- **Criar novo usuário**

```bash
POST /users
```

- **Atualizar informações de um usuário específico**

```bash
PUT /users/{id}
```

- **Deletar usuário**

```bash
DELETE /users/{id}
```

- **Buscar usuário específico**

```bash
GET /users/search?q={query}
```
---

## 🚀 Executando o Projeto Localmente

### 1. Clone o Repositório

```bash
git clone https://github.com/victorlirafront/bossa-nova-solutions-challenge.git
```

### 2. Entre no Projeto

```bash
cd bossa-nova-solutions-challenge
```

Repare que temos duas pastas dentro do diretório raiz do projeto: **backend** e **frontend**. Vamos começar inicializando o servidor **backend**.

## Configuração do Backend

1. **Acesse a pasta do Backend**:

```bash
cd backend
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Inicie o servidor**:

```bash
npm run start
```
<br/>

Esse comando irá mapear as rotas da nossa API. A seguinte mensagem aparecerá no terminal:  
`Server is running on http://localhost:3002`  

<br/>

![Servidor Backend Rodando](https://ik.imagekit.io/Victorliradev/bossa-nova-solutions/Captura%20de%20Tela%202024-12-15%20a%CC%80s%2000.13.11_Ywv_Aaw76.png?updatedAt=1734232439790)

<br/>

Agora que o servidor está rodando, o próximo passo é iniciar o **frontend**. Se você ainda estiver dentro da pasta **backend**, volte para o diretório raiz:

<br/>

```bash
cd ../
```

Em seguida, entre na pasta **frontend**:

```bash
cd frontend
```

## Configuração do Frontend

1. **Instale as dependências**:

```bash
npm install
```

2. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
```

Isso iniciará o frontend em [http://localhost:3000](http://localhost:3000).

## 🧪 Testes Unitários ( frontend )

1. Navegue até a pasta **frontend**.  
2. Abra um novo terminal no VS Code.  
3. Execute o comando:

   ```bash
   npm run test
   ```

O seguinte texto será exibido no terminal:  
```plaintext
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

Para rodar todos os testes, pressione **a** no terminal.

![](https://ik.imagekit.io/Victorliradev/bossa-nova-solutions/Captura%20de%20Tela%202024-12-15%20a%CC%80s%2014.35.23_zC7TGWHqOl.png?updatedAt=1734284154935)

Certifique-se de que todos os testes foram aprovados, conforme mostrado no exemplo acima.

## Variáveis de Ambiente

As variáveis de ambiente estão configuradas no arquivo `.env`. 

<p style="color: red;">Eu deixei as variáveis de ambiente no projeto para facilitar a avaliação, sem a necessidade de configurá-las manualmente.</p>  
<p style="color: yellow;">Contudo, tenho total consciência de que essas variáveis contêm dados sensíveis, e esse tipo de informação não deveriam ir para o Github!!</p>

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
