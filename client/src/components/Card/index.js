import React from 'react'

function Card(children, icon, title) {
    return (
        <div className="card">
            <div className="header">
                <h2>
                    <strong>
                        <i/>
                    </strong>
                </h2>

            </div>
        <div className="body">{children}</div>
        </div>
    )
}

export default index
