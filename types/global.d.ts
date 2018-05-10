/** Global definitions for developement **/

//for importing use: import * test from './header.css'; where test has now everything that styles has
// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.png';
declare module '*.jpg';