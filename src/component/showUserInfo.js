import React from 'react'

const ShowInfo = ({userData}) => {

    return (
      <>
        <div>
          <p>Name : {userData.name}</p>
          <p>Year : {userData.year}</p>
          <p>Pantone Value : {userData.pantone_value}</p>
        </div>
      </>
    );
}


export default ShowInfo;