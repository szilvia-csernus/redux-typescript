import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;

// in this hook, we are adding extra type information to the useDispatch hook!
export const useCartDispatch: DispatchFunction = useDispatch;