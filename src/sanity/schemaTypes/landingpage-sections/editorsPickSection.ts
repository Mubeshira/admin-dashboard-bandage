export default{
    title: 'EditorsPick Section',
    name: 'editorsPickSection',
    type: 'object',
    fields:[
        // one time
        {title:'EditorsPick Section Heading', name:'editorsPickSectionHeading', type:'string'},
        {title:'EditorsPick Section Para', name:'editorsPickSectionPara', type:'string'},
        
        // again n again
        {
          title:'EditorsPick',
          name:'editorsPick',
          type:'array',
          of:[
            {
            type:'object',
            fields:[
                {title:'Card Section Image', name:'cardSecImg', type:'image'},
                {title:'Card Section Button', name:'cardSecBtn', type:'string'},
                
              ]
            },
          ]
        },
    ]
}