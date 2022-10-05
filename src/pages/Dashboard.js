import React from 'react'
import "leaflet/dist/leaflet.css"
import Map from '../components/Map'
import styled from "styled-components"

function Dashboard() {
    return (
        <StyledDashboard>
        <h1>Dashboard</h1>            
        <Map center={[32.17749326145507, 74.1795921686206]} zoom={13}/>
        </StyledDashboard>
    )
}

const StyledDashboard = styled.div`
padding: 2rem;
`

export default Dashboard
