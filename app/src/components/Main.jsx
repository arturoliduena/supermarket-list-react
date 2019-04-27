import React from 'react';
import './App.css';
import Title from './Title';
import CountItems from './CountItems';
import Item from './Item';
import Button from './Button';
import Modal from './Modal';
import { getItems, putItem, deleteItem } from '../api'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      openModal: false,
      items: [],
    };
   }

  componentDidMount = async () => {
    const items = await getItems();
    this.setState({ items })
  }

  handleOpenModal = () => {
    this.setState({ openModal: true})
  }

  handleCloseModal = () => {
    this.setState({ openModal: false})
  }

  deleteItem = async (itemPosition) => {
    await deleteItem(itemPosition);
    const items = await getItems();
    this.setState({ items })
  }

  addItem = async (item) => {
    await putItem(item);
    const items = await getItems();
    this.setState({ items, openModal: false })
  }

  render() {
    const { openModal, items } = this.state;
    return (
      <div className="App">
        <Title />
        {
          items.length ?
          <CountItems count={items.length}/>  :
          <span className="empty-list"> List is empty </span>
        }
        
        {
          items.map((item, i) =>
            <Item elem={{name: item, position: i}} key={i} deleteItem={this.deleteItem}/>
          )
        }
        <Button onClick={this.handleOpenModal}/>
        {
          openModal && <Modal handleCloseModal={this.handleCloseModal} addItem={this.addItem}/>
        }
      </div>
    );
  }
}

export default Main;