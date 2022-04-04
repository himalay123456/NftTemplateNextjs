import React, { Component } from 'react';

import Header from 'src/components/Header/Header';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Blog from 'src/components/BlogSingle/BlogSingle';
import Footer from 'src/components/Footer/Footer';
import ModalSearch from 'src/components/Modal/ModalSearch';
import ModalMenu from 'src/components/Modal/ModalMenu';
import Scrollup from 'src/components/Scrollup/Scrollup';

class BlogSingle extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Blog Single" subpage="Community" page="Blog Single" />
                <Blog />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default BlogSingle;