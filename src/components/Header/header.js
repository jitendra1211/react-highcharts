import React from 'react';
import './style.scss';

export default function Header(props) {

    // console.log(props);
    const { toggleSideNav } = props;

  return (
    <nav className="navbar text-white">
        <div className="container-fluid align-item-center">
            <div className="row">
                <div className="px-5 pt-3 pb-2 col-1">
                    <button className="menuBtn" onClick = {toggleSideNav} >
                        <i className="fas fa-bars fa-2x text-light"></i>
                    </button>
                </div>

                <div className="col px-5 pt-3 pb-2">
                    <h3>Highchart In React</h3>
                </div>
            </div>
        </div>
    </nav>
  );
}
