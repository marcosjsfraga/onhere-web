import React from 'react'

import { FaProjectDiagram, FaMotorcycle } from 'react-icons/fa'
import {
    RiArrowDownSLine,
    RiArrowUpSLine,
    RiMenuUnfoldFill,
    RiRoadMapLine
} from 'react-icons/ri'
import { AiOutlineDashboard } from 'react-icons/ai'
import { SiOpenstreetmap } from 'react-icons/si'
import { GoClippy, GoDeviceMobile, GoGraph } from 'react-icons/go'

export const MenuData = [
    // Dashboard
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiOutlineDashboard />,
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
    },
    // Planejamento
    {
        title: 'Planejamento',
        path: '#',
        icon: <FaProjectDiagram />,
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
        subNav: [
            {
                title: 'Submenu 1',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
    // Pedidos
    {
        title: 'Pedidos',
        path: '#',
        icon: <GoClippy />,
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
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
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
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
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
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
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
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
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
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
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
        subNav: [
            {
                title: 'Submenu 1',
                path: '#',
                icon: <RiMenuUnfoldFill />,
            },
        ]
    },
]
