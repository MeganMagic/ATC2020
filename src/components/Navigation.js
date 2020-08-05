import React, {Component} from 'react';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = { selected : 0};
        this.setSelectedID = this.setSelectedID.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const { curr } = props;
        return {
            curr,
            selected : curr === state.curr 
                ? state.selected
                : curr,
        };
    }

    setSelectedID () {
        this.setState({selected : this.state.selected+200});
        console.log(this.key);
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.indexList.map( (index) => (
                        <li  key = {index.id} onClick={this.setSelectedID} > 
                            {index.title} 
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Navigation;