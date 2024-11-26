import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { StorageStack } from './storage/storage';
import { CdnStack } from './cdn/cdn';
import { OutputStack } from './output/output';

export class IndexStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
      ...props,
      stackName: process.env.BASE_STACK_NAME!,
    });

    const storageStack = new StorageStack(this, 'StorageStack', {
      stackName: `${process.env.BASE_STACK_NAME!}-storage`,
    });

    const cdnStack = new CdnStack(this, 'CdnStack', {
      stackName: `${process.env.BASE_STACK_NAME!}-cdn`,
      bucket: storageStack.bucket,
    });
    cdnStack.addDependency(storageStack);

    const outputStack = new OutputStack(this, 'OutputStack', {
      stackName: `${process.env.BASE_STACK_NAME!}-output`,
      distribution: cdnStack.distribution,
    });
    outputStack.addDependency(cdnStack);
  }
}
