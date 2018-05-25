/** Global definitions for developement **/

//for importing use: import * test from './header.css'; where test has now everything that styles has
// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}