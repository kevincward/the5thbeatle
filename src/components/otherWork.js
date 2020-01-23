import React from 'react'
import styled from 'styled-components'
import Cell from '../components/cell';
import staticdata from '../../staticdata.json'

const ProjectContainer = styled.div `
    padding: 400px 30px 0 0;
    background: #FFFFFF;
    background-size: cover;
    grid-template-rows: 500px auto;
    grid-gap: 20px;

    @media (max-width: 720px) {
    flex-direction: column;
    padding: 400px 30px 0 0;
    margin: 0;
  }
`
const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`



const otherWork = props => (
    <ProjectContainer>
        <SectionCaption>
            Other Projects
        </SectionCaption>
        <SectionCellGroup>
            {staticdata.cells.map(cell => (
            <Cell 
            title={cell.title}
            link={cell.link}
            image={cell.image} />
            ))}
        </SectionCellGroup>
    </ProjectContainer>
    )


export default otherWork