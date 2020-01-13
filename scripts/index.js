import shoppingList from './shopping-list.js';

const handleShoppingList = function () {
  shoppingList.render();
  shoppingList.handleNewItemSubmit();
  shoppingList.handleItemCheckClicked();
  shoppingList.handleDeleteItemClicked();
  // calling our new edit function
  shoppingList.handleEditShoppingItemSubmit();
  shoppingList.handleToggleFilterClick();
};

// when the page loads, call `handleShoppingList`
$(handleShoppingList);