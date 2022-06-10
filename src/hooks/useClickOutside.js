import { useEffect, useRef } from "react";

export default function useClickOutside(handler){
    
    const ref = useRef(null);
    
    useEffect(() => {
        const callback = (e) => {
            if(!ref.current.contains(e.target)){
                handler();
            }
        };
        
        document.addEventListener('mousedown', callback);
    
        return () => {
            document.removeEventListener('mousedown', callback);
        };
    });

    return ref;
}