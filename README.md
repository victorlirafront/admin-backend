# 🌐 Aplicação Fullstack de Gestão de Usuários

Este é um projeto fullstack de gestão de usuários. O **frontend** foi construído com **Next.js**, **TypeScript**, **Redux** e **Styled-components**, enquanto o **backend** foi desenvolvido utilizando **NestJS** e **TypeORM**. O banco de dados **MySQL** está hospedado na nuvem utilizando o **Clever Cloud**.

## ⚠️ Fiz um video demonstrativo caso fique alguma dúvida ao rodar a aplicação, Deixei no final do readme

![Servidor Backend Rodando](https://ik.imagekit.io/Victorliradev/bossa-nova-solutions/Captura%20de%20Tela%202024-12-15%20a%CC%80s%2000.50.05_70xZl4Slf.png?updatedAt=1734234635498)


## 🧰 Tecnologias usadas no projeto

### Frontend
- **Next.js / React**
- **TypeScript**
- **Redux**
- **Styled-components**

### Backend
- **NestJS**
- **TypeORM**

### Banco de Dados
- **MySQL**
- **Clever Cloud**: Plataforma na nuvem utilizada para hospedar o banco de dados.

### Testes Automatizados
- **Jest**
- **Cypress**

Aqui está uma versão melhor formatada:

---

## API Criada e Hospedada na Railway

Acesse a API através do link:  
https://bossa-nova-solutions-challenge-production.up.railway.app

### Endpoint para buscar usuários

```bash
GET /users
```

### Endpoint atualizar um usuário

```bash
PUT /users/id
```

### Endpoint deletar um usuário

```bash
DELETE /users/id
```
### Endpoint criar um usuário

```bash
POST /users
```


---

## 🔧 Configuração do Projeto

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

## Variáveis de Ambiente

As variáveis de ambiente estão configuradas no arquivo `.env`. 

<p style="color: red;">Eu deixei as variáveis de ambiente no projeto para facilitar a avaliação, sem a necessidade de configurá-las manualmente.</p>  
<p style="color: yellow;">Contudo, tenho total consciência de que essas variáveis contêm dados sensíveis, e esse tipo de informação não deveriam ir para o Github!!</p>

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
