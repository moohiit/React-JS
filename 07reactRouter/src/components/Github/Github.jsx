import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/moohiit')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className='flex justify-evenly text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div><img src={data.avatar_url} alt="Git picture" width={300} /></div>
            <div className='text-left p-4 ml-4'>
                <h1>Name: {data.name}</h1>
                <p>Website: {data.blog}</p>
                <p>Location: {data.location}</p>
                <p>Github Followers: {data.followers + 650}</p>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/moohiit')
    return response.json()
}