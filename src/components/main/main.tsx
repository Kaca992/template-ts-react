import * as React from 'react';
import './main.scss';
import { getParticipants } from '@common/service';
import { IParticipantInfo } from '@common/appDataStructures';
import { Spinner, QuickGrid, GridColumn, DataTypeEnum, Pivot, PivotItem, PivotLinkFormat, SpinnerType } from 'quick-react-ts';

export interface IMainProps {

}

export interface IMainState {
    isLoading: boolean;
    participantsByCategory: { [categoryId: number]: IParticipantInfo[] };
}

export default class Main extends React.Component<IMainProps, IMainState> {
    private gridColumns: GridColumn[] = [
        { valueMember: "name", headerText: "Ime i prezime", width: 200 },
        { valueMember: "email", headerText: "Email", width: 200 },
        { valueMember: "course", headerText: "Course", width: 100 },
        { valueMember: "enrollmentYear", headerText: "Godina", width: 100 },
        { valueMember: "result", headerText: "Rezultat", width: 100, dataType: DataTypeEnum.Number }
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
        const { isLoading } = this.state;

        return <div className="main">
            {isLoading && <Spinner className="main__spinner" type={SpinnerType.large} />}
            {!isLoading && <Pivot textSize={22}>
                {this.renderCategoryTable(1)}
                {this.renderCategoryTable(2)}
            </Pivot>}
        </div>;
    }

    private renderCategoryTable = (categoryId: number) => {
        const linkText = categoryId === 1 ? "Programeri" : "Ostali";
        const participants = this.state.participantsByCategory[categoryId];

        return <PivotItem linkText={linkText} itemCount={participants && participants.length}>
            <div className="main__grid-container">
                <QuickGrid
                    columns={this.gridColumns}
                    rows={participants}
                />
            </div>
        </PivotItem>;
    }
}
