import React from 'react'

const Results = () => {
    const IndResults = (props) => {
        return (
            <div className='flex bg-blue-100 border border-blue-300 m-5'>
                <h1 className='text-left m-2 text-base text-black'>
                    Candidate ID: {props.id}
                    <br />
                    Candidate Name: {props.name}
                    <br />
                    Party: {props.party}
                    <br />
                    Votes: {props.votes}
                </h1>
            </div>
        )
    }
    return (
        <>
            <div className='w-[1350px] mx-auto flex flex-col items-center justify-center'>
                <h1 className='text-center m-10 font-bold text-2xl text-blue-600 uppercase'>
                    FSU Election 2023<br />
                    <span className='text-sm text-gray-500'>
                        Results
                    </span>
                </h1>
                <div className='flex flex-col bg-blue-100 border border-blue-300 m-5'>
                    <h2 className='text-left m-2 text-base text-black'>
                        Total Votes: 600
                    </h2>
                    <div className='flex items-center justify-center'>
                        <IndResults id='01' name='Abhishek' party='Test Party 01' votes='100' />
                        <IndResults id='02' name='Kishor' party='Test Party 02' votes='200' />
                        <IndResults id='03' name='Neelam' party='Twst Party 03' votes='300' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Results