/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import Link from 'next/link';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';


interface User {
    email: string,
    password: string,
    status: 2
}
const LoginPage = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        // setEmailError(validateEmail(newEmail) ? "" : "Masukkan alamat email yang valid");
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        // setPasswordError(newPassword.length >= 8 ? "" : "Kata sandi harus minimal 8 karakter");
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // setIsLoading(true);
        try {
            const response = await axios.post(
                API_ENDPOINTS.LOGIN,
                { email, password},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            if (response.data.status === 2) {
                localStorage.setItem('user-info', JSON.stringify(response.data));
                // router.push(`/?userId=${response.data.id}`);
                router.push('/');
            } else {
                localStorage.setItem('user-info', JSON.stringify(response.data));
                router.push("/admin");
            }
            // if (response.data) {
            // }
            //   if (response.data.success) {
            //     // login(response.data.user);
            //     // document.cookie = `auth_token=${response.data.token}; path=/;`;
            //     // setIsNavigating(true);
            //     router.push(response.data.status === 2 ? "/" : "/admin/dashboard");
            //   } else {
            //     // setShowAlert(true);
            //   }
        } catch (error) {
            console.error("Terjadi kesalahan!", error);
            //   setShowAlert(true);
        } finally {
            //   setIsLoading(false);
        }
    };
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
                            <span className="text-600 font-medium">Sign in to continue</span>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText
                                    id="email"
                                    name='email'
                                    type="email"
                                    placeholder="Alamat email"
                                    className="w-full md:w-30rem mb-3"
                                    style={{ padding: '1rem' }}
                                    value={email}
                                    onChange={handleEmailChange}
                                />

                                <label htmlFor="password" className="block text-900 font-medium text-xl mb-2">
                                    Password
                                </label>
                                <Password
                                    inputId="password"
                                    name='password'
                                    placeholder="Password"
                                    toggleMask
                                    className="w-full mb-2"
                                    inputClassName="w-full p-3 md:w-30rem"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />

                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                    {/* <div className="flex align-items-center">
                                    <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2"></Checkbox>
                                    <label htmlFor="rememberme1">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Forgot password?
                                </a> */}
                                    <Link href={'/auth/signup'} >
                                        <label htmlFor="" className='cursor-pointer'>Don't Have Account?</label>
                                    </Link>
                                </div>
                                <Button label="Sign In" className="w-full p-3 text-xl"></Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
