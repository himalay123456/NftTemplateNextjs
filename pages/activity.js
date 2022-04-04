import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Activities from 'src/components/Activity/Activity';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class Activity extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Activity" subpage="Pages" page="Activity" />
                <Activities />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Activity;