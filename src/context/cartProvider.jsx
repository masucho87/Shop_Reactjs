import { cartContext } from "./cartContext";

function cartProvider ({children}){
    return (
        <cartContext.Provider value={3}>
        {children}
        </cartContext.Provider>
    )
} 


export default cartProvider