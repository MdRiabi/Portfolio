import React from 'react'
import { NavItem, NavLink, UncontrolledTooltip } from 'reactstrap'

function NavItemWithToolTip({title, description, icon, link}) {
    return (
       
        <NavItem>
        <NavLink
          className="nav-link-icon"
          href={link}
          id={`tooltip-${icon}-${title}`}
          target="_blank"
        >
          <i className={`fa fa-${icon}`} />
          <span className="nav-link-inner--text d-lg-none ml-2">
            {title}
          </span>
        </NavLink>
        <UncontrolledTooltip delay={0} target={`tooltip-${icon}-${title}`}>
            {description}
        </UncontrolledTooltip>
      </NavItem>
        
    )
}

export default NavItemWithToolTip
