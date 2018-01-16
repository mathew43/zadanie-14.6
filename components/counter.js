var Counter = React.createClass({
	getInitialState: function(){
		return{
			counter: 0
		};
	},

	coomponentWillMount: function(){
		console.log('Montuje...')
	},

	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function(){
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.decrement}, 'odejmowanie'),
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, 'dodawanie' )
			);
	},

	componentDidMount: function(){
		console.log('Zamontowano')
	},

	componentWillReceiveProps: function(){
		console.log('Component will receive props')
	},

	shouldComponentUpdate: function(nextProps, nextState){
		console.log('should component update')
		return true;
	},

	componentWillUpdate(nextProps, nextState){
		console.log('components will update')
	},

	componentDidUpdate(prevProps, prevState){
		console.log('components did update')
	},

	componentWillUnmount(){
		console.log('Component will delete')
	},

});