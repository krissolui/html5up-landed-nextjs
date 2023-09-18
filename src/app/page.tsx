import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

import pic01 from '@/../public/pic01.jpg';
import pic02 from '@/../public/pic02.jpg';
import pic03 from '@/../public/pic03.jpg';
import pic04 from '@/../public/pic04.jpg';
import Banner from '@/components/Banner';

export default function Home() {
	return (
		<div className={styles.pagewrapper}>
			<Header landing={true} />

			<Banner src={pic01} />

			<section id="one" className="spotlight style1 bottom">
				<span className="image fit main">
					<Image src={pic02} alt="" />
				</span>
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-4 col-12-medium">
								<header>
									<h2>
										Odio faucibus ipsum integer consequat
									</h2>
									<p>
										Nascetur eu nibh vestibulum amet gravida
										nascetur praesent
									</p>
								</header>
							</div>
							<div className="col-4 col-12-medium">
								<p>
									Feugiat accumsan lorem eu ac lorem amet sed
									accumsan donec. Blandit orci porttitor
									semper. Arcu phasellus tortor enim mi nisi
									praesent dolor adipiscing. Integer mi sed
									nascetur cep aliquet augue varius tempus
									lobortis porttitor accumsan consequat
									adipiscing lorem dolor.
								</p>
							</div>
							<div className="col-4 col-12-medium">
								<p>
									Morbi enim nascetur et placerat lorem sed
									iaculis neque ante adipiscing adipiscing
									metus massa. Blandit orci porttitor semper.
									Arcu phasellus tortor enim mi mi nisi
									praesent adipiscing. Integer mi sed nascetur
									cep aliquet augue varius tempus. Feugiat
									lorem ipsum dolor nullam.
								</p>
							</div>
						</div>
					</div>
				</div>
				<a href="#two" className="goto-next scrolly">
					Next
				</a>
			</section>

			<section id="two" className="spotlight style2 right">
				<span className="image fit main">
					<Image src={pic03} alt="" />
				</span>
				<div className="content">
					<header>
						<h2>Interdum amet non magna accumsan</h2>
						<p>
							Nunc commodo accumsan eget id nisi eu col volutpat
							magna
						</p>
					</header>
					<p>
						Feugiat accumsan lorem eu ac lorem amet ac arcu
						phasellus tortor enim mi mi nisi praesent adipiscing.
						Integer mi sed nascetur cep aliquet augue varius tempus
						lobortis porttitor lorem et accumsan consequat
						adipiscing lorem.
					</p>
					<ul className="actions">
						<li>
							<Button href="#" text="Learn More" />
						</li>
					</ul>
				</div>
				<a href="#three" className="goto-next scrolly">
					Next
				</a>
			</section>

			<section id="three" className="spotlight style3 left">
				<span className="image fit main bottom">
					<Image src={pic04} alt="" />
				</span>
				<div className="content">
					<header>
						<h2>Interdum felis blandit praesent sed augue</h2>
						<p>
							Accumsan integer ultricies aliquam vel massa sapien
							phasellus
						</p>
					</header>
					<p>
						Feugiat accumsan lorem eu ac lorem amet ac arcu
						phasellus tortor enim mi mi nisi praesent adipiscing.
						Integer mi sed nascetur cep aliquet augue varius tempus
						lobortis porttitor lorem et accumsan consequat
						adipiscing lorem.
					</p>
					<ul className="actions">
						<li>
							<Button href="#" text="Learn More" />
						</li>
					</ul>
				</div>
				<a href="#four" className="goto-next scrolly">
					Next
				</a>
			</section>

			<section id="four" className="wrapper style1 special fade-up">
				<div className="container">
					<header className="major">
						<h2>Accumsan sed tempus adipiscing blandit</h2>
						<p>
							Iaculis ac volutpat vis non enim gravida nisi
							faucibus posuere arcu consequat
						</p>
					</header>
					<div className="box alt">
						<div className="row gtr-uniform">
							<section className="col-4 col-6-medium col-12-xsmall">
								<Icon
									icon="fa-chart-area"
									alt={true}
									solid={true}
									major={true}
								/>
								<h3>Ipsum sed commodo</h3>
								<p>
									Feugiat accumsan lorem eu ac lorem amet
									accumsan donec. Blandit orci porttitor.
								</p>
							</section>
							<section className="col-4 col-6-medium col-12-xsmall">
								<Icon
									icon="fa-comment"
									alt={true}
									solid={true}
									major={true}
								/>
								<h3>Eleifend lorem ornare</h3>
								<p>
									Feugiat accumsan lorem eu ac lorem amet
									accumsan donec. Blandit orci porttitor.
								</p>
							</section>
							<section className="col-4 col-6-medium col-12-xsmall">
								<Icon
									icon="fa-flask"
									alt={true}
									solid={true}
									major={true}
								/>
								<h3>Cubilia cep lobortis</h3>
								<p>
									Feugiat accumsan lorem eu ac lorem amet
									accumsan donec. Blandit orci porttitor.
								</p>
							</section>
							<section className="col-4 col-6-medium col-12-xsmall">
								<Icon
									icon="fa-paper-plane"
									alt={true}
									solid={true}
									major={true}
								/>
								<h3>Non semper interdum</h3>
								<p>
									Feugiat accumsan lorem eu ac lorem amet
									accumsan donec. Blandit orci porttitor.
								</p>
							</section>
							<section className="col-4 col-6-medium col-12-xsmall">
								<Icon
									icon="fa-file"
									alt={true}
									solid={true}
									major={true}
								/>
								<h3>Odio laoreet accumsan</h3>
								<p>
									Feugiat accumsan lorem eu ac lorem amet
									accumsan donec. Blandit orci porttitor.
								</p>
							</section>
							<section className="col-4 col-6-medium col-12-xsmall">
								<Icon
									icon="fa-lock"
									alt={true}
									solid={true}
									major={true}
								/>
								<h3>Massa arcu accumsan</h3>
								<p>
									Feugiat accumsan lorem eu ac lorem amet
									accumsan donec. Blandit orci porttitor.
								</p>
							</section>
						</div>
					</div>
					<footer className="major">
						<ul className="actions special">
							<li>
								<Button href="#" text="Magna sed feugiat" />
							</li>
						</ul>
					</footer>
				</div>
			</section>

			<section id="five" className="wrapper style2 special fade">
				<div className="container">
					<header>
						<h2>Magna faucibus lorem diam</h2>
						<p>
							Ante metus praesent faucibus ante integer id
							accumsan eleifend
						</p>
					</header>
					<form method="post" action="#" className="cta">
						<div className="row gtr-uniform gtr-50">
							<div className="col-8 col-12-xsmall">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Your Email Address"
								/>
							</div>
							<div className="col-4 col-12-xsmall">
								<input
									type="submit"
									value="Get Started"
									className="fit primary"
								/>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
