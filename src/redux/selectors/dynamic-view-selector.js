import { formValueSelector } from 'redux-form';
const selector = formValueSelector('dynamicView');

export const getMinistryName = (state) => {
    return selector(state, 'ministry-name');
}

export const getTasdeeqName = (state) => {
    return selector(state, 'template-name');
}