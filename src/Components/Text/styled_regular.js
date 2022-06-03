import styled from "styled-components"
import {
    Colors,
} from '../../Constants'
const StyledDiv = styled.div`
.small-bft {
    display: flex;
    flex-direction: row;
    font-family: ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 14em;
    line-height: auto;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    @media(max-width: 768px) {
        font-size: 10em;
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.small-bft-gradient {
    display: flex;
    flex-direction: row;
    font-family: ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 14em;
    line-height: auto;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media(max-width: 768px) {
        font-size: 10em;
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.bft {
    display: flex;
    flex-direction: row;
    font-family: ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 12em;
    line-height: 156px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.bft-tablet {
    display: flex;
    flex-direction: row;
    font-family: ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 10em;
    line-height: 156px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.bft-gradient {
    font-family: ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 12em;
    line-height: 156px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h1 {
    font-family: ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 5.4em;
    line-height: 70px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    @media (max-width: 1024px) {
        line-height: normal;
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h2-spc {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 4.8em;
    line-height: 56px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h2-gradient-spc {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 4.8em;
    line-height: 56px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h2 {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 4.3em;
    line-height: 56px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h2-gradient {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 4.3em;
    line-height: 56px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h3 {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 3.5em;
    line-height: 45px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h4 {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 2.8em;
    line-height: 36px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.h4-gradient {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 2.8em;
    line-height: 36px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.title {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 2.2em;
    line-height: 29px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.body {
    /* display: flex;
    flex-direction: row; */
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.8em;
    line-height: 23px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.body-gradient {
    /* display: flex;
    flex-direction: row; */
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.8em;
    line-height: 21px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.medium {
    /* display: flex;
    flex-direction: row; */
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.6em;
    line-height: 21px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.medium-gradient {
    /* display: flex;
    flex-direction: row; */
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.6em;
    line-height: 21px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.medium-mobile {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 2.2em;
    line-height: 23px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.small {
    display: flex;
    flex-direction: row;
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.4em;
    line-height: 16px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.small-gradient {
    display: flex;
    flex-direction: row;
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.4em;
    line-height: 16px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.smallNoRow {
    /* display: flex;
    flex-direction: row; */
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.4em;
    line-height: 16px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.small-gradient {
    display: flex;
    flex-direction: row;
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.4em;
    line-height: 16px;
    /* letter-spacing: 0.02em; */
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    color: ${props => props.color ? props.color : Colors.black.primary};
    :hover {
        background: ${props => props.gradient ? props.gradient: null};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.extrasmall {
    display: flex;
    flex-direction: row;
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 1.2em;
    line-height: 20px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.extrasmall-gradient {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : '400'};
    font-size: 1.2em;
    line-height: 20px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.supersmall {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.2em;
    line-height: 16px;
    /* letter-spacing: 0.05em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.supersmall-gradient {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1.2em;
    line-height: 16px;
    /* letter-spacing: 0.05em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.xxsmall {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1em;
    line-height: 13px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.xxsmall-gradient {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: ${props => props.bold ? '600' : (props.fontWeight ? props.fontWeight : '400')};
    font-size: 1em;
    line-height: 13px;
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    background: ${props => props.gradient ? props.gradient: null};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.keping {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4em;
    line-height: 18px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.keping-large {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    font-size: 3em;
    line-height: 18px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.keping-mobile {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    font-size: 1.2em;
    line-height: 18px;
    /* letter-spacing: 0.02em; */
    color: ${props => props.color ? props.color : Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
.text-special {
    font-family:  ${props => props.bold ? (props.italic ? 'IBM Plex Sans Semi-bold italic' : 'IBM Plex Sans Semi-bold') : 'IBM Plex Sans Regular'};
    font-style: normal;
    font-weight: 400;
    font-size: 1.514em;
    line-height: 21.2px;
    /* letter-spacing: 0.05em; */
    color: ${Colors.black.primary};
    cursor: ${props => props.cursor ? 'pointer' : 'inherit'};
    :hover {
        color: ${props => props.hover ? Colors.green.primary : (props.color ? props.color : Colors.black.primary)}
    }
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
}
`
export default StyledDiv;