import {useEffect, useState} from "react";
import {redirect} from "next/navigation";

const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setAuthenticated(true);
        }
    }, []);

    return authenticated;
}

export default useAuthentication;

