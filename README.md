# simple-cloudfront-s3

🌐🌐🌐 S3に配置した静的コンテンツをCloudFrontで配信してみる！  

![成果物](./fruit.gif)  

## 実行方法

`.env.example`をコピーして`.env`ファイルを作成します。  
中身を適切に設定してください。  

DevContainerに入り、以下のコマンドを実行します。  
※ `~/.aws/credentials`にAWSの認証情報があることを前提とします。  

```shell
cdk bootstrap
cdk synth
cdk deploy --require-approval never --all
```

S3にファイルをアップロードします。  

```shell
source .env
aws s3 cp ./public s3://${BUCKET_NAME} --recursive
```

以下のコマンドでCloudFrontのドメイン名を取得します。  

```shell
source .env
aws cloudformation describe-stacks --stack-name ${BASE_STACK_NAME}-output --query "Stacks[0].Outputs[?OutputKey=='DistributionDomainName'].OutputValue" --output text
```

---

GitHub Actionsでデプロイする場合は、以下のシークレットを設定してください。  

| シークレット名 | 説明 |
| --- | --- |
| AWS_ACCESS_KEY_ID | AWSのアクセスキーID |
| AWS_SECRET_ACCESS_KEY | AWSのシークレットアクセスキー |
| AWS_REGION | リージョン |
| DOTENV | `.env`ファイルの内容 |
