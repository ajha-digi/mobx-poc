import React, {useState, useMemo} from "react";
import { RootContext } from "./RootContext";

function RootProvider({ children }) {
    const [myName, setMyName] = useState("Moni !!");
    const value = useMemo(()=>({myName, setMyName}),[myName, setMyName])
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export default RootProvider;
