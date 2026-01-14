

# Sol to Project 2

## The solution: Lift cartItems state to App.jsx

    The key idea:

    Keep one single source of truth for cart items — in App.jsx.

    Pass cartItems and setCartItems to child components via props.

    Every component updates the same array, so changes are reflected everywhere.

### Example
    function App() {
    const [cartItems, setCartItems] = useState([
        {
        id : Date.now(),
        name : "I Phone 12",
        price : 1400.00,
        image : iphone12
    }]);

    const newItem = (newCartItem) => {
        setCartItems([...cartItems, {...newCartItem}]);
    }
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-cart-item" element={<AddCartItem newItem={newItem} cartItems={cartItems}/>} />
        <Route path="/view-cart-items" element={<ViewCartItem cartItems={cartItems}/>}/>
        </Routes>
    );
    }


![Project Screenshot](https://github.com/naveennakshatram/ReactExamples/blob/master/Project2/readme_images/1.png?raw=true)

![Project Screenshot](https://github.com/naveennakshatram/ReactExamples/blob/master/Project2/readme_images/2.png?raw=true)

![Project Screenshot](https://github.com/naveennakshatram/ReactExamples/blob/master/Project2/readme_images/3.png?raw=true)
