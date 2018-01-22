import React, { Component } from 'react'
import moment from 'moment'

import './../css/timer.css'

export default class CountDownTimer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			festDate: moment('2018-03-23'),
			timeLeft: moment.duration()
		}
	}

	computeDuration() {
		
		const festTime = this.state.festDate;
		const currentTime = moment()

		const timeLeft = moment.duration({
			seconds: festTime.seconds() - currentTime.seconds(),
			minutes: festTime.minutes() - currentTime.minutes(),
			hours: festTime.hours() - currentTime.hours(),
			days: festTime.date() - currentTime.date(),
			months: festTime.months() - currentTime.months(),
			years: festTime.years() - currentTime.years()
		});

		this.setState({ timeLeft: timeLeft })
	}

	durationToStr() {
		const timeLeft = this.state.timeLeft
		return `${timeLeft.months()} M : ${timeLeft.days()} D : ${timeLeft.hours()} h : 
		${timeLeft.minutes()} m : ${timeLeft.seconds()} s`
	} 

	componentDidMount() {
		window.setInterval(() => { this.computeDuration(); console.log("fff") }, 1000)
	}

	render() {
		return (
			<div style={{ zIndex: 3 }}>
				<p 
					className='countDownTimer'
					style={{
						marginTop: 20, 
					}} 
					type="headline"
				>{this.durationToStr()}</p>
			</div>
		)
	}
}
