import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections : [
                {
                  title: 'paint',
                  //imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  imageUrl : 'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?cs=srgb&dl=shallow-focus-photo-of-paint-brushes-1646953.jpg&fm=jpg',
                  id: 1,
                  linkUrl: 'shop/paint'
                },
                {
                  title: 'pottery',
                  //imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  imageUrl: 'https://images.pexels.com/photos/2556276/pexels-photo-2556276.jpeg?cs=srgb&dl=person-making-pottery-in-room-2556276.jpg&fm=jpg',
                  id: 2,
                  //linkUrl: 'shop/jackets'
                  linkUrl: 'shop/pottery'
                },
                {
                  title: 'fabric',
                  //imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  imageUrl: 'https://images.pexels.com/photos/1571577/yarn-skeins-string-multicolor-1571577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 3,
                  //linkUrl: 'shop/sneakers'
                  linkUrl: 'shop/fabric'
                },
                {
                  title: 'supplies',
                  //imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  imageUrl: 'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  size: 'large',
                  id: 4,
                  //linkUrl: 'shop/womens'
                  linkUrl: 'shop/supplies'
                },
                {
                  title: 'paper',
                  //imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  imageUrl: 'https://images.pexels.com/photos/40799/paper-colorful-color-loose-40799.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/paper'
                }
              ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                    ))}
            </div>
        )
    }
}

export default Directory;