import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export class SiteThemes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="img/Dog" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="lost.html">Lost your pet?</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                                dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="img/gingeCat" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="found.html">Find an animal and looking for the owners?</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                euismod
                                odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="img/horse.jpg" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Want to volunteer?</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam,
                                error
                                quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque
                                iure
                                perspiciatis mollitia recusandae vero vel quam!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="img/HelpMe.jpg" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Looking for help?</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                euismod
                                odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="img/LetsGo
                        .jpg" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Useful information</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                euismod
                                odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="img/Improving.jpg" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Think we may improve something?
                                    Tell us about it!
                                </a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum
                                nostrum
                                suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in
                                voluptates,
                                nemo repellat fugiat excepturi! Nemo, esse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>);
    }
}