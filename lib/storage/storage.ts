import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface StorageStackProps extends cdk.StackProps {
  stackName: string;
}

export class StorageStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StorageStackProps) {
    const { stackName } = props;

    super(scope, id, {
      ...props,
      stackName,
    });

    new Bucket(this, 'Bucket', {
      bucketName: process.env.S3_BUCKET_NAME!,
    });
  }
}
