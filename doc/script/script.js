/* ===== scrolling ===== */
const slideBtn = document.getElementById('slide-btn');

slideBtn.addEventListener('click', () => {
	const app = document.getElementById('app');
	app.scrollIntoView({ behavior: "smooth" });
});




/* ===== Form handler ===== */
const methodForms = document.getElementsByClassName("method-form");
const ideaForms = document.getElementsByClassName("idea-form");
const methodInputs = document.getElementsByClassName("method-input");
const ideaInputs = document.getElementsByClassName("idea-input");
const methodLists = document.getElementsByClassName("method-list");
const ideaLists = document.getElementsByClassName("idea-list");


const appendChild = (parent, element) => {
	parent.appendChild(element);
};

const createElement = (elementType, content) => {
	let element = document.createElement(elementType);

	element.textContent = content;
	return (element);
};




for (let i = 0; i < methodForms.length; i++)
{
	// event to add element
	methodForms[i].addEventListener('submit', (event) => {
		let value = methodInputs[i].value;
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


			appendChild(methodLists[i], element);
			methodInputs[i].value = "";
			methodInputs[i].focus();
		}
	});
}


for (let i = 0; i < ideaForms.length; i++)
{
	ideaForms[i].addEventListener('submit', (event) => {
		let value = ideaInputs[i].value;
		event.preventDefault();

		if (value != "")
		{
			value = value.trim();
			let element = createElement('li', value);
			element.classList.add("list-element");


			// event to remove element
			element.addEventListener('click', () => {
				element.remove();
			});


			appendChild(ideaLists[i], element);
			ideaInputs[i].value = "";
			ideaInputs[i].focus();
		}
	});
}

let selectedIdeaForm = document.getElementsByClassName("selected-idea-form");
let selectedIdeaInput = document.getElementsByClassName("selected-idea-input");

for (let i = 0; i < selectedIdeaForm.length; i++)
{
	selectedIdeaForm[i].addEventListener('submit', (event) => {
		event.preventDefault();

		selectedIdeaInput[i].hidden;
		ideaInputs[i].focus();
	});
}