const React = require('react');
const RadarGraph = require('../components/RadarGraph');
const PieGraph = require('../components/PieGraph');
const RadialGraph = require('../components/RadialGraph');
const BarGraph = require('../components/BarGraph');
const CloudGraph = require('../components/CloudGraph');

const GraphContainer = React.createClass({
    render () {
        console.log(this.props.Data);

        return Object.keys(this.props.Data).length > 0 ? (
            <div className="graphContainer">
                <RadarGraph data={this.props.Data.graphs.taxData} />
                <PieGraph data={this.props.Data.graphs.emotionData}/>
                <RadialGraph data={this.props.Data.graphs.conceptData}/>
                <BarGraph data={this.props.Data.graphs.sentimentData}/>
                <CloudGraph data={this.props.Data.graphs.keywordData}/>
            </div>
        ) : <div />;
    }
});


module.exports = GraphContainer;