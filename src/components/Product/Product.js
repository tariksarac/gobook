import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            over: false,
            showMore: false,
        };
    }

    render() {
        let { over, showMore } = this.state;
        let { gallery, title, name, description } = this.props.product;

        let backGroundImage = over && gallery && gallery.length > 1 ? gallery[0] : gallery[1];
        // let backGround = {
        //     backgroundImage: `url(${backGroundImage.original})`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        // };
        // let layer = {
        //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     width: '100%',
        //     height: '100%',
        //     zIndex: 2,
        // };

        return (
            <Card className={'Product'}>
                <CardMedia className={'Product-image'} image={backGroundImage.original} title="p" onClick={() => this.props.history.push(`/tour/${name}`)}/>
                <CardContent onClick={() => this.props.history.push(`/tour/${name}`)}>
                    <Typography gutterBottom variant="headline" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p" align={'left'}>
                        {name}
                    </Typography>
                </CardContent>
                {showMore && (
                    <Typography component="p" align={'left'}>
                        {description}
                    </Typography>
                )}
                <CardActions className={'Product-image-button'}>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => this.setState(({ showMore }) => ({ showMore: !showMore }))}>
                        {showMore ? 'Less' : 'Learn More'}
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withRouter(Product);

{
    /*<div*/
}
{
    /*className={'Product'}*/
}
{
    /*onMouseOver={() => this.setState({ over: true })}*/
}
{
    /*onMouseLeave={() => this.setState({ over: false })}*/
}
{
    /*style={backGround}*/
}
{
    /*onClick={() => this.props.history.push(`/tour/${name}`)}>*/
}
{
    /*{!over && title && <div className={'product-name'}>{title}</div>}*/
}

{
    /*{over && name && <div className={'product-name'}>{name}</div>}*/
}

{
    /*{price && (*/
}
{
    /*<div className={'product-name product-price'} style={{ display: over && 'block' }}>*/
}
{
    /*{price}*/
}
{
    /*</div>*/
}
{
    /*)}*/
}

{
    /*{over && <div className="layer" style={layer} />}*/
}
{
    /*</div>*/
}
{
    /*<div className={'card-description'}>*/
}
{
    /*<div className={'card-title'} />*/
}
{
    /*<div className={'card-subTitle'} />*/
}
{
    /*<div className={'card-show-more'} />*/
}
{
    /*{showMore && <div className={'show-more-text'} onClick={() => this.setState(({showMore})=>({showMore: !showMore}))}>more</div>}*/
}
{
    /*</div>*/
}
