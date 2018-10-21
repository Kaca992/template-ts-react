import * as React from 'react';
import Main, { IMainProps } from '@components/main/main';
import { shallow, mount } from 'enzyme';

export const setupComponent = <T extends IMainProps>(propOverrides: Partial<T> = {}, isShallowRender: boolean = true) => {
    const props: IMainProps = {
        ...(propOverrides as any)
    };

    return ({
        props,
        wrapper: isShallowRender ? shallow(<Main {...props} />) : mount(<Main {...props} />)
    });
};
