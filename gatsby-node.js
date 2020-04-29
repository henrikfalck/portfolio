/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Get data from WordPress
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

if (process.env.NODE_ENV === "development") {
  process.env.GATSBY_WEBPACK_PUBLICPATH = "/"
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const ProjectTemplate = path.resolve("./src/page-templates/project.js")
  // const PageTemplate = path.resolve("./src/templates/blog-post.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const Project = result.data.allWordpressPost.edges
    Project.forEach((post) => {
      createPage({
        path: `/${post.node.slug}`,
        component: ProjectTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })

    /* const Pages = result.data.allWordpressPage.edges
    Pages.forEach(page => {
      createPage({
        path: `/${page.node.slug}`,
        component: PageTemplate,
        context: {
          id: page.node.wordpress_id,
        },
      })
    }) */
  })
}
