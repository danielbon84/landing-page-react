import React from "react";
import NavBar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./footer.jsx";

//create your first component
function Home() {
	return (<>
		<NavBar />
		<Jumbotron />
		<div className="row row-cols-1 row-cols-md-4 g-4 card-container d-flex">
		<Card />
		<Card />
		<Card />
		<Card />
		</div>
		<Footer />
	</>
	);
}

export default Home;
