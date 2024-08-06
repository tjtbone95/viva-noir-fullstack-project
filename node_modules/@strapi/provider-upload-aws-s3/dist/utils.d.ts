import type { AwsCredentialIdentity } from '@aws-sdk/types';
import type { InitOptions } from '.';
export declare function isUrlFromBucket(fileUrl: string, bucketName: string, baseUrl?: string): boolean;
export declare const extractCredentials: (options: InitOptions) => AwsCredentialIdentity | null;
//# sourceMappingURL=utils.d.ts.map