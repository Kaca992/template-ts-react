import * as React from 'react';

import * as classNames from 'classnames';
import { autobind } from 'core-decorators';

import './main.scss';
import * as helloWorld from '../../assets/images/hello-world.png';
import { Route } from 'react-router-dom';
import RouterParamTest from 'components/routerParamTest/routerParamTest';
import { RoutesEnum } from 'common/config/router.config';

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
                <Route exact path={RoutesEnum.Root} component={this._renderRoot}/>
                <Route path={RoutesEnum.Test} component={this._renderTest}/>
                <Route path={RoutesEnum.TestRouterParams} component={({match}) => <RouterParamTest id={match.params.id} />}/>
            </div>
        );
    }

    @autobind
    private _renderRoot() {
        return <div>
            Hello Home
        </div>;
    }

    @autobind
    private _renderTest() {
        return <div>
            Hello Test
        </div>;
    }
}
