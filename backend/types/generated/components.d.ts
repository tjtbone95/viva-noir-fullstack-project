import type { Schema, Attribute } from '@strapi/strapi';

export interface SizeSize extends Schema.Component {
  collectionName: 'components_size_sizes';
  info: {
    displayName: 'size';
    icon: 'shirt';
  };
  attributes: {
    small: Attribute.Component<'size.small'>;
  };
}

export interface SizeSmall extends Schema.Component {
  collectionName: 'components_size_smalls';
  info: {
    displayName: 'small';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'size.size': SizeSize;
      'size.small': SizeSmall;
    }
  }
}
