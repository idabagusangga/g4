import styled from "styled-components";
import { Colors } from "../Constants";
const StyledDiv = styled.div`
    .outer-container {
        width: 100%;
        background-color: ${Colors.black.primary};
        overflow-x: hidden;
        ::-webkit-scrollbar {
            display: auto;
        }
        height: 100%;
        .modal-container-cover {
            background-color: ${Colors.black.shade};
            position: absolute;
            display: flex;
            width: 100%;
            height: 100%;
            margin: auto;
            z-index: 600;
            justify-content: center;
            align-items: center;
            transition: all 150ms ease-in;
            opacity: ${props => props.isCover? 1: 0};
            visibility: ${props => props.isCover? 'visible': 'hidden'};
        }
        .inner-container {
            height: 100%;
            padding: 4.8em;
            .title-container {
                text-align: left;
                margin-top: 2.4em;
            }
            .card-container {
                gap: 20px;
                flex-wrap: wrap;
                width: calc(100% - 4.2em);
                padding-bottom: 2.4em;
                padding-top: 2.4em;
                ::-webkit-scrollbar {
                    display: none;
                }
                margin-bottom: 2.4em;
            }
            .search-bar {
                justify-content: center;
                align-items: center;
                gap: 40px;
                .button {
                    padding: 0.8em 1.6em;
                    border-radius: 20px;
                    background-color: ${Colors.white.primary};
                    cursor: pointer;
                    
                }
            }
        }
    }
`
export default StyledDiv