import React from 'react'

const ExploreCard = ({Place}) => {
    return(
    <>
    <section className='main-card--cointainer' >
       { Place.map((curData)=>{
        const { id, name, category, image,distance, description}=curData
            return(
                <>
                <div className='card-container' key={id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{id}</span>
                            <span className='card-author subtle'>{category}</span>
                            <h1 className='card-title'>{name}</h1>
                            <span className='card-description subtle'>
                            {description}
                           </span>
                            <div className='card-read'>{distance}</div>
                        </div>
                        <img src={image} alt="images" className='card-media'/>
                        <span className='card-tag subtle'>explore</span>
                    </div>
                </div>
                </>
            );
       })};
    </section>
    </>
    
 );
};

export default ExploreCard;