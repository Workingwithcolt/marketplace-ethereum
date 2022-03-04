import { useWeb3 } from "@component/providers/providers/web3";

export default function Walletbar({account,target,isSupported,data,hasinitialresponse}){
  const {requireinstall} = useWeb3()
  console.log(hasinitialresponse,"It is the ")  
  return(
        <section className="text-white bg-indigo-600 rounded-lg">
              <div className="p-8">
             Loading
             {
               `${hasinitialresponse}`
             }
             isSupported{
               `${!isSupported}`
             }
                <h1 className="text-2xl">Hello,{account}</h1>
                <h2 className="subtitle mb-5 text-xl">I hope you are having a great day!</h2>
                <div className="flex justify-between items-center">
                  <div className="sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                        Learn how to purchase 
                      </a>
                    </div>
                  </div>
                   { !isSupported && !hasinitialresponse  ?  
                          <div className = "bg-red-400 p-4 rounded-lg">
                          <div>Connected to Wrong Network</div>
                            Connect to : {''}
                            {target}
                          </div>
                          :
                          null
                      }
                      {
                        requireinstall && 
                        <div className ="bg-yellow-500 p-4 rounded-lg">
                        Cannot connect to network Please install metamask
                        </div>
                      }               
                    <div>
                      <span>Currently on </span>
                      <strong className="text-2xl">{data}</strong>
                      </div>
                  </div>
                </div>
            </section>
    )
}