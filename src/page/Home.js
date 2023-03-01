import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='w-[1350px] mx-auto flex flex-col items-center justify-center'>
                <h1 className='text-center m-10 font-bold text-2xl text-blue-600 uppercase'>
                    Welcome to BlockVote, a decentralized voting platform.
                </h1>

                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-center m-10 font-bold text-2xl text-blue-600 uppercase'>
                        Sign in using your voter ID
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <input type='text' className='border-2 border-blue-600 rounded-md p-2 m-2' placeholder='Voter ID' />
                        <Link to='/vote'>
                            <button className='bg-blue-600 text-white rounded-md p-2 m-2'>Sign in</button>
                        </Link>
                    </div>

                    <img src={require('../assets/CATALYSTS.png')} alt='Voter ID' className='w-auto h-[200px]' />

                </div>
            </div>
        </>
    )
}

export default Home