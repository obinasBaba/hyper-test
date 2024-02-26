export interface Banner {
  mainBannerId: number;
  title: string;
  sort: 3;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  creator: string;
  updater: string;
  deleter: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

export interface Category {
  mainShortcutId: 10;
  title: string;
  sort: 10;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

export interface Item {
  createdAt: '2024-02-22T05:40:35.316Z';
  updatedAt: '2024-02-22T05:40:35.316Z';
  deletedAt: null;
  uuid: '25792939-279d-45af-a9a0-a8f9bb2f1fe2';
  name: 'SI-PU-9118#1';
  body: null;
  collectionId: 1197;
  key: 'SI-PU-9118#1';
  seq: 0;
  entityType: 'PUBLICATION';
  entityId: 9118;
  optionKey: null;
  publication: {
    id: 9118;
    title: '소니 플레이스테이션 PS5 슬림 스탠다드 에디션';
    code: 'P010103016S000200002';
    productId: 5551;
    prdType: 1;
    detailEntity: 'MEDIA';
    content: '';
    offeringType: 'publication';
    rating: 4.9;
    isExistResidual: true;
    isAdult: 1;
    preface: '';
    prefaceIconUrl: '';
    productName: 'PS5 슬림 본체 디스크 버전 2018A 신형 소니정품';
    brandName: '소니';
    media: [
      {
        seq: 0;
        type: 'THUMBNAIL';
        uri: 'https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/db42299c-c42d-420f-a351-bb293543fe8a.jpeg';
        mimeType: 'image/jpeg';
        deviceType: null;
      },
    ];
    isTrial: true;
    tagsOnImage: ['리턴가능'];
    tagsOnDesc: [];
    priceInfo: {
      price: 688000;
      discountPrice: 658460;
      discountRate: 5;
    };
    discounts: [
      {
        id: 17562;
        name: null;
        type: 'INIT';
        calcMethod: 'AMOUNT';
        value: 29540;
        activeFrom: null;
        activeTo: null;
        qty: 0;
        remain: null;
      },
    ];
    applyCoupon: true;
  };
  prdType: 1;
}

export interface ItemsType {
  id: 2166;
  type: 'BUNDLE';
  code: 'BU23120rvRQW5FDH';
  title: '연말 결산_가전';
  subtitle: '';
  description: '연말 결산_가전';
  trialPeriod: null;
  installmentPrice: null;
  installmentPeriod: null;
  rating: 5;
  startDate: null;
  endDate: null;
  viewType: null;
  createdAt: '2023-12-04T05:35:44.023Z';
  items: Item[];
  media: [
    {
      createdAt: '2023-12-06T02:28:16.462Z';
      updatedAt: '2023-12-11T08:28:01.000Z';
      deletedAt: null;
      uuid: 'c453f6b1-4949-4a70-8dd7-47427712c825';
      mimeType: 'image/png';
      uri: 'https://dvd6ljcj7w3pj.cloudfront.net/media/COLLECTION/c453f6b1-4949-4a70-8dd7-47427712c825.png';
      fileName: '상세(Mobile)_가전.png';
      objectKey: 'media/COLLECTION/c453f6b1-4949-4a70-8dd7-47427712c825.png';
      deviceType: null;
      collectionId: 2166;
      seq: 1;
      itemKey: null;
      type: 'THUMBNAIL';
    },
  ];
  thumbnail: {
    createdAt: '2023-12-06T02:28:16.462Z';
    updatedAt: '2023-12-11T08:28:01.000Z';
    deletedAt: null;
    uuid: 'c453f6b1-4949-4a70-8dd7-47427712c825';
    mimeType: 'image/png';
    uri: 'https://dvd6ljcj7w3pj.cloudfront.net/media/COLLECTION/c453f6b1-4949-4a70-8dd7-47427712c825.png';
    fileName: '상세(Mobile)_가전.png';
    objectKey: 'media/COLLECTION/c453f6b1-4949-4a70-8dd7-47427712c825.png';
    deviceType: null;
    collectionId: 2166;
    seq: 1;
    itemKey: null;
    type: 'THUMBNAIL';
  };
  taggings: [];
  singleCollections: [];
}
