import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import ItemDetail from 'src/components/ItemDetails/ItemDetails';
import LiveAuctions from 'src/components/Auctions/AuctionsThree';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class ItemDetails extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Item Details" subpage="Explore" page="Item Details" />
                <ItemDetail />
                <LiveAuctions />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ItemDetails;