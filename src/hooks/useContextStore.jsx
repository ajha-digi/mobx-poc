import { useContext } from "react";
import { RootContext } from "../context/RootContext";

function useContextStore() {
   const {myName, setMyName} = useContext(RootContext)
  return {myName, setMyName}
}

export default useContextStore;