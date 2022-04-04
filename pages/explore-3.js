import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Explore from 'src/components/Explore/ExploreFour';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class ExploreTwo extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 3" />
                <Explore />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ExploreTwo;