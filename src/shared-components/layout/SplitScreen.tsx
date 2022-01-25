import React, { ReactNode } from 'react'
import styled from '@emotion/styled'



const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`
const ColumnLeft = styled.div`
    display: flex;
    width: 50%;
    height: 100vh;
    background-color: #303f9f;
`
const ColumnRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50%;
    overflow: auto;
`

function SplitScreen ({ children }: { children: [ReactNode, ReactNode] }) { // only two children allowed

    return (
        <Wrapper>
            <ColumnLeft>{children[0]}</ColumnLeft>
            <ColumnRight>{children[1]}</ColumnRight>
        </Wrapper>
    )
}

export default SplitScreen