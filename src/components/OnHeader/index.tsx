import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../Sidebar';

import logoImg from '../../assets/logo.png';

import { HeaderContainer, HeaderContent,  Profile } from './styles';


const OnHeader: React.FC = () => (
    <HeaderContainer>
        <HeaderContent>

            <Sidebar />

            <img src={logoImg} alt="Logo" />

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
