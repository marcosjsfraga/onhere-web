import React, { useState, useCallback, useEffect, useMemo } from 'react';

import {
    Container,
    Content,
} from './styles';

// import { useAuth } from '../../hooks/auth';
// import api from '../../services/api';

import OnHeader from '../../components/OnHeader';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from '../../components/Sidebar';


const Dashboard: React.FC = () => {
    // const { user, signOut } = useAuth();

    /*
     * View
     */
    return (

        // https://www.youtube.com/watch?v=mN3P_rv8ad4
        <Container>
            {/* <OnHeader /> */}

            <Sidebar />

            <Content>
            </Content>
        </Container>
    );
};

export default Dashboard;
