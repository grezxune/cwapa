import React from 'react';
import axios from 'axios';
import sizeMe from 'react-sizeme';

class ResourcesPage extends React.Component {
    render() {
        return (
            <div className="vertical-container vertical-container--centered">
                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">PDFs</span>
                    <a className="link-button" href="/resources/bylaws-2018.pdf" target="_blank">Bylaws</a>
                </div>
            </div>
        );
    }
};

export default sizeMe()(ResourcesPage);