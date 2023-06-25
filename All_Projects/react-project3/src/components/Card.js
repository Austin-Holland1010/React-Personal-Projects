import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
  const img = "/images/" + props.item.coverImg
  const rating = props.item.stats.rating
  const reviewCount = props.item.stats.reviewCount
  const country = props.item.country
  const title = props.item.title
  const price = props.item.price
  const openSpots = props.item.openSpots

  let badgeText
  if(openSpots === 0)
  {
    badgeText = "SOLD OUT"
  } else if (props.country === "Online")
  {
    badgeText = "ONLINE"
  }
    return (
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={img} className="card--image" />
        <div className="card--stats">
            <img className="card--star" src="/images/star.png" />
            <span>{rating}</span>
            <span className="grey">({reviewCount}) • </span>
            <span className="grey">{country}</span>
        </div>
        <p>{title}</p>
        <p><span className="bold">From ${price}</span> / person</p>
    </div>
    )
}