import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Text } from '../Components'
import Card from '../Components/Card'
import { Colors } from '../Constants'
import StyledDiv from './styled'

export default function TablePage(props) {
    // states
    const [state, setState] = useState({
        data: [],
        page: 1,
        pageSize: 10,
        result: 10,
        trending: [],
        isCover: false,
        noData: false,
        search: 'batman'
    })

    /**
     * Scroll listener
     */
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if(!state.noData) {
                getApiData()
            }
        }
    }
    
    /**
     * call api on first init
     */
    useEffect(() => {
        getApiData()
    }, [])
    useEffect(() => {
        getApiData()
    }, [state.search])
    /**
     * Api get function and sets data state.
     */
    const getApiData = async () => {
        const baseUrl = 'http://www.omdbapi.com'
        const config = {
            params: {
                apiKey: 'faf7e5bb',
                s: state.search,
                page: state.page
            }
        }
        axios.get(baseUrl, config)
        .then(res => {
            if(res.data && res.data.Search) {

                setState(state => ({
                    ...state,
                    data: state.data.length == 0 ? res.data.Search : [...state.data, ...res.data.Search],
                    page: state.page + 1
                }))
            }
        })
        .catch(e => console.log(e))
    }

    const search = (e) => {
        clearTimeout()
        if(e.target.value.length > 5) {

            setTimeout(() => {
                setState(state => ({
                    ...state,
                    search: e.target.value,
                    data: []
                }))
            }, 200)
        }
    }

    const showDetail = (d) => {
        setState(state => ({
            ...state,
            chosenMovie: d,
            isCover: true
        }))
    }
    
    const closeDetail = () => {
        setState(state => ({
            ...state,
            isCover: false,
            chosenMovie: null
        }))
    }

    const renderCards = (data) => {
        return data.map((d,i) => {
            return <Card
                key = {d.id}
                background = {d.Poster}
                title = {d.Title}
                genres = {d.genres}
                type = {d.Type}
                averageScore = {d.Year}
                popularity = {d.popularity}
                siteUrl = {d.imdbID}
                showDetail = {() => showDetail(d)}
            />
        })
    }
    return (
        <StyledDiv
            isCover = {state.isCover}
        >
            <div className = 'outer-container'>
                <div className = 'modal-container-cover flex-col'>
                    {
                        state.chosenMovie ? 
                        <Card
                            background = {state.chosenMovie.Poster}
                            title = {state.chosenMovie.Title}
                            genres = {state.chosenMovie.genres}
                            type = {state.chosenMovie.Type}
                            averageScore = {state.chosenMovie.Year}
                            popularity = {state.chosenMovie.popularity}
                            siteUrl = {state.chosenMovie.imdbID}
                            closeDetail = {closeDetail}
                            large
                        /> : null
                    }
                </div>
                <div className = 'inner-container flex-col width100'>
                    <div className = 'search-bar flex-row width100'>
                        <input onKeyUp = {(e) => search(e)}/>
                        <div className='button'>
                            <Text content = 'search' style = 'small' bold color = {Colors.black.primary}/>
                        </div>
                    </div>
                    <div className = 'title-container flex-col width100'>

                        <Text content = 'List' style = 'title' bold/>

                    </div>
                    <div className = 'card-container flex-row'>
                        {state.data?.length > 0 ? renderCards(state.data) : null}

                    </div>
                    
                    
                    
                </div>
            </div>
        </StyledDiv>
    )
}
