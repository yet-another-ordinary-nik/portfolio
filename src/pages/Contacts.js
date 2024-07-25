const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Vladivostok, Russia</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<p>
							<a href="tel:+79041133417">+7 (904) 113-34-17</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:nikolay.nazarov.005@mail.ru">
								nikolay.nazarov.005@mail.ru
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;