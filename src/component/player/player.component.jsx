import React from 'react';


const Players = ({ playerOne, playerTwo }) => {
            
        {}


    /*  1 & !2 || !1 &2
      1&2
      !1&!2 */
    return (
        <div>
            <div>
                <div className="playerOne">
                    {JSON.stringify(playerOne)}
                </div>
                <div className="playerTwo">
                    {JSON.stringify(playerTwo)}
                </div>
            </div>
        </div>
    )
};


export default Players;