import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16.3';
configure({ adapter: new EnzymeAdapter() });

// setupJest.js or similar file
const globalAny: any = global;
// tslint:disable-next-line:no-var-requires
globalAny.fetch = require('jest-fetch-mock');
