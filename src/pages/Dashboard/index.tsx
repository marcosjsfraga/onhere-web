import React, { useState, useCallback, useEffect, useMemo } from 'react';

import {
    Container,
    Header,
    HeaderContent,
    Profile,
    MenuContainer,
    Content,
} from './styles';

import logoImg from '../../assets/logo.png';
import { BiBarChartAlt, BiMapAlt, BiDetail, BiMobile, BiMapPin } from 'react-icons/bi';
import { FaBicycle, FaBusinessTime } from 'react-icons/fa';

// import { useAuth } from '../../hooks/auth';
// import api from '../../services/api';
import { Link } from 'react-router-dom';

import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';


// PAREI: 01:46 --> https://app.rocketseat.com.br/node/nivel-05/group/dashboard/lesson/agendamentos-da-api-2

const Dashboard: React.FC = () => {
    // const { user, signOut } = useAuth();

    /*
     * View
     */
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="Logo" />

                    {/* https://szhsin.github.io/react-menu/#installation */}
                    <MenuContainer>

                        <Menu menuButton={<MenuButton><FaBusinessTime />Planejamento</MenuButton>}>
                            <MenuItem>SubMenu 1</MenuItem>
                            <MenuItem>SubMenu 1</MenuItem>
                        </Menu>

                        <Menu menuButton={<MenuButton><BiDetail />Pedidos</MenuButton>}>
                            <MenuItem>SubMenu 1</MenuItem>
                            <MenuItem>SubMenu 1</MenuItem>
                        </Menu>

                        <Menu menuButton={<MenuButton><BiMapAlt />Roteirização</MenuButton>}>
                            <MenuItem>SubMenu 1</MenuItem>
                            <MenuItem>SubMenu 1</MenuItem>
                        </Menu>

                        <Menu menuButton={<MenuButton><FaBicycle />Pretadores</MenuButton>}>
                            <MenuItem>Entregadores</MenuItem>
                            <MenuItem>Transportadoras</MenuItem>
                            <MenuItem>Tabelas de Frete</MenuItem>
                        </Menu>

                        <Menu menuButton={<MenuButton><BiMobile />Mobilidade</MenuButton>}>
                            <MenuItem>SubMenu 1</MenuItem>
                            <MenuItem>SubMenu 1</MenuItem>
                        </Menu>

                        <Menu menuButton={<MenuButton><BiMapPin />Rastreamento</MenuButton>}>
                            <MenuItem>SubMenu 1</MenuItem>
                            <MenuItem>SubMenu 1</MenuItem>
                        </Menu>

                        <Menu menuButton={<MenuButton><BiBarChartAlt />Gestão</MenuButton>}>
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
            </Header>

            <Content>

            </Content>

        </Container>
    );
};

export default Dashboard;
