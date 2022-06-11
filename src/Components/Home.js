import React from 'react'
// import styled from "styled-components"
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText ="Existing Inventory"
      />
       <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText ="Existing Inventory"
      />
       <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText ="Existing Inventory"
      />
       <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText ="Existing Inventory"
      />
      
        <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText ="Existing Inventory"
      />
          
      <Section
        title="Lowest Cost Solar  Panel America"
        desc="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText=" Order now"
        rightBtnText ="Learn More"
      />
       <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New  Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        leftBtnText=" Order now"
        rightBtnText ="Learn More"
      />
        <Section
        title="Accesories"
        desc=""
        backgroundImage="accessories.jpg"
        leftBtnText="Show now"
        rightBtnText =""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;


`
