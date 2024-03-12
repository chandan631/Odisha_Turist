import React from 'react'

const Navbar = ({filterPlace,placeList} ) => {
  return (
  <>
    <nav className='navbar'>
      <button className='logo' alt="logo"><h1>EXPLORE ODISHA</h1></button>
      <div className='btn-group'>
        {
            placeList.map((curData)=>{
                  return(
                <button className='btn-group__item' onClick={()=>filterPlace(curData)}>{curData}</button>
                );
            })}
      </div>
    </nav>
  </>
  );
};

export default Navbar;