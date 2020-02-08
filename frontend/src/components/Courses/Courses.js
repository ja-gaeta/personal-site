import React from "react"
import Course from "./Course"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }) {
      nodes {
        title
        url
        size
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
      }
    }
  }
`

const Courses = () => {
  const {
    allStrapiCourse: { nodes: courses },
  } = useStaticQuery(query)

  return (
    <section className={styles.courses}>
      <Title title="all" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(item => {
          return <Course key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Courses
