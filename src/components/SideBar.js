import React from 'react';
import image from '../assets/images/logo-gjfarma.jpg';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import Chart from './Chart';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import '../index.css'

function SideBar(){
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="GJFarma"/>
                    </div>
                </a>

                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - GJFarma</span></Link>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Actions</div>

                <li className="nav-item">
                <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto creado</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla de productos</span></Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/CategoriesInDb">
                    <CategoriesInDb />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/Chart">
                    <Chart />
                </Route>
                <Route component={NotFound} />
            </Switch>

        </React.Fragment>
    )
}
export default SideBar;