import { useState, useEffect } from 'react'

const Featured = ({toFeature}) => {
    const [fondue, setFondue] =  useState(toFeature)

    useEffect(() => {
        if(!toFeature[0]) { setFondue(toFeature) }
        else { setFondue(toFeature[0]) }
    }, [toFeature])

    return (
        <div className="featured-movie">
            <p>{fondue.backdrop_path}</p>
        </div>
    )
}



export default Featured
