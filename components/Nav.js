import React from 'react'
import LinkElementElement from './LinkElementElement'


const Nav = () => {
  return (
    <div>
    <LinkElement href="/login" as="/" title="Log">
      <a>LogIn</a>
    </LinkElement>
      <LinkElement href="/projects" title="projects">
        <a>Projects</a>
      </LinkElement>
      <LinkElement href="/new-account" title="account">
        <a>account</a>
      </LinkElement>
    </div>
  )
}

export default Nav
