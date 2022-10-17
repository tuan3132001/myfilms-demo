import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from 'react-icons/vsc'
import styled from "styled-components";
import { useState } from "react";
function Intro(props) {
    const [isMuted, setIsMuted] = useState(false);
    return (
        <IntroContainer>
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/709369861"
                className="videoIntro"
            />
            <div className="infoIntro">
                <h1 className="headingIntro">[Netflix] 안나라수마나라</h1>
                <p className="overviewIntro">Title : Netflix 안나라수마나라 오프닝 타이틀
                    Client : Netflix

                    12 2021
                    Role_Illust, Artwork, animation</p>
            </div>
            {
                isMuted ? (
                    <VscMute className="btnVolume"
                        onClick={() => setIsMuted(prev => !prev)}
                    />
                ) : (
                    <VscUnmute className="btnVolume"
                        onClick={() => setIsMuted(prev => !prev)}
                    />
                )
            }
            <div className="fadeBottom"></div>
        </IntroContainer>
    )
}

export default Intro;

const IntroContainer = styled.div`
    background-color: var( --color--background);
    position: relative;
    color: var(--color--white);
    padding-top: 56%;

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
    }

    .infoIntro {
        position: absolute;
        top: 140px;
        left: 30px;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 25px
        }

        @media screen and (max-width: 600px) {
            top: 100px;
            left: 15px
        }

        .headingIntro {
            font-size: 60px;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
                font-size: 40px;
            }

            @media screen and (max-width: 800px) {
                font-size: 24px;
            }
        }
        .overviewIntro {
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;

            @media screen and (max-width: 800px) {
                font-size: 16px;
            }

            @media screen and (max-width: 800px) {
                font-size: 14px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        height: 40px;
        width: 40px;
        right: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: #fff solid 1px;
        transition: all 0.3s ease;
        transform: scale(1);
        &:hover {
            color: #fff;
            transform: scale(1.2);
            background-color: rgba(211, 211, 211, 0.18);
        }
        @media screen and (max-width: 800px) {
            height: 30px;
            width: 30px;
            padding: 4px;
        }

        @media screen and (max-width: 800px) {
            height: 20px;
            width: 20px;
            padding: 1px;
        }
    }
    }

    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: Linear-gradient(
            180deg,
            transparent,
            rgba(15,15,15,0.6) 40%,
            rgb(17,17,17),
            rgb(17,17,17)
        )
    }
`;