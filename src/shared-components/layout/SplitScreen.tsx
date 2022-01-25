import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`
const ColumnLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
    background-color: #868aa8;
    @media (max-width: 767px) {
        display: none;
    } 
`
const ColumnRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50%;
    overflow: auto;
    @media (max-width: 767px) {
        width: 100%;
    } 
`

function SplitScreen ({ children, svg }: { children: ReactNode, svg: ReactNode }) { 
    return (
        <Wrapper>
            <ColumnLeft>
                {svg}
            </ColumnLeft>
            <ColumnRight>{children}</ColumnRight>
        </Wrapper>
    )
}

export default SplitScreen