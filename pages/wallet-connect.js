import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Wallet from 'src/components/Wallet/Wallet';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class WalletConnect extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Wallet Connect" subpage="Pages" page="Wallet Connect" />
                <Wallet />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default WalletConnect;