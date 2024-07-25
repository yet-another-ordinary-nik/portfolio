import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hello! my name is <em>NICK</em>
					</strong>
					<br />a beginner frontend developer
				</h1>
				<div className="header__text">
					<p>from Far Eastern Federal University.</p>
				</div>
			</div>
		</header>
	);
}

export default Header;