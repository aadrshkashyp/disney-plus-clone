import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://www.denofgeek.com/wp-content/uploads/2021/04/jujutsu-kaisen-season-2-movie-prequel-details.jpeg" />
            </Background>
            <ImageTitle>
                <img src="https://upload.wikimedia.org/wikipedia/fr/4/4d/Jujutsu_kaisen_logo_fr.png" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>

            </Controls>
            <SubTitle>
                24 Episodes  -  Aired from Oct 3, 2020 to Mar 27, 2021
            </SubTitle>
            <Description>
                Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div
    `
         min-height: calc(100vh - 70px);
         padding: 0 calc(3.5vw + 5px);
         position: relative;
    `
const Background = styled.div
    `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.8;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `
const ImageTitle = styled.div
    `
        height: 30vh;
        min-height: 170px;
        width: 35vw;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `
const Controls = styled.div
    `
         display: flex;
         align-items: center;
    `
const PlayButton = styled.button
    `
         border-radius: 4px;
         font-size: 15px;
         padding: 0px 24px;
         margin-right: 22px;
         display: flex;
         align-items: center;
         height: 56px;
         background: rgb(249, 249, 249);
         border: none;
         letter-spacing: 1.8px;
         text-transform: uppercase;
         cursor: pointer;

         &:hover {
             backgound: rgb(198, 198, 198);
         }
    `
const TrailerButton = styled(PlayButton)
    `
         background: rgba(0, 0, 0, 0.3);
         border: 1px solid rgb(249, 249, 249);
         color: rgb(249, 249, 249);
         text-transform: uppercase;
    `
const AddButton = styled.button
    `
         margin-right: 16px;
         width: 44px;
         height: 44px;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         border: 2px solid white;
         cursor: pointer;
         background-color: rgba(0, 0, 0, 0.6);
         span {
             font-size: 30px;
             color: white;

         }
    `
const GroupWatchButton = styled(AddButton)
    `
         background: rgba(0, 0, 0);
    `
const SubTitle = styled.div`
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
  
`

const Description = styled.div
    `
            line-height: 1.4;
            font-size: 20px;
            margin-top: 16px;
     `

