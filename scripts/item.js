function validateName (name) {
  if (name.length === 0) {
      throw TypeError ('name must not be blank');
    }


}
function create (name) {
return {
    id: cuid(),
    name,
    checked: false
}    
}
export default 
{validateName,create};
 
 