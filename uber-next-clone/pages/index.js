import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1Ijoia2lwc2FuZyIsImEiOiJja3ZxcmxndXo0N2U2MnZxNW94eW43N2NlIn0.TQ4RZShVT6X4YJoyBE41gQ';

export default function Home() {
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}



// const map = new mapboxgl({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: ,
//   zoom: ,
// })

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
bg-red-500 flex-1
`

const ActionItems = tw.div`
  flex-1
`