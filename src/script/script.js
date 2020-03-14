/* ===== scrolling ===== */
const slideBtn = document.getElementById('slide-btn');

slideBtn.addEventListener('click', () => {
	const app = document.getElementById('app');
	app.scrollIntoView({ behavior: "smooth" });
});




/* ===== Form handler ===== */
const forms = document.getElementsByClassName("method-form");
const inputs = document.getElementsByClassName("method-input");
const lists = document.getElementsByClassName("method-list");


const appendChild = (parent, element) => {
	parent.appendChild(element);
};

const createElement = (elementType, content) => {
	let element = document.createElement(elementType);

	element.textContent = content;
	return (element);
};




for (let i = 0; i < forms.length; i++)
{
	// event to add element
	forms[i].addEventListener('submit', (event) => {
		let value = inputs[i].value;
		event.preventDefault();

		if (value != "")
		{
			let element;

			value = value.trim();
			element = createElement('li', value);
			element.classList.add("list-element");


			// event to remove element
			element.addEventListener('click', () => {
				element.remove();
			});


			appendChild(lists[i], element);
			inputs[i].value = "";
		}
	});
}