import * as React from 'react';

import * as classNames from 'classnames';
import { autobind } from 'core-decorators';
import 'ts-helpers';

import './main.scss';
import { IParticipant } from 'common/data';
import { getParticipants } from '../../service/participant.service';
import {Spinner, SpinnerType, QuickGrid} from 'quick-react-ts/lib';
import { gridColumns } from 'components/main/main.props';

export interface IMainProps {

}

export interface IMainState {
    isLoading: boolean;
    participants: IParticipant[];
}

export default class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);
        this.state = {
            isLoading: true,
            participants: []
        }
    }

    public componentDidMount() {
        getParticipants().then(result => {
            this.setState({
                participants: result,
                isLoading: false
            });
        });
    }

    public render() {
        if (this.state.isLoading) {
            return <Spinner label="Dohvaćanje podataka..." type={SpinnerType.large} />;
        }
        return (
            <div className="grid-container">
                <QuickGrid
                    columns={gridColumns}
                    rows={this.state.participants}
                />
            </div>
        );
    }
}
