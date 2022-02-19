
import {useHooks} from "../../providers/providers/web3/index"

export const useAccount = () =>{
    return useHooks(hooks => hooks.useAccount)
}



