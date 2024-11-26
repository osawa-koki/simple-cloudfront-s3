import * as cdk from 'aws-cdk-lib';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface CdnStackProps extends cdk.StackProps {
  stackName: string;
  bucket: Bucket;
}

export class CdnStack extends cdk.Stack {
  public readonly distribution: Distribution;

  constructor(scope: Construct, id: string, props: CdnStackProps) {
    const { stackName, bucket } = props;

    super(scope, id, {
      ...props,
      stackName,
    });

    const distribution = new Distribution(this, "Distribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessIdentity(bucket),
      },
    });

    this.distribution = distribution;
  }
}
