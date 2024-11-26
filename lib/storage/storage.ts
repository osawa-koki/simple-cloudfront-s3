import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';

interface StorageStackProps extends cdk.StackProps {
  stackName: string;
}

export class StorageStack extends cdk.Stack {
  public readonly bucket: Bucket;

  constructor(scope: Construct, id: string, props: StorageStackProps) {
    const { stackName } = props;

    super(scope, id, {
      ...props,
      stackName,
    });

    const bucket = new Bucket(this, 'Bucket', {
      bucketName: process.env.S3_BUCKET_NAME!,
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      process.env.ORIGIN_ACCESS_IDENTITY_ID!,
    );
    bucket.grantRead(originAccessIdentity);

    this.bucket = bucket;
  }
}
