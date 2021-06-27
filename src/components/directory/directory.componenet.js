import React from 'react'
import MenuItem from '../menu-item/menu-item.componenets'
import './directory.styles.scss'
import {selectDirectory} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

const  Directory = ({sections})=> {
        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherProps}) =>{
                       return <MenuItem key={id} {...otherProps}/>
                    })
                }
            </div>
        )
        
}

const mapStateToProps = createStructuredSelector(
  {sections: selectDirectory}
)
export default connect(mapStateToProps)(Directory);