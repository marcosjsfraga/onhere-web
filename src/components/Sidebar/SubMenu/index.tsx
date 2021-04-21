import React, { useState } from 'react'

import { SidebarLabel, SidebarLink, DropDownLink } from './styles';

interface SidebarLinkProps {
    item: {
        title: string
        path: string
        icon: JSX.Element
        iconClosed: JSX.Element
        iconOpened: JSX.Element
        subNav?: {
            title: string
            path: string
            icon: JSX.Element
        }[]
    }
}

// const OnHeader: React.FC = () => (

const SubMenu: React.FC<SidebarLinkProps> = (item) => {
    const [subNav, setSubNav] = useState(false)

    const showSubNav = () => {
        setSubNav(!subNav)
    }

    return (
        <>
            <SidebarLink to={item.item.path} onClick={item.item.subNav && showSubNav}>
                <div>
                    {item.item.icon}
                    <SidebarLabel>{item.item.title}</SidebarLabel>
                </div>
                <div>
                    {item.item.subNav && subNav
                        ? item.item.iconOpened : item.item.subNav
                        ? item.item.iconClosed : null }
                </div>
            </SidebarLink>
            {subNav && item.item.subNav?.map((snItem, index) => {
                return (
                    <DropDownLink to={snItem.path}>
                        {snItem.icon}
                        <SidebarLabel>{snItem.title}</SidebarLabel>
                    </DropDownLink>
                )
            })}

        </>
    )
}

export default SubMenu
