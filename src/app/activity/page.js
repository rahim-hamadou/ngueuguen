// @ts-ignore
import Image from "next/image";
import NavBar from "../components/navBar/NavBar.js";
import Footer from "../components/footer/Footer.js";
import Item from "../components/item/Item.js";

function team() {
	const data = {
		title: "NGUEUGUEN MERE & FILS",
		content:
			"Pour un dépannage rapide et efficace, contactez nos experts. Disponibles 24/7, résolution de problèmes informatiques, électroniques, mécaniques et plus encore.",
		services:
			"Installé à Montreuil, ma ville natale, je mets à disposition mes services dans toute l'Île-de-France, en mettant un accent particulier sur la Seine-Saint-Denis. Mon engagement se focalise sur la stimulation, la valorisation, et la participation à la réactivation de la motricité ainsi qu'au bien-être des bénéficiaires. En plus de garantir des services de qualité, je propose des tarifs attractifs et avantageux pour assurer l'accessibilité de mes prestations, contribuant ainsi positivement à la qualité de vie de mes clients. Pour faciliter la collaboration, je me rends chez les particuliers pour discuter et convenir ensemble du devis ainsi que des règles à suivre.",
		philosophie:
			"La philosophie de ce service repose sur la qualité des prestations, une approche efficace dans la réalisation des objectifs, et une tarification équitable. L'objectif est d'offrir des services de haute qualité, d'être efficace dans la prestation de soins, tout en garantissant des prix justes et accessibles pour les clients.",
	};
	return (
		<>
			<NavBar />

			<div className="banner_app_service"></div>
			<div className="container_body">
				<div className="activity_container_services">
					<div className="activity_container_description">
						<h1 className="text-center mb-5 service_header_title font-bold">Notre equipe & mission</h1>

						<Image
							src="/nadine.jpg"
							width={500}
							height={500}
							alt="happiness picture"
							className=" happy rounded"
						></Image>
						<p className="text-justify	mt-2">{data.services}</p>
					</div>
					<h1 className="text-center home_header_title font-bold">Nos services</h1>
					<ul className="activity_container_services_list">
						<Item
							title="Soins"
							content="En tant qu'assistante de vie, j'offre des soins personnalisés pour améliorer le bien-être quotidien, créant un environnement apaisant."
							src="/old_lady.jpg"
						/>
						<Item
							title="Confiance"
							content="Je fournis un soutien émotionnel aux personnes fragiles en instillant joie, confiance et détermination, créant ainsi un environnement propice à l'épanouissement personnel."
							src="/valley.jpg"
						/>
						<Item
							title="Secret"
							content="La confiance est essentielle. En respectant les secrets professionnels, j'assure la confidentialité totale pour un accompagnement professionnel respectueux et discret."
							src="/soin.jpg"
						/>
					</ul>

					<h1 className="text-center mb-5 service_header_title font-bold">Notre Philosophie</h1>
					<p className="text-justify	mt-2 m-8">{data.philosophie}</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default team;
