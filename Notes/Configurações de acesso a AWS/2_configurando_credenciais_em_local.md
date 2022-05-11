# Configurando credenciais em ambiente local

* Para não depender de qualquer framework, iremos linkar a aws ao nosso ambiente local

* primeiro instale [[AWS cli]]

* no AWS console, procure [[S3]]

* pra verificar se as credenciais estão certas tentaremos enviar um arquivo para [[S3]]

* [[S3]] > create bucket > breno-test-buck

> [[aws configure]]

* use as credentiasl do csv

> [[aws s3 ls]]

* para listar os buckets

> [[aws s3 ls]] breno-test-buck

* não retorna nada, pois o bucket esta vazio

>  echo "Hello world" > file-test.txt

* crie um arquivo vazio para testar

> [[aws s3 cp]] file-test.txt s3://breno-test-buck

* faça upload desse arquivo para S3