/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {

    // console.log("Starting chain");

    const words = this.words;
    const chains = {};

    for (let i = 0; i < words.length; i++) {
      // represents next word in words
      let keyValue = words[i + 1];

      // check if current word is a key in chains object
      if (chains[words[i]] === undefined) {

        // check if current word is the last word in words string
        // if it is the last word, set the keyValue to null
        if (words[i + 1] === undefined) {
          keyValue = null;
        }

        // set the new key value as an array with keyValue in it
        chains[words[i]] = [keyValue];
      }

      else { // current word already has a key

        // check if current word is the last word in words string
        // if it is the last word, set the keyValue to null
        if (words[i + 1] === undefined) {
          keyValue = null;
        }

        // push value to existing values array
        chains[words[i]].push(keyValue);
      }
    }

    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {

    let words = [];

    function randomSelect(array) {
      const min = 0;
      const max = array.length - 1;

      const selectionIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      return array[selectionIndex];
    }

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let currentKey = this.words[0];
    let nextKey = undefined;

    while (nextKey !== null) {

      words.push(currentKey);
      nextKey = randomSelect(this.chains[currentKey]);

      currentKey = nextKey;
    }

    return words.join(" ");
  }
}


const textMarkov =
  new MarkovMachine("The cat is in the hat. The cat is the cat. The hat is a cat.");

console.log(textMarkov.getText());


export { MarkovMachine };