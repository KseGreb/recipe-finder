

const recipes = document.querySelectorAll('.recipe');
const covers = document.querySelectorAll('.cover');
const backs = document.querySelectorAll('.back');

recipes.forEach ((recipe, index) => {
    recipe.querySelector('.cover').addEventListener('click', () => {
        recipe.classList.toggle('selected');
    });
})

const finder = document.querySelector(".look");
const cards = document.querySelectorAll('.card');
let i = 0;
let y = 0;


finder.addEventListener('keyup', event => {
	const word = event.target.value.trim().toLowerCase();
	if (word.length === 0) {
		return false;
	}

	cards.forEach(card => {
		if (card.querySelector('.h2--vertical').innerText.toLowerCase().includes(word)) {
			card.style.display = 'block';
		}
		else {
			const tags = card.querySelectorAll('.searchTag');
			tags.forEach(tag => {
				if (tag.innerText.toLowerCase().includes(word) === true) {
					i++;
					console.log(tag.innerText);
				}
			})
			if (i !== 0) {
				card.style.display = 'block';
			}
			else {
				card.style.display = 'none';
			}
			i = 0;
		}
	});
});
