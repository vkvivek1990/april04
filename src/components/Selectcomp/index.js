import React from 'react';
import Select from 'react-select';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        //borderBottom: '1px dotted pink',
        color: state.isSelected ? '#fff' : '#000',
        padding: 5,
    }),
    control: styles => ({ ...styles, backgroundColor: 'white', "min-height": 35 }),
    placeholder: styles => ({ ...styles, "padding-top": 0 }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    }
}

export default class Selectcomp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Select
                    classNamePrefix="select"
                    name={this.props.name}
                    value={this.props.value}
                    className={`selectdropdown ${this.props.isMulti ? 'basic-multi-select' : ''} ${this.props.className}`}
                    options={this.props.options}
                    isDisabled={this.props.isDisabled}
                    isMulti={this.props.isMulti}
                    isClearable={this.props.isClearable}
                    isSearchable={this.props.isSearchable}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.onChange(e, this.props.name)}
                    defaultMenuIsOpen={this.props.defaultMenuIsOpen}
                    defaultValue={this.props.defaultValue}
                    onInputChange={inputValue => (inputValue.length <= this.props.maxlength ? inputValue : inputValue.substr(0, this.props.maxlength))}
                    styles={customStyles}
                />
            </React.Fragment>
        )
    }
}