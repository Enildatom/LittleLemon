function Testimonialitems(){
    const testitems=[{
            id:"Harry",
            testimonial:"This is the best Mediterranean food that I've ever had!",
        },
        {
            id:"Ron",
            testimonial:"The food here really refreshed me after a late night shift at the local supply depot.",
        },
        {
            id:"Dobby",
            testimonial:"My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",
        } ,
        {
            id:"Fred",
            testimonial:"This is the best Mediterranean food that I've ever had!",
        },
        {
            id:"George",
            testimonial:"I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
        },
        {
            id:"Ginny",
            testimonial:"This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!",
        },   
    ];
    const listItems = testitems.map((element) => {
        return (
            <div className='testimonial-elements'>
            <h5>{element.id}</h5>
            <p>{element.testimonial}</p>
            </div>
        );
        });
    return (<div className="testimonial">{listItems}</div>
    );
}
function Testimonials(){
    return(
        <div className="test">
        <h4>Testimonials</h4>
        <Testimonialitems />
        </div>
    );
};
export default Testimonials;