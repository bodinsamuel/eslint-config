const any: any = {};

any.top;
let top = 't';

const issues = any.top;

console.log(top, issues);

throw 'e';

export interface Hello_Bar {
  bar: <Bar>(value: Bar) => void;
  hello: <TBar>(value: TBar) => void;
  foo(): void;
}

const invalid_snake_case: string | undefined = '';
if (!invalid_snake_case) {
  console.error(invalid_snake_case);
}

class tiptop {
  #url: URL = new URL('');

  public get url() {
    return this.#url;
  }

  bar_world() {
    return 1;
  }

  public barBar(): void {
    //
  }
}

function noReturnType() {
  //
}

function Toptop(): void {
  //
}

try {
  //
} catch (e) {
  console.log(e);
}
