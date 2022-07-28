const MOCK_SHOP_DATA = [
    {
        id:'yargici1',
        name: 'Pace',
        img: 'https://images.unsplash.com/photo-1658893769271-c2461cab05b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        profile:'https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80',
        followers:122,
        productCount: 127,
        categories: ['Flowers', 'Gifts' , 'Food'],
        sampleProducts: [
            {
                id: 1,
                img: 'https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            },
            {
                id: 2,
                img: 'https://images.unsplash.com/photo-1658995526744-ebe2eed88a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 3,
                img: 'https://images.unsplash.com/photo-1658955578499-b76ef0e18e65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 4,
                img: 'https://images.unsplash.com/photo-1659010523604-e8ee8fc39adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
        ]
    },
    {
        id:'yargici2',
        name: 'Pace',
        img: 'https://images.unsplash.com/photo-1658951279624-196e3a907f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        profile:'https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80',
        followers:122,
        productCount: 127,
        categories: ['Flowers', 'Gifts' , 'Food'],
        sampleProducts: [
            {
                id: 1,
                img: 'https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            },
            {
                id: 2,
                img: 'https://images.unsplash.com/photo-1658995526744-ebe2eed88a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 3,
                img: 'https://images.unsplash.com/photo-1658955578499-b76ef0e18e65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 4,
                img: 'https://images.unsplash.com/photo-1659010523604-e8ee8fc39adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
        ]
    },
    {
        id:'yargici3',
        name: 'Pace',
        img: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        profile:'https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80',
        followers:122,
        productCount: 127,
        categories: ['Flowers', 'Gifts' , 'Food'],
        sampleProducts: [
            {
                id: 1,
                img: 'https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            },
            {
                id: 2,
                img: 'https://images.unsplash.com/photo-1658995526744-ebe2eed88a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 3,
                img: 'https://images.unsplash.com/photo-1658955578499-b76ef0e18e65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 4,
                img: 'https://images.unsplash.com/photo-1659010523604-e8ee8fc39adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
        ]
    },
    {
        id:'yargici4',
        name: 'Pace',
        img: 'https://images.unsplash.com/photo-1658995506563-5f5c4fc2ec33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
        profile:'https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80',
        followers:122,
        productCount: 127,
        categories: ['Flowers', 'Gifts' , 'Food'],
        sampleProducts: [
            {
                id: 1,
                img: 'https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            },
            {
                id: 2,
                img: 'https://images.unsplash.com/photo-1658995526744-ebe2eed88a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 3,
                img: 'https://images.unsplash.com/photo-1658955578499-b76ef0e18e65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 4,
                img: 'https://images.unsplash.com/photo-1659010523604-e8ee8fc39adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
        ]
    },
];


export const CATEGORY_IMAGES = [
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    'https://images.unsplash.com/photo-1613521140785-e85e427f8002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
    'https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  ]


export  {
    MOCK_SHOP_DATA,
};