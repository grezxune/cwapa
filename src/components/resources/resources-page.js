import React from 'react';
import axios from 'axios';
import sizeMe from 'react-sizeme';

class ResourcesPage extends React.Component {
    render() {
        return (
            <div className="content vertical-container vertical-container--centered">
                <span className="section-header">External Links</span>
                <div className="box-layout__box box-layout__box--centered selection-box">
                    <a
                        className="link-button"
                        href="https://league.poolplayers.com"
                        target="_blank"
                    >
                        Members Services (NEW)
                    </a>
                    <a
                        className="link-button"
                        href="https://members.poolplayers.com"
                        target="_blank"
                    >
                        Members Services (OLD)
                    </a>
                </div>

                <span className="section-header">Miscellaneous PDFs</span>
                <div className="box-layout__box box-layout__box--centered selection-box">
                    <a
                        className="link-button"
                        href="/resources/bylaws-2018.pdf"
                        target="_blank"
                    >
                        Bylaws
                    </a>
                </div>

                <span className="section-header">Tournament PDFs</span>
                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">8-Ball Doubles</span>
                    <a
                        className="link-button"
                        href="/resources/2018-8-Ball-Doubles-Flier.pdf"
                        target="_blank"
                    >
                        Flier
                    </a>
                    <a
                        className="link-button"
                        href="/resources/2018-8-Ball-Doubles-Rules-for-Participation.pdf"
                        target="_blank"
                    >
                        Rules for Participation
                    </a>
                </div>

                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">Jack and Jill</span>
                    <a
                        className="link-button"
                        href="/resources/2018-Jack-and-Jill-Flier.pdf"
                        target="_blank"
                    >
                        Flier
                    </a>
                    <a
                        className="link-button"
                        href="/resources/2018-Jack-and-Jill-Rules-for-Participation.pdf"
                        target="_blank"
                    >
                        Rules for Participation
                    </a>
                </div>

                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">Ladies</span>
                    <a
                        className="link-button"
                        href="/resources/2018-Ladies-Flier.pdf"
                        target="_blank"
                    >
                        Flier
                    </a>
                    <a
                        className="link-button"
                        href="/resources/2018-Ladies-Rules-for-Participation.pdf"
                        target="_blank"
                    >
                        Rules for Participation
                    </a>
                </div>

                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">Masters</span>
                    <a
                        className="link-button"
                        href="/resources/2018-Masters-Flier.pdf"
                        target="_blank"
                    >
                        Flier
                    </a>
                    <a
                        className="link-button"
                        href="/resources/2018-Masters-Rules-for-Participation.pdf"
                        target="_blank"
                    >
                        Rules for Participation
                    </a>
                </div>

                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">Team Captains Championship</span>
                    <a
                        className="link-button"
                        href="/resources/2018-Team-Captains-Championship-Flier.pdf"
                        target="_blank"
                    >
                        Flier
                    </a>
                    <a
                        className="link-button"
                        href="/resources/2018-Team-Captains-Championship-Rules-for-Participation.pdf"
                        target="_blank"
                    >
                        Rules for Participation
                    </a>
                </div>
            </div>
        );
    }
}

export default sizeMe()(ResourcesPage);
