# Primeiro app AWS sem framework


* 1o passo criar arquivo de politicas de segurança

* 2o criar role de segurança na AWS

[[IAM]]

```sh
aws iam create-role \

--role-name lambda-sem-framework \

--assume-role-policy-document file://politicas.json \

| tee logs/role.log
```

  

* 3o criar arquivo com conteudo e zipa-lo

```sh
zip function.zip index.js
```
  
[[lambda]]

```sh
aws lambda create-function \

--function-name lambda-sem-framework \

--zip-file fileb://function.zip \

--handler index.handler \

--runtime nodejs12.x \

--role arn:aws:iam::750248872081:role/lambda-sem-framework \

| tee logs/lambda-create.log
```

  
#4o invoke lambda!

```sh
aws lambda invoke \

--function-name lambda-sem-framework \

--log-type Tail \

logs/lambda-exec.log

  ```

* -- atualizar, zipar

```sh
zip function.zip index.js
```
  

* atualizar lambda

```sh
aws lambda update-function-code \

--zip-file fileb://function.zip \

--function-name lambda-sem-framework \

--publish \

| tee logs/lambda-update.log
```
  

* 4o invoke lambda!

```sh
aws lambda invoke \

--function-name lambda-sem-framework \

--log-type Tail \

logs/lambda-exec-update.log

```  

[[REMOVER SERVIÇO]]

* remover

```sh
aws lambda delete-function \

--function-name lambda-sem-framework

  

aws iam delete-role \

--role-name lambda-sem-framework

```