"use client"
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputSwitch } from 'primereact/inputswitch';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import Debiturpage from './debitur/page';

// interface Sidebar {
//     sidebar_id: number;
//     label: string;
//     to_path: string;
//     status: number;
//     children?: Sidebar[];
// }

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     sidebars: Sidebar[];
// }

const Adminpage = () => {
    // const [users, setUsers] = useState<User[]>([]);
    // const toast = useRef<Toast>(null);

    // const handleSync = async () => {
    //     try {
    //         const response = await axios.put(API_ENDPOINTS.SYNC_SIDEBAR);
    //         alert(response.data.message);
    //     } catch (error) {
    //         console.error('Error syncing sidebars:', error);
    //         alert('Failed to sync sidebars.');
    //     }
    // };

    // useEffect(() => {
    //     const allUserSidebar = async () => {
    //         try {
    //             const response = await axios.get(API_ENDPOINTS.GETSIDEBAR);
    //             setUsers(response.data);
    //             console.log(response.data)
    //         } catch (error) {
    //             console.error('There was an error fetching the sidebar!', error);
    //             if (toast.current) {
    //                 toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to fetch user data' });
    //             }
    //         }
    //     };
    //     allUserSidebar();
    // }, []);

    // const handleToggleStatus = async (userId: number, sidebar: Sidebar) => {
    //     try {
    //         const response = await axios.post(API_ENDPOINTS.UPDATE_STATUS_SIDEBAR, {
    //             user_id: userId,
    //             sidebar_id: sidebar.sidebar_id,
    //         });

    //         const { new_status } = response.data;

    //         setUsers(prevUsers => prevUsers.map(user => {
    //             if (user.id === userId) {
    //                 return {
    //                     ...user,
    //                     sidebars: user.sidebars.map(s =>
    //                         s.sidebar_id === sidebar.sidebar_id ? { ...s, status: new_status } : s
    //                     )
    //                 };
    //             }
    //             return user;
    //         }));

    //         if (toast.current) {
    //             toast.current.show({ severity: 'success', summary: 'Status Updated', detail: 'Sidebar status updated successfully' });
    //         }
    //     } catch (error) {
    //         console.error('Error updating sidebar status:', error);
    //         if (toast.current) {
    //             toast.current.show({ severity: 'error', summary: 'Update Failed', detail: 'Failed to update the sidebar status' });
    //         }
    //     }
    // };


    // const SidebarItem = ({ sidebar, userId, isChild }: { sidebar: Sidebar, userId: number, isChild?: boolean }) => {
    //     return (
    //         <div>
    //             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    //                 <span className={`py-2 ${isChild ? 'ml-4' : ''}`}>{sidebar.label}</span>
    //                 {!isChild && (
    //                     <InputSwitch
    //                         checked={sidebar.status === 2}
    //                         onChange={() => handleToggleStatus(userId, sidebar)}
    //                         className="ml-2"
    //                     />
    //                 )}
    //             </div>
    //             {sidebar.children && sidebar.children.length > 0 && (
    //                 <div className='ml-4'>
    //                     {sidebar.children.map((child, index) => (
    //                         <SidebarItem key={index} sidebar={child} userId={userId} isChild={true} />
    //                     ))}
    //                 </div>
    //             )}
    //         </div>
    //     );
    // };

    // const SidebarList = ({ sidebars, userId }: { sidebars: Sidebar[], userId: number }) => {
    //     return (
    //         <ul>
    //             {sidebars.map((sidebar, index) => (
    //                 <SidebarItem key={index} sidebar={sidebar} userId={userId} />
    //             ))}
    //         </ul>
    //     );
    // };

    // const sidebarTemplate = (rowData: User) => {
    //     return <SidebarList sidebars={rowData.sidebars} userId={rowData.id} />;
    // };

    return (
        <div>
            <Debiturpage/>
            {/* <div className='flex align-items-center justify-content-end '>
                <label htmlFor="">Refresh</label>
                <Button icon="pi pi-refresh" rounded text aria-label="Filter" onClick={handleSync} />
            </div> */}
            {/* <Toast ref={toast} />
            <DataTable value={users} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="User ID" />
                <Column field="name" header="User Name" />
                <Column field="email" header="Email" />
                <Column header="Sidebars" body={sidebarTemplate} />
            </DataTable> */}
        </div>
    );
}

export default Adminpage;