// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
  // import Button from "./Button.jsx";
  // import Student from "./Students.jsx";

// import UserGreeting from "./UserGreeting.jsx";
// import List from "./List.jsx";
// import ButtonClick from "./ButtonClick.jsx";
// import ProfilePicture from "./ProfilePicture.jsx";

// import MyComponent from "./MyComponent.jsx";
// import Counter from "./Counter.jsx";
//  React hook = special function that allows functional components to use react feature without writing class components (React v16.8)(usestate , useEffect , useContext , useReducer , useCallback ,and more)

// useState() = A React hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM,

import ComponentNew from "./ComponentNew.jsx";



function App() {
  const fruits = [{ id:1, name :"Apple " , calories : 95},
                { id:2, name :"Orange" ,calories : 45 } ,
                { id:3, name: "banna" , calories : 105} ,
               { id:4, name :"cocunut" , calories : 159 } ,
                { id:5, name : "pineapple" , calories : 37}] ;

  const vegetables = [{ id:6, name :"potato " , calories : 110},

                { id:7, name :"celery" ,calories : 15 } ,
                { id:8, name: "carrot" , calories : 25} ,
                { id:9, name :"corn" , calories : 63 } ,
                { id:10, name : "brocoli" , calories : 50}] ;

  return(
    <>  
    {/* <Header/> 
    <Food/>
    <Food/>
    <Food/>
    <Footer/> */}
    {/* <Card/>
    <Card/>
    <Card/>
    <Card/> */}

    {/* <Button/> */}
    
    {/* <Student name="spongebob" age={30} isStudent = {true}/>
    <Student name="PAtrick" age={42} isStudent = {false}/>
    <Student name="Squidward" age={50} isStudent = {false}/>
    <Student name="Nihal" age={23} isStudent = {true}/>
    < Student name= " Larry" /> */}
    {/* <UserGreeting isLoggedIn ={false}  username = "Nihal"></UserGreeting> */}

    {/* { fruits.length > 0  ? <List items={fruits} category="Fruits" /> : null} * this is ternory  */}
    {/* { fruits.length > 0  && <List items={fruits} category="Fruits" /> }  *This is know as a short cercuting */}
     {/* {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null} */}
   {/* {vegetables.length > 0 && <List items={vegetables} category="Vegetables" /> } */}
     {/* <ButtonClick/> */}
     {/* <ProfilePicture/> */}

        {/* <MyComponent/> */}

        {/* < Counter/> */}
        < ComponentNew/>
    </>
    
  );
}

export default App
