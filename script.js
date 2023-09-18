import { hiragana, katakana } from "./data/kana.js"
import KanaLearn from "./KanaLearn.js";

window.addEventListener("DOMContentLoaded", ready);
const KanaLearnInstanse = new KanaLearn(hiragana, katakana);


function ready() {

	const kanaCharForm = document.querySelector('.hiragana-symbol-form');
	const inputKana = document.getElementById("kana-input");
	const kanaChar = document.getElementById("kana_char");
	const kanaSwitcher = document.getElementById("switch-kana");
	const monographsOnlySwitch = document.getElementById("monographs");


	kanaChar.textContent = KanaLearnInstanse.getRandomKana();

	kanaSwitcher.addEventListener("change", (e) => {
		if (e.target.checked) {
			document.querySelector(".switch__katakana").classList.add("active__kana");
			document.querySelector(".switch__hiragana").classList.remove("active__kana");
			KanaLearnInstanse.changeKanaType("katakana");
		} else {
			document.querySelector(".switch__hiragana").classList.add("active__kana");
			document.querySelector(".switch__katakana").classList.remove("active__kana");
			KanaLearnInstanse.changeKanaType("hiragana");
		}

		kanaChar.textContent = KanaLearnInstanse.getRandomKana();
	})

	monographsOnlySwitch.addEventListener("change", (e) => {
		KanaLearnInstanse.toggleOnlyMonographs();
		kanaChar.textContent = KanaLearnInstanse.getRandomKana();

	})


	inputKana.addEventListener("blur", () => {
		inputKana.focus();
	})

	kanaCharForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let textValue = e.target[0].value;

		let isCorrect = KanaLearnInstanse.correctCheck(textValue);

		if (isCorrect) {
			console.log('correct!');
			kanaChar.textContent = KanaLearnInstanse.getRandomKana();
			inputKana.value = "";
		} else {
			console.log("incorrect! try again");
		}
	})
}

