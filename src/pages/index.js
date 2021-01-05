import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Grant For The Web Hackathon on DEV submission"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./gftw-logo.png" alt="Gatsby Scene" />
        <h1>
          Greetings everyone{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my website. This was created as a part of <a href={"https://dev.to/devteam/announcing-the-grant-for-the-web-hackathon-on-dev-3kd1"}>Grant For The Web Hackathon on DEV</a>.</p>
        <p>You can read my <a href={"https://dev.to/petr7555/placeholder-title-jb0"}>blog post on DEV</a>.</p>
        <p>Go to the blog section to find out more!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
