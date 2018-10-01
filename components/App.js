var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'application'},
        React.createElement(Counter, {}),
        React.createElement(CounterClone, {})
      )
    );
}
});