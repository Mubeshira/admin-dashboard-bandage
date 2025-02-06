import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPage'
import hero from './landingpage-sections/hero'
import editorsPickSection from './landingpage-sections/editorsPickSection'
import greenDivSection from './landingpage-sections/greenDivSection'
import productCardSection from './landingpage-sections/productCardSection'
import classicSection from './landingpage-sections/classicSection'
import featuredPostSection from './landingpage-sections/featuredPostSection'
import shopPage from './shopPage'
import cardsSection from './shopPage-sections/cardsSection'
import cardImage from './shopPage-sections/cardImage'
import productCard2 from './shopPage-sections/productCard2'
import aboutPage from './aboutPage'
import aboutSection from './aboutPage-sections/aboutSection'
import aboutImageSection from './aboutPage-sections/aboutImageSection'
import meetTheTeamSection from './aboutPage-sections/meetTheTeamSection'
import product from './product'
import { comment } from './comment'
import { userSchema } from './user'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, comment, userSchema, landingPage,
     hero, 
     editorsPickSection,
     greenDivSection,
     productCardSection , 
     classicSection,
     featuredPostSection,


     shopPage,
     cardsSection,
     cardImage,
     productCard2,

    aboutPage,
    aboutSection,
    aboutImageSection,
    meetTheTeamSection,

    
    
    ],
}
