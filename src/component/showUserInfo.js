import React from 'react'

const ShowInfo = ({userData}) => {

    return (
      <>
        
        <div>
          <p>{userData.name}</p>
          {/* <p>{userData.last_name}</p> */}
          <p>{userData.email}</p>
        </div>
        
      </>
    );
}


export default ShowInfo;