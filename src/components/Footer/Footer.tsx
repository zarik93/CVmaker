import React from 'react'
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="ui-container">
        <a
          className="ui-link"
          href="https://github.com/zarik93/CVmaker"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  )
}

export default Footer
