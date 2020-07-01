//npm i redux react-redux redux-thunk
import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { uuid } from 'uuidv4';
import {connect} from 'react-redux'
import { Provider } from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions'
import propTypes from 'prop-types'

/**
 * Static data in components, implement Redux , put static data into Redux, connect to backend
*/

class ShoppingList extends React.Component{
 
    componentDidMount(){
        console.log('Our data is fetched');
        this.props.getItems();        
    }
    /**
     * const initialState = {
    items:[
        {id:uuid(), name:"Eggs"},
        {id:uuid(), name:"Milk"},
        {id:uuid(), name:"Steak"},
        {id:uuid(), name:"Water"},
     ]
      };   
      item is initialState
      items is items 
      */
     onDeleteClick= (id)=>{                                       
        this.props.deleteItem(id);
     }
    render(){
        
        const {items} = this.props.item;

        return(
              
               <Container> 
                  <ListGroup> 
                      <TransitionGroup className = "shopping-list">
                        {items.map(({_id,name})=>(
                            <CSSTransition key={_id} timeout ={500} classNames = "fade">
                            <ListGroupItem>
                            <Button 
                            className ="remove-btn"
                            color ="danger"
                            size = "sm"
                            onClick = {this.onDeleteClick.bind(this,_id)}
                            >&times;</Button>
                            {name}
                          </ListGroupItem>               
                            </CSSTransition>
                        ))}
                      </TransitionGroup>
                  </ListGroup>
               </Container>   
           
        );
    }
      
 }//end class
 
 //mapStateToProps: turn/map state.
 //items into component property
 ShoppingList.propTypes = {
     getItems: propTypes.func.isRequired,
     item: propTypes.object.isRequired
 };
 const mapStateToProps = (state) =>({
     item:state.item
 });
 export default connect(
     mapStateToProps,
     {getItems,deleteItem}
     )(ShoppingList); //  
 
