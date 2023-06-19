const hamburgerBtn = document.querySelector(
	'.nav__hamburger-box'
) as HTMLButtonElement
const nav = document.querySelector('.nav__items') as HTMLDivElement
const navItems = document.querySelectorAll('.nav__item')
const offerSeeMoreBtn = document.querySelectorAll(
	'.offer__box-item-see-more'
) as NodeListOf<HTMLButtonElement>
const year = document.querySelector('.year') as HTMLSpanElement
const [sliderLeftBtn, sliderRightBtn] = Array.from(
	document.querySelectorAll('.gallery__img-btn')
) as HTMLButtonElement[]
const sliderImgs = document.querySelectorAll('.gallery__thumbnail')
const sliderMainImg = document.querySelector(
	'.gallery__large-img'
) as HTMLImageElement
const [popupAgree, popupDisagree] = Array.from(
	document.querySelectorAll('.popup__btn')
) as HTMLButtonElement[]
const popup = document.querySelector('.popup__shadow') as HTMLElement
const popupError = document.querySelector('.popup__msg') as HTMLParagraphElement

interface IntersectionObserverOptions {
	threshold: number
}

let options: IntersectionObserverOptions = {
	threshold: 0.3,
}

let sliderID: number = 0
let isOnScreen: boolean

const handleNav = (): void => {
	hamburgerBtn.classList.toggle('nav__hamburger-box--active')
	nav.classList.toggle('nav__items--active')
	navItems.forEach(item => item.classList.toggle('nav__item--active'))
}

const closeNav = (): void => {
	hamburgerBtn.classList.remove('nav__hamburger-box--active')
	nav.classList.remove('nav__items--active')
	navItems.forEach(item => item.classList.remove('nav__item--active'))
}

function showOfferItemInfo(this: HTMLElement): void {
	this.parentElement!.children[4].classList.toggle(
		'offer__box-item-text--active'
	)
}

const setCurrentYear = (): void => {
	const date: number = new Date().getFullYear()
	year.textContent = date.toString()
}

// const sliderPrevImg = (): void => {
// 	if (sliderID > 0) {
// 		sliderID--
// 		setImg()
// 	} else if (sliderID === 0) {
// 		sliderID = sliderImgs.length - 1
// 		setImg()
// 	}
// }

// const sliderNextImg = (): void => {
// 	if (sliderID < sliderImgs.length - 1) {
// 		sliderID++
// 		setImg()
// 	} else if (sliderID === sliderImgs.length - 1) {
// 		sliderID = 0
// 		setImg()
// 	}
// }

// const setImg = (): void => {
// 	sliderImgs.forEach((img, id) => {
// 		img.setAttribute('data-img-id', id.toString())
// 	})

// 	const currentImg = document.querySelector(
// 		`[data-img-id="${sliderID}"]`
// 	) as HTMLImageElement | null
// 	const currentSrc = currentImg?.getAttribute('src')?.toString()!
// 	const currentAlt = currentImg?.getAttribute('alt')?.toString()!
// 	sliderMainImg?.setAttribute('src', currentSrc)
// 	sliderMainImg?.setAttribute('alt', currentAlt)
// }

// const turnOnKeys = (entry: IntersectionObserverEntry[]): void => {
// 	if (entry[0].isIntersecting) {
// 		isOnScreen = true
// 	} else {
// 		isOnScreen = false
// 	}
// }

// const checkLeftKey = (e: { code: string; keyCode: number }): void => {
// 	if (
// 		(isOnScreen === true && e.code === 'ArrowLeft') ||
// 		(isOnScreen === true && e.keyCode === 37)
// 	) {
// 		sliderPrevImg()
// 	}
// }

// const checkRightKey = (e: { code: string; keyCode: number }): void => {
// 	if (
// 		(isOnScreen === true && e.code === 'ArrowRight') ||
// 		(isOnScreen === true && e.keyCode === 39)
// 	) {
// 		sliderNextImg()
// 	}
// }

// const observer = new IntersectionObserver(turnOnKeys, options)
// if (sliderMainImg) {
// 	observer.observe(sliderMainImg)
// }

setCurrentYear()
// setImg()
hamburgerBtn.addEventListener('click', handleNav)
navItems.forEach(item => item.addEventListener('click', closeNav))
offerSeeMoreBtn.forEach(btn => btn.addEventListener('click', showOfferItemInfo))
// sliderLeftBtn.addEventListener('click', sliderPrevImg)
// sliderRightBtn.addEventListener('click', sliderNextImg)
// document.addEventListener('keydown', checkLeftKey)
// document.addEventListener('keydown', checkRightKey)
popupAgree.addEventListener('click', () => (popup.style.display = 'none'))
popupDisagree.addEventListener(
	'click',
	() => (popupError.style.display = 'block')
)
