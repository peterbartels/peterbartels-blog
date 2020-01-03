import S from '@sanity/desk-tool/structure-builder'
//import MdSettings from 'react-icons/lib/md/settings'

/* 
 * copied from: https://github.com/sanity-io/sanity-template-gatsby-portfolio
 * docs: https://www.sanity.io/guides/getting-started-with-structure-builder 
 *
*/

const hiddenDocTypes = listItem =>
  !['personalInformation'].includes(listItem.getId())

export default () =>
  S.list()
   .title('Content')
   .items([
     S.listItem()
      .title('Personal Information')
      .child(
        S.editor()
         .id('personalInformation')
         .schemaType('personalInformation')
         .documentId('personalInformation')
      ),
     //.icon(MdSettings),
     // This returns an array of all the document types
     // defined in schema.js. We filter out those that we have
     // defined the structure above
     ...S.documentTypeListItems().filter(hiddenDocTypes)
   ])
