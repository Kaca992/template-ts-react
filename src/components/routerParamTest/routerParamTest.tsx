import * as React from 'react';

import * as classNames from 'classnames';
import { autobind } from 'core-decorators';

export interface IRouterParamTestProps {
    id: string;
}

export interface IRouterParamTestState {

}

export default class RouterParamTest extends React.Component<IRouterParamTestProps, IRouterParamTestState> {
    constructor(props: IRouterParamTestProps) {
        super(props);

    }

    public render() {
        return (
            <div>
                {`ID is: ${this.props.id}`}
            </div>
        );
    }
}
