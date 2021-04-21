import React from 'react'

import { FaProjectDiagram, FaMotorcycle } from 'react-icons/fa'
import {
    RiArrowDownSLine,
    RiArrowUpSLine,
    RiMenuUnfoldFill,
    RiMotorbikeFill,
    RiRoadMapLine
} from 'react-icons/ri'
import { AiOutlineDashboard } from 'react-icons/ai'
import { SiOpenstreetmap } from 'react-icons/si'
import { GoClippy, GoDeviceMobile, GoGraph } from 'react-icons/go'

export const MenuData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiOutlineDashboard />,
        iconClosed: <RiArrowDownSLine />,
        iconOpened: <RiArrowUpSLine />,
    },
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
