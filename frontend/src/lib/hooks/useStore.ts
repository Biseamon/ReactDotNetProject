import { useContext } from "react";
import { StoreContext } from "../util/store/store";

export function useStore() {
    return useContext(StoreContext);
}