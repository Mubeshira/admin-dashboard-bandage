export default {
    title: 'MeetTheTeam Section',
    name: 'meetTheTeamSection',
    type: 'object',
    fields:[
        // one time
        {title: 'MeetTheTeam Section Heading', name:'meetTheTeamSectionHeading',type:'string'},
    
        {title: 'MeetTheTeam Section Para', name:'meetTheTeamSectionPara',type:'string'},


        // again n again
        {
         title:'MeetTheTeamCard',
         name:'meetTheTeamCard',
         type:'array',
         of:[
           {
            type:'object',
            fields:[
                {title:'MeetTheTeamCard Image', name:'meetTheTeamCardImage', type:'image'},
                {title:'MeetTheTeamCard Heading', name:'meetTheTeamCardHeading', type:'string'},
                {title:'MeetTheTeamCard SubHeading', name:'meetTheTeamCardSubHeading', type:'string'},

            ]
           }
         ]
        },

    ],
}