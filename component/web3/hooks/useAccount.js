
import {useHooks} from "../../providers/providers/web3/index"

export const useAccount = () =>{
    return useHooks(hooks => hooks.useAccount)//here we are returning the inside function of the handler
}




