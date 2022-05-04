import { createContext, useState, useContext, useEffect } from "react";

const ToastContext = createContext();

export function ToastProvider({children}){

    const [toast, setToast] = useState({
        open: null,
        message: null,
        error: null
    });

    useEffect(() => {
        if(toast.open){
            let myTimeout = setTimeout(() => {
                setToast({
                    open: null,
                    message: null,
                    error: null
                });
            }, 5000);

            return () => {
                clearTimeout(myTimeout);
            };
        }
    }, [toast, setToast]);

    return(
        <ToastContext.Provider value={{toast, setToast}}>
            {children}
        </ToastContext.Provider>
    );
};

export function useToast(){
    return useContext(ToastContext);
};