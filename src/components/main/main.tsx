import * as React from 'react';
import { Route } from 'react-router-dom';
import { RoutesEnum } from '../../common/config/router.config';
import fetcher from '../../utils/fetcher';
import './main.scss';

export interface MainProps {}

export interface MainState {
    dogUrl: string | null;
}

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            dogUrl: null
        };
    }

    public async componentDidMount() {
        const result = await fetcher.fetch('https://dog.ceo/api/breeds/image/random', {
            fullUrlProvided: true,
            jsonResponseExpected: true,
            requestInit: { headers: {} }
        });
        this.setState({ dogUrl: result.message });
    }

    public render() {
        return (
            <div className="main">
                <Route exact={true} path={RoutesEnum.Root} component={this.renderRoot} />
            </div>
        );
    }

    private renderRoot = () => {
        return <>{this.state.dogUrl ? <img className="main__dog-img" src={this.state.dogUrl} /> : 'Who let the dogs out?'}</>;
    };
}
