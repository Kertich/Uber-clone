import React from 'react';
import tw from "tailwind-styled-components"

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`

`

