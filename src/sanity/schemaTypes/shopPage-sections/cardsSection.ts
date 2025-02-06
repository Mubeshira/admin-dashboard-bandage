export default {
    title: 'Cards Section',
    name: 'cardsSection',
    type: 'object',
    fields:[
        {
            title:'Cards',
            name:'card',
            type:'array',
            of:[
                {
                    type:'object',
                    fields:[
                        {title:'Card Section Image', name:'cardSecImg', type:'image'},
                        
                    ]
                },
            ]
        }
    ]
}