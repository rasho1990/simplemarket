import React from 'react';
import ReactTooltip from 'react-tooltip';
const PageNavigation = () => {
    return <div class="ui pagination menu" style={{ marginBottom: 20 }}>
     <ReactTooltip />
        <a class=" item">
       1
</a>
        <a class="item">
            2
</a>
        <a class="item">
            3
</a>

        <a data-tip="Next" class="item">
        <i className="icon large arrow alternate circle right"></i> 
</a>
    </div>
}

export default PageNavigation;