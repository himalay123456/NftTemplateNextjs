import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Help from 'src/components/HelpCenter/HelpCenter';
import Faq from 'src/components/Faq/Faq';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class HelpCenter extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Help Center" subpage="Community" page="Help Center" />
                <Help />
                <Faq />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default HelpCenter;