import React from 'react'

import { FaProjectDiagram, FaMotorcycle } from 'react-icons/fa'
import {
    RiArrowUpSFill,
    RiMenuUnfoldFill,
    RiRoadMapLine,
    RiArrowDownSFill
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
