// import React from 'react'
// import { graphql } from 'gatsby'

// import Layout from '../components/layout/layout'
// import SEO from '../components/seo'

// export const query = graphql`
//   query($id: ID!) {
//     wpgraphql {
//       page(id: $id) {
//         title
//         content
//         id
//       }
//     }
//   }
// `

// const PageTemplage = ({
//   data: {
//     wpgraphql: { page },
//   },
// }) => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>{page.title}</h1>
//     <div
//       className="content"
//       dangerouslySetInnerHTML={{ __html: page.content }}
//     />
//     {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
//   </Layout>
// )

// export default PageTemplage
