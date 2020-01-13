import item from './item.js';

const items = [];
const hideCheckedItems = false;
function findbyid(id) {
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

function findAndToggleChecked (id)
this.findbyId.fetch == false)  

export default {
  items,
  hideCheckedItems
};