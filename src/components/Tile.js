import data from "../data.js"

export default function Tile(props) {
    // let badgeText
    // if (props.visits === 0) {
    //     badgeText = "WISHLIST"
    // } else if (props.smalldogs === "Yes") {
    //     badgeText = "Small dogs"
    // }
    
    // const additionalImg = data.map(item => {
    //     return <img src={`/${props.img}`} className="tile--image" />

    // })
    
   
    
    return (
        <div className="tile">
            <div className = "tile--left">
                {/* {badgeText && <div className="tile--badge">{badgeText}</div>} */}
           
                <img src={`/${props.img}`} className="tile--image" />
            </div>
            <div className="tile--right">
                <span className="tile--title">{props.title}</span>
                <div className="city">
                    <img src="/pin.png" className="tile--pin"/> 
                    <span className="gray">{props.city}</span>
                </div>
                <div className="ratings">
                    <span className="gray"><img src="/star.png" className="tile--star"/>{props.rating}  / 5 • {props.visits} visits</span>
                </div>
                <div>
                <a href={props.url} className="gray">GOOGLE MAPS</a>
                </div>
                <div className="title--info">
                    <p className="tile--description">{props.description}</p>
                </div>
                <section>
                <img src={`/${props.additionalImg}`} className="tile--image" />
                    img
                    img
                </section>
            </div>
        </div>
    )
}