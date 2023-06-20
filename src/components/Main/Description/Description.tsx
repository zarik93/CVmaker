import React from 'react'
import classNames from 'classnames'

interface DescriptionProps {
  isPrimary: boolean
  isSecondary: boolean
  //className?: string
  children?: React.ReactNode
}

const Description: React.FC<DescriptionProps> = ({
  isPrimary,
  isSecondary,
  //className,
  children,
  ...attrs
}) => {
  const classes = classNames('ui-text', {
    isPrimary,
    isSecondary,
  })

  return (
    <p
      className={classes}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      {...attrs}
    >
      {children}
    </p>
  )
}

export default Description
