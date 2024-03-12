import React, { useState } from 'react'
import '../style/style.css'
import PlaceData from './placeAPI'
import ExploreCard from './ExploreCard'
import Navbar from './Navbar'

const categoryList =[
  ...new Set(
    PlaceData.map((curData)=>{
      return curData.category;
    })
  ),"All"
];

console.log(categoryList);

const Exploreodisha = () => {
    const [Place, setPlace]= useState(PlaceData);
    const [placeList] = useState(categoryList)

    const filterPlace =(category)=> {
      if (category==="All"){
        setPlace(PlaceData);
        return ;
      }
      const updatedPlace = PlaceData.filter((curData)=>{
        return curData.category === category;
      });
      setPlace(updatedPlace);
    };
  return (
  <>
    <Navbar filterPlace={filterPlace} placeList={placeList}/>
  <ExploreCard Place={Place}/>
  </>
  );
};

export default Exploreodisha;