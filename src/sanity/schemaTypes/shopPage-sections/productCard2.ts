export default {
    title: 'ProductCard2 Section',
    name: 'productCard2',
    type: 'object',
    fields:[
        // one time
        {title: 'ProductCard Section Heading', name:'productCardSectionHeading',type:'string'},
 


        // again n again
        {
         title:'ProductCard2',
         name:'productCard2',
         type:'array',
         of:[
           {
            type:'object',
            fields:[
                {title:'ProductCard2 Id', name:'productCard2Id', type:'number'},
                {title:'ProductCard2 Image', name:'productCard2Image', type:'image'},
                {title:'ProductCard2 Heading', name:'productCard2Heading', type:'string'},
                {title:'ProductCard2 SubHeading', name:'productCard2SubHeading', type:'string'},
                {title:'ProductCard2 OriginalPrice', name:'productCard2OriginalPrice', type:'number'},
                {title:'ProductCard2 SalePrice', name:'productCard2SalePrice', type:'number'},
            ]
           }
         ]
        },

    ],
}