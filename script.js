var element = React.createElement('div', {},
	React.createElement(Counter, {className: 'pierwszy', startingPoint: 12}),
	React.createElement(Counter, {className: 'drugi'})
	);
ReactDOM.render(element, document.getElementById('app'));

