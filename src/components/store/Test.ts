import { observable, action } from "mobx";

export class Test {
  @observable testMobx: string[] = [];

  @action
  test = (someData: string) => {
    this.testMobx.push(someData);
  };
}
