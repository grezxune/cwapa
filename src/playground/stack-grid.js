import React from 'react';
import ReactDOM from 'react-dom';
import StackGrid from 'react-stack-grid';

const StackGridTest = (props) => (
    <StackGrid columnWidth={200}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>IItem 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3tem 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
    </StackGrid>
);

ReactDOM.render(<StackGridTest />, document.getElementById('app'));