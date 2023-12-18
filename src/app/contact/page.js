// @ts-nocheck
import NavBar from "../components/navBar/NavBar.js";
import Footer from "../components/footer/Footer.js";
import ContactForm from "../components/contacform/ContactForm.js";
import ContactPhone from "../components/contactphone/ContactPhone.js";

function contact() {
	let dataContact = {
		title: "NGUEUGUEN MERE & FILS",
		title_head: `Soyez Acteur du Bien-Etre de vos proches et du Votre  !`,
		location: "Montreuil et villes proches",
		invitation: `Avez-vous pensé à investir dans votre bien-être quotidien ? Notre service, basé à Montreuil, se dédie à stimuler, valoriser, et contribuer à la réactivation de votre motricité pour améliorer votre qualité de vie.

		Nous croyons en la qualité, en l'efficacité, et des prix équitables. Pourquoi ne pas discuter de vos besoins particuliers et découvrir comment nous pouvons personnaliser nos services pour vous ? Notre engagement envers votre bien-être va au-delà des soins physiques ; il vise à instiller de la joie, de la confiance et à promouvoir un état d'esprit positif.
		
		Contactez-nous dès aujourd'hui pour une évaluation personnalisée. Ensemble, explorons les moyens d'optimiser votre bien-être quotidien.
		`,
		salutation: `
		Au plaisir de contribuer à votre épanouissement !`,
	};
	return (
		<>
			<NavBar />
			<div className="container_body">
				<div className="contact_section">
					<h1 className="home_header_title text-center mb-5 font-bold">{dataContact.title_head}</h1>
					<p className="invitation">{dataContact.invitation}</p>
				</div>
				{/* <Card /> */}
				<div className="contact_container ">
					<ContactForm />
					<ContactPhone title={dataContact.title} location={dataContact.location} />
				</div>
				<h2 className="contact_container_salutation ">{dataContact.salutation}</h2>
			</div>

			<Footer />
		</>
	);
}

export default contact;
