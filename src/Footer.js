import React from 'react';
import {Col,Row} from'react-bootstrap';
export default class Footer extends React.Component{
    render(){
        return(
            <div>
<div className="site-footer">

    <div className="invert">
        <Row>
           
            <Col lg={3} md={3} xs={12}>
            <div className="footer-area">
<h5 className="widget-title">categories</h5>
<ul>
    <li><a href="">Action</a></li>
    <li><a href="">Comedy</a></li>
    <li><a href="">Documentry</a></li>
    <li><a href="">Drama</a></li>
    <li><a href="">Fantasy</a></li>
    <li><a href="">Sci-Fi</a></li>
    <li><a href="">Slider</a></li>
    <li><a href="">Thriller</a></li>
    <li><a href="">Tv Shows </a></li>
    <li><a href="">Uncategorized</a></li>
</ul>
</div>
</Col>
<Col lg={3} md={3} xs={12}>
<div id="menu-footer">
<h5 className="widget-title ">information</h5>
<ul>
    <li><a href="">about us</a></li>
    <li><a href="">Contacts</a></li>
    <li><a href="">terms of Service</a></li>
    </ul>
    </div>
</Col>
<Col lg={3} md={3} xs={12}>
<div className="widget-tag">
<h5 className="widget-title">tags</h5>
<div className="tag-cloud">
    <a href="">action</a>
    <a href="">comedy</a>
    <a href="">documentry</a>
    <a href="">fantasy</a>
    <a href="">history</a>
    <a href="">horror</a>
    <a href="">movie</a>
    <a href="">show new</a>
    <a href="">thriller</a>
    <a href="">TV</a>
</div>
</div>
</Col>
<Col lg={3} md={3} xs={12}>
<div className="subscribe-blog">
<h5 className="widget-title">subscribe</h5>
<div className="subscribe-message">
Get Alerted About All the New Movies!
    </div>
    <form>
        <input type="email" placeholder="Enter your email"/>
        <a href="" id="subscribe-submit">SUBSCRIBE</a>
        </form>
    </div>
</Col>
</Row>
</div>

<div className="site-info_flex">
<div className="footer-copyright">© 2017 MovieLine, Inc. All Rights Reserved.</div>
</div>
</div>
</div>
        );
    }
}