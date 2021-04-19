 import * as React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 const Meta = ({ description, lang, meta, title }) => {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             titleSpan
             description
           }
         }
       }
     `
   )
   
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = `${site.siteMetadata?.title}.${site.siteMetadata.titleSpan}`
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.social?.twitter || ``,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     />
   )
 }
 
 Meta.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Meta.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default Meta
 