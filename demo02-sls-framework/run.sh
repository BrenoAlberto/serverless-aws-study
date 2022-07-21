# instalar
npm i -g serverless

# sks inicializar
sls

# sempre fazer deploy antes de tudo para verificar se o ambiente está funcionando
sls deploy

# invocar
sls invoke -f hello

# invocar local
sls invoke --log local -f hello 
sls invoke -l local -f hello 

# configurar dashboard
sls

# logs
sls logs -f hello --tail

# remover
sls remove