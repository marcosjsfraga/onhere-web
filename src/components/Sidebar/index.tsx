// Source: https://www.youtube.com/watch?v=mN3P_rv8ad4
import React, { useState } from 'react'

import { MenuData } from './MenuData'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import { Nav, NavIcon, SidebarNav, SidebarWrap } from './styles';
import SubMenu from './SubMenu';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar} >
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>
                    {MenuData.map((item, index) => {
                        return <SubMenu item={item} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar
