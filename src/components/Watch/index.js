import React from 'react';
import {connect } from 'react-redux';
import {Image, Button} from 'react-bootstrap';

const FullWatchDetails = (props) => {
    console.log(props);
    const getWatch = props.watchDetails.filter( watch => watch.name === props.match.params.name)[0];
    const specifications = getWatch.specification.map( spec => <li>{spec}</li> );
    return (
        <div>
            <div>Description</div>
            <div>
                <div>
                    <Image src={getWatch.url} />
                </div>
                <div>
                    <section>
                        <h2>{getWatch.name}</h2>
                        <div>{getWatch.price}</div>
                        <Button>Add To Cart</Button>
                    </section>
                </div>
                <div>
                    <h3>At A Glance</h3>
                    <hr />
                    <div>
                        <h4>{getWatch.title}</h4>
                        <p>{getWatch.description}</p>
                    </div>

                    <div>
                        <h4>Specifications</h4>
                        <hr />
                        <ul>
                            {specifications}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        watchDetails: state.watch,
    }
}

export default connect(mapStateToProps)(FullWatchDetails);