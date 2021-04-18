import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, titleSpan, description, children, author }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          <Link to="/">{title}<span className="font-normal">{titleSpan}</span></Link>
        </h1>
        <p className="text-lg text-gray-700">{description}</p>
      </>
    )
  } else {
    header = (
      <Link className="header-link-home font-noto" to="/">
        <span className="font-bold">{title}</span><span className="font-normal">{titleSpan}</span>
      </Link>
    )
  }

  return (
    <div className="bg-white dark:bg-black max-w-2xl mx-auto mt-2 p-4" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="text-center text-sm font-noto mt-4 mb-2">
        <p>
          <a href={author?.linkedin}><StaticImage alt={`${author?.name} LinkedIn`} className="mr-1" src="../images/iconmonstr-linkedin-3.svg"/></a>
          <a href to={author?.twitter}><StaticImage alt={`${author?.name} Twitter`} className="ml-1" src="../images/iconmonstr-twitter-3.svg"/></a>
        </p>
        <p><a href="https://github.com/fede/federatier.com">Source code</a></p>
      </footer>
    </div>
  )
}

export default Layout
