// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Getting URL of current page
    const pathname:string = usePathname();

    // Defining state of component
    const [isInHomePage, setIsInHomePage]:[boolean, Dispatch<boolean>] = useState((pathname === '/'));

    // Returning JSX
    return (
        <header data-is-home={isInHomePage} className={'bg-red-500 w-full p-[20px] transition-all fixed top-0 left-0 duration-500 border-b data-[is-home="true"]:bg-transparent data-[is-home="true"]:hover:bg-white data-[is-home="true"]:hover:border-b-black/10 data-[is-home="true"]:text-white data-[is-home="true"]:hover:text-black data-[is-home="true"]:border-b-white/10 data-[is-home="false"]:bg-white data-[is-home="true"]:border-b-black/10'}>
            <div className={'container flex gap-[20px] items-center'}>
                <Link className={'text-[30px] shrink-0'} href={'/'}>KAIRA</Link>
                <ul className={'mx-auto flex gap-[20px]'}>
                    <li><Link className={'text-current truncate'} href={'/'}>HOME</Link></li>
                    <li><Link className={'text-current truncate'} href={'/'}>ABOUT</Link></li>
                    <li><Link className={'text-current truncate'} href={'/'}>SHOP</Link></li>
                    <li className={'group'}>
                        <Link className={'text-current truncate'} href={'/'}>
                            PAGES
                            <i className={'bi bi-chevron-down'} />
                        </Link>
                        <div className={'absolute p-[20px] top-full left-0 w-full bg-white transition-all duration-500 invisible opacity-0 group-hover:visible group-hover:opacity-100'}>
                            <ul className={'flex container justify-between gap-[20px] flex-wrap items-start'}>
                                <li className={'max-w-[200px]'}>
                                    <span className={'text-black block truncate mb-[20px]'}>SHOP LISTS</span>
                                    <ul className={'flex flex-col gap-[5px]'}>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Right Sidebar</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Slider</Link></li>
                                    </ul>
                                </li>
                                <li className={'max-w-[200px]'}>
                                    <span className={'text-black block truncate mb-[20px]'}>SHOP LAYOUTS</span>
                                    <ul className={'flex flex-col gap-[5px]'}>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>three Columns</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>three Columns Wide</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Four Columns</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Four Columns Wide</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Five Columns Wide</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Six Columns Wide</Link></li>
                                    </ul>
                                </li>
                                <li className={'max-w-[200px]'}>
                                    <span className={'text-black block truncate mb-[20px]'}>SHOP SINGLE</span>
                                    <ul className={'flex flex-col gap-[5px]'}>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Standard Products</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'#'}>Large Images</Link></li>
                                    </ul>
                                </li>
                                <li className={'max-w-[200px]'}>
                                    <span className={'text-black block truncate mb-[20px]'}>SHOP PAGES</span>
                                    <ul className={'flex flex-col gap-[5px]'}>
                                        <li><Link className={'text-black/70 block truncate'} href={'/profile/u'}>My Account</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'/wishlist'}>Wishlist</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'/cart'}>Cart</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'/checkout'}>Checkout</Link></li>
                                        <li><Link className={'text-black/70 block truncate'} href={'/orderTracking'}>Order Tracking</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul className={'flex gap-[10px]'}>
                    <li><Link className={'text-current'} href={'/wishlist'}>WISHLIST (0)</Link></li>
                    <li><Link className={'text-current'} href={'/cart'}>CART (0)</Link></li>
                    <li><Link className={'text-current'} href={'/profile/u'}><i className={'bi bi-person'} /></Link></li>
                    <li><button className={'text-current'}><i className={'bi bi-list'} /></button></li>
                </ul>
            </div>
        </header>
    );
}