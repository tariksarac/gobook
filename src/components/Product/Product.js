import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMore: false,
        };
    }

    render() {
        let { title, name, description, featuredPicture } = this.props.product;

        return (
            <Card className={'Product'}>
                <CardMedia className={'Product-image'} image={featuredPicture} title="p" onClick={() => this.props.history.push(`/tour/${name}`)}/>
                <CardContent onClick={() => this.props.history.push(`/tour/${name}`)}>
                    <Typography gutterBottom variant="headline" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p" align={'center'}>
                        {name}
                    </Typography>
                </CardContent>

                    <Typography component="p" align={'center'}>
                        {description}
                    </Typography>
                <CardActions className={'Product-image-button'}>
                </CardActions>
            </Card>
        );
    }
}

export default withRouter(Product);
