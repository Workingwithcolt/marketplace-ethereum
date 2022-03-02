import {default as Navbar} from "C:/Users/admin/Blockchain/marketplace-eth/component/common/navbar/index.js"
import {default as Footer} from 'C:/Users/admin/Blockchain/marketplace-eth/component/common/footer/index.js'
import {Web3Provider} from  "../../providers/providers/web3/index"
// import {Home } from "pages/index"
// import {Merketplace} from 'pages/marketplace/index'
export default function BaseLayout({children}){
    return(
      <Web3Provider> 
              <div className="relative max-w-7xl mx-auto px-4">
              <Navbar/>
                <div className="fit">
                {children}
                </div>
              </div>
              <Footer/>
      </Web3Provider>       
    )
}


