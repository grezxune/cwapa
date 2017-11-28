import React from 'react';
import ReactDOM from 'react-dom';
const Remarkable = require('remarkable');
const md = new Remarkable('full', {
});

const jsx = (
    <div>
    {md.render('# Testing!!\n\nnew paragraph')}
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));