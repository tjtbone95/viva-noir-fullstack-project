/// <reference types="node" />
/// <reference types="node" />
import type { ReadStream } from 'node:fs';
import { DeleteObjectCommandOutput, CompleteMultipartUploadCommandOutput, AbortMultipartUploadCommandOutput, S3ClientConfig, ObjectCannedACL } from '@aws-sdk/client-s3';
import type { AwsCredentialIdentity } from '@aws-sdk/types';
export interface File {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext?: string;
    mime: string;
    size: number;
    sizeInBytes: number;
    url: string;
    previewUrl?: string;
    path?: string;
    provider?: string;
    provider_metadata?: Record<string, unknown>;
    stream?: ReadStream;
    buffer?: Buffer;
}
export type UploadCommandOutput = (CompleteMultipartUploadCommandOutput | AbortMultipartUploadCommandOutput) & {
    Location: string;
};
export interface AWSParams {
    Bucket: string;
    ACL?: ObjectCannedACL;
    signedUrlExpires?: number;
}
export interface DefaultOptions extends S3ClientConfig {
    accessKeyId?: AwsCredentialIdentity['accessKeyId'];
    secretAccessKey?: AwsCredentialIdentity['secretAccessKey'];
    credentials?: AwsCredentialIdentity;
    params?: AWSParams;
    [k: string]: any;
}
export type InitOptions = (DefaultOptions | {
    s3Options: DefaultOptions;
}) & {
    baseUrl?: string;
    rootPath?: string;
    [k: string]: any;
};
declare const _default: {
    init({ baseUrl, rootPath, s3Options, ...legacyS3Options }: InitOptions): {
        isPrivate(): boolean;
        getSignedUrl(file: File, customParams: any): Promise<{
            url: string;
        }>;
        uploadStream(file: File, customParams?: {}): Promise<void>;
        upload(file: File, customParams?: {}): Promise<void>;
        delete(file: File, customParams?: {}): Promise<DeleteObjectCommandOutput>;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map