import React from "react"
import { Icon } from '@iconify/react'
import filledHeartIcon from '@iconify/icons-mdi/cards-heart'
import heartIcon from '@iconify/icons-mdi/cards-heart-outline'
import data from '../data'

export default function Favourite(props) {
    const favIcon = data.isFavourite ? filledHeartIcon : heartIcon
    return (
        <Icon id="favourite" className="tile-icon"  icon={favIcon} onClick={props.handleClick} />
    )
}  