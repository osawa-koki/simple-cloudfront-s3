# simple-cloudfront-s3

🌐🌐🌐 S3に配置した静的コンテンツをCloudFrontで配信してみる！  

## 実行方法

DevContainerに入り、以下のコマンドを実行します。  
※ `~/.aws/credentials`にAWSの認証情報があることを前提とします。  

```shell
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
