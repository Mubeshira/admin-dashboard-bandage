export default {
    title: 'ProductCard Section',
    name: 'productCardSection',
    type: 'object',
    fields:[
        // one time
        {title: 'ProductCard Section Heading', name:'productCardSectionHeading',type:'string'},
        {title: 'ProductCard Section Heading2', name:'productCardSectionHeading2',type:'string'},
        {title: 'ProductCard Section Para', name:'productCardSectionPara',type:'string'},


        // again n again
        {
         title:'ProductCard',
         name:'productCard',
         type:'array',
         of:[
           {
            type:'object',
            fields:[
                {title:'ProductCard Image', name:'productCardImage', type:'image'},
                {title:'ProductCard Heading', name:'productCardHeading', type:'string'},
                {title:'ProductCard SubHeading', name:'productCardSubHeading', type:'string'},
                {title:'ProductCard OriginalPrice', name:'productCardOriginalPrice', type:'number'},
                {title:'ProductCard SalePrice', name:'productCardSalePrice', type:'number'},
            ]
           }
         ]
        },

    ],
}