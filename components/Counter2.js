var CounterClone = React.createClass({
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
        return React.createElement('div', {className: 'DataClone'},
            React.createElement('button', {onClick: this.increment}, 'increase'),
            React.createElement('button', {onClick: this.decrement}, 'decrease'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

// var elementClone = React.createElement(CounterClone);
// ReactDOM.render(elementClone, document.getElementById('app'));