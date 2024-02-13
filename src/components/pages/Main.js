import bruchetta from '../images/bruchetta.png';
import greeksalad from '../images/greek salad.jpg';
import lemondessert from '../images/lemon dessert.jpg';
function Menu(){
    const menuitems=[{
            id:"Greek Salad",
            price:"$12.99",
            pic:greeksalad,
            desc:"The Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt.",
        },
        {
            id:"Bruchetta",
            price:"$16.99",
            pic:bruchetta,
            desc:"Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
        },
        {
            id:"Lemon Dessert",
            price:"$8.99",
            pic:lemondessert,
            desc:"Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
        } ];
        const listItems = menuitems.map((element) => {
            return (
                <div className='item-elements'>
                    <h4>{element.id}</h4>
                    <h5>{element.price}</h5>
                    <img src={element.pic}  alt="food pic"/>
                    <p>{element.desc}</p>
                    <button className="item-elements-button" type="submit">Order for Delivery</button>
                </div>
            );
        });
        return <div className="items">{listItems}</div>;
}
function Main(){
    return <main>
        <div className="item-header">
            <h3>This Weeks Specials!</h3>
            <button className="item-elements-button" type="submit" >Online menu</button>  
        </div>
        <Menu />
        
    </main>
}
export default Main;