import * as React from 'react';

import * as classNames from 'classnames';
import { autobind } from 'core-decorators';

import './main.scss';
import * as helloWorld from '../../assets/images/hello-world.png';

export interface IMainProps {

}

export interface IMainState {

}

export default class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);

    }

    public render() {
        return (
            <div className="main-container">
                <img src={helloWorld} />
                Hello
            </div>
        );
    }
}
