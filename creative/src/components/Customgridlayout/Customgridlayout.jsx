import React from 'react';
import "./Customgridlayout.css"
import CustomCard from '../CustomCard/CustomCard';

function Customgridlayout(props) {
    return (
        <div className='Gridlayout'>
            {[...Array(12)]?.map((item) => {
                return(
                    <CustomCard></CustomCard>
                )
            })}
            
        </div>
    );
}

export default Customgridlayout;