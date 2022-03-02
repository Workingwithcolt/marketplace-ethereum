import {handler as createAccountHook} from './useAccount'
import {handler as createNetworkHook } from './useNetwork'
// export const DEFAULT_HOOKS = {
//     useAccount: () =>({account:"null"})
// }
export const setupHooks =(...deps) =>{//if we dont remember which parameter you pass you can do instead of writing 
    //manually You can write ...deps
    // if(!web3){
    //     return DEFAULT_HOOKS
    // }
    console.log("Setting up the hook")
    return {
        useAccount:createAccountHook(...deps),
        useNetwork:createNetworkHook(...deps)//Here retunr the function 
    }
}
