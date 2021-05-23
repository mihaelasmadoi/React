import React from 'react';
import ReactDOM from 'react-dom';
import personalInfoJSON from './info.json';
import './main.css';
import avatarImg from './images/avatar.jpg';




class CVDrawTable extends React.Component {
	
	render() {
		let drawColor = new ColorGenerator();

	return (
		<>
			<center>
			<table border='0' class='mainTable'>
				<tr>
					<td class="content_td">
					<div class="content_div">
						<img src={avatarImg} style={{width: `150px`, height: `150px`, marginLeft: `60px`}} /><br /><br />
						<span class="name">{personalInfoJSON.personalInfo.name}</span><br/>
						<span class="subTitle">&nbsp;</span><br />
						<span class="subTitle">Birthday: </span>{personalInfoJSON.personalInfo.birthday}<br />
						<span class="subTitle" style={{paddingTop: `40px`}}>E-mail: </span>{personalInfoJSON.personalInfo.email}<br/>
						<span class="subTitle">Phone: </span>{personalInfoJSON.personalInfo.phone}<br/>
						<span class="subTitle">Location: </span>{personalInfoJSON.personalInfo.location.city}, {personalInfoJSON.personalInfo.location.region}, {personalInfoJSON.personalInfo.location.country}<br/>
						
					</div><br /><br />
					<DrawContent colorInd="0" title="About me">
						<Paragraph>In my free time I like reading books, trips in nature, listening music and playing on guitar. I like being sociable and make new friends.</Paragraph>
					</DrawContent>
					</td>
					<td class="content_td">
					<DrawContent colorInd="1" title="Education">
						<span class="subTitle">University: </span>{personalInfoJSON.education.university}<br/>
						<span class="subTitle">Highschool: </span>{personalInfoJSON.education.highschool}<br/>
					</DrawContent>
					<DrawContent colorInd="0" title="Volunteering">
					<ul class="contentList">
						<li>Currently volunteer at Liga AC. [2019 - Present]</li>
						<li>Voluteering at BUZZCamp. [2019]</li>
						<li>In the last highschool's year I've been member of administratio council. [2018-2019]</li>
					</ul>
					</DrawContent>
					<DrawContent colorInd="2" title="Programming/digital skills">
						<Paragraph>Programming skills:</Paragraph>
						<ul class="contentList">
							<li>{personalInfoJSON.skills[0]}</li>
							<li>{personalInfoJSON.skills[1]}</li>
							<li>{personalInfoJSON.skills[2]}</li>
							<li>{personalInfoJSON.skills[3]}</li>
						</ul>
						<Paragraph>Web design skills:</Paragraph>
						<ul class="contentList">
							<li>{personalInfoJSON.skills[4]}</li>
							<li>{personalInfoJSON.skills[5]}</li>
						</ul>
						<Paragraph>Picture editing skills:</Paragraph>
						<ul class="contentList">
							<li>{personalInfoJSON.skills[6]}</li>
							<li>{personalInfoJSON.skills[7]}</li>
						</ul>
					</DrawContent>
					<DrawContent colorInd="3" title="Personal skills">
						<ul class="contentList">
							<li>{personalInfoJSON.personalskills[0]}</li>
							<li>{personalInfoJSON.personalskills[1]}</li>
							<li>{personalInfoJSON.personalskills[2]}</li>
							<li>{personalInfoJSON.personalskills[3]}</li>
							<li>{personalInfoJSON.personalskills[4]}</li>
						</ul>
					</DrawContent>
					<DrawContent colorInd="1" title="Languages">
					<ul class="contentList">
						<li>Romanian(native)</li>
						<li>English</li>
						<li>French</li>
						<li>Korean(learning)</li>
					</ul>
					</DrawContent>
					</td>
				</tr>
			</table>
			</center>
		</>
	);
	}
}

class DrawContent extends React.Component {
	render() {
		const {colorInd, title} = this.props;
		let drawColor = new ColorGenerator();
		return (
		<>
			<div class="header" style={{borderBottom: `1px solid rgb(${drawColor.changeColor(colorInd)})`, color: `rgb(${drawColor.changeColor(colorInd)})`, paddingTop: `6px`}}>{title}</div>
			<div class="content_div">{this.props.children}</div>
		</>
		);
	}
}

class Paragraph extends React.Component {
	render() {
	return (
		<><span class="indent"/>{this.props.children}<br /></>
	);
	}
}

class ColorGenerator {
	changeColor(color_index) {
		const base_color_rgb = [193, 148, 0];
		const color_percent_chg = 5;
		const color_shift = (255*color_percent_chg/100)*color_index;
		const color_new = [base_color_rgb[0]+color_shift, base_color_rgb[1]+color_shift, base_color_rgb[2]+color_shift];
		return Math.round(color_new[0]) + ", " + Math.round(color_new[1]) + ", " + Math.round(color_new[2]);
	}
}

ReactDOM.render(
  <CVDrawTable/>,
  document.getElementById('app')
)