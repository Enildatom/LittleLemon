
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <header>
      <section>
    <div className="head-tag">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a mordern twist</p>
        <Link to="/reservations">
          <button type="submit">Book a table</button>
        </Link>

    </div>
    <div className="head-img">
        <img  src="restauranfood.jpg" alt="a Platter with food" />
    </div>
    </section> 
    </header>
  );
}