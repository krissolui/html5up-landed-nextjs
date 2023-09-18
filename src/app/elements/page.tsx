import styles from './page.module.css';
import Blockquote from '@/components/Blockquote';
import Button from '@/components/Button';
import Code from '@/components/Code';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Icon from '@/components/Icon';

export default function Elements() {
	return (
		<div className={styles.pagewrapper}>
			<Header />
			<div id="main" className="wrapper style1">
				<div className="container">
					<header className="major">
						<h2>Elements</h2>
						<p>
							Ipsum dolor feugiat aliquam tempus sed magna lorem
							consequat accumsan
						</p>
					</header>

					<section>
						<h3>Text</h3>
						<p>
							This is <b>bold</b> and this is{' '}
							<strong>strong</strong>. This is <i>italic</i> and
							this is <em>emphasized</em>. This is{' '}
							<sup>superscript</sup> text and this is{' '}
							<sub>subscript</sub> text. This is <u>underlined</u>{' '}
							and this is code: {<Code text="for (;;) ... " />}.
							Finally, <a href="#">this is a link</a>.
						</p>

						<hr />

						<header>
							<h3>Heading with a Subtitle</h3>
							<p>
								Lorem ipsum dolor sit amet nullam id egestas
								urna aliquam
							</p>
						</header>
						<p>
							Nunc lacinia ante nunc ac lobortis. Interdum
							adipiscing gravida odio porttitor sem non mi integer
							non faucibus ornare mi ut ante amet placerat
							aliquet. Volutpat eu sed ante lacinia sapien lorem
							accumsan varius montes viverra nibh in adipiscing
							blandit tempus accumsan.
						</p>
						<header>
							<h4>Heading with a Subtitle</h4>
							<p>
								Lorem ipsum dolor sit amet nullam id egestas
								urna aliquam
							</p>
						</header>
						<p>
							Nunc lacinia ante nunc ac lobortis. Interdum
							adipiscing gravida odio porttitor sem non mi integer
							non faucibus ornare mi ut ante amet placerat
							aliquet. Volutpat eu sed ante lacinia sapien lorem
							accumsan varius montes viverra nibh in adipiscing
							blandit tempus accumsan.
						</p>

						<hr />

						<h2>Heading Level 2</h2>
						<h3>Heading Level 3</h3>
						<h4>Heading Level 4</h4>
						<h5>Heading Level 5</h5>
						<h6>Heading Level 6</h6>

						<hr />

						<h4>Blockquote</h4>
						<Blockquote>
							Fringilla nisl. Donec accumsan interdum nisi, quis
							tincidunt felis sagittis eget tempus euismod.
							Vestibulum ante ipsum primis in faucibus vestibulum.
							Blandit adipiscing eu felis iaculis volutpat ac
							adipiscing accumsan faucibus. Vestibulum ante ipsum
							primis in faucibus lorem ipsum dolor sit amet nullam
							adipiscing eu felis.
						</Blockquote>

						<h4>Preformatted</h4>
						<Code
							pre={true}
							text={`i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';`}
						/>
					</section>

					<section>
						<h3>Lists</h3>
						<div className="row">
							<div className="col-6 col-12-xsmall">
								<h4>Unordered</h4>
								<ul>
									<li>Dolor pulvinar etiam magna etiam.</li>
									<li>Sagittis adipiscing lorem eleifend.</li>
									<li>Felis enim feugiat dolore viverra.</li>
								</ul>

								<h4>Alternate</h4>
								<ul className="alt">
									<li>Dolor pulvinar etiam magna etiam.</li>
									<li>Sagittis adipiscing lorem eleifend.</li>
									<li>Felis enim feugiat dolore viverra.</li>
									<li>
										Lobortis adipiscing condimentum lorem.
									</li>
									<li>Integer eleifend erat sed accumsan.</li>
								</ul>
							</div>
							<div className="col-6 col-12-xsmall">
								<h4>Ordered</h4>
								<ol>
									<li>Dolor pulvinar etiam magna etiam.</li>
									<li>
										Etiam vel felis at lorem sed viverra.
									</li>
									<li>Felis enim feugiat dolore viverra.</li>
									<li>Dolor pulvinar etiam magna etiam.</li>
									<li>
										Etiam vel felis at lorem sed viverra.
									</li>
									<li>Felis enim feugiat dolore viverra.</li>
								</ol>

								<h4>Icons</h4>
								<ul className={styles.icons}>
									<li>
										<Icon
											label="Twitter"
											icon="fa-twitter"
											href="#"
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Facebook"
											icon="fa-facebook-f"
											href="#"
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Instagram"
											icon="fa-instagram"
											href="#"
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Github"
											icon="fa-github"
											href="#"
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Dribbble"
											icon="fa-dribbble"
											href="#"
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Tumblr"
											icon="fa-tumblr"
											href="#"
											brands={true}
										/>
									</li>
								</ul>
								<ul className={styles.icons}>
									<li>
										<Icon
											label="Twitter"
											icon="fa-twitter"
											href="#"
											alt={true}
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Facebook"
											icon="fa-facebook-f"
											href="#"
											alt={true}
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Instagram"
											icon="fa-instagram"
											href="#"
											alt={true}
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Github"
											icon="fa-github"
											href="#"
											alt={true}
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Dribbble"
											icon="fa-dribbble"
											href="#"
											alt={true}
											brands={true}
										/>
									</li>
									<li>
										<Icon
											label="Tumblr"
											icon="fa-tumblr"
											href="#"
											alt={true}
											brands={true}
										/>
									</li>
								</ul>
							</div>
						</div>

						<h4>Actions</h4>
						<ul className="actions">
							<li>
								<Button
									href="#"
									text="Default"
									primary={true}
								/>
							</li>
							<li>
								<Button href="#" text="Default" />
							</li>
						</ul>
						<ul className="actions small">
							<li>
								<Button
									href="#"
									text="Small"
									primary={true}
									small={true}
								/>
							</li>
							<li>
								<Button href="#" text="Small" small={true} />
							</li>
						</ul>
						<div className="row">
							<div className="col-3 col-6-medium col-12-xsmall">
								<ul className="actions stacked">
									<li>
										<Button
											href="#"
											text="Default"
											primary={true}
										/>
									</li>
									<li>
										<Button href="#" text="Default" />
									</li>
								</ul>
							</div>
							<div className="col-3 col-6-medium col-12-xsmall">
								<ul className="actions stacked">
									<li>
										<Button
											href="#"
											text="Small"
											primary={true}
											small={true}
										/>
									</li>
									<li>
										<Button
											href="#"
											text="Small"
											small={true}
										/>
									</li>
								</ul>
							</div>
							<div className="col-3 col-6-medium col-12-xsmall">
								<ul className="actions stacked">
									<li>
										<Button
											href="#"
											text="Default"
											primary={true}
											fit={true}
										/>
									</li>
									<li>
										<Button
											href="#"
											text="Default"
											fit={true}
										/>
									</li>
								</ul>
							</div>
							<div className="col-3 col-6-medium col-12-xsmall">
								<ul className="actions stacked">
									<li>
										<Button
											href="#"
											text="Small"
											primary={true}
											small={true}
											fit={true}
										/>
									</li>
									<li>
										<Button
											href="#"
											text="Small"
											small={true}
											fit={true}
										/>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h3>Table</h3>
						<h4>Default</h4>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Item 1</td>
										<td>
											Ante turpis integer aliquet
											porttitor.
										</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item 2</td>
										<td>
											Vis ac commodo adipiscing arcu
											aliquet.
										</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item 3</td>
										<td>
											{' '}
											Morbi faucibus arcu accumsan lorem.
										</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item 4</td>
										<td>
											Vitae integer tempus condimentum.
										</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item 5</td>
										<td>
											Ante turpis integer aliquet
											porttitor.
										</td>
										<td>29.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan={2}></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>
						<h4>Alternate</h4>
						<div className="table-wrapper">
							<table className="alt">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Item 1</td>
										<td>
											Ante turpis integer aliquet
											porttitor.
										</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item 2</td>
										<td>
											Vis ac commodo adipiscing arcu
											aliquet.
										</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item 3</td>
										<td>
											{' '}
											Morbi faucibus arcu accumsan lorem.
										</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item 4</td>
										<td>
											Vitae integer tempus condimentum.
										</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item 5</td>
										<td>
											Ante turpis integer aliquet
											porttitor.
										</td>
										<td>29.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan={2}></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</section>

					<section>
						<h3>Buttons</h3>
						<ul className="actions">
							<li>
								<Button
									href="#"
									text="Primary"
									primary={true}
								/>
							</li>
							<li>
								<Button href="#" text="Default" />
							</li>
						</ul>
						<ul className="actions">
							<li>
								<Button
									href="#"
									text="Large"
									primary={true}
									large={true}
								/>
							</li>
							<li>
								<Button href="#" text="Default" />
							</li>
							<li>
								<Button href="#" text="Small" small={true} />
							</li>
						</ul>
						<div className="row">
							<div className="col-6 col-12-xsmall">
								<ul className="actions fit">
									<li>
										<Button
											href="#"
											text="Fit"
											primary={true}
											fit={true}
										/>
									</li>
									<li>
										<Button
											href="#"
											text="Fit"
											fit={true}
										/>
									</li>
								</ul>
							</div>
							<div className="col-6 col-12-xsmall">
								<ul className="actions fit small">
									<li>
										<Button
											href="#"
											text="Fit + Small"
											primary={true}
											small={true}
											fit={true}
										/>
									</li>
									<li>
										<Button
											href="#"
											text="Fit + Small"
											small={true}
											fit={true}
										/>
									</li>
								</ul>
							</div>
						</div>
						<ul className="actions">
							<li>
								<Button
									href="#"
									text="Icon"
									primary={true}
									icon="fa-download"
								/>
							</li>
							<li>
								<Button
									href="#"
									text="Icon"
									icon="fa-download"
								/>
							</li>
						</ul>
						<ul className="actions">
							<li>
								<Button
									href=""
									text="Primary"
									primary={true}
									disabled={true}
								/>
							</li>
							<li>
								<Button
									href=""
									text="Default"
									disabled={true}
								/>
							</li>
						</ul>
					</section>

					<section>
						<h3>Form</h3>
						<form method="post" action="#">
							<div className="row gtr-uniform gtr-50">
								<div className="col-6 col-12-xsmall">
									<input
										type="text"
										name="name"
										id="name"
										defaultValue=""
										placeholder="Name"
									/>
								</div>
								<div className="col-6 col-12-xsmall">
									<input
										type="email"
										name="email"
										id="email"
										defaultValue=""
										placeholder="Email"
									/>
								</div>
								<div className="col-12">
									<select name="category" id="category">
										<option value="">- Category -</option>
										<option value="1">Manufacturing</option>
										<option value="1">Shipping</option>
										<option value="1">
											Administration
										</option>
										<option value="1">
											Human Resources
										</option>
									</select>
								</div>
								<div className="col-4 col-12-medium">
									<input
										type="radio"
										id="priority-low"
										name="priority"
									/>
									<label htmlFor="priority-low">
										Low Priority
									</label>
								</div>
								<div className="col-4 col-12-medium">
									<input
										type="radio"
										id="priority-normal"
										name="priority"
									/>
									<label htmlFor="priority-normal">
										Normal Priority
									</label>
								</div>
								<div className="col-4 col-12-medium">
									<input
										type="radio"
										id="priority-high"
										name="priority"
									/>
									<label htmlFor="priority-high">
										High Priority
									</label>
								</div>
								<div className="col-6 col-12-medium">
									<input
										type="checkbox"
										id="copy"
										name="copy"
									/>
									<label htmlFor="copy">
										Email me a copy of this message
									</label>
								</div>
								<div className="col-6 col-12-medium">
									<input
										type="checkbox"
										id="human"
										name="human"
										defaultChecked
									/>
									<label htmlFor="human">
										I am a human and not a robot
									</label>
								</div>
								<div className="col-12">
									<textarea
										name="message"
										id="message"
										placeholder="Enter your message"
										rows={6}
									></textarea>
								</div>
								<div className="col-12">
									<ul className="actions">
										<li>
											<input
												type="submit"
												value="Send Message"
												className="primary"
											/>
										</li>
										<li>
											<input type="reset" value="Reset" />
										</li>
									</ul>
								</div>
							</div>
						</form>
					</section>

					<section>
						<h3>Image</h3>
						<h4>Fit</h4>
						<div className="box alt">
							<div className="row gtr-50 gtr-uniform">
								<div className="col-12">
									<span className="image fit">
										<img src="/pic07.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic02.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic03.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic04.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic04.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic02.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic03.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic03.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic04.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic02.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic02.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic03.jpg" alt="" />
									</span>
								</div>
								<div className="col-4 col-6-xsmall">
									<span className="image fit">
										<img src="/pic04.jpg" alt="" />
									</span>
								</div>
							</div>
						</div>

						<h4>Left &amp; Right</h4>
						<p>
							<span className="image left">
								<img src="/pic08.jpg" alt="" />
							</span>
							Fringilla nisl. Donec accumsan interdum nisi, quis
							tincidunt felis sagittis eget. tempus euismod.
							Vestibulum ante ipsum primis in faucibus vestibulum.
							Blandit adipiscing eu felis iaculis volutpat ac
							adipiscing accumsan eu faucibus. Integer ac
							pellentesque praesent tincidunt felis sagittis eget.
							tempus euismod. Vestibulum ante ipsum primis in
							faucibus vestibulum. Blandit adipiscing eu felis
							iaculis volutpat ac adipiscing accumsan eu faucibus.
							Integer ac pellentesque praesent. Donec accumsan
							interdum nisi, quis tincidunt felis sagittis eget.
							tempus euismod. Vestibulum ante ipsum primis in
							faucibus vestibulum. Blandit adipiscing eu felis
							iaculis volutpat ac adipiscing accumsan eu faucibus.
							Integer ac pellentesque praesent tincidunt felis
							sagittis eget. tempus euismod. Vestibulum ante ipsum
							primis in faucibus vestibulum. Blandit adipiscing eu
							felis iaculis volutpat ac adipiscing accumsan eu
							faucibus. Integer ac pellentesque praesent. Cras
							aliquet accumsan curae accumsan arcu amet egestas
							placerat odio morbi mi adipiscing col morbi felis
							faucibus in gravida sollicitudin interdum commodo.
							Ante aliquam vis iaculis accumsan lorem ipsum dolor
							sit amet nullam. Cras aliquet accumsan curae
							accumsan arcu amet egestas placerat odio morbi mi
							adipiscing col morbi felis faucibus in gravida
							sollicitudin interdum commodo. Ante aliquam vis
							iaculis accumsan lorem ipsum dolor sit amet nullam.
						</p>
						<p>
							<span className="image right">
								<img src="/pic08.jpg" alt="" />
							</span>
							Fringilla nisl. Donec accumsan interdum nisi, quis
							tincidunt felis sagittis eget. tempus euismod.
							Vestibulum ante ipsum primis in faucibus vestibulum.
							Blandit adipiscing eu felis iaculis volutpat ac
							adipiscing accumsan eu faucibus. Integer ac
							pellentesque praesent tincidunt felis sagittis eget.
							tempus euismod. Vestibulum ante ipsum primis in
							faucibus vestibulum. Blandit adipiscing eu felis
							iaculis volutpat ac adipiscing accumsan eu faucibus.
							Integer ac pellentesque praesent. Donec accumsan
							interdum nisi, quis tincidunt felis sagittis eget.
							tempus euismod. Vestibulum ante ipsum primis in
							faucibus vestibulum. Blandit adipiscing eu felis
							iaculis volutpat ac adipiscing accumsan eu faucibus.
							Integer ac pellentesque praesent tincidunt felis
							sagittis eget. tempus euismod. Vestibulum ante ipsum
							primis in faucibus vestibulum. Blandit adipiscing eu
							felis iaculis volutpat ac adipiscing accumsan eu
							faucibus. Integer ac pellentesque praesent. Cras
							aliquet accumsan curae accumsan arcu amet egestas
							placerat odio morbi mi adipiscing col morbi felis
							faucibus in gravida sollicitudin interdum commodo.
							Ante aliquam vis iaculis accumsan lorem ipsum dolor
							sit amet nullam. Cras aliquet accumsan curae
							accumsan arcu amet egestas placerat odio morbi mi
							adipiscing col morbi felis faucibus in gravida
							sollicitudin interdum commodo. Ante aliquam vis
							iaculis accumsan lorem ipsum dolor sit amet nullam.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
