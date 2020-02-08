import React from "react"
import Course from "../Courses/Course"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }, limit: 6) {
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
      <Title title="top" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(item => {
          return <Course key={item.id} {...item} />
        })}
      </div>
      <Link to="/courses" className="btn-primary">
        all courses
      </Link>
    </section>
  )
}

export default Courses
