import React from 'react'

export function Loading() {
    return (
        <div className="lux-loader">
            <div className="spray left"></div>
            <div className="spray right"></div>

            <div className="logo">
                <span>Luxe</span><span>Scent</span>
            </div>

            <p className="loading-text">Infusing Luxury…</p>
        </div>

    )
}
