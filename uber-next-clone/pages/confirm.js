import { useEffect } from 'react'
import tw from "tailwind-styled-components";
import Map from './components/Map';


const Confirm = () => {

    const getCoordinates = () => {
        const location = 'Santa Monica';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoia2lwc2FuZyIsImEiOiJja3ZxcmxndXo0N2U2MnZxNW94eW43N2NlIn0.TQ4RZShVT6X4YJoyBE41gQ"
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    useEffect(()=>{
        getCoordinates();
    }, [])

    return (
        <Wrapper>
            <Map />
            <RideContainer>
                Ride Selector 
                Confirm Button 
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 
`

