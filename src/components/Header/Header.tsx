import React from 'react'

import './Header.scss'

// icons:
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'

interface PrintButtonProps {
  onClick: () => void
}

const Header: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <header className="Header">
      <div className="ui-container">
        <div className="Header_content">
          <span className="Header_logo">CVmaker</span>
          <button className="ui-button isLink" onClick={onClick}>
            <PrintIcon style={{ marginRight: '0.6rem' }} />
            Print
          </button>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  onClick: () => {},
}

export default Header
