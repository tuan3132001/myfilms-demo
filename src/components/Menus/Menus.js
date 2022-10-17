import { AiFillStar } from 'react-icons/ai'
import { FiTrendingUp } from 'react-icons/fi'
import { FaSnapchatGhost, FaSmileBeam } from 'react-icons/fa'
import { GiLovers, GiFireAxe } from 'react-icons/gi'
import { HiDocument } from 'react-icons/hi'
import { SiNetflix } from 'react-icons/si'

import styled from 'styled-components';
import MenuItems from './MenuItems';

function Menus(props) {
    return (
        <MenusPane>
            <MenuItems name="Netflix" Icon={SiNetflix} to='netflix' />
            <MenuItems name="Trending" Icon={FiTrendingUp} to='trending' />
            <MenuItems name="Top Rated" Icon={AiFillStar} to='topRated' />
            <MenuItems name="Action Movies" Icon={GiFireAxe} to='actionMovies' />
            <MenuItems name="Horror Movies" Icon={FaSnapchatGhost} to='horrorMovies' />
            <MenuItems name="Comedy Movies " Icon={FaSmileBeam} to='comedyMovies' />
            <MenuItems name="Romance Movies" Icon={GiLovers} to='romanceMovies' />
            <MenuItems name="Documentaries" Icon={HiDocument} to='documentaries' />
        </MenusPane>
    )
}
export default Menus;

const MenusPane = styled.div`
    position: fixed;
    left: 0;
    top 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover {
        width: 180px;
        background: rgba(0, 0, 0, 0.5)
    }

    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            &:hover {
                color: #fff;
            }
        }
    }
`;