import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Deposits" icon={'file-multiple'} active />
            <MenuLink title="Info" icon={'cog'} />
        </Container>
    )
}

export default Menu
