
class KanaLearn {
	constructor(hiragana, katakana) {
		this.hiragana = hiragana;
		this.katakana = katakana;
		this.currentKana = "";

		let kanaType = localStorage.getItem("kana_type");
		let onlyMonographs = localStorage.getItem("monographs");

		if(kanaType) {
			this.kanaType = kanaType
		} {
			setLS("kana_type", "hiragana");
			this.kanaType = "hiragana"
		}

		if (onlyMonographs) {
			this.onlyMonographs = onlyMonographs;
		} else {
			setLS("monographs", false);
			this.onlyMonographs = false;
		}
	}

	correctCheck(inputValue){
		console.log(inputValue);
		if (this.currentKana == this[this.kanaType][inputValue]) {
			return true;
		} 
		return false;
	}

	getRandomKana() {
		let letters = Object.values(this[this.kanaType]);
		if (!this.onlyMonographs) {
			letters = letters.filter(letter => letter.length === 1);
		}
		const randomIndex = Math.floor(Math.random() * letters.length);
		
		this.currentKana = letters[randomIndex];
		return this.currentKana;
	}

	toggleOnlyMonographs() {
		setLS("monographs", !this.onlyMonographs);
		this.onlyMonographs = !this.onlyMonographs;
	}

	changeKanaType(kanaType) {
		setLS("kana_type", kanaType);
		this.kanaType = kanaType;
	}
}

function setLS(key, value) {
	localStorage.setItem(key, value);
}

export default KanaLearn;