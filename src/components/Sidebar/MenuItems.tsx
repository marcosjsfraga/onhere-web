import React from 'react'

import { AiOutlineDashboard } from 'react-icons/ai'
import { BiHome } from 'react-icons/bi'
import { BsCardChecklist } from 'react-icons/bs'


import { FaProjectDiagram, FaMotorcycle, FaPeopleCarry } from 'react-icons/fa'
import { GoClippy, GoDeviceMobile, GoGraph } from 'react-icons/go'
import { HiUsers, HiUserGroup } from 'react-icons/hi'
import {
    RiArrowUpSFill,
    RiMenuUnfoldFill,
    RiRoadMapLine,
    RiArrowDownSFill
} from 'react-icons/ri'
import { SiOpenstreetmap } from 'react-icons/si'


export const MenuItems = [
    // Dashboard
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiOutlineDashboard />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    // Planejamento
    {
        title: 'Planejamento',
        path: '#',
        icon: <FaProjectDiagram />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            { title: 'Usuários',         icon: <HiUsers />, path: '/users' },
            { title: 'Grupos de Acesso', icon: <HiUserGroup />, path: '#' },
            { title: 'Filiais',          icon: <BiHome />, path: '#' },
            { title: 'Entregadores',     icon: <FaPeopleCarry />, path: '#' },
            { title: 'Atividades',       icon: <BsCardChecklist />, path: '#' },
        ]
    },
    // Pedidos
    {
        title: 'Pedidos',
        path: '#',
        icon: <GoClippy />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Submenu 1',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
    // Roteirização
    {
        title: 'Roteirização',
        path: '#',
        icon: <SiOpenstreetmap />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Submenu 1',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
    // Prestadores
    {
        title: 'Prestadores',
        path: '#',
        icon: <FaMotorcycle />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Entregadores',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
            {
                title: 'Transportadoras',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
            {
                title: 'Tabelas de Frete',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
    // Mobilidade
    {
        title: 'Mobilidade',
        path: '#',
        icon: <GoDeviceMobile />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Submenu 1',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
    // Rastreamento
    {
        title: 'Rastreamento',
        path: '#',
        icon: <RiRoadMapLine />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Submenu 1',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
    // Gestão
    {
        title: 'Gestão',
        path: '#',
        icon: <GoGraph />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Submenu 1',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
]
