import React from  'react';
import { Header, CardBox,LineBox, Date }  from "../../../src/index"

export  default class Main extends React.Component{
    goLastPage(){

    }

    getChangeDate(date){
        console.log("date",date);
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
            <CardBox
                CardBoxDefault={true}
                cardTitleIcon={true}
                cardTitle="使用凭证"
                content={<div>XXXX</div>}
                disabled={false}
            />
            <LineBox
                leftIcon={true}
                leftContent={<span>安全须知</span>}
                rightIcon={true}
                clickType='1'
                clickTap={()=>{window.location.href='/article/article_pub?key=trip_safety_notice&server=queryProtocolDetail&temp_title=安全须知'}}
                rightContent={<span>了解详情</span>}

            />

            <div>
                <span>Date</span>
                <div style={{"position":"relative", "height":"500px","overflow":"hidden"}}>
                    <Date
                        refs="getDate"
                        defaultDate={["2018-10-24"]}
                        chooseNumber="4"
                        type="single"   //选择单个
                        tips={null}
                        model='common'
                        DateChange={this.getChangeDate.bind(this)}
                        defineClass='defineDateClass'/>
                </div>
            </div>
        </div>
    }
}
