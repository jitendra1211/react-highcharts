import React, {Component} from 'react';
import SideNav from '../SideNav/sidenav';
import Header from '../Header/header';
import LineChart from '../LineChart';
import './style.scss';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'Highchart',
          isOpen:false
        };
      }
    
    toggleSideNav = () => {
      this.setState({ isOpen: !this.state.isOpen});
    }
  
    
    render() {
      return (
        <>
        <Header toggleSideNav = {this.toggleSideNav} />
        <div className="d-flex">
          <SideNav isOpen = {this.state.isOpen}/>
          <div className="chartContainer">
            <LineChart />
          </div>
        </div>
      </>
      )
    }
  }

export default Home;
