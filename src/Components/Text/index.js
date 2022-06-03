import React from 'react'
import StyledDiv from './styled'
/**
 * Simple Text component
 * @param {*} props text props objects
 * @returns 
 */
const Text = (props) => {
    const onClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }
    const onMouseEnter = () => {
        if(props.onMouseEnter) {
            props.onMouseEnter()
        }
    }
    const onMouseLeave = () => {
        if(props.onMouseLeave) {
            props.onMouseLeave()
        }
    }
    return (
        <StyledDiv
            color = {props.color}
            bold = {props.bold}
            cursor = {props.cursor}
            hover = {props.hover}
            gradient = {props.gradient}
            fontWeight = {props.fontWeight}
            capitalize = {props.capitalize}
        >
            <span 
                className = {props.gradient ? `${props.style}-gradient` : props.style} 
                onClick = {() => onClick()} 
                onMouseEnter = {() => onMouseEnter()} 
                onMouseLeave = {() => onMouseLeave()}>
                {props.content}
                {props.children}
            </span>
        </StyledDiv>
    )
}
export default Text
