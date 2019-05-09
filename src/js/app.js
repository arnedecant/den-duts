// -------------------------------------------------------------------
// :: APP
// -------------------------------------------------------------------

import * as data from '../assets/data.json'

class App {

	constructor() {

		// Save data as global variable

		window.DATA = data.default

		// Class properties

		this.teams = DATA.teams
		this.images = DATA.images
		this.alts = DATA.alts

		this.team = []

		// DOM lookups

		this.$h1 = document.querySelector('h1')

		// Event listeners

		document.body.addEventListener('click', this.click.bind(this))

		// Init

		this.init()

	}


	init() {

		// Get team name from URL

		const url = new URL(window.location.href)
		const key = url.searchParams.get('team')

		// Get team array or combine teams

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

		if (img) document.body.style.backgroundImage = `url(assets/images/${img.toLowerCase()}.png)`

	}

}

export default new App()
