import React from 'react';
import './style.scss';

export default function SideNav(props) {
    const { isOpen} = props;
  return (
        <>
        { isOpen && 
            <div className="collpase sideNav py-5 px-3">
                <div className="d-flex flex-column">
                    <div className="item"> Tab1</div>
                    <div className="item"> Tab1</div>
                    <div className="item"> Tab1</div>
                </div>
            </div>
        }
        </>
  );
}
