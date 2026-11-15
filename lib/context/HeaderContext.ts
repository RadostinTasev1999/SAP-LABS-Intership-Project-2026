import { useState, createContext, useContext } from "react";
import { appHeaderProps } from '@/lib/placeholderdata'


export const HeaderContext = createContext(appHeaderProps);

export function useHeaderContext(){

    return useContext(HeaderContext)
}