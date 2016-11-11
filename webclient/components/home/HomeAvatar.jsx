import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import {Link} from 'react-router';
import $ from 'jquery';

const styles =
{
  card: {
        margin: '10px'
       },
  header: {
        fontSize: '33px',
        color: '#FFFFFF',
        fontFamily: 'Open-sans',
        marginLeft: '75px'
  },
  image: {
        height: '220px',
        width: '350px'
  },
  title: {
        fontFamily: 'Open-sans',
        fontSize: '26px'
  }
};
export default class HomeAvatar extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      data: [], num: false, num2: false, streams: [], watch: [], num3: false
    };
}
componentDidMount = () => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8081/namespace/get',
      dataType: 'json',
      success: function(res) {
       this.setState({data2: res});
       this.setState({num: true});
       }.bind(this),
      error: function(err) {
        this.setState(err);
       }
});
        $.ajax({
      type: 'GET',
      url: 'http://localhost:8081/stream/get',
      dataType: 'json',
      success: function(res) {
       this.setState({streams: res});
       this.setState({num2: true});
       }.bind(this),
      error: function(err) {
       this.setState(err);
       }
 });
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8081/watchlist/get',
      dataType: 'json',
      success: function(res) {
       this.setState({watch: res});
       this.setState({num3: true});
       }.bind(this),
      error: function(err) {
       this.setState(err);
       }
 });
};
render() {
    let obj = this.state.num ? Object.keys(this.state.data2).length : null;
    let obj2 = this.state.num2 ? Object.keys(this.state.streams).length : null;
    let obj3 = this.state.num3 ? Object.keys(this.state.watch).length : null;
    let dataImg1 = 'http://www.marvelitech.com/images/web-data-mini';
    let dataImg2 = 'ng-services/data%20and%20web%20mining%20services%20dallas.gif';
    let dataImg3 = dataImg1.concat(dataImg2);
    let dataImg4 = 'https://static1.squarespace.com/static\/537a1f91e4b0ccfe943c6';
    let dataImg5 = 'bc6/t/57c5e078b8a79bb8cb6e67bb/1472585859733/';
    let dataImg6 = dataImg4.concat(dataImg5);
    let dataImg7 = 'http://blog.stata.com/wp-content';
    let dataImg8 = '/uploads/2014/03/ChangeMeans.gif';
    let dataImg9 = dataImg7.concat(dataImg8);
    // calling ViewMap component
    return (
      <center>
  { /* div container starts */ }
      <div className="container" style={{display: 'flex'}}>
  { /* div for rows starts */ }
      <div className="row">
  { /* specifying namespace column */ }
          <div className="col-xs-3.5">
  { /* namespace card starts */ }
              <Card style={styles.card}>
                <CardHeader
                title="NameSpace" style={{background: '#E1BEE7'}} titleStyle={styles.header}/>
                <CardMedia >
                <Link to="/viewnamespace">
                <img src={dataImg3}
                style={styles.image}/>
                </Link>
                </CardMedia>
                <CardTitle title={<span style={{fontSize: '50px', color: 'grey'}}>{obj}
                                  <span style={{fontSize: '20px', color: 'black'}}> NameSpaces
                                  </span></span>} titleStyle={styles.title}/>
              </Card>
  { /* namespace card ends */ }
           </div>
  { /* specifying streams column */ }
           <div className="col-xs-3.5">
  { /* streams card starts */ }
           <Card style={styles.card}>
            <CardHeader title="Streams" style={{background: '#DB8C90'}} titleStyle={styles.header}/>
                <CardMedia>
                <Link to="/stream" >
                <img src={dataImg6}
                style={styles.image}/>
                </Link>
                </CardMedia>
                <CardTitle title={<span style={{fontSize: '50px', color: 'grey'}}>{obj2}
                                  <span style={{fontSize: '20px', color: 'black'}}> Streams
                                  </span></span>} titleStyle={styles.title}/>
            </Card>
  { /* streams card ends */ }
          </div>
          <div className="col-xs-3.5">
  { /* watchlist card starts */ }
            <Card style={styles.card}>
              <CardHeader
               title="WatchList" style={{background: '#BBDEFB'}} titleStyle={styles.header}/>
              <CardMedia>
              <Link to="/watchList">
              <img src={dataImg9}
              style={styles.image}/>
              </Link>
              </CardMedia>
              <CardTitle title={<span style={{fontSize: '50px', color: 'grey'}}>{obj3}
                                  <span style={{fontSize: '20px', color: 'black'}}> WatchLists
                                  </span></span>}
  titleStyle={styles.title}/>
            </Card>
  { /* watchlist card ends */ }
          </div>
  { /* calling Morenamespace component */ }
        <div />
    </div>
  { /* div for rows ends */ }
  </div>
  { /* div container starts */ }
  </center>
  );
  }
}
