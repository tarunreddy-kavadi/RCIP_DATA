import React, { useState } from 'react'
import { data } from './store/data'


const Home = () => {
    const [search, setSearch] = useState('')

    return (
        <div style={{ margin: '2rem' }}>
            <h1>RCIP Data of whole canada </h1>
            <h3>search by business name, province, sector and address</h3>
            <span>the data is retrieved by AI on 11/12/2026 any changes or updates email to tarunreddy.kavadi.79@gmail.com</span>
            <br />
            <input type='text' name='search' onChange={e => setSearch(e.target.value)} placeholder='companyName' style={{ padding: '1rem', width: '500px' }}></input>
            {data
                .filter((d) =>
                    search === '' ? d
                        :
                        d.business_name?.toLowerCase().includes(search.toLowerCase()) ||
                        d.sector?.toLowerCase().includes(search.toLowerCase()) ||
                        d.address?.toLowerCase().includes(search.toLowerCase()) ||
                        d.province?.toLowerCase().includes(search.toLowerCase())

                )
                .map((d, index) => (
                    <div key={index} style={{ backgroundColor: 'lightyellow', margin: '1rem' }}>
                        <div style={{ marign: '2rem' }}>
                            <div style={{ margin: '1.5rem' }}>Business name : <h3 style={{ fontStyle: 'oblique' }}>{d.business_name} </h3> </div>
                            <div style={{ margin: '1.5rem' }}>Address : <h3 style={{ fontStyle: 'oblique' }}>{d.address}</h3></div>
                            <div style={{ margin: '1.5rem' }}>Province:<h3 style={{ fontStyle: 'oblique' }}>{d.province}</h3> </div>
                            <div style={{ margin: '1.5rem' }}>Sector:<h3 style={{ fontStyle: 'oblique' }}>{d.sector}</h3> </div>
                        </div>
                    </div>
                ))}

        </div>
    )
}

export default Home
