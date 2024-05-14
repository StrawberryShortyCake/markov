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

    console.log("Starting chain");

    const wordsArray = this.words;
    const chainObject = {};

    for (let i = 0; i < wordsArray.length; i++) {

      if (chainObject[wordsArray[i]] === undefined
      ) {
        let keyValue = null;

        if (wordsArray[i + 1] !== undefined) {
          keyValue = wordsArray[i + 1];
        }
        chainObject[wordsArray[i]] = [keyValue];
      } else {
        chainObject[wordsArray[i]].push(wordsArray[i + 1]);
      }
    }

    return chainObject;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}


const textMarkov =
  new MarkovMachine("Now a we are engaged in a great civil in war");