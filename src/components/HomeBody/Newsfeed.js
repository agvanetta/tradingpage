import React from 'react'
import LineGraph from './LineGraph'
import "./Newsfeed.css"
import Timeline from './Timeline'

function Newsfeed() {
  return (
    <div className='newsfeed'>
        <div className='newsfeed__container'>
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>$114,656.84</h1>
                    <p>+$44.63 (+.4%) Today</p>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph/>
                    <Timeline/>
                </div>
            </div>
            <div className="newsfeed__buying__section">
                <h2> Buying Power</h2>
                <h2> $4.11</h2>
            </div>
            <div className='newsfeed__market__section'>
                <div className='newsfeed__market__box'>
                    <p> News</p>
                    <h1>Could bonds rally with inflation high and the Fed raising rates?
                        More market-timers are betting on it.</h1>
                    <h1>Apple gave investors more than $100 billion last year — how much
                         more is coming?</h1>
                    <h2>More news</h2>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Newsfeed