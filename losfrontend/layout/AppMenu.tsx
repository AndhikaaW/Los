/* eslint-disable @next/next/no-img-element */
"use client"

import React, { use, useContext, useEffect, useState } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';

interface Sidebar {
    label: string;
    to_path: string;
    status: number;
}
const AppMenu = () => {
    const [sidebar, setSidebar] = useState<Sidebar[]>([]);
    const { layoutConfig } = useContext(LayoutContext);
    const [status, setStatus] = useState();

    useEffect(() => {
        const fetchSidebar = async () => {
            try {
                const storedUser = localStorage.getItem('user-info');

                if (storedUser) {
                    const user = JSON.parse(storedUser);
                    setStatus(user.status)
                    const userId = user.id
                    const response = await axios.get(`http://192.168.200.100:8000/api/user/${userId}/sidebars`);
                    setSidebar(response.data.sidebars);
                } else {
                    console.error('User info not found in localStorage');
                }
            } catch (error) {
                console.error('There was an error fetching the sidebar!', error);
            }
        };
        fetchSidebar();
    }, []);
    console.log(sidebar)

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Data Pemohon',
            // items: 
            // sidebar
            // .filter(item => item.status === 2)
            // .map(item => ({
            //     label: item.label,
            //     icon: 'pi pi-fw pi-file',
            //     to: item.to_path
            // }))
            items: sidebar.map(item => item.status === 2 ? {
                label: item.label,
                icon: 'pi pi-fw pi-file',
                to: item.to_path
            } : null).filter(item => item !== null)
            // items: [
            //     { label: 'Data Diri Pemohon', icon: 'pi pi-fw pi-id-card', to: '/pemohon' },
            //     { label: 'Financial', icon: 'pi pi-fw pi-chart-line', to: '/financial' },
            //     { label: 'Aspek Form', icon: 'pi pi-fw pi-file', to: '/aspekform' },
            //     { label: 'Jaminan', icon: 'pi pi-fw pi-shield', to: '/jaminan' },
            //     { label: '5c', icon: 'pi pi-fw pi-check-square', to: '/5c' },
            //     { label: 'Survey', icon: 'pi pi-fw pi-chart-bar', to: '/survey' },
            // ]
        }
    ];
    const modelAdmin: AppMenuItem[] = [
        {
            label: 'Status User',
            items: [{ label: 'Status User', icon: 'pi pi-fw pi-home', to: '/admin' }]
        },

    ];

    return (
        <MenuProvider>
            {status === 2 ? (
                <ul className="layout-menu">
                    {model.map((item, i) => {
                        return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                    })}
                </ul>
            ) :
                <ul className="layout-menu">
                    {modelAdmin.map((item, i) => {
                        return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                    })}
                </ul>
            }
        </MenuProvider>
    );
};

export default AppMenu;
