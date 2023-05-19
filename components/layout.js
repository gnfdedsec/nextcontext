import Navbar from "./navbar";

export default function layout({children}) {
    return (
        <div>
            <Navbar />
                        layout {children}
        </div>
    );
}


