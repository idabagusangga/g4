import React, {useState} from 'react'
import { Text } from '..'
import { Colors } from '../../Constants'
import StyledDiv from './styled'

/**
 * Card component for the mangalist
 * @param {Object} props property object for card function
 * @property {String} background image url for the manga
 * @returns JSC component for card component
 */
export default function Card(props) {
    const [state, setState] = useState({
        isHover: false,
    })

    /**
     * function that opens a link in new tab
     * @param {String} url url link to open
     */
     const openInNewTab = (url) => {
        const newWindow = window.open(`https://www.imdb.com/title/${url}`, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <StyledDiv
            background = {props.background}
            isHover = {state.isHover}
        >

            <div 
                className = {`card${props.large ? '-large' : ''} flex-col`}
                onMouseEnter = {() => setState(state => ({...state,
                isHover: true}))}
                onMouseLeave = {() => setState(state => ({
                    ...state,
                    isHover: false,
                }))}
                // onClick = {() => openInNewTab(props.siteUrl)}
            >
                {
                    props.large ? 

                    <div className = 'close flex-row width100' onClick = {() => props.closeDetail()}>

                        <Text content = 'x' style = 'body'/>

                    </div> : null
                }
                <div className = 'info-tab flex-col width100' onClick = {() => props.showDetail()}>

                    <Text content = {props.title} style = 'body'/>
                    {
                        props.large ? 

                        <div className = 'info-row flex-col jcai'>
                            <div className='button' onClick = {() => openInNewTab(props.siteUrl)}>

                                <Text content = 'Detail' style = 'body' color = {Colors.black.primary}/>
                            </div>
                        </div> : null
                    }

                </div>

            </div>

        </StyledDiv>
    )
}
