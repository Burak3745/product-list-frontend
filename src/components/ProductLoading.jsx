import React from 'react'
import "../css/ProductLoading.css"

const ProductLoading = () => {
    return (
        <div class="skeleton-card skeleton-loading">
            <div class="skeleton-image">
            </div>
            <div class="skeleton-content">
                <h4 className='skeleton-h4 skeleton-name'></h4>
                <h4 className='skeleton-h4 skeleton-price'></h4>
                <div className='skeleton-color-container'>
                    <h4 className='skeleton-h4 skeleton-color'></h4>
                    <h4 className='skeleton-h4 skeleton-color'></h4>
                    <h4 className='skeleton-h4 skeleton-color'></h4>
                </div>
                <h4 className='skeleton-h4 skeleton-color-name'></h4>
                <h4 className='skeleton-h4 skeleton-star'></h4>
            </div>
        </div>
    )
}

export default ProductLoading