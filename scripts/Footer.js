//...........Footer...................................................................

var Footer = React.createClass({
  render: function() {
    return (
    <div className="FooterContainer">
		<div id='Contacts' className="contacts">
			<ul className="footerList">
				<li className="footerLiMainWord">The<span> LINKS</span></li>
				<li className="footerLi">World</li>
				<li className="footerLi">Rewiews</li>
				<li className="footerLi">Tech</li>
				<li className="footerLi">Science</li>
				<li className="footerLi">Culture</li>
				<li className="footerLi">Design</li>
				<li className="footerLi">Business</li>
			</ul>
			<ul className="footerList">
				<li className="footerLiMainWord">The<span> SITE</span></li>
				<li className="footerLi">Site Status</li>
				<li className="footerLi">About</li>
				<li className="footerLi">Contact</li>
				<li className="footerLi">Forums</li>
				<li className="footerLi">Jobs</li>
			</ul>
			<ul className="footerList">
				<li className="footerLiMainWord">The<span> SOCIAL</span></li>
				<li className="footerLi"><a href="http://vk.com/andrey.lakutin" target="_blank"><i className="fa fa-vk"></i>&nbsp;&nbsp;Vkontakte</a></li>
				<li className="footerLi"><a href="https://www.facebook.com/andrey.lakutin" target="_blank"><i className="fa fa-facebook-official"></i>&nbsp;&nbsp;&nbsp;Facebook</a></li>
				<li className="footerLi"><a href="#" target="_blank"><i className="fa fa-twitch"></i>&nbsp;&nbsp;Twitch</a></li>
				<li className="footerLi"><a href="https://twitter.com/kulapipundrium?lang=en" target="_blank"><i className="fa fa-twitter"></i>&nbsp;&nbsp;Twitter</a></li>
				<li className="footerLi"><a href="#" target="_blank"><i className="fa fa-youtube"></i>&nbsp;&nbsp;YouTube</a></li>
				<li className="footerLi"><a href="#" target="_blank"><i className="fa fa-instagram"></i>&nbsp;&nbsp;Instagram</a></li>
			</ul>
			<div className="siteInfo">Andrey Lakutin. <span className="ukraine">Kiev, Ukraine</span>. 2016 <i className="fa fa-trademark"></i> <br /> +38(063)449-49-17</div>
			
		</div>
    </div>
    );
  }
});
