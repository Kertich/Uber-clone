import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';


const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log("Pickup", pickup);
    console.log("Dropoff", dropoff)

    const [ pickupCoordinates, SetPickupCoordinates ] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup) => {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoia2lwc2FuZyIsImEiOiJja3ZxcmxndXo0N2U2MnZxNW94eW43N2NlIn0.TQ4RZShVT6X4YJoyBE41gQ',
            limit: 1
          
            })
        )
        .then(response => response.json())
        .then(data => {
            
            SetPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoia2lwc2FuZyIsImEiOiJja3ZxcmxndXo0N2U2MnZxNW94eW43N2NlIn0.TQ4RZShVT6X4YJoyBE41gQ',
            limit: 1
          
            })
        )
        .then(response => response.json())
        .then(data => {
            
            setDropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector />
                    
                <ConfirmButtonContainer>
                    Confirm UberX
                </ConfirmButtonContainer>
                
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ConfirmButtonContainer = tw.div`
bg-black text-white
`


const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col
`

