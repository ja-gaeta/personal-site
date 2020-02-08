import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Courses from "../components/Home/LatestCourses"

const IndexPage = () => (
  <Layout>
    <HomeBanner />
    <Courses />
  </Layout>
)

export default IndexPage
