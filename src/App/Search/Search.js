import React from 'react';
import ToggleSwitch from './ToggleSwitch';

const Search = (props) => {
    return (
        <section style={{ width: '95%', margin:'0 auto' }}>
            <h1>156 Results <h1 id="place">in New York, US</h1></h1>
            <form style={{ display: 'flex', alignItems: 'center', flexWrap:'wrap' }}>
                <div style={{ width: '60%' }}>
                    <select className="selector">
                        <option value="books">Any Price</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="php">PHP</option>
                        <option value="js">JavaScript</option>
                    </select>
                    <select className="selector">
                        <option value="books">2-4 Beds</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="php">PHP</option>
                        <option value="js">JavaScript</option>
                    </select>
                    <select className="selector">
                        <option value="books">All Types</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="php">PHP</option>
                        <option value="js">JavaScript</option>
                    </select>

                    <div id="more-con">
                        <i class="fas fa-sliders-h"></i>
                        <p id="more">More</p>
                    </div>
                </div>

                <div id="mode-con">
                    <ToggleSwitch />
                    <p id="mode">Family mode </p>
                    <i class="fas fa-info-circle"></i>
                </div>
                <div id="sort-con">
                   <p id="sort">Sort by</p> 
                   <select id="sort-selector" className="selector">
                        <option value="books">Price</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="php">PHP</option>
                        <option value="js">JavaScript</option>
                    </select>
                    <i style={{margin:'0 5px'}} class="fas fa-align-center"></i>
                    <i style={{margin:'0 5px', color:'rgba(13, 151, 94, 0.836)'}} class="fas fa-sort-amount-up"></i>
                </div>

            </form>
        </section>
    )
}

export default Search;