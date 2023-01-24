import { useState } from "react";
import React from "react";
import { Icon } from '@iconify/react'
import waterIcon from '@iconify/icons-mdi/water-check'
import fenceIcon from '@iconify/icons-mdi/fence'
import smallIcon from '@iconify/icons-mdi/size-s'
import hikeIcon from '@iconify/icons-mdi/walk'

export default function Header (props) {
 
    return (
    <div className="header">
        <img src="/emmalogo.jpg " alt='cutest dog logo winking aussie face' className="header--logo"/>
        <h1>emmas travel blog.</h1>
        <form>
				<label htmlFor="filter">Search:</label>
				<input
					id="filter"
					type="text"
					inputmode="search"
					value={props.searchedItem}
					onChange={props.handleChange}
					placeholder="Start Typing here..."
				/>
                <div className="searchFeatures">
                <div><label><input type="checkbox" value="column1" /><Icon icon={smallIcon} /></label></div>
                <div><label><input type="checkbox" value="column2"/><Icon icon={waterIcon} /></label></div>
                <div><label><input type="checkbox" value="column3" /><Icon icon={fenceIcon} /></label></div>
                <div><label><input type="checkbox" value="column4" /><Icon icon={hikeIcon} /></label></div>
                </div>
				<button
					type="button"
					// onClick={props.buttonClick}
					// disabled={props.searchedItem.length === 0}
				>
					Clear
				</button>
			</form>
        <a href="www.google.com">Login</a>
    </div>
    )
}