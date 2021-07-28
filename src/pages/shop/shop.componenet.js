import React from 'react'

import CollectionOverview from '../../components/collection-overview/collection-overview.componenet'
import {Route} from 'react-router-dom'
import CollectionPage from '../../components/collection/collection.componenet'
import {firestore, convertCollectionsSnapshotToMpas} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {updateCollection} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/spinner.componenet' 

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component {
  state={
    loading:true
  }
  unsubscribeFromSnapshot= null;
  componentDidMount(){
    const {updateCollection} = this.props
    const collectionRef = firestore.collection('collections')

    //here we are using th =e observable from firsbase to get the data and handle the asynchronous call. onsnapshot is observable
    // collectionRef.onSnapshot(async snapshot =>{
    //   const collectionMap = convertCollectionsSnapshotToMpas(snapshot)
    //   updateCollection(collectionMap)
    //   this.setState({loading:false})
    // })

    //normal promise to handle asynchronous calls
    collectionRef.get().then(async snapshot =>{
      const collectionMap = convertCollectionsSnapshotToMpas(snapshot)
      updateCollection(collectionMap)
      this.setState({loading:false})
    })
  }
  render(){
    const {match}= this.props
    const {loading} = this.state
        return (<div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={loading} {...props}/> } />
    <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
  </div>)
    
}
}  

const mapDispatchToProps = dispatch => ({
  updateCollection : collectionMap => dispatch(updateCollection(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);