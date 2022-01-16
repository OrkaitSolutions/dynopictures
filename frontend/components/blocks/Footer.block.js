import Image from "next/image";
import Link from "next/link";

const FooterBlock = () => {
	return (
		<footer className="footer" id="footer">
			{/* Footer Social*/}
			<div className="footer__social">
				
				<div className="footer__social__item footer__social__item-facebook">
					<a href="https://www.facebook.com/dyno.pictures">
						<Image
							src="/social/facebook.svg"
							width={100}
							height={100}
							alt="facebook"
						/>
					</a>
				</div>
				<div className="footer__social__item footer__social__item-instagram">
					<a href="https://www.instagram.com/dyno_pictures/">
						<Image
							src="/social/instagram.svg"
							width={100}
							height={100}
							alt="instagram"
						/>
					</a>
				</div>
				<div className="footer__social__item footer__social__item-instagram">
					<a
						target="_blank"
						href="https://api.whatsapp.com/send/?phone=918291219363&text&app_absent=0" rel="noreferrer"
					>
						<Image
							src="/social/whatsapp.svg"
							width={100}
							height={100}
							alt="instagram"
						/>
					</a>
				</div>
			</div>

			{/* Footer Main */}
			<div className="footer__main">
				<div className="footer__main__rights">
					{`© ${new Date().getFullYear()} All Rights Reserved by`}{" "}
					<span>Dyno Pictures</span>
				</div>
				<div className="footer__main__credits">
					Website Designed and Developed by{" "}
					<Link
						href="https://github.com/OrkaitSolutions"
						passHref={true}
					>
						Orka IT Solutions
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default FooterBlock;
