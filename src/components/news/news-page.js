import React from 'react';
import axios from 'axios';
import moment from 'moment';
import NewsItem from './news-item';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newsItems: []
        };
    }

    componentDidMount() {
        axios.get(`${process.env.CW_API_URL}/news-items`)
        .then(res => {
            const newsItems = res.data.newsItems.map((item) => {
                const date = moment(item.date).format('MMM Do YYYY');
                return <NewsItem newsItem={item} key={item.title} />;
            });

            this.setState({ newsItems });
        });
    }

    render() {
        return (
            <div className="content-container content-container--page">
                {this.state.newsItems}
            </div>
        );
    }
};

export default NewsPage;