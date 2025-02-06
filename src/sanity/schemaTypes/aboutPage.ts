

export default {
    title: 'About Page',
    name: 'aboutPage',
    type: 'document',
    fields:[ 
        {
            title:'Sections',
            name:'sections',
            type: 'array',
            of:[
                {type: 'aboutSection'},
                {type: 'aboutImageSection'},
                {type:'meetTheTeamSection'},
            ]
        }
    ]
}