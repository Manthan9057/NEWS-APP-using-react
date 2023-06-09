import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
               <img src={!imageUrl?"https://img.etimg.com/thumb/msid-99804865,width-1070,height-580,imgsize-11950,overlay-economictimes/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
             <div className="card-body">
    <h5 className="card-title">Card {title}......</h5>
    <p className="card-text">{description}.......</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btm-sm btn-primary">READ MORE</a>
     </div>
   </div>
  </div>
    )
  }
}


export default NewsItem