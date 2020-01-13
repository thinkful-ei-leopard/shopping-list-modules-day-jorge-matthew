import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return items.find(item => item.id === id); 
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch (error) {
    console.log(`cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked (id) {
  let item = this.findById(id);
  item.checked = !item.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    this.findById(id).name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  let index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
}

function toggleCheckedFilter(){
  this.hideCheckedItems = !this.hideCheckedItems;

}
export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
  
};