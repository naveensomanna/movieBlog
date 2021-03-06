import React from 'react';
import {Col, Row} from 'react-bootstrap';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import insta from '../images/insta.png';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="site-footer">

                    <div className="invert">
                        <Row>

                            <Col lg={2} md={3} xs={6} >
                                <div className="footer-area">
                                    <h5 className="widget-title">categories</h5>
                                    <ul>
                                        <li><a href="">Action</a></li>
                                        <li><a href="">Comedy</a></li>
                                        <li><a href="">Drama</a></li>
                                        <li><a href="">Thriller</a></li>
                                        <li><a href="">Tv Shows </a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={3} xs={6}>
                                <div id="menu-footer">
                                    <h5 className="widget-title ">information</h5>
                                    <ul>
                                        <li><a href=" ">about us</a></li>
                                        <li><a href=" ">Contacts</a></li>
                                        <li><a href=" ">terms of Service</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={3} xs={6}>
                                <div>
                                    <h5 className="widget-title ">IMDbPro</h5>
                                    <ul>
                                        <li><a href=" "></a>Box Office Mojo</li>
                                        <li><a href=" ">Withoutabox</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={3} xs={6}>
                                <div className="widget-tag">
                                    <h5 className="widget-title">tags</h5>
                                    <div className="tag-cloud">
                                        <a href="">action</a>
                                        <a href="">comedy</a>
                                        <a href="">history</a>
                                        <a href="">horror</a>
                                        <a href="">thriller</a>
                                        <a href="">TV</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={3} xs={6}>
                                <div className="subscribe-blog">
                                    <div className="footer-title">
                                    </div>
                                    <p id="imdb">IMDb</p>
                                    <div>
                                        <img src={facebook} width="18px" height="18px" style={{marginRight: '5px'}}
                                             alt=" "/>
                                        <img src={twitter} width="20px" height="20px" style={{marginRight: '5px'}}
                                             alt=" "/>
                                        <img src={insta} width="20px" height="20px" alt=" "/>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>
        );
    }
}