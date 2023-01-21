import React from "react"
import { Icon } from '@iconify/react'
import filledHeartIcon from '@iconify/icons-mdi/cards-heart'
import heartIcon from '@iconify/icons-mdi/cards-heart-outline'

export default function Favourite(props) {
    let favIcon = props.isFavourite ? filledHeartIcon : heartIcon
    return (
        <div onClick={props.handleClick}>
            <Icon id="favourite" className="tile-icon"  icon={favIcon} />
        </div>
    )
}  