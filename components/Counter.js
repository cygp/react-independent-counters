// var counters = [
//     {
//         id: 1,
//     },
//     {
//         id: 2,
//     }
// ];

// var Counter = React.createClass({
//     propTypes: {
//         id: React.PropTypes.number.isRequired,
//     },
//     getInitialState: function() {
//         return {
//             counter: 0
//         };
//     },

//     increment: function() {
//         this.setState({
//             counter: this.state.counter + 1
//         });
//     },

//     decrement: function() {
//         this.setState({
//             counter: this.state.counter - 1
//         });
//     },

//     render: function() {
//         return React.createElement('div', {className: 'Data', key: this.props.id.id},
//             React.createElement('button', {onClick: this.increment}, 'increase'),
//             React.createElement('button', {onClick: this.decrement}, 'decrease'),
//             React.createElement('span', {}, 'Licznik ' + this.state.counter)
//         );
//     }
// });

// var counters = counters.map(function(counter) {
//   return React.createElement(Counter, {key: counter.id},
//     );
// });
// // var element = React.createElement(Counter);
// // ReactDOM.render(element, document.getElementById('app'));
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
    }
});