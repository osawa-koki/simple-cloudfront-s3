import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as dotenv from 'dotenv';

import { StorageStack } from './storage/storage';
import { BASE_STACK_NAME } from './const';

dotenv.config();

export class IndexStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
      ...props,
      stackName: BASE_STACK_NAME,
    });

    new StorageStack(this, 'StorageStack', {
      stackName: `${BASE_STACK_NAME}-storage`,
    });
  }
}
