import * as React from 'react';
import './main.scss';
import { getParticipants } from '@common/service';
import { IParticipantInfo } from '@common/appDataStructures';
import { Spinner, QuickGrid, GridColumn } from 'quick-react-ts';

export interface IMainProps {

}

export interface IMainState {
    isLoading: boolean;
    participantsByCategory: { [categoryId: number]: IParticipantInfo[] };
}

export default class Main extends React.Component<IMainProps, IMainState> {
    private gridColumns: GridColumn[] = [
        { valueMember: "name", headerText: "Ime i prezime", width: 200 }
    ];

    constructor(props: IMainProps) {
        super(props);
        this.state = {
            isLoading: true,
            participantsByCategory: {}
        };
    }

    public componentDidMount() {
        getParticipants(2).then(participants => {
            const participantsByCategory: { [categoryId: number]: IParticipantInfo[] } = {};
            participantsByCategory[1] = [];
            participantsByCategory[2] = [];

            participants.map(participant => participantsByCategory[participant.categoryId].push(participant));

            this.setState({
                isLoading: false,
                participantsByCategory
            });
        });
    }

    public render() {
        const { isLoading, participantsByCategory } = this.state;
        if (isLoading) {
            return <Spinner />;
        }

        return <div className="main">
            {this.renderCategoryTable(1)}
            {this.renderCategoryTable(2)}
        </div>;
    }

    private renderCategoryTable = (categoryId: number) => {
        return <div className="main__grid-container">
            <QuickGrid
                columns={this.gridColumns}
                rows={this.state.participantsByCategory[categoryId]}
            />
        </div>;
    }
}
