import {Injectable} from "@angular/core";

@Injectable()
export class WordGeneratorService {

  generateWord(): string {
    const i = Math.floor(Math.random() * 2);
    const dict = ['Poutine', 'Tartare'];
    return dict[i];
  }

}
