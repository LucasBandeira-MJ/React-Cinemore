import { useEffect, useState } from 'react'



const SessionsBox = ({duration, open}) => {
    
    const [sessions, setSessions] = useState([]);

    useEffect(()=>{
        calculateSessions()
    }, [duration])

    const calculateSessions = () => {
        
        const start = 540;
        const movieDuration = duration + 20;
        const end = 1440;
        let movieSessions = [];
        for(let i = start; i < end; i+=movieDuration  ) {
            movieSessions.push(i)
        }
        console.log(movieSessions)
        setSessions(movieSessions)
    }

    return (
        <div className={`sessions-box ${open? 'active' : ''}`}>
            {sessions.map(session => (
                    <a className="session" href="#" key={session}>
                        {`${Math.floor(session / 60)}:${(session % 60).toLocaleString('en-US', { minimumIntegerDigits: 2})}`}
                    </a>
                ))}
        </div>
    )
}

export default SessionsBox
