// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {Metadata} from "next";
import {Marcellus} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import '@/app/index.css';

// Defining font
const MarcellusFont:NextFont = Marcellus({
    weight: '400',
    subsets: ['latin']
})

// Defining metadata of pages
export const metadata:Metadata = {
    title: 'Kaira',
    description: 'A online shopping website built by mahdi tasha as a resume project and of course for love of coding :))',
    keywords: ['resume', 'online', 'shop', 'online shopping', 'mahdi tasha', 'github', 'front-end', 'iran'],
    twitter: {
        title: 'Kaira',
        description: 'A online shopping website built by mahdi tasha as a resume project and of course for love of coding :))',
    },
    openGraph: {
        title: 'Kaira',
        description: 'A online shopping website built by mahdi tasha as a resume project and of course for love of coding :))',
        type: 'website'
    }
}

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting root layout of pages as default
export default function RootLayoutComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={MarcellusFont.className}>
                {children}
            </body>
        </html>
    );
}