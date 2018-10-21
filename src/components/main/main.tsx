import { RoutesEnum } from '@common/config/router.config';
import * as React from 'react';
import { Route } from 'react-router-dom';
import './main.scss';
import fetcher from '../../utils/fetcher';

export interface IMainProps {

}

export interface IMainState {
    dogUrl: string | null;
}

export default class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);
        this.state = {
            dogUrl: null
        };
    }

    public componentDidMount() {
        fetcher.fetch('https://dog.ceo/api/breeds/image/random', { fullUrlProvided: true, jsonResponseExpected: true, requestInit: { headers: {} } }).then(result => {
            this.setState({ dogUrl: result.message });
        });
    }

    public render() {
        return (
            <div className="main">
                <Route exact path={RoutesEnum.Root} component={this._renderRoot} />
                <Route path={RoutesEnum.TestRouterParams} component={({ match }) => this._renderParam(match.params.id)} />
            </div>
        );
    }

    private _renderRoot = () => {
        return <>
            {this.state.dogUrl ? <img className="main__dog-img" src={this.state.dogUrl} /> : "Who let the dogs out?"}
        </>;
    }

    private _renderParam = (id: number) => {
        return <>
            {`Hello ${id}`}
        </>;
    }
}
