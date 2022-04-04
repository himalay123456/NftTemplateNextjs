import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import LiveAuctions from 'src/components/Auctions/AuctionsTwo';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class Auctions extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Auctions" subpage="Explore" page="Live Auctions" />
                <LiveAuctions />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Auctions;