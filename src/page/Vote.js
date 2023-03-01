import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Vote = () => {

    const [voterOne, setVoterOne] = useState(false)
    const [voterTwo, setVoterTwo] = useState(false)
    const [voterThree, setVoterThree] = useState(false)
    const [voted, setVoted] = useState(false)

    const IndCandidate = (props) => {
        return (
            <div className='flex flex-col items-center justify-center'>
                <div className={`flex bg-blue-100 border border-blue-300 m-5 
                ${voterOne && props.id === '01' ? 'bg-green-100 border-green-300' : ''}
                ${voterTwo && props.id === '02' ? 'bg-green-100 border-green-300' : ''}
                ${voterThree && props.id === '03' ? 'bg-green-100 border-green-300' : ''}
                `}>
                    <h1 className='text-left m-2 text-base text-black'>
                        Candidate ID: {props.id}
                        <br />
                        Candidate Name: {props.name}
                        <br />
                        Party: {props.party}
                    </h1>
                </div>
                {
                    voted === false &&
                    <button
                        className='bg-blue-600 text-white rounded-md p-2 m-2'
                        onClick={() => {
                            if (props.id === '01') {
                                setVoterOne(true)
                                setVoterTwo(false)
                                setVoterThree(false)
                                setVoted(true)
                            } else if (props.id === '02') {
                                setVoterOne(false)
                                setVoterTwo(true)
                                setVoterThree(false)
                                setVoted(true)
                            } else if (props.id === '03') {
                                setVoterOne(false)
                                setVoterTwo(false)
                                setVoterThree(true)
                                setVoted(true)
                            }
                        }
                        }
                    >Vote</button>
                }
            </div>
        )
    }

    return (
        <>
            <div className='w-[1350px] mx-auto flex flex-col items-center justify-center'>
                <div className='flex bg-blue-100 border border-blue-300 m-5'>
                    <h1 className='text-left m-2 text-base text-black'>
                        Voter ID: 123456
                        <br />
                        Voter Name: Ram Prasad
                    </h1>
                </div>
                <h1 className='text-center m-10 font-bold text-2xl text-blue-600 uppercase'>
                    FSU Election 2023<br />
                    <span className='text-sm text-gray-500'>Select your candidate</span>
                </h1>
                <div className='flex items-center justify-center'>
                    <IndCandidate id='01' name='Abhishek' party='Test Party 1' />
                    <IndCandidate id='02' name='Kishor' party='Test Party 2' />
                    <IndCandidate id='03' name='Neelam' party='Test Party 3' />
                </div>
                {
                    voted === true &&
                    <p className='text-green-600 text-lg flex flex-col items-center'>
                        You have succesfully voted for candidate {voterOne ? '01' : voterTwo ? '02' : '03'}.
                        <Link to='/results'>
                            <button className='bg-blue-600 text-white rounded-md p-2 m-2'>View Results</button>
                        </Link>
                    </p>
                }

            </div>
        </>
    )
}

export default Vote