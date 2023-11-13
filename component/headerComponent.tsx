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
        <header data-is-home={isInHomePage}>
            <Link href={'/'}>KAIRA</Link>
            <ul>
                <li><Link href={'/'}>HOME</Link></li>
                <li><Link href={'/'}>ABOUT</Link></li>
                <li><Link href={'/'}>SHOP</Link></li>
                <li>
                    <Link href={'/'}>
                        PAGES
                        <i className={'bi bi-chevron-down'} />
                    </Link>
                    <ul>
                        <li>
                            <span>SHOP LISTS</span>
                            <ul>
                                <li><Link href={'#'}>Right Sidebar</Link></li>
                                <li><Link href={'#'}>Slider</Link></li>
                            </ul>
                        </li>
                        <li>
                            <span>SHOP LAYOUTS</span>
                            <ul>
                                <li><Link href={'#'}>three Columns</Link></li>
                                <li><Link href={'#'}>three Columns Wide</Link></li>
                                <li><Link href={'#'}>Four Columns</Link></li>
                                <li><Link href={'#'}>Four Columns Wide</Link></li>
                                <li><Link href={'#'}>Five Columns Wide</Link></li>
                                <li><Link href={'#'}>Six Columns Wide</Link></li>
                            </ul>
                        </li>
                        <li>
                            <span>SHOP SINGLE</span>
                            <ul>
                                <li><Link href={'#'}>Standard Products</Link></li>
                                <li><Link href={'#'}>Large Images</Link></li>
                            </ul>
                        </li>
                        <li>
                            <span>SHOP PAGES</span>
                            <ul>
                                <li><Link href={'/profile/u'}>My Account</Link></li>
                                <li><Link href={'/wishlist'}>Wishlist</Link></li>
                                <li><Link href={'/cart'}>Cart</Link></li>
                                <li><Link href={'/checkout'}>Checkout</Link></li>
                                <li><Link href={'/orderTracking'}>Order Tracking</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><Link href={'/wishlist'}>WISHLIST (0)</Link></li>
                <li><Link href={'/cart'}>CART (0)</Link></li>
                <li><Link href={'/profile/u'}><i className={'bi bi-person'} /></Link></li>
                <li><button><i className={'bi bi-list'} /></button></li>
            </ul>
        </header>
    );
}