import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Author from 'src/components/Authors/Authors';
import TopSeller from 'src/components/TopSeller/TopSellerTwo';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class Authors extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Authors" subpage="Pages" page="Authors" />
                <Author />
                <TopSeller />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Authors;