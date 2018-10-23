import React from  'react';
import { Header }  from "../../../src/index"

export  default class Main extends React.Component{
    goLastPage(){

    }

    render(){
        return <div>
            <Header
                mode="common"
                leftContent={ <div>111</div>}
                leftIcon="white"
                leftClick={this.goLastPage.bind(this)}
            >
                <div style={{"textAlign":'center','color':'#fff'}} >订单填写</div>
            </Header>
            1111
        </div>
    }
}
