import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Hero from 'src/components/Hero/Hero';
import Auctions from 'src/components/Auctions/AuctionsOne';
import TopSeller from 'src/components/TopSeller/TopSellerOne';
import Collections from 'src/components/Collections/Collections';
import Explore from 'src/components/Explore/ExploreOne';
import Work from 'src/components/Work/Work';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

const Home = () => {
        return (
            <div className="main">
                <Header />
                <Hero />
                <Auctions />
                <TopSeller />
                <Collections />
                <Explore />
                <Work />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
}

export default Home;