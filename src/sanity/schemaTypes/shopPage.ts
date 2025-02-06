export default{
    title: 'Shop Page',
    name: 'shopPage',
    type: 'document',
    fields:[ 
        {
            title:'Sections',
            name:'sections',
            type: 'array',
            of:[
                {type: 'cardsSection'},
                {type:'cardImage'},
                {type:'productCard2'},
            ]
        }
    ]
}