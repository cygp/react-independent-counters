var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
    console.log('Get default props');
    },

    componentWillMount: function(){
        console.log('The component will be loaded soon');
    },

    componentDidMount: function(){
        console.log('The component has been loaded')
    },


    componentWillReceiveProps: function() {
        console.log('Get new components props')
    },

    shouldComponentUpdate: function() {
        console.log('The component get new state');
        return (true);
    },

    componentWillUpdate: function() {
        console.log('The component will update')
    },

    componentDidUpdate: function() {
        console.log('The component updated')
    },

    componentWillUnmount: function() {
        console.log('The component will unmount')
    },

    render: function() {
        return React.createElement('div', {className: 'Data'},
            React.createElement('button', {onClick: this.increment}, 'increase'),
            React.createElement('button', {onClick: this.decrement}, 'decrease'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
}); 