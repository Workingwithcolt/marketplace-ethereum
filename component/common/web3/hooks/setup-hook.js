import {handler as createUserAccount} from './useAccount'

// export const DEFAULT_HOOKS = {
//     useAccount: () =>({account:"null"})
// }
export const setupHooks =(...deps) =>{//if we dont remember which parameter you pass you can do instead of writing 
    //manually You can write ...deps
    // if(!web3){
    //     return DEFAULT_HOOKS
    // }
    return {
        useAccount:createUserAccount(...deps)//Here retunr the function 
    }
}
