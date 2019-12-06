# typescript-playground
This playground shows how to build a library and an application that uses typescript libraries. In both cases, I use Typescript to check for types correctness only and build declaration files, whereas the transpilation process is left in the capable hands of Babel 7.

## References
* https://babeljs.io/docs/en/babel-preset-typescript
* https://github.com/Microsoft/TypeScript-Babel-Starter

## How to create declaration files
https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

## Typescript plugins
The `@babel/plugin-proposal-class-properties` plugin is used by Babel to translate class properties like:

```
export class C {
    private x = 10

    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }
}
```