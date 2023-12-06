import React from 'react'
import LiveItem from '../components/LiveItem'
import { LiveList} from '../helpers/LiveList'
import '../styles/Live.css'

function Live() {
  return (
    <div className='live'>
        <h1 className='liveTitle'>Fechas en vivo</h1>
        <div className='liveList'>
            {LiveList.map((liveItem, key) => {
                return (
                    <LiveItem
                    key={key} 
                    date={liveItem.date}
                    venue={liveItem.venue}
                    city={liveItem.city}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Live
