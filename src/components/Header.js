import { useState } from "react";
import React from "react";
import data from "../data"

export default function Header (props) {
    
    return (
    <div className="header">
        <img src="/emmalogo.jpg " alt='cutest dog logo winking aussie face' className="header--logo"/>
        <h1>emmas travel blog.</h1>
        <form>
				<label htmlFor="filter">Filter Items:</label>
				<input
					id="filter"
					type="text"
					inputmode="search"
					value={props.searchedItem}
					onChange={props.handleChange}
					placeholder="Start Typing here..."
				/>
				<button
					type="button"
					// onClick={buttonClick}
					// disabled={searchedItem.length === 0}
				>
					Clear
				</button>
			</form>
        <a href="www.google.com">Login</a>
    </div>
    )
}