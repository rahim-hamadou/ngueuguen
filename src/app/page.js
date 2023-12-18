import Image from "next/image";
import NavBar from "./components/navBar/NavBar.js";
import Footer from "./components/footer/Footer.js";
import Textanime from "./components/textanime/Textanime.js";
import ImgComponent from "./components/contain_img/ImgComponent.js";
import Link from "next/link";

const name = "NGUEUGUEN MERE & FILS";
const experiences = {
	service_quotidien: "https://www.service-quotidien.fr/",
	petit_fils: "https://www.petits-fils.com/",
	auxlife: "https://www.auxilife.fr/",
	harmonie: "https://www.harmonie-medical-service.fr/conseil-maintien-a-domicile",
};

const bg = "./assets/bg/sleep.jpg";
export default function Home() {
	let data = {
		name: "NGUEUGUEN MERE & FILS",
		title: "SOUTIEN ET ASSISTANCE À LA PERSONNE POUR LES ACTES DE LA VIE QUOTIDIENNE.",
		message_header: `
		Je suis Nadine NGUEUGUEN, Camerounaise de 45 ans, Assistante de vie indépendante et mère d'un garçon de 8 ans. J'offre des soins de confort et de bien-être en apportant joie, confiance et détermination dans la vie des personnes fragiles, qu'elles soient malades, âgées, handicapées, dépendantes ou semi-autonomes. Je respecte les secrets professionnels.
		`,

		services: {
			soins: `En tant qu'assistante de vie indépendante, je propose des soins de confort personnalisés visant à améliorer le bien-être quotidien des personnes fragiles. Que ce soit par des activités réconfortantes, des moments de compagnie joyeuse ou des gestes attentionnés, je m'efforce de créer un environnement apaisant qui favorise la qualité de vie.`,
			confiance: `Ma mission va au-delà des soins physiques. J'apporte un soutien émotionnel aux individus malades, âgés, handicapés, dépendants ou semi-autonomes. En instillant joie, confiance et détermination, je contribue à renforcer leur moral et à promouvoir un état d'esprit positif. Mon objectif est de créer des liens chaleureux et inspirants pour favoriser un environnement propice à l'épanouissement personnel.`,
			secret: `La confiance est essentielle dans le domaine de l'assistance à la vie. En respectant scrupuleusement les secrets professionnels, je garantie la confidentialité des informations liées à la vie privée de mes clients. Cette intégrité renforce la relation de confiance et assure un accompagnement professionnel empreint de respect et de discrétion.`,
		},
		message_footer: `Auxiliaire de Vie depuis 2013. Mon parcours professionnel comprend des expériences variées chez des particuliers ainsi que dans des agences telles que SERVICE AU QUOTIDIEN, PETITS FILS, AUXIL'IFE, et HARMONIE SERVICE. En parallèle de mes emplois, j'ai suivi une formation en Service d'Aide à la Personne et ai obtenu mon Titre Professionnel en tant qu'Assistante de Vie aux Familles.`,
		salutation: ` Bienvenue dans la famille NGUEUGUEN MERE & FILS`,

		dataImg: {
			tel: "/phonecall.svg",
			mail: "/email.svg",
			width: 60,
			height: 60,
			alt: "icon contact",
		},
	};
	return (
		<>
			<NavBar />

			<div className="body_head_container  ">
				<div id="banner" className="banner_app">
					<Textanime />
				</div>
			</div>
			<div className="container_body">
				<div className="home_section">
					<Image
						src="/logo_si.png"
						width={300}
						height={300}
						alt="happiness picture"
						className=" happy rounded"
					></Image>
					<div className="action_call">
						<h1 className="home_header_title">{data.title} </h1>

						<div className="icon">
							<a className="icon_el" href="mailto:tchaleu233@yahoo.fr">
								<ImgComponent
									src="/email.svg"
									width={data.dataImg.width}
									height={data.dataImg.height}
									alt={data.dataImg.alt}
								/>
							</a>
							<a className="icon_el" href="tel:0667580957">
								<ImgComponent
									src="/phonecall.svg"
									width={data.dataImg.width}
									height={data.dataImg.height}
									alt={data.dataImg.alt}
								/>
							</a>
						</div>
					</div>
					<p className="home_header_message">{data.message_header}</p>
					<ul className="service_list">
						<li className="services_items soin animate__bounce">
							<b>Soins de Confort Personnalisés: </b>
							{data.services.soins}
						</li>
						<li className="services_items eveil">
							<b>Soutien Emotionnel et Confiance: </b>
							{data.services.confiance}
						</li>
						<li className="services_items flexibility">
							<b>Respect des Secrets Professionnels: </b>
							{data.services.secret}
						</li>
					</ul>
					<p className="home_header_message_footer">
						Auxiliaire de Vie depuis 2013. Mon parcours professionnel comprend des expériences variées chez
						des particuliers ainsi que dans des agences telles que{" "}
						<a className="hover:text-sky-800" href={experiences.service_quotidien}>
							SERVICE AU QUOTIDIEN
						</a>
						,{" "}
						<a className="hover:text-sky-800" href={experiences.petit_fils}>
							PETITS FILS
						</a>
						,{" "}
						<a className="hover:text-sky-800" href={experiences.auxlife}>
							AUXIL'IFE
						</a>{" "}
						et{" "}
						<a className="hover:text-sky-800" href={experiences.harmonie}>
							HARMONIE SERVICE
						</a>
						. En parallèle de mes emplois, j'ai suivi une formation en Service d'Aide à la Personne et ai
						obtenu mon Titre Professionnel en tant qu'Assistante de Vie aux Familles.
					</p>

					<p className="home_header_message_footer_salutation text-center">
						<b>{data.salutation}</b>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
