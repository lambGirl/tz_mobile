import React from 'react'
import './index.less'
import { Header,EasyScroll }  from "../../../../src/index"
import classnames from 'classnames';
import styles from  './index.less'
export default class Ceil extends React.Component{

    state = {
        isFixed:false,
        type: 1
    }


    componentDidMount(){
        /*this.refs.scroll.addEventListener("scroll",(e)=>{

        })*/
        //let fixTop =  this.refs.header.offsetHeight;
       // console.log("fixTop", this.refs.header, this.refs.C);

        /*this.setState({
            'fixTop': fixTop
        });*/


        document.addEventListener("scroll", (e)=>{

            // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
            // 不包含文档卷起来的部分
            let pageYOffset = window.pageYOffset;   //文档在窗口左上角水平和垂直方向滚动的像素
            let scrollTop = document.documentElement.scrollTop; //documentElement：返回文档根元素:html
            let bodyscrollTop= document.body.scrollTop; //body滚动距离
            /**
             * 页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement。
             * 页面没有DTD，即没指定DOCTYPE时，使用document.body。 0
             * @type {number}
             */
            let offsetTop =  this.refs.C.offsetTop; //向上的偏移量

            //通过getBoundingClientRect获取元素距离最近的除开为static的父元素的距离

            let rectOffetTop =  this.refs.C.getBoundingClientRect().top;

            if(!this.state.type){
                if( rectOffetTop <  0 && !this.state.isFixed){
                    this.setState({
                        "isFixed": true
                    })
                    return;
                }
                //console.log("rectOffetTop", rectOffetTop,scrollTop, bodyscrollTop, pageYOffset);
                if(rectOffetTop > 0 && this.state.isFixed){
                    this.setState({
                        "isFixed": false
                    })
                }
            }



            //这里是通过offetTop来设置滚动
            if(this.state.type){
                if(pageYOffset > offsetTop){
                    this.setState({
                        "isFixed": pageYOffset > offsetTop
                    })
                    return;
                }

                // console.log(pageYOffset < offsetTop && this.state.isFixed)
                if(pageYOffset <= offsetTop && this.state.isFixed){
                    this.setState({
                        "isFixed": false
                    })
                }
            }

        })
    }

    /**
     * 渲染
     */
    render(){
        let {  isFixed } =  this.state;
        //console.log("render",isFixed);
        return <div style={{"height":'100%'}}>
            <Header
                ref='header'
                mode="common"
                leftContent={ <div>111</div>}
                leftIcon="white"
                leftClick={()=>{history.back()}}
            ><div style={{"textAlign":'center',"color":'#fff'}}>吸顶滚动</div></Header>
              {/*<EasyScroll height="90%" >*/}
                    {/*<Sticky />*/}
                    <dl>
                        <dt>A</dt>
                        <dd>Andrew W.K.</dd>
                        <dd>Apparat</dd>
                        <dd>Arcade Fire</dd>
                        <dd>At The Drive-In</dd>
                        <dd>Aziz Ansari</dd>
                        <dd>Andrew W.K.</dd>
                        <dd>Apparat</dd>
                        <dd>Arcade Fire</dd>
                        <dd>At The Drive-In</dd>
                        <dd>Aziz Ansari</dd>
                    </dl>
                    <dl>
                        <div  ref='C'>
                            <dt className={classnames(styles["common"], {
                            [styles.isFixed]:isFixed
                            })}>C</dt>
                        </div>
                        <dd>Chromeo</dd>
                        <dd>Common</dd>
                        <dd>Converge</dd>
                        <dd>Crystal Castles</dd>
                        <dd>Cursive</dd>
                        <dd>Chromeo</dd>
                        <dd>Common</dd>
                        <dd>Converge</dd>
                        <dd>Crystal Castles</dd>
                        <dd>Cursive</dd>
                        <dd>Chromeo</dd>
                        <dd>Common</dd>
                        <dd>Converge</dd>
                        <dd>Crystal Castles</dd>
                        <dd>Cursive</dd>
                        <dd>Chromeo</dd>
                        <dd>Common</dd>
                        <dd>Converge</dd>
                        <dd>Crystal Castles</dd>
                        <dd>Cursive</dd>
                    </dl>
                    <dl>
                        <dt >E</dt>
                        <dd>Explosions In The Sky</dd>
                        <dd>Explosions In The Sky</dd>
                        <dd>Explosions In The Sky</dd>
                        <dd>Explosions In The Sky</dd>
                        <dd>Explosions In The Sky</dd>
                        <dd>Explosions In The Sky</dd>
                        <dd>Explosions In The Sky</dd>
                        <dd>Explosions In The Sky</dd>
                    </dl>
                    <dl>
                        <dt>T</dt>
                        <dd>Ted Leo & The Pharmacists</dd>
                        <dd>T-Pain</dd>
                        <dd>Thrice</dd>
                        <dd>TV On The Radio</dd>
                        <dd>Two Gallants</dd>
                        <dd>Ted Leo & The Pharmacists</dd>
                        <dd>T-Pain</dd>
                        <dd>Thrice</dd>
                        <dd>TV On The Radio</dd>
                        <dd>Two Gallants</dd>
                        <dd>Ted Leo & The Pharmacists</dd>
                        <dd>T-Pain</dd>
                        <dd>Thrice</dd>
                        <dd>TV On The Radio</dd>
                        <dd>Two Gallants</dd>
                        <dd>Ted Leo & The Pharmacists</dd>
                        <dd>T-Pain</dd>
                        <dd>Thrice</dd>
                        <dd>TV On The Radio</dd>
                        <dd>Two Gallants</dd>
                    </dl>
        {/*    </EasyScroll>*/}
        </div>
    }
}
