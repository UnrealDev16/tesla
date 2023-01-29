import React, { useContext } from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return ( 
    <div>
        <Container>
            <Section
                title="Model 3"
                desc="Leasing starting at $399/mo"
                backgroundImg="model-3.jpg"
                lb = "Custom Order"
                rb = "Demo Drive"
                id = "Model-3"
            />
            <Section
                title="Model Y"
                backgroundImg="model-y.jpg"
                lb = "Custom Order"
                rb = "Demo Drive"
                id = "Model-Y"
            />
            <Section
                title="Model S"
                backgroundImg="model-s.jpg"
                lb = "Custom Order"
                rb = "Demo Drive"
                id = "Model-S"
            />
            <Section
                title="Model X"
                backgroundImg="model-x.jpg"
                lb = "Custom Order"
                rb = "Demo Drive"
                id = "Model-X"
            />
            <Section
                title="Solar Panels"
                desc="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                lb = "Order Now"
                rb = "Learn More"
                id = "SP"
            />
            <Section
                title="Solar Roof"
                desc="Produce Clean Energy"
                desc1="From Your Roof"
                backgroundImg="solar-roof.jpg"
                lb = "Order Now"
                rb = "Learn More"
                id = "SR"
            />
            <Section
                title="Accessories"
                desc=""
                desc1=""
                backgroundImg="accessories.jpg"
                lb = "Shop Now"
            />
        </Container>
    </div> );
}

export default Home;

const Container = styled.div`
    height: 100vh;
    z-index: 10;

`

