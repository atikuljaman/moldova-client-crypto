import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import MintNftPage from "./pages/MintNftPage/MintNftPage";
import DomainNamesPage from "./pages/DomainNamesPage/DomainNamesPage";
import WebsitesPage from "./pages/WebsitesPage/WebsitesPage";
import MarketPlacePage from "./pages/MarketPlacePage/MarketPlacePage";
import ActionPage from "./pages/ActionPage/ActionPage";
import ShopSettingsOne from "./pages/ShopSettingsOne/ShopSettingsOne";
import SellPage from "./pages/SellPage/SellPage";
import FullOnBlockchainNftPage from "./pages/FullOnBlockchainNftPage/FullOnBlockchainNftPage";
import CharitiesPage from "./pages/CharitiesPage/CharitiesPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import HomePageTwo from "./pages/HomePageTwo/HomePageTwo";
import SendCryptoPage from "./pages/SendCryptoPage/SendCryptoPage";
import ShippingQueue from "./pages/ShippingQueuePage/ShippingQueue";
import MyMovies from "./pages/MyMovies/MyMovies";
import ShoesboutiqueShib from "./pages/ShoesboutiqueShib/ShoesboutiqueShib";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoriesDetailsPage from "./pages/CategoriesDetailsPage/CategoriesDetailsPage";
import CategoriesShippingPage from "./pages/CategoriesShippingPage/CategoriesShippingPage";
import PrepareProductsPage from "./pages/PrepareProductsPage/PrepareProductsPage";
import ShippingDetailsPage from "./pages/ShippingDetailsPage/ShippingDetailsPage";
import AwaitingDeliveryPage from "./pages/AwaitingDeliveryPage/AwaitingDeliveryPage";
import MusicDetailsPage from "./pages/MusicDetailsPage/MusicDetailsPage";
import CharityDetailsPage from "./pages/CharityDetailsPage/CharityDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mint-nft" element={<MintNftPage />} />
        <Route path="domain-names" element={<DomainNamesPage />} />
        <Route path="websites" element={<WebsitesPage />} />
        <Route path="marketplace" element={<MarketPlacePage />} />
        <Route path="action" element={<ActionPage />} />
        <Route path="shop-settings-one" element={<ShopSettingsOne />} />
        <Route path="sell" element={<SellPage />} />
        <Route
          path="full-on-blockchain-nft"
          element={<FullOnBlockchainNftPage />}
        />

        <Route path="charities" element={<CharitiesPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="home-two" element={<HomePageTwo />} />
        <Route path="send-crypto" element={<SendCryptoPage />} />
        <Route path="shipping-queue" element={<ShippingQueue />} />
        <Route path="my-movies" element={<MyMovies />} />
        <Route path="shoesboutique.shib" element={<ShoesboutiqueShib />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories-details" element={<CategoriesDetailsPage />} />
        <Route
          path="categories-shipping"
          element={<CategoriesShippingPage />}
        />
        <Route path="prepare-products" element={<PrepareProductsPage />} />
        <Route path="shipping-details" element={<ShippingDetailsPage />} />
        <Route path="awaiting-delivery" element={<AwaitingDeliveryPage />} />
        <Route path="music-details" element={<MusicDetailsPage />} />
        <Route path="charity-details" element={<CharityDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
