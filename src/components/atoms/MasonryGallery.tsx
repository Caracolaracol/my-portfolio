import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import PropTypes from 'prop-types';

function MasonryGallery() {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry>
                <div className="masonry-item">1</div>
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonryGallery