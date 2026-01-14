

# Adding Items to Cart

## We are moving data between the componets using <Link state attribute...> 

### Example

    <Link
            to="/view-cart-items"
            state={cartItems}
            className="flex items-center gap-4 underline text-4xl"
          >
            View Cart
            <FaCartArrowDown size={30} color="red" />
          </Link>

### Here’s the situation:

    You have AddCartItem maintaining its own cartItems state.

    But App.jsx has its own cart state, and you’re sending data via state in <Link>.

    Updating the cartItems inside AddCartItem does not automatically update App.jsx, because React state is isolated to the component that owns it.


### Why thr App.jsx cartItems is not updating

    // In App.jsx

    <Link to="/add-cart-item" state={cartItems}>View Cart</Link>

    We are passing cartItems as initial state via React Router.

    Inside AddCartItem, we did like:  const [cartItems, setCartItems] = useState(location.state || []);

    This creates a new state inside AddCartItem.

    Changing this does not propagate back to App.jsx.


![Project Screenshot](https://github.com/naveennakshatram/ReactExamples/blob/master/Project2/readme_images/1.png?raw=true)

![Project Screenshot](https://github.com/naveennakshatram/ReactExamples/blob/master/Project2/readme_images/2.png?raw=true)

![Project Screenshot](https://github.com/naveennakshatram/ReactExamples/blob/master/Project2/readme_images/3.png?raw=true)
