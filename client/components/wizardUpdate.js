import React from 'react';
import ReactDom from 'react-dom';

class WizardUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    captureNewName = (event) => {
        this.setState({newName: event.target.value});
    }
    updateWizard = (event) => {
        event.preventDefault();
        this.props.update(this.state.newName);
        this.props.toggle();
    }

    render() {
        return (
            <div>
                <form>
                <input onChange={this.captureNewName} placeholder="Enter new name"/>
                <button onClick={this.updateWizard}>Change Name</button>
                <button onClick={this.props.toggle}>Cancel</button>
                </form>
            </div>
        )
    }
}

module.exports = WizardUpdate;