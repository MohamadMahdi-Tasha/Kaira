// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Creating and exporting Home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className={'bg-black flex justify-center items-center min-h-screen'}>
            <h1>Home page</h1>
        </div>
    );
}