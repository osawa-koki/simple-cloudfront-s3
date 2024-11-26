import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import * as CloudfrontS3 from '../lib';
import { BASE_STACK_NAME } from '../lib/const';

test('S3 Bucket Created', () => {
  const app = new cdk.App();
  const stack = new CloudfrontS3.CloudfrontS3Stack(app, 'MyTestStack');
  const template = Template.fromStack(stack);
});
