import React from 'react';
import DefaultLayout from "../../layout/default";
import {Row, Nav} from "react-bootstrap";
import MenuComponent from "../../ui-components/menu";
import CanvasComponent from "../../ui-components/canvas";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faCog, faUserAstronaut, faPlus} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../ui-components/sidebar";
import MainContent from "../../ui-components/main-content";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default class ExplorerView extends React.Component {

    render() {
        console.log("this.props", this.props.location);
        return (<DefaultLayout {...this.props}>

            <Row>
                <Sidebar>
                    <Button
                        // block
                        variant="outline-primary"
                        size={"sm"}
                        className={"ml-3 mt-2 mb-2"}
                        // disabled={isLoading}
                        // onClick={!isLoading ? handleClick : null}
                    >
                        <FontAwesomeIcon className={"small"} icon={faPlus}/> Create Element
                    </Button>
                    <ListGroup defaultActiveKey="#link1" variant="flush">
                        <ListGroup.Item action>
                            collection 1
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            collection 1
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            This one is a button
                        </ListGroup.Item>
                    </ListGroup>
                </Sidebar>
                <MainContent className={"main-content"}>
                    <MenuComponent>
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <Nav.Link>
                                    Graph Canvas
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <button className={"nav-link"}>
                                    <FontAwesomeIcon icon={faUserAstronaut}/>

                                </button>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/connect">
                                    <FontAwesomeIcon icon={faUserAstronaut}/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/graph">
                                    <FontAwesomeIcon icon={faCode}/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/table">
                                    <FontAwesomeIcon icon={faCog}/>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </MenuComponent>
                    <CanvasComponent>

                    </CanvasComponent>
                    <MenuComponent className={"sm"}>
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <Nav.Link href="/connect">
                                    Query successfull
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link href="/connect">
                                    200 response
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </MenuComponent>
                </MainContent>
            </Row>

        </DefaultLayout>)
    }

}
