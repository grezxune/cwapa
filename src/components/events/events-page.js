import React from 'react';
import axios from 'axios';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import injectSheet from 'react-jss';

import EventItem from './event-item';

class EventsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eventItems: []
        };
    }

    componentDidMount() {
        axios.get(`${process.env.CW_API_URL}/event-items`).then(res => {
            const eventItems = res.data.eventItems.map(event => {
                return <EventItem event={event} key={event.title} />;
            });

            this.setState({ eventItems });
        });
    }

    render() {
        return (
            <div className={`${this.props.classes.page} vertical-container`}>
                <div className="box-layout__box box-layout__box--centered selection-box">
                    <span className="subtitle">Events</span>
                    <a
                        className="link-button"
                        href="https://facebook.com/centralwisconsinapa/events"
                        target="_blank"
                    >
                        Event List
                    </a>
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    page: {
        gridArea: 'content'
    }
});

const styledComponent = injectSheet(styles)(EventsPage);

export { styledComponent as default, EventsPage };
