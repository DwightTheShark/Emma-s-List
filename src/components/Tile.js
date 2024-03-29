import data from "../data.js"
import Map from "../components/Map/Map"
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import starIcon from '@iconify/icons-mdi/star-box'
import waterIcon from '@iconify/icons-mdi/water-check'
import fenceIcon from '@iconify/icons-mdi/fence'
import smallIcon from '@iconify/icons-mdi/size-s'
import hikeIcon from '@iconify/icons-mdi/walk'
import filledHeartIcon from '@iconify/icons-mdi/cards-heart'
import heartIcon from '@iconify/icons-mdi/cards-heart-outline'
import features from './features'
import Favourite from './Favourite.js'
import React, { useState } from 'react'


export default function Tile(props) {
   // enables people to mark something as being on their wishlist
   // let badgeText
    // if (props.visits === 0) {
    //     badgeText = "WISHLIST"
    // } else {
    //     badgeText = null
    // }

    //toggle favourite
    const [favourite, setFavourite] = React.useState(props.isFavourite)

    const toggleFavourite = () => {
        console.log("i got the click!", favourite)
        setFavourite(!favourite);
      };
      //eventually this needs to go to mongoDB

    //show additional images
    let additionalImg
    if (props.additionalImg instanceof Array) {
        additionalImg = props.additionalImg.map((item) => <img src={item.src} alt={item.alt} className="tiles--additional" />)
    } else if (typeof props.additionalImg != "undefined") {
        additionalImg = <img src={`/${props.additionalImg}`} className="tiles--additional" />
    }   else {
        console.log("fail");
    }

    // let mapLocation
    // if (props.URL.includes("alltrails")) {
    //     mapLocation = props.URL
    // } else {
    //     mapLocation = <Map
    //     lat={props.location.lat}
    //     lng={props.location.lng}
    //     title={props.title}
    //     />
    // }

    return (
        <div className="tile">
            <div className = "tile--left">
                {/* {badgeText && <div className="tile--badge">{badgeText}</div>} */}
                <img src={`/${props.img}`} className="tile--image" />
                <div >
                    <Favourite isFavourite={favourite} handleClick={toggleFavourite}/>
                </div>
            </div>
            <div className="tile--right">
                <span className="tile--title">{props.title}</span>
                <div className="features">
                    {props.features.includes("smalldogs") ? <Icon icon={smallIcon} /> : (null) }
                    {props.features.includes("water") ? <Icon icon={waterIcon} /> : (null) }
                    {props.features.includes("hike") ? <Icon icon={hikeIcon} /> : (null) }
                    {props.features.includes("fence") ? <Icon icon={fenceIcon} /> : (null) }
                </div>
                <div className="city">
                    <Icon icon={locationIcon} className="tile-icon" />
                    <span className="gray">{props.city}</span>
                </div>
                <div className="ratings">
                    <span className="city"><Icon icon={starIcon} className="tile-icon" />{props.rating}/5 • {props.visits} visits</span>
                </div>
                <div>
                <a href={props.url} className="city">googlemaps</a>
                </div>
                <div className="title--info">
                    <p className="tile--description">{props.description}</p>
                    <p className="parking--description">{props.parking}</p>
                </div>
                <section className="more">
                {additionalImg}
                </section><div/></div>
                <div className="tile--farright">
                    {/* {mapLocation} */}
                    <Map
                    lat={props.location.lat}
                    lng={props.location.lng}
                    title={props.title}
                    />
          </div>
                
            
        </div>
    )
    }