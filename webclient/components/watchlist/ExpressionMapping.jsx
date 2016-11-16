import React from 'react';
import AddWatchList from './AddWatchList.jsx';

export default class ExpressionMapping extends React.Component {
	static get propTypes() {
		return(
			{
               expressionCriteria: React.PropTypes.string.isRequired,
               expression1AndValue: React.PropTypes.string.isRequired,
               expression2AndValue: React.PropTypes.string.isRequired,
               expression3AndValue: React.PropTypes.string.isRequired,
               expression4AndValue: React.PropTypes.string.isRequired,
               expression5AndValue: React.PropTypes.string.isRequired,
               expression6AndValue: React.PropTypes.string.isRequired,
               expression7AndValue: React.PropTypes.string.isRequired,
               expression8AndValue: React.PropTypes.string.isRequired,
               operators: React.PropTypes.string.isRequired,
               selectedValue: React.PropTypes.string.isRequired,
               remove: React.PropTypes.string.isRequired
			}
			);
		}
		render() {
            let ind = 0;
            let iterating = this.props.expressionCriteria.map(function(expressionCriteria) {
			return(

				<AddWatchList expressionCriteria={this.props.expressionCriteria}
                                index={ind++} key={expressionCriteria.id}
								remove={this.props.remove}
								expression1AndValue={this.props.expression1AndValue}
								expression2AndValue={this.props.expression2AndValue}
								expression3AndValue={this.props.expression3AndValue}
								expression4AndValue={this.props.expression4AndValue}
								expression5AndValue={this.props.expression5AndValue}
								expression6AndValue={this.props.expression6AndValue}
								expression7AndValue={this.props.expression7AndValue}
								expression8AndValue={this.props.expression8AndValue}
								operators={this.props.operators}
								selectedValue={this.props.selectedValue}/>
								);
			}.bind(this));
		return(
		<div>
			{iterating}
		</div>
		);
	}
}
