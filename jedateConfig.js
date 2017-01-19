/*
 *
 *   echarts 的一些常用图表的配置
 *   author： wuxie
 *
 * */

/* =================================================== jedate 日历插件相关配置 =================================================== */
let jeDateConfig = {
    skinCell:"jedateblue",                //日期风格样式，默认蓝色
    format:"YYYY-MM-DD",                  //日期格式
    minDate:"1980-01-01",                 //最小日期
    maxDate: '',                          //最大日期  1代表明天，2代表后天，以此类推
    insTrigger:true,                      //是否为内部触发事件，默认为内部触发事件
    startMin:"",                          //清除日期后返回到预设的最小日期
    startMax:"",                          //清除日期后返回到预设的最大日期
    isinitVal:false,                      //是否初始化时间，默认不初始化时间
    initAddVal:[0],                       //初始化时间，加减 天 时 分
    isTime:true,                          //是否开启时间选择
    ishmsLimit:false,                     //时分秒限制
    ishmsVal:true,                        //是否限制时分秒输入框输入，默认可以直接输入时间
    isClear:true,                         //是否显示清空
    isToday:true,                         //是否显示今天或本月
    clearRestore:true,                    //清空输入框，返回预设日期，输入框非空的情况下有效
    festival:false,                       //是否显示农历节日
    fixed:true,                           //是否静止定位，为true时定位在输入框，为false时居中定位
    zIndex:2099,                          //弹出层的层级高度
    marks:null,                           //给日期做标注
    choosefun:function(elem, val) {},     //选中日期后的回调, elem当前输入框ID, val当前选择的值
    clearfun:function(elem, val) {},      //清除日期后的回调, elem当前输入框ID, val当前选择的值
    okfun:function(elem, val) {
        //点击确定后的回调, elem当前输入框ID, val当前选择的值
        return false;
        // $(this).val(val);
        /*alert(val);
         console.log(val);*/
    },

    success:function(elem) {},            //层弹出后的成功回调方法, elem当前输入框ID
};




/* =================================================== 关于最大日期 =================================================== */
/* 比如说如果是查询记录的，那么就要限制今天是最大的可选择的日期 */
jeDateConfig.maxDate = $.nowDate(0);            // 设置下可选的最大时间  jeDateConfig 是上面定义的
$('#time').jeDate(jeDateConfig);                  // 使用方法
















