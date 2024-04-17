import React from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'

function SocialMediaButtons  ({description, icon, color, link}) {
    return (
        <>
        <Button
                  className="btn-icon-only rounded-circle"
                  color={color}
                  href={link}
                  id={`button-${icon}`}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className={`fa fa-${icon}`} />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target={`button-${icon}`}>
                  {description}
                </UncontrolledTooltip>
        </>
    )
}

export default   SocialMediaButtons
