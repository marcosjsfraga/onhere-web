// Source: https://www.youtube.com/watch?v=mN3P_rv8ad4
import React, { useState } from 'react'

import { MenuData } from './MenuData'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import { NavIcon, SidebarNav, SidebarWrap, NavIconClose } from './styles';
import SubMenu from './SubMenu';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    // console.log(sidebar)

    return (
        <>
            <NavIcon to='#' sidebar={sidebar}>
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>

            <SidebarNav sidebar={sidebar} >
                <SidebarWrap>
                    <NavIconClose to='#' sidebar={sidebar} >
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIconClose>
                    {MenuData.map((item, index) => {
                        return <SubMenu key={item.title} item={item} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar
