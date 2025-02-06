export default {
    title: 'FeaturedPost Section',
    name: 'featuredPostSection',
    type: 'object',
    fields:[
        {title:'FeaturedPost Section Heading', name:'featuredPostSectionHeading', type:'string'},
        {title:'FeaturedPost Section Heading2', name:'featuredPostSectionHeading2', type:'string'},
        {title:'FeaturedPost Section Para', name:'featuredPostSectionPara', type:'string'},

        // again n again
        {
          title:'FeaturedPost',
          name:'featuredPost',
          type:'array',
          of:[
            {
            type:'object',
            fields:[
                {title:'FeaturedPost Image', name:'featuredPostImage', type:'image'},
                {title:'FeaturedPost Button', name:'featuredPostBtn', type:'string'},
                {title:'FeaturedPost Heading', name:'featuredPostHeading', type:'string'},
                {title:'FeaturedPost SubHeading', name:'featuredPostSubHeading', type:'string'},
                {title:'FeaturedPost Paragraph', name:'featuredPostParagraph', type:'string'},
                {title:'FeaturedPost Date', name:'featuredPostDate', type:'string'},
                {title:'FeaturedPost Comments', name:'featuredPostComments', type:'number'},
            ]
            },
          ]
        },
        
    ]
}