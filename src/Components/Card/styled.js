import styled from "styled-components";
import { Colors } from "../../Constants";

const StyledDiv = styled.div`
    .card {
        background: ${props => props.background ? `url(${props.background}) no-repeat top right` : null};
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 20em;
        height: 34em;
        background-color: ${Colors.white.primary};
        border-radius: 20px;
        box-shadow: 0px 0px 24px 0px rgba(245, 245, 245, 0.3);
        transition: all 150ms ease-in;
        margin-right: 2em;
        margin-left: 2em;
        justify-content: flex-end;
        cursor: pointer;
        :hover {
            transform: scale(1.1);
            box-shadow: none;
        }
        .info-tab {
            height: 35%;
            gap: 0.8em;
            padding: 0.8em;
            opacity: ${props => props.isHover ? 1 : 0};
            background-color: rgba(0, 0, 0, 0.3);
            transition: all 150ms ease-in;
            transform: ${props => props.isHover ? 'translateY(0px)' : 'translateY(100%)'};
            .genre-row {
                gap: 0.4em;
            }

        }
    }
    .card-large {
        position: relative;
        background: ${props => props.background ? `url(${props.background}) no-repeat top right` : null};
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 28em;
        height: 45em;
        background-color: ${Colors.white.primary};
        border-radius: 20px;
        box-shadow: 0px 0px 24px 0px rgba(245, 245, 245, 0.3);
        transition: all 150ms ease-in;
        margin-right: 2em;
        margin-left: 2em;
        justify-content: flex-end;
        :hover {
            transform: scale(1.1);
            box-shadow: none;
        }
        .close {
            position: absolute;
            right: 0px;
            top: 0px;
            padding: 0.4em;
            width: 1.2em;
            height: 1.2em;
            border: 1px solid white;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .info-tab {
            height: 35%;
            gap: 0.8em;
            padding: 0.8em;
            opacity: ${props => props.isHover ? 1 : 0};
            background-color: rgba(0, 0, 0, 0.3);
            transition: all 150ms ease-in;
            transform: ${props => props.isHover ? 'translateY(0px)' : 'translateY(100%)'};
            .genre-row {
                gap: 0.4em;
            }

        }
        .info-row {
            .button {
                    padding: 0.8em 1.6em;
                    border-radius: 20px;
                    background-color: ${Colors.white.primary};
                    cursor: pointer;
                    
                }
        }
    }
`
export default StyledDiv