import {useHooks} from "../../providers/providers/web3/index"


const enhancedHook = (swrResponse) =>{
    return {
        ...swrResponse,
        hasinitialresponse:swrResponse.data
    }
}
//here we wrap the enhancedHook to the bellow  function so that bellow function can access the values of the 
//swrResponse
export const useAccount = () =>{
    return enhancedHook(useHooks(hooks => hooks.useAccount()))//here we are returning the inside function of the handler
}


export const useNetwork = () =>{
    return enhancedHook(useHooks(hooks => hooks.useNetwork()))//here we are returning the inside function of the handler
}


