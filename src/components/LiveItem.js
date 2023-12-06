import React from 'react'

function LiveItem({date, venue, city}) {
    return (
        <div className='liveItem'>
            <p className='date'>{date}</p>
            <p className='venue'>{venue}</p>
            <p className='city'>{city}</p>
        </div>
    )
}

export default LiveItem
