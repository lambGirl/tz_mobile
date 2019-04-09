import React from  'react';
import { Header, CardBox,LineBox, Date }  from "../../../src/index"
import {withRouter} from 'react-router-dom'
import './index.less'

class Main extends React.Component{

    goLastPage(){

    }

    getChangeDate(date){
        console.log("date",date);
    }

    render(){
        let { history } =  this.props;
        return <div style={{"background":'#fcc','height':'100%'}}>
                <div style={{"marginBottom":'10px'}}>
                    <LineBox
                    leftIcon={true}
                    leftContent={<span>组件测试</span>}
                    rightIcon={true}
                    clickType='1'
                    clickTap={()=>{history.push("/demo")}}
                    rightContent={<span>了解详情</span>}
                    />
                </div>

            <div style={{"marginBottom":'10px'}}>
                <LineBox
                    leftIcon={true}
                    leftContent={<span>吸顶功能展示</span>}
                    rightIcon={true}
                    clickType='1'
                    clickTap={()=>{history.push("/ceil")}}
                    rightContent={<span>了解详情</span>}
                />
            </div>


        </div>
    }
}

export default withRouter(Main)
