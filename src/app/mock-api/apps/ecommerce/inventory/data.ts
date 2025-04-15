/* eslint-disable */
export const categories = [
    {
        id      : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        parentId: null,
        name    : 'Apartment',
        slug    : 'Apartment'
    },
    {
        id      : '07986d93-d4eb-4de1-9448-2538407f7254',
        parentId: null,
        name    : 'Residential',
        slug    : 'Residential'
    },
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        parentId: null,
        name    : 'Signle House Property',
        slug    : 'Signle House Property'
    }
];
export const brands = [
    {
        id  : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        name: 'Luxury Presence',
        slug: 'Luxury Presence'
    },  
    {
        id  : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        name: 'Summit Properties',
        slug: 'Summit Properties'
    },
    {
        id  : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        name: 'Properties',
        slug: 'Properties'
    },
    {
        id  : '5913ee46-a497-41db-a118-ee506011529f',
        name: 'Properties',
        slug: 'Properties'
    },
    {
        id  : '2c4d98d8-f334-4125-9596-862515f5526b',
        name: 'Properties',
        slug: 'Summit Properties'
    }
];
export const tags = [
    {
        id   : '167190fa-51b4-45fc-a742-8ce1b33d24ea',
        title: 'Pre Marketing'
    },
    {
        id   : '3baea410-a7d6-4916-b79a-bdce50c37f95',
        title: 'Hot'
    },
    {
        id   : '8ec8f60d-552f-4216-9f11-462b95b1d306',
        title: 'In Progress'
    },
    {
        id   : '8837b93f-388b-43cc-851d-4ca8f23f3a61',
        title: 'Interest Buyers'
    },
    {
        id   : '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
        title: 'Walkthrough Schedule'
    },
    {
        id   : '2300ac48-f268-466a-b765-8b878b6e14a7',
        title: 'Walkthrough Finished'
    },
    {
        id   : '0b11b742-3125-4d75-9a6f-84af7fde1969',
        title: 'Waiting for Responses'
    },
    {
        id   : '0fc39efd-f640-41f8-95a5-3f1d749df200',
        title: 'Waiting for Interest'
    },
    {
        id   : '7d6dd47e-7472-4f8b-93d4-46c114c44533',
        title: 'Interest Buyers'
    },
    {
        id   : 'b1286f3a-e2d0-4237-882b-f0efc0819ec3',
        title: 'Close'
    }
];
export const vendors = [
    {
        id  : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        name: 'Hammad',
        slug: 'evel'
    },
    {
        id  : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        name: 'Taimoor',
        slug: 'mivon'
    },
    {
        id  : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        name: 'John',
        slug: 'neogen'
    }
];
export const products = [
    {
        id         : '7eb7c859-1347-4317-96b6-9476a7e2ba3c',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Charming 2BHK Apartment in City Center',
        description: 'A cozy and modern 2-bedroom apartment located in the heart of the city, offering easy access to shopping, dining, and public transportation.',
        arabicdesc: 'شقة مكونة من غرفتي نوم تقع في مركز المدينة، تجمع بين الراحة والحداثة مع سهولة الوصول إلى التسوق والمطاعم ووسائل النقل العامة.',
        beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ETV-2425',
        yearbuilt    : '1998',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 'Single House',
        reserved   : 5,
        cost       : 450.18,
        basePrice  : 1036,
        taxPercent : 30,
        price      : 1346.8,
        weight     : 0.61,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-01-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-01-01.jpg',
            'assets/images/apps/ecommerce/products/property-01-02.jpg',
            'assets/images/apps/ecommerce/products/property-01-03.jpg'
        ],  
        active     : true
    },
    {
        id         : '00b0292f-3d50-4669-a0c4-7a9d85efc98d',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
  name: 'Luxury 4BHK Villa with Private Pool',
  description: 'An elegant 4-bedroom villa featuring a private pool, spacious interiors, modern amenities, and a serene atmosphere—perfect for luxurious living.',
  arabicdesc: 'فيلا فاخرة مكونة من أربع غرف نوم تحتوي على مسبح خاص، ومساحات داخلية واسعة، ومرافق حديثة، وأجواء هادئة مثالية لحياة راقية.',
  beds:8,
        bathrooms: 4,
        SquareFeet:2002,
        lotSize:1210,


        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-7573',
        yearbuilt    : '2001',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Residential',
        reserved   : 2,
        cost       : 723.55,
        basePrice  : 1686,
        taxPercent : 30,
        price      : 2191.8,
        weight     : 0.79,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-02-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-02-01.jpg',
            'assets/images/apps/ecommerce/products/property-02-02.jpg',
            'assets/images/apps/ecommerce/products/property-02-03.jpg'
        ],
        active     : true
    },
    {
        id         : '3f34e2fb-95bf-4f61-be28-956d2c7e4eb2',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Modern Studio Flat Near Tech Park',
        description: 'A sleek and fully furnished studio flat located just minutes away from the Tech Park—ideal for young professionals and tech workers.',
        arabicdesc: 'استوديو عصري ومفروش بالكامل يقع على بُعد دقائق من الحديقة التكنولوجية، مثالي للمهنيين الشباب والعاملين في قطاع التكنولوجيا.'
      ,
      beds:9,
        bathrooms:12,
        SquareFeet:1502,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADH-1921',
        yearbuilt    : '1909',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'Mobile House',
        reserved   : 3,
        cost       : 390.63,
        basePrice  : 950,
        taxPercent : 10,
        price      : 1045,
        weight     : 0.76,
        thumbnail  : null,
        images     : [
            'assets/images/apps/ecommerce/products/property-03-01.jpg',
            'assets/images/apps/ecommerce/products/property-03-02.jpg',
            'assets/images/apps/ecommerce/products/property-03-03.jpg'
        ],
        active     : false
    },
    {
        id         : '8fcce528-d878-4cc8-99f7-bd3451ed5405',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Luxury 4BHK Villa with Private Pool',
        description: 'A stunning 4-bedroom luxury villa featuring a private swimming pool, elegant architecture, spacious living areas, and premium finishes—ideal for upscale family living or a vacation retreat.',
        arabicdesc: 'فيلا فاخرة مكونة من أربع غرف نوم تضم مسبحًا خاصًا، وتصميماً معمارياً أنيقاً، ومساحات معيشة واسعة، وتشطيبات راقية—مثالية للسكن العائلي الفاخر أو كملاذ لقضاء العطلات.'
,  
beds:14,
        bathrooms: 4,
        SquareFeet:4002,
        lotSize:1210,

     tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'EAP-7752',
        yearbuilt    : '1929',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'House',
        reserved   : 4,
        cost       : 395.37,
        basePrice  : 839,
        taxPercent : 30,
        price      : 1090.7,
        weight     : 0.62,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-04--thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-04-01.jpg',
            'assets/images/apps/ecommerce/products/property-04-02.jpg',
            'assets/images/apps/ecommerce/products/property-04-03.jpg'
        ],
        active     : true
    },
    {
        id         : '91d96e18-d3f5-4c32-a8bf-1fc525cb92c0',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name: 'Spacious Family Home in Quiet Suburb',
        description: 'A comfortable and spacious family home located in a peaceful suburban neighborhood, offering multiple bedrooms, a large backyard, and a welcoming community atmosphere.',
        arabicdesc: 'منزل عائلي واسع يقع في ضاحية هادئة، يوفر عدة غرف نوم، وحديقة خلفية كبيرة، وأجواء مجتمعية مريحة ومناسبة للعائلات.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADP-5745',
        yearbuilt    : '2003',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Residential',
        reserved   : 3,
        cost       : 442.61,
        basePrice  : 961,
        taxPercent : 20,
        price      : 1153.2,
        weight     : 0.67,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-05-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-05-01.jpg',
            'assets/images/apps/ecommerce/products/property-05-02.jpg',
            'assets/images/apps/ecommerce/products/property-05-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'd7a47d7c-4cdf-4319-bbaa-37ade38c622c',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Elegant Penthouse with Skyline Views',
  description: 'A luxurious penthouse offering breathtaking skyline views, featuring modern design, high-end finishes, and ample space for elegant living in the heart of the city.',
  arabicdesc: 'بنتهاوس فاخر يطل على مناظر خلابة لأفق المدينة، يتميز بتصميم عصري، وتشطيبات فاخرة، ومساحة واسعة للحياة الأنيقة في قلب المدينة.'
,
beds:4,
        bathrooms: 2,
        lotSize:1210,

        SquareFeet:1002,
tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATV-2569',
        yearbuilt    : '2001',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'Single House',
        reserved   : 2,
        cost       : 563.43,
        basePrice  : 1370,
        taxPercent : 30,
        price      : 1781,
        weight     : 0.62,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-06-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-06-01.jpg',
            'assets/images/apps/ecommerce/products/property-06-02.jpg',
            'assets/images/apps/ecommerce/products/property-06-03.jpg'
        ],
        active     : true
    },
    {
        id         : 'ecf0b3df-38c3-45dc-972b-c509a3dc053e',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Cozy Cottage Retreat in the Hills',
        description: 'A charming and peaceful cottage nestled in the hills, offering a perfect retreat for relaxation, with stunning natural surroundings and cozy interiors.',
        arabicdesc: 'كوخ مريح يقع في التلال، يقدم ملاذًا هادئًا للاسترخاء، مع محيط طبيعي رائع وديكورات داخلية مريحة.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'EAH-2563',
        yearbuilt    : '2004',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'Single House',
        reserved   : 5,
        cost       : 705.26,
        basePrice  : 1721,
        taxPercent : 20,
        price      : 2065.2,
        weight     : 0.67,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-07-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-07-01.jpg',
            'assets/images/apps/ecommerce/products/property-07-02.jpg',
            'assets/images/apps/ecommerce/products/property-07-03.jpg'
        ],
        active     : false
    },
    {
        id         : '5765080a-aaee-40b9-86be-c18b9d79c73c',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name: 'Fully Furnished Townhouse in Gated Community',
  description: 'A stylish and fully furnished townhouse located within a secure gated community, offering modern amenities, spacious rooms, and a safe, family-friendly environment.',
  arabicdesc: 'منزل تاون هاوس مفروش بالكامل يقع داخل مجتمع مسور، ويقدم مرافق حديثة، وغرف واسعة، وبيئة آمنة وملائمة للعائلات.'
,
beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-6399',
        yearbuilt    : '2003',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Apartment',
        reserved   : 5,
        cost       : 624.12,
        basePrice  : 1448,
        taxPercent : 10,
        price      : 1592.8,
        weight     : 0.55,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-08-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-08-01.jpg',
            'assets/images/apps/ecommerce/products/property-08-02.jpg',
            'assets/images/apps/ecommerce/products/property-08-03.jpg'
        ],
        active     : false
    },
    {
        id         : '6e71be88-b225-474c-91e5-111ced7d6220',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name: 'Affordable 1BHK Apartment Near Metro',
  description: 'A budget-friendly 1-bedroom apartment conveniently located near the metro, offering easy access to transportation, local amenities, and comfortable living spaces.',
  arabicdesc: 'شقة 1 غرفة نوم بأسعار معقولة تقع بالقرب من المترو، تقدم سهولة الوصول إلى وسائل النقل والمرافق المحلية، ومساحات معيشة مريحة.'
,
beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,

        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ELH-2495',
        yearbuilt    : '1979',
        brand      : '5913ee46-a497-41db-a118-ee506011529f',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Single House',
        reserved   : 5,
        cost       : 738.91,
        basePrice  : 1848,
        taxPercent : 30,
        price      : 2402.4,
        weight     : 0.54,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-09-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-09-01.jpg',
            'assets/images/apps/ecommerce/products/property-09-02.jpg',
            'assets/images/apps/ecommerce/products/property-09-03.jpg'
        ],
        active     : false
    },
    {
        id         : '51242500-6983-4a78-bff3-d278eb4e3a57',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Designer Loft with Open Concept Living',
        description: 'A stylish designer loft featuring an open-concept living space, high-end finishes, and modern amenities, perfect for those who appreciate contemporary living in a spacious, airy environment.',
        arabicdesc: 'شقة لوفت مصممة بأناقة مع مساحة معيشة مفتوحة، وتفاصيل عالية الجودة، ومرافق حديثة، مثالية لأولئك الذين يقدرون الحياة العصرية في بيئة فسيحة وجوية.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATT-6019',
        yearbuilt    : '1912',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 'Villa',
        reserved   : 4,
        cost       : 688.89,
        basePrice  : 1502,
        taxPercent : 8,
        price      : 1622.16,
        weight     : 0.76,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-10-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-10-01.jpg',
            'assets/images/apps/ecommerce/products/property-10-02.jpg',
            'assets/images/apps/ecommerce/products/property-10-03.jpg'
        ],
        active     : true
    },
    {
        id         : '844a4395-233f-4ffb-85bd-7baa0e490a88',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Beachfront Bungalow with Sea View',
        description: 'A serene beachfront bungalow offering stunning sea views, perfect for those seeking a peaceful retreat with direct access to the beach and a relaxing coastal atmosphere.',
        arabicdesc: 'كوخ شاطئي هادئ يطل على البحر، مثالي لأولئك الذين يبحثون عن ملاذ هادئ مع وصول مباشر إلى الشاطئ وأجواء ساحلية مريحة.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADH-2335',
        yearbuilt    : '2005',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Bungalow',
        reserved   : 3,
        cost       : 708.41,
        basePrice  : 1467,
        taxPercent : 18,
        price      : 1731.06,
        weight     : 0.7,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-11-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-11-01.jpg',
            'assets/images/apps/ecommerce/products/property-11-02.jpg',
            'assets/images/apps/ecommerce/products/property-11-03.jpg'
        ],
        active     : false
    },
    {
        id         : '7520f1b6-3c45-46ef-a4d5-881971212d1e',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name: 'Prime Retail Space in High Footfall Area',
        description: 'A premium retail space located in a high footfall area, offering excellent visibility and foot traffic, ideal for businesses looking to attract customers and maximize sales.',
        arabicdesc: 'مساحة تجارية مميزة تقع في منطقة ذات حركة مرور عالية، توفر رؤية ممتازة وحركة مرور مشاة كبيرة، مثالية للأعمال التجارية التي تسعى لجذب العملاء وزيادة المبيعات.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-3064',
        yearbuilt    : '2009',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 'Penthouse',
        reserved   : 2,
        cost       : 731.94,
        basePrice  : 1743,
        taxPercent : 10,
        price      : 1917.3,
        weight     : 0.47,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-12-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-12-01.jpg',
            'assets/images/apps/ecommerce/products/property-12-02.jpg',
            'assets/images/apps/ecommerce/products/property-12-03.jpg'
        ],
        active     : false
    },
    {
        id         : '683e41d8-6ebc-4e6a-a7c1-9189ca52ef19',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Modern Office Space in Business District',
        description: 'A contemporary office space located in the heart of the business district, offering a professional environment with modern amenities and easy access to key business hubs.',
        arabicdesc: 'مساحة مكتبية عصرية تقع في قلب المنطقة التجارية، توفر بيئة مهنية مع مرافق حديثة وسهولة الوصول إلى أهم مراكز الأعمال.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADV-3188',
        yearbuilt    : '2010',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'Hotels ',
        reserved   : 5,
        cost       : 375.76,
        basePrice  : 786,
        taxPercent : 30,
        price      : 1021.8,
        weight     : 0.53,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-13-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-13-01.jpg',
            'assets/images/apps/ecommerce/products/property-13-02.jpg',
            'assets/images/apps/ecommerce/products/property-13-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'd4e52238-292d-462b-b9bb-1751030132e2',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name: 'Warehouse for Lease Near Highway',
        description: 'A spacious warehouse available for lease, conveniently located near the highway for easy transportation and logistics access, perfect for businesses in need of storage or distribution space.',
        arabicdesc: 'مستودع واسع للإيجار، يقع بالقرب من الطريق السريع لتسهيل الوصول إلى وسائل النقل والخدمات اللوجستية، مثالي للأعمال التجارية التي تحتاج إلى مساحة تخزين أو توزيع.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATT-7423',
        yearbuilt    : '2011',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 'Cold Storage',
        reserved   : 2,
        cost       : 743.93,
        basePrice  : 1793,
        taxPercent : 8,
        price      : 1936.44,
        weight     : 0.86,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-14-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-14-01.jpg',
            'assets/images/apps/ecommerce/products/property-14-02.jpg',
            'assets/images/apps/ecommerce/products/property-14-03.jpg'
        ],
        active     : false
    },
    {
        id         : '98861dfc-0d21-4fd5-81aa-49785d003d95',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Boutique Café Space in Trendy Neighborhood',
  description: 'A charming boutique café space located in a trendy neighborhood, offering a cozy atmosphere and the perfect setting for serving coffee, pastries, and unique drinks to locals and visitors alike.',
  arabicdesc: 'مساحة مقهى بوتيكي تقع في حي عصري، توفر أجواء دافئة وأسلوبًا مثاليًا لتقديم القهوة والمعجنات والمشروبات الفريدة للسكان والزوار على حد سواء.',
  beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'AAT-6453',
        yearbuilt    : '2019',
        brand      : '5913ee46-a497-41db-a118-ee506011529f',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'Multi Family Residential',
        reserved   : 3,
        cost       : 364.64,
        basePrice  : 806,
        taxPercent : 18,
        price      : 951.08,
        weight     : 0.59,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-15-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-15-01.jpg',
            'assets/images/apps/ecommerce/products/property-15-02.jpg',
            'assets/images/apps/ecommerce/products/property-15-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'a71f9b10-e884-4aad-9810-29fe10ce6d42',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name: 'Co-Working Space with Flexible Plans',
        description: 'A modern co-working space offering flexible membership plans, designed to accommodate freelancers, startups, and small businesses, with access to high-speed internet, meeting rooms, and collaborative workspaces.',
        arabicdesc: 'مساحة عمل مشتركة حديثة تقدم خطط عضوية مرنة، مصممة لاستيعاب المستقلين والشركات الناشئة والشركات الصغيرة، مع الوصول إلى الإنترنت عالي السرعة، وغرف الاجتماعات، ومساحات العمل التعاونية.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'AAP-4902',
        yearbuilt    : '2010',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'House',
        reserved   : 3,
        cost       : 525.3,
        basePrice  : 1303,
        taxPercent : 10,
        price      : 1433.3,
        weight     : 0.69,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-16-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-16-01.jpg',
            'assets/images/apps/ecommerce/products/property-16-02.jpg',
            'assets/images/apps/ecommerce/products/property-16-03.jpg'
        ],
        active     : false
    },
    {
        id         : '149e6db5-4ecc-4021-bc56-08b27514a746',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name: 'Commercial Plot Ready for Construction',
        description: 'A prime commercial plot available for immediate construction, ideal for businesses looking to build offices, retail spaces, or other commercial developments in a strategic location.',
        arabicdesc: 'أرض تجارية جاهزة للبناء، مثالية للشركات التي تتطلع إلى بناء مكاتب أو مساحات تجارية أو تطويرات تجارية أخرى في موقع استراتيجي.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ALV-194',
        yearbuilt    : '1909',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Ranch',
        reserved   : 2,
        cost       : 670.87,
        basePrice  : 1537,
        taxPercent : 8,
        price      : 1659.96,
        weight     : 0.66,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-17-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-17-01.jpg',
            'assets/images/apps/ecommerce/products/property-17-02.jpg',
            'assets/images/apps/ecommerce/products/property-17-03.jpg'
        ],
        active     : false
    },
    {
        id         : '655287de-2e24-41f3-a82f-8b08548ecc39',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Showroom Space with Road Facing Frontage',
        description: 'A prime showroom space offering excellent road-facing frontage, ideal for businesses looking to attract high foot traffic and showcase their products or services in a highly visible location.',
        arabicdesc: 'مساحة عرض مميزة مع واجهة تواجه الطريق، مثالية للأعمال التجارية التي ترغب في جذب حركة مرور كبيرة وعرض منتجاتها أو خدماتها في موقع بارز.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADH-5492',
        yearbuilt    : '1000',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'Villa',
        reserved   : 2,
        cost       : 645.13,
        basePrice  : 1581,
        taxPercent : 10,
        price      : 1739.1,
        weight     : 0.54,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-18-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-18-01.jpg',
            'assets/images/apps/ecommerce/products/property-18-02.jpg',
            'assets/images/apps/ecommerce/products/property-18-03.jpg'
        ],
        active     : true
    },
    {
        id         : 'c215b427-d840-4537-aea1-a9bdfa49441b',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name: 'Residential Plot in Gated Layout',
        description: 'A well-positioned residential plot located in a secure gated community, offering a peaceful environment for building your dream home, with easy access to local amenities and main roads.',
        arabicdesc: 'قطعة أرض سكنية تقع في مجتمع مسور، توفر بيئة هادئة لبناء منزل أحلامك، مع سهولة الوصول إلى المرافق المحلية والطرق الرئيسية.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'AAT-6702',
        yearbuilt    : '2000',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Cottage',
        reserved   : 3,
        cost       : 704.26,
        basePrice  : 1733,
        taxPercent : 10,
        price      : 1906.3,
        weight     : 0.84,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-19-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-19-01.jpg',
            'assets/images/apps/ecommerce/products/property-19-02.jpg',
            'assets/images/apps/ecommerce/products/property-19-03.jpg'
        ],
        active     : true
    },
    {
        id         : '8b1d9366-891e-49cd-aafb-ac65ce2741e2',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name: 'Agricultural Land with Water Access',
        description: 'A fertile agricultural land with reliable water access, ideal for farming or agricultural development, offering plenty of space for cultivation and growth.',
        arabicdesc: 'أرض زراعية خصبة مع وصول موثوق إلى المياه، مثالية للزراعة أو التطوير الزراعي، توفر مساحة واسعة للزراعة والنمو.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'EDH-5599',
        yearbuilt    : '1990',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 'Co-op Housing',
        reserved   : 2,
        cost       : 712.66,
        basePrice  : 1711,
        taxPercent : 30,
        price      : 2224.3,
        weight     : 0.47,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-20-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-20-01.jpg',
            'assets/images/apps/ecommerce/products/property-20-02.jpg',
            'assets/images/apps/ecommerce/products/property-20-03.jpg'
        ],
        active     : false
    },
    {
        id         : '54e29534-518b-4006-b72a-f21fac6c4d5e',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name: 'Hill View Plot Ideal for Resorts',
        description: 'A stunning hill view plot, perfect for developing a resort or retreat, offering breathtaking natural views, tranquility, and a prime location for leisure or hospitality ventures.',
        arabicdesc: 'قطعة أرض ذات منظر تلال مذهل، مثالية لتطوير منتجع أو ملاذ، توفر مناظر طبيعية خلابة وهدوءًا وموقعًا مميزًا للمشاريع السياحية أو الضيافة.'
      ,
      beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADP-3719',
        yearbuilt    : '1980',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 'Single House',
        reserved   : 3,
        cost       : 374.38,
        basePrice  : 749,
        taxPercent : 8,
        price      : 808.92,
        weight     : 0.52,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-21-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-21-01.jpg',
            'assets/images/apps/ecommerce/products/property-21-02.jpg',
            'assets/images/apps/ecommerce/products/property-21-03.jpg'
        ],
        active     : false
    },
    {
        id         : '6a5726e8-c467-45ea-92ab-d83235a06405',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Lakefront Land Parcel – Great for Investment',
        description: 'A spacious property with potential for development, offering a tranquil setting and ample room for a variety of projects. Ideal for those seeking a peaceful location with growth opportunities.',
  arabicdesc: 'عقار واسع ذو إمكانيات للتطوير، يوفر بيئة هادئة ومساحة كبيرة لعدة مشاريع. مثالي لأولئك الذين يبحثون عن موقع هادئ مع فرص للنمو.'
,
beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,


        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-3399',
        yearbuilt    : '1991',
        brand      : '5913ee46-a497-41db-a118-ee506011529f',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 'Mobile House',
        reserved   : 2,
        cost       : 444.68,
        basePrice  : 1103,
        taxPercent : 18,
        price      : 1301.54,
        weight     : 0.56,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-22-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-22-01.jpg',
            'assets/images/apps/ecommerce/products/property-22-02.jpg',
            'assets/images/apps/ecommerce/products/property-22-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'd7d1d6df-e91f-4c53-982a-2720bc2b4cdd',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name: 'Vacant Land in Industrial Zone',
        description: 'A spacious piece of undeveloped land located within an industrial zone, ideal for setting up factories, warehouses, or other industrial projects.',
        arabicdesc: 'قطعة أرض شاغرة تقع في منطقة صناعية، مثالية لإنشاء المصانع أو المستودعات أو المشاريع الصناعية الأخرى.',
        beds:4,
        bathrooms: 2,
        SquareFeet:1002,
        lotSize:1210,

        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],  
        sku        : 'EAV-4030',
        yearbuilt    : '1751',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 'Residential',
        reserved   : 3,
        cost       : 538.72,
        basePrice  : 1213,
        taxPercent : 10,
        price      : 1334.3,
        weight     : 0.75,
        thumbnail  : 'assets/images/apps/ecommerce/products/property-23-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/property-23-01.jpg',
            'assets/images/apps/ecommerce/products/property-23-02.jpg',
            'assets/images/apps/ecommerce/products/property-23-03.jpg'
        ],
        active     : true
    }
];
