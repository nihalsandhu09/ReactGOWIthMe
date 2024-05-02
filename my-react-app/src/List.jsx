
import PropTypes from 'prop-types'

function List(props){
// const fruits = [{ id:1, name :"Apple " , calories : 95},
//                 { id:2, name :"Orange" ,calories : 45 } ,
//                 { id:3, name: "banna" , calories : 105} ,
//                { id:4, name :"cocunut" , calories : 159 } ,
//                 { id:5, name : "pineapple" , calories : 37}] ;
 
   //fruits.sort((a,b)=>a.name.localeCompare(b.name)); // this is ALPHABETICAL order
  //fruits.sort((a,b)=>b.name.localeCompare(a.name)); // this is reverse ALPHABETICAL order

 // fruits.sort((a,b)=> a.calories -b.calories) // Numeric Order
 //  fruits.sort((a,b)=> b.calories -a.calories) // ReverseNumeric Order

//  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}> 
//                 {lowCalFruit.name} : &nbsp;
//                 <b> {lowCalFruit.calories} </b> </li>)

// const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}> 
//                 {highCalFruit.name} : &nbsp;
//                 <b> {highCalFruit.calories} </b> </li>)
const category = props.category;
const ItemList = props.items;
const listItems = ItemList.map(item=> <li key={item.id}> 
                {item.name} : &nbsp;
                <b> {item.calories} </b> </li>)

return(
<>
<h3 className="list-category">{category}</h3>
<ol className="List-Item">{listItems}</ol>

 </>



);
}
List.PropTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes , shape({id:PropTypes.number,
    name:PropTypes.string,
    calories:PropTypes.number
    }))
}
List.defaultProps = {
    category : "Category",
    items : [],
}
export default List