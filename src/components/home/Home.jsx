import BestDealsHome from "./BestDealsHome";
import BestOfElectronics from "./BestOfElectronics";
// import BestSellersHome from "./BestSellersHome";
import HomeHead from "./HomeHead";
import TopStyles from "./TopStyles";

const Home = () => {
    
    return <>
            <HomeHead/>
            <BestOfElectronics/>
            <TopStyles/>
            <BestDealsHome/>
            {/* <BestSellersHome/> */}
    </>
}

export default Home;