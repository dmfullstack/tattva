import React from 'react';
import MediaQuery from 'react-responsive';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/theme/xcode';
import 'brace/theme/monokai';
import 'brace/theme/github';
import 'brace/ext/language_tools';

    let str="";
export default class Editor extends React.Component {
constructor(props) {
       super(props);
       this.state = {
                    watchlist:this.props.watchlistDetail,
                    editorValue:this.props.expression,
                    publish:this.props.publish, watch: ''
                    };
                }

parsing = (watchlist,parsing,publish) =>
{

    if(watchlist.hasOwnProperty("watchlist"))
    {
    str="watchlist("+watchlist.watchlist+")";
     if(watchlist.hasOwnProperty("Stream")&& watchlist.hasOwnProperty("NameSpace"))
     {
        str=str+"\n"+".stream("+this.state.watchlist.Stream+"(NameSpace: "+this.state.watchlist.NameSpace+"))";
     }
     if(parsing.length!==0)
     {
        for(var i=0 ; i<parsing.length ; i++)
         {
            if(parsing[i].lhs.oprType==="Constants")
            {
                str=str+"\n"+" .next(expression("+parsing[i].tag+")"+"\n"+""+"  .rule("+parsing[i].lhs.oprType+"("+parsing[i].lhs.constant+")";
            }
            else if(parsing[i].lhs.oprType==="Input Value")
            {
                str=str+"\n"+" .next(expression("+parsing[i].tag+")"+"\n"+"  .rule("+parsing[i].lhs.oprType+"(Input Value("+parsing[i].lhs.inputValue+"))";
            }
            else if(parsing[i].lhs.oprType==="Data fields from log data")
            {
                str=str+"\n"+" .next(expression("+parsing[i].tag+")"+"\n"+"  .rule("+parsing[i].lhs.oprType+"(Data From Log("+parsing[i].lhs.dataField+"))";
            }
            else if(parsing[i].lhs.oprType==="Accumulate")
            {
                str=str+"\n"+" .next(expression("+parsing[i].tag+")"+"\n"+"  .rule("+parsing[i].lhs.oprType+"(Accumulate("+parsing[i].lhs.accumulateOn+","+parsing[i].lhs.accumulateTill+").then("+parsing[i].lhs.funcPostAccmulate+"("+parsing[i].lhs.funcPostAccmulateParm+"))";
            }
            else if (parsing[i].lhs.oprType!=="Constants" && parsing[i].lhs.oprType!=="Input Value" && parsing[i].lhs.oprType!=="Data fields from log data" && parsing[i].lhs.oprType!=="Accumulate")
            {
                str=str+"\n"+" .next(expression("+parsing[i].tag+")"+"\n"+"  .rule()";
            }
            if(parsing[i].opr!="")
            {
                str=str+".("+parsing[i].opr;
                if(parsing[i].rhs.oprType==="Constants")
                {
                    str=str+"("+parsing[i].rhs.oprType+"("+parsing[i].rhs.constant+")))";
                }
                else if(parsing[i].rhs.oprType==="Input Value")
                {
                    str=str+"("+parsing[i].rhs.oprType+"(Input Value("+parsing[i].rhs.inputValue+")))))";
                }
                else if(parsing[i].rhs.oprType==="Data fields from log data")
                {
                    str=str+"("+parsing[i].rhs.oprType+"(Data From Log("+parsing[i].rhs.dataField+")))))";
                }
                else if(parsing[i].rhs.oprType==="Accumulate")
                {
                    str=str+"("+parsing[i].rhs.oprType+"(Accumulate("+parsing[i].rhs.accumulateOn+","+parsing[i].rhs.accumulateTill+").then("+parsing[i].rhs.funcPostAccmulate+"("+parsing[i].rhs.funcPostAccmulateParm+")))))))";
                }


            }
         }
     }
    if(Object.keys(publish).length != 0) 
     {
        str=str+"\n"+".publish(x-axis:"+publish.xAxis+",y-axis:"+publish.yAxis+",log-format:"+publish.logFormat+"(WatchTabs:Graph:"+publish.graph+",HistoricData:"+publish.historicData+")";
     }
    }
    else
    {
     str='';
    }

this.name(str);
return str;

};
name = (e) => {
    this.props.name(e);
//console.log(this.state.watch);
};
    render() {  

                let str=this.parsing(this.state.watchlist,this.state.editorValue,this.state.publish);
                //var str="watchlist("+this.state.watchlist.watchlist+")"+"\n"+"."+this.state.watchlist.Stream+"("+this.state.watchlist.NameSpace+")";
                return(
                    <div>
      {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
                <AceEditor
                mode="java"
                theme="github"
                name="UNIQUE_ID_OF_DIV"
                value={str}
                editorProps={{$blockScrolling: true}}
                readOnly={true}
                style={{height: '300px', width: '340px',
                textAlign: 'left', fontSize: '20px',
                background: '#E0E0E0'}}
                />
                </MediaQuery>
        </MediaQuery>
      {/* media query for mobile devices ends*/}
      {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
               <AceEditor
                mode="java"
                theme="github"
                name="UNIQUE_ID_OF_DIV"
                value={str}
                editorProps={{$blockScrolling: true}}
                readOnly={true}
                style={{height: '300px', width: '500px',
                textAlign: 'left', fontSize: '20px',
                background: '#E0E0E0'}}
                />
            </MediaQuery>
        </MediaQuery>
      {/* media query for Desktops ends */}
      </div>
            );
   }
}
