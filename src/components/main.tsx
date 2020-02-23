import react from 'react';
import helloWorldPng from '../assets/images/hello-world.png';

//#region Interfaces
export interface MainProps {}

export interface MainState {}
//#endregion Interfaces

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <img width={500} height={500} src={helloWorld} />
            </div>
        );
    }
}
