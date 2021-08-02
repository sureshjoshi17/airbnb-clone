import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h2>Stays nearby</h2>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult 
                img="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_960_720.jpg"
                location="Private room in cener of London"
                title="Stay at this spacious Edwardian House"
                description=" 1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$118.00"
            />
            <SearchResult 
                img="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_960_720.jpg"
                location="Private room in cener of London"
                title="Stay at this spacious Edwardian House"
                description=" 1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$118.00"
            />
            <SearchResult 
                img="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_960_720.jpg"
                location="Private room in cener of London"
                title="Stay at this spacious Edwardian House"
                description=" 1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$118.00"
            />
            <SearchResult 
                img="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_960_720.jpg"
                location="Private room in cener of London"
                title="Stay at this spacious Edwardian House"
                description=" 1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$118.00"
            />
            <SearchResult 
                img="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_960_720.jpg"
                location="Private room in cener of London"
                title="Stay at this spacious Edwardian House"
                description=" 1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$118.00"
            />

        </div>
    )
}

export default SearchPage
