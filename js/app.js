'use strict'

import * as config from '../assets/config.json'

export default class App {

	constructor() {

		// Save config as global variable

		window.CONFIG = config.default

		// Class properties

		this.team = CONFIG.team
		this.images = CONFIG.images
		this.alts = CONFIG.alts

		this.team = []

		// DOM lookups

		this.$h1 = document.querySelector('h1')

		// Event listeners

		document.body.addEventListener('click', click.bind(this))

		// Init

		this.init()

	}


	init() {

		const url = new URL(window.location.href)
		const key = url.searchParams.get('team')

		// Get team or combine teams

		if (this.teams[key]) {
			this.team = this.teams[key]
		} else {
			Object.keys(this.teams).map((key) => {
				this.team = this.team.concat(this.teams[key])
			})
		}

	}


	click(e) {

		// We only have one button for now
		// Skip if it ain't this button

		if (e.target.name !== 'duts') return

		// Lookups

		const duts = this.team[Math.floor(Math.random() * this.team.length)]
		const img = this.images.find(img => img == duts)

		// DOM manipulation

		this.$h1.innerHTML = duts
		document.body.classList.add('duts')

		if (img) document.body.style.backgroundImage = `url(${img.toLowerCase()}.png)`

	}

}
