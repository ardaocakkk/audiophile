import {useEffect, useState} from "react";


const useDeviceType = () => {
    const [device, setDevice] = useState('desktop');

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width >= 1024) {
                setDevice('desktop');
            } else if (width >= 768) {
                setDevice('tablet');
            } else {
                setDevice('mobile');
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return device;
};

export default useDeviceType;