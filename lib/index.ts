import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { BASE_STACK_NAME } from './const';

export class CloudfrontS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
      ...props,
      stackName: BASE_STACK_NAME,
    });
  }
}
