import { browser, by, element } from 'protractor';
import {until} from "selenium-webdriver";
import elementTextMatches = until.elementTextMatches;

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-header div div div')).getText();
  }

  getFirstNoteText() {
    return element(by.css('app-notes li')).getText();
  }
}
