import React, { ButtonHTMLAttributes } from 'react';

import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';


import { HeaderContainer, HeaderContent, MenuContainer, Profile } from './styles';

import logoImg from '../../assets/logo.png';
import { BiBarChartAlt, BiMapAlt, BiDetail, BiMobile, BiMapPin } from 'react-icons/bi';
import { FaBicycle, FaBusinessTime } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';



import { Link } from 'react-router-dom';


const OnHeader: React.FC = () => (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoImg} alt="Logo" />

            {/*
                https://negomi.github.io/react-burger-menu/
                https://szhsin.github.io/react-menu/#installation
            */}
            <MenuContainer>

                <Menu menuButton={<MenuButton>Planejamento<FiChevronDown /></MenuButton>}>
                    <MenuItem>SubMenu 1</MenuItem>
                    <MenuItem>SubMenu 1</MenuItem>
                </Menu>

                <Menu menuButton={<MenuButton>Pedidos<FiChevronDown /></MenuButton>}>
                    <MenuItem>SubMenu 1</MenuItem>
                    <MenuItem>SubMenu 1</MenuItem>
                </Menu>

                <Menu menuButton={<MenuButton>Roteirização<FiChevronDown /></MenuButton>}>
                    <MenuItem>SubMenu 1</MenuItem>
                    <MenuItem>SubMenu 1</MenuItem>
                </Menu>

                <Menu menuButton={<MenuButton>Prestadores<FiChevronDown /></MenuButton>}>
                    <MenuItem>Entregadores</MenuItem>
                    <MenuItem>Transportadoras</MenuItem>
                    <MenuItem>Tabelas de Frete</MenuItem>
                </Menu>

                <Menu menuButton={<MenuButton>Mobilidade<FiChevronDown /></MenuButton>}>
                    <MenuItem>SubMenu 1</MenuItem>
                    <MenuItem>SubMenu 1</MenuItem>
                </Menu>

                <Menu menuButton={<MenuButton>Rastreamento<FiChevronDown /></MenuButton>}>
                    <MenuItem>SubMenu 1</MenuItem>
                    <MenuItem>SubMenu 1</MenuItem>
                </Menu>

                <Menu menuButton={<MenuButton>Gestão<FiChevronDown /></MenuButton>}>
                    <MenuItem>SubMenu 1</MenuItem>
                    <MenuItem>SubMenu 1</MenuItem>
                </Menu>
            </MenuContainer>

            <Profile>
                <img src="https://avatars.githubusercontent.com/u/6868383?v=4" alt="Marcos Fraga" />
                {/* <img src={user.avatar_url} alt={user.name} /> */}
                <div>
                    <span>Bem-vindo</span>
                    <Link to="/profile">
                        {/* <strong>{user.name}</strong> */}
                        <strong>Marcos</strong>
                    </Link>
                </div>
            </Profile>
            {/* <button type="button" onClick={signOut}>
                <FiPower />
            </button> */}
        </HeaderContent>
    </HeaderContainer>

);

export default OnHeader;
