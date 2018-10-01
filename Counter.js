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

    render: function() {
        return React.createElement('div', {className: 'Data'},
            React.createElement('button', {onClick: this.increment}, 'increase'),
            React.createElement('button', {onClick: this.decrement}, 'decrease'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },

    componentWillMount: function () {
        console.log('Component will mount');
        
    },

    componentDidMount: function () {
        console.log('Component mounted');
    },

    componentWillReceiveProps: function() {
        console.log('Component will recive props');
    },

    shouldComponentUpdate: function () {
        console.log('check if you really need to redraw the component again');
    },
    
    componentWillUpdate: function() {
        console.log('Updating component');
    },

    componentDidUpdate: function() {
        console.log('Component updated');
    },

    componentWillUnmount: function(){
        console.log('Delete counter, component will unmount');
    },

});

// var element = React.createElement(Counter);
// ReactDOM.render(element, document.getElementById('app'));