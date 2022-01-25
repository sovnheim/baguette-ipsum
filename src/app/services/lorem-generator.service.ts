import { Injectable } from '@angular/core';
import keywords from 'src/assets/keywords';

const SENTENCE_STOP = ['.', '.', '.', '.', '.', '.', '?', '!'];
const INTERJECTIONS = [
  ',',
  ',',
  ',',
  ';',
  '...',
  ' euh...',
  ' menfin',
  ' sinon',
  ' en fait',
  ' mais alors',
  ' même si',
  ' franchement',
];

@Injectable({
  providedIn: 'root',
})
export class LoremGeneratorService {
  getParagraph(startWithBaguette: boolean = true) {
    return Array(3)
      .map((_, key) => {
        if (startWithBaguette && key === 0) {
          return `Baguette Ipsum ${this.getSentence()}`;
        }
        return this.getSentence();
      })
      .join(' ');
  }

  getSentence() {
    const keywordList = this.getKeywordList();

    return keywordList.join(' ') + SENTENCE_STOP[Math.floor(Math.random() * SENTENCE_STOP.length)];
  }

  getKeywordList(): Array<string> {
    const wordCount = 5 + Math.floor(Math.random() * 8);

    return Array(wordCount).map((_, key) => {
      if (key === 0) {
        const keyword = this.getRandomKeyword();
        return keyword[0].toUpperCase() + keyword.substring(1);
      }
      return this.getRandomKeyword();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomKeyword(): string {
    return keywords[Math.floor(Math.random() * keywords.length)];
  }
}

export default LoremGeneratorService;
