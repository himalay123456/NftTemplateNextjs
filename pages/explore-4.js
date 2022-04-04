import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Explore from 'src/components/Explore/ExploreFive';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class ExploreFour extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 4" />
                <Explore />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ExploreFour;