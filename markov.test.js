import { describe, test, expect, beforeEach} from "vitest";
import { MarkovMachine } from "./markov";

describe("Testing getChains", function(){
  test("testing no duplicate words", function(){
    const markovTest = new MarkovMachine("The cat in the hat.");
    const markovChains = markovTest.chains;
    
    expect(markovChains).toEqual({
      "The": ["cat"],
      "cat": ["in"],
      "in": ["the"],
      "the": ["hat."],
      "hat.": [null],
    });
  });
  
  test("testing duplicate words",function(){
    const markovTest = new MarkovMachine(
      "The cat is in the hat. The cat is the cat. The hat is a cat."
    );
    const markovChains = markovTest.chains;
    
    expect(markovChains).toEqual({
      "The":  ["cat", "cat", "hat"],
      "cat":  ["is", "is"],
      "is":   ["in", "the", "a"],
      "in":   ["the"],
      "the":  ["hat.", "cat."],
      "hat.": ["The"],
      "cat.": ["The", null],
      "hat":  ["is"],
      "a":    ["cat."],
    });
  });
});