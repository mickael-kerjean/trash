import React from 'react';

export function stateManager(Component) {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.dispatch = this.dispatch.bind(this);
            this.state = JSON.parse(window.localStorage.getItem("state")) || {
                pageNumber: 5
            };
        }

        componentDidUpdate(){
            window.localStorage.setItem("state", JSON.stringify(this.state));
        }

        dispatch(type){
            if(type === "CLEAR"){
                this.setState({pageNumber: 0});
            }
        }

        render(){
            return (
                <Component
                  state={this.state}
                  dispatch={this.dispatch} />
            );
        };
    };
};
