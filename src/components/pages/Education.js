import React from 'react'
import Template from '../Template'
import TableOfContents from '../TableOfContents';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Education(){
    const [key, setKey] = useState('home');

    return ( 
        <Template title="Education">
            <div className="row"> 
                <div className="col-sm-2"> 
                    <TableOfContents activeKey={key}/>
                </div>
                <div className="col-lg">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Home">
                            <div id="home">
                            <h2 className="content-section" id="overview-2"> Overviewddf </h2>
                                <h3 className="content-section" id="test-1-3"> Hisdas </h3>
                                <h2 className="content-section" id="overview-1-3"> Overviewdfdsfjb </h2>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <div id="profile">
                                <h2 className="content-section" id="overview"> Overview </h2>
                                <h3 className="content-section" id="test-1"> Hi</h3>
                                <h2 className="content-section" id="overview-1"> Overview </h2>
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            Tab content for Contact
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Template>
    )
}

export default Education