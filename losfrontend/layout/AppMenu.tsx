/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Data Pemohon',
            items: [
                { label: 'Data Diri Pemohon', icon: 'pi pi-fw pi-id-card', to: '/pemohon' },
                { label: 'Financial', icon: 'pi pi-fw pi-check', to: '/financial' },
                { label: 'Aspek Form', icon: 'pi pi-fw pi-file', to: '/aspekform' },
                { label: 'Jaminan', icon: 'pi pi-fw pi-shield', to: '/jaminan' },
                { label: '5c', icon: 'pi pi-fw pi-check-square', to: '/5c' },
                { label: 'Survey', icon: 'pi pi-fw pi-chart-bar', to: '/survey' },
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
