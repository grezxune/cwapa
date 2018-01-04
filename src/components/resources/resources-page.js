import React from 'react';
import axios from 'axios';
import sizeMe from 'react-sizeme';

class ResourcesPage extends React.Component {
    render() {
        return (
            <div className="vertical-container vertical-container--centered">
                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">Miscellaneous PDFs</span>
                    <a className="link-button" href="/resources/bylaws-2018.pdf" target="_blank">Bylaws</a>
                </div>

                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">Tournament PDFs</span>
                    <a className="link-button" href="/resources/2018-8-Ball-Doubles-Flier.pdf" target="_blank">2018 8-Ball Doubles Flier</a>
                    <a className="link-button" href="/resources/2018-8-Ball-Doubles-Rules-for-Participation.pdf" target="_blank">2018 8-Ball Doubles - Rules for Participation</a>
                    <a className="link-button" href="/resources/2018-Jack-and-Jill-Flier.pdf" target="_blank">2018 Jack and Jill Flier</a>
                    <a className="link-button" href="/resources/2018-Jack-and-Jill-Rules-for-Participation.pdf" target="_blank">2018 Jack and Jill - Rules for Participation</a>
                    <a className="link-button" href="/resources/2018-Ladies-Flier.pdf" target="_blank">2018 Ladies Flier</a>
                    <a className="link-button" href="/resources/2018-Ladies-Rules-for-Participation.pdf" target="_blank">2018 Ladies - Rules for Participation</a>
                    <a className="link-button" href="/resources/2018-Masters-Flier.pdf" target="_blank">2018 Masters Flier</a>
                    <a className="link-button" href="/resources/2018-Masters-Rules-for-Participation.pdf" target="_blank">2018 Masters - Rules for Participation</a>
                    <a className="link-button" href="/resources/2018-Team-Captains-Championship-Flier.pdf" target="_blank">2018 Team Captains Championship Flier</a>
                    <a className="link-button" href="/resources/2018-Team-Captains-Championship-Rules-for-Participation.pdf" target="_blank">2018 Team Captains Championship - Rules for Participation</a>
                </div>
            </div>
        );
    }
};

export default sizeMe()(ResourcesPage);