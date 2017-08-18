import React, { PropTypes } from 'react';
import Control from 'react-leaflet-control';

export default function DataCard({
    data,
}) {
    return (
        <Control position="bottomleft">
            <div
                id="centroid-viz-control"
                className="pt-card pt-dark pt-elevation-2 pt-interactive"
            >
                <h5>
                    NLCD cell count for your area of interest is:
                </h5>
                <span>
                    {data}
                </span>
            </div>
        </Control>
    );
}

DataCard.propTypes = {
    data: PropTypes.string.isRequired,
};
