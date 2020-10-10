let express = require('express');
let axios = require('axios');

let app = express();

// 跨域服务操作
app.use((req, res, next) =>{
    res.append('Access-Control-Allow-Origin','*');
    res.append('Access-Control-Allow-Content-Type','*');
    next();
})

app.get('/', (req, res) => {
    res.send('apiServer');
})

app.get('/api/index/quote', async (req, res) => {
    let options = {
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': 'xq_a_token=4db837b914fc72624d814986f5b37e2a3d9e9944; ' +
                'xqat=4db837b914fc72624d814986f5b37e2a3d9e9944; xq_r_token=2d6d6cc8e57501dfe571d2881cabc6a5f2542bf8; ' +
                'xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwMDQ4MzAwNywiY3RtIjoxNTk4MzUxODU5NDYwLCJjaWQiOiJkOWQwbjRBWnVwIn0.VIlJnWrtekj-g0ktANMnlyzTHPV1TfaxdqMIn8uIJ3qyLLiHVIPfSSHUi6MXveQu1aDzypxne7rWN80CeMIwBQxwDWTBFbJpzTw8dL4_IrXXjjYs8Qlrn32Cj_GHleFqvuyrw28ER0FUwEAszxb_v3MgTR-u9v776Cu5duNxM4FcSjcysAT6tgaQM_M-VJNH-X-AmbpQsHAfeXzstzsvC5sbzG82EW3eWRSIMZvob9ohxcWWvvZ2y1PH4MbYm0n-_TptnUlDqcKuGDax-RpHd6rnZVGHOv0o64Dg0gklBCfIHSDP7GjG3Ug4-kNdbtqA6qcNBPczG-OARdRaZOoS1A; ' +
                'u=211598351859992; device_id=24700f9f1986800ab4fcc880530dd0ed; s=cm11yjxmf9; Hm_lvt_1db88642e346389874251b5a1eded6e3=1598351868,1598408639,1598408658,1598412809; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1598412809',
            'Host': 'stock.xueqiu.com',
            'Origin': 'https://xueqiu.com',
            'Referer': 'https://xueqiu.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
        },
    }
    let httpUrl = 'https://stock.xueqiu.com/v5/stock/batch/quote.json?symbol=SH000001,SZ399001,SZ399006,SH000688,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX';
    let result = await axios.get(httpUrl,options);
    res.json(result.data);
})

// 热股榜
app.get('/api/index/hotStock', async (req, res) => {
    // 10全球  12沪深  13港股 11美股
    let options = {
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': 'xq_a_token=4db837b914fc72624d814986f5b37e2a3d9e9944; ' +
                'xqat=4db837b914fc72624d814986f5b37e2a3d9e9944; xq_r_token=2d6d6cc8e57501dfe571d2881cabc6a5f2542bf8; ' +
                'xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwMDQ4MzAwNywiY3RtIjoxNTk4MzUxODU5NDYwLCJjaWQiOiJkOWQwbjRBWnVwIn0.VIlJnWrtekj-g0ktANMnlyzTHPV1TfaxdqMIn8uIJ3qyLLiHVIPfSSHUi6MXveQu1aDzypxne7rWN80CeMIwBQxwDWTBFbJpzTw8dL4_IrXXjjYs8Qlrn32Cj_GHleFqvuyrw28ER0FUwEAszxb_v3MgTR-u9v776Cu5duNxM4FcSjcysAT6tgaQM_M-VJNH-X-AmbpQsHAfeXzstzsvC5sbzG82EW3eWRSIMZvob9ohxcWWvvZ2y1PH4MbYm0n-_TptnUlDqcKuGDax-RpHd6rnZVGHOv0o64Dg0gklBCfIHSDP7GjG3Ug4-kNdbtqA6qcNBPczG-OARdRaZOoS1A; u=211598351859992; ' +
                'device_id=24700f9f1986800ab4fcc880530dd0ed; s=cm11yjxmf9; Hm_lvt_1db88642e346389874251b5a1eded6e3=1598423388,1598424560,1598424612,1598428447; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1598428447',
            'Host': 'stock.xueqiu.com',
            'Origin': 'https://xueqiu.com',
            'Referer': 'https://xueqiu.com/?category=snb_article',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36'
        },
    }
    let index = req.query.index?req.query.index:11;
    let httpUrl = `https://stock.xueqiu.com/v5/stock/hot_stock/list.json?size=8&_type=${index}&type=${index}`;
    let result = await axios.get(httpUrl, options);
    res.json(result.data);
 })

// 股票新闻
app.get('/api/index/news1', async (req, res) => {
    let options = {
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language':' zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': 'xq_a_token=4db837b914fc72624d814986f5b37e2a3d9e9944; ' +
                'xqat=4db837b914fc72624d814986f5b37e2a3d9e9944; xq_r_token=2d6d6cc8e57501dfe571d2881cabc6a5f2542bf8; ' +
                'xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwMDQ4MzAwNywiY3RtIjoxNTk4MzUxODU5NDYwLCJjaWQiOiJkOWQwbjRBWnVwIn0.VIlJnWrtekj-g0ktANMnlyzTHPV1TfaxdqMIn8uIJ3qyLLiHVIPfSSHUi6MXveQu1aDzypxne7rWN80CeMIwBQxwDWTBFbJpzTw8dL4_IrXXjjYs8Qlrn32Cj_GHleFqvuyrw28ER0FUwEAszxb_v3MgTR-u9v776Cu5duNxM4FcSjcysAT6tgaQM_M-VJNH-X-AmbpQsHAfeXzstzsvC5sbzG82EW3eWRSIMZvob9ohxcWWvvZ2y1PH4MbYm0n-_TptnUlDqcKuGDax-RpHd6rnZVGHOv0o64Dg0gklBCfIHSDP7GjG3Ug4-kNdbtqA6qcNBPczG-OARdRaZOoS1A;' +
                ' u=211598351859992; device_id=24700f9f1986800ab4fcc880530dd0ed; s=cm11yjxmf9; ' +
                '__utma=1.860561080.1598408655.1598408655.1598408655.1; __utmc=1;' +
                ' __utmz=1.1598408655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); ' +
                'acw_tc=2760822615984236869245742e9026795b830d8462966494969ca0dc9b14cf; ' +
                'Hm_lvt_1db88642e346389874251b5a1eded6e3=1598423078,1598423388,1598424560,1598424612; ' +
                'Hm_lpvt_1db88642e346389874251b5a1eded6e3=1598424612',
            'elastic-apm-traceparent': '00-2764f627d7fdd53bcf7650ca52f4703f-c8535c7426f8a173-01',
            'Host': 'xueqiu.com',
            'Referer': 'https://xueqiu.com/?category=snb_article',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36'
        },
    }
    let httpUrl = 'https://xueqiu.com/statuses/hot/listV2.json?since_id=-1&max_id=-1&size=15';
    let result = await axios.get( httpUrl, options);
    res.json(result.data);
})

app.get('/api/index/news2', async (req, res) => {
    let options = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': 'xq_a_token=4db837b914fc72624d814986f5b37e2a3d9e9944; ' +
                'xqat=4db837b914fc72624d814986f5b37e2a3d9e9944; xq_r_token=2d6d6cc8e57501dfe571d2881cabc6a5f2542bf8; ' +
                'xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwMDQ4MzAwNywiY3RtIjoxNTk4MzUxODU5NDYwLCJjaWQiOiJkOWQwbjRBWnVwIn0.VIlJnWrtekj-g0ktANMnlyzTHPV1TfaxdqMIn8uIJ3qyLLiHVIPfSSHUi6MXveQu1aDzypxne7rWN80CeMIwBQxwDWTBFbJpzTw8dL4_IrXXjjYs8Qlrn32Cj_GHleFqvuyrw28ER0FUwEAszxb_v3MgTR-u9v776Cu5duNxM4FcSjcysAT6tgaQM_M-VJNH-X-AmbpQsHAfeXzstzsvC5sbzG82EW3eWRSIMZvob9ohxcWWvvZ2y1PH4MbYm0n-_TptnUlDqcKuGDax-RpHd6rnZVGHOv0o64Dg0gklBCfIHSDP7GjG3Ug4-kNdbtqA6qcNBPczG-OARdRaZOoS1A; ' +
                'u=211598351859992; device_id=24700f9f1986800ab4fcc880530dd0ed; s=cm11yjxmf9; ' +
                '__utma=1.860561080.1598408655.1598408655.1598408655.1; __utmc=1; ' +
                '__utmz=1.1598408655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); ' +
                'Hm_lvt_1db88642e346389874251b5a1eded6e3=1598423388,1598424560,1598424612,1598428447; ' +
                'Hm_lpvt_1db88642e346389874251b5a1eded6e3=1598428447; acw_tc=2760825315984347692853370ea1eb5da41c80c70098c9290de2180352e5a1',
            'elastic-apm-traceparent': '00-65f0bac7c9257f64e986098e4e6ca045-d057900166a87816-01',
            'Host': 'xueqiu.com',
            'Referer': 'https://xueqiu.com/?category=livenews',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36'
        },
    }
    let httpUrl = 'https://xueqiu.com/statuses/livenews/list.json?since_id=-1&max_id=-1&count=15';
    let result = await axios.get(httpUrl, options);
    res.json(result.data);
})

// 股票筛选的数据
app.get('/api/choose/tools', async(req, res) =>{
    // 获取首页
    let httpUrl = 'https://xueqiu.com/hq/screener';
    let result = await axios.get(httpUrl);

    //设置正则表达式
    let reg = /SNB.data.condition = (.*?);/igs;

    //匹配内容
    let content = reg.exec(result.data)[1];
    res.json(content);
})

//获取股票
//关注人数： follow7d(本周新增关注人数)  follow()
//讨论条数 tweet  tweet7d
// 分享交易：deal7d  deal
app.get('/api/choose/stocks', async (req, res) => {
    let order_by = req.query.order_by?req.query.order_by:'follow7d';
    let page = req.query.page?req.query.page:1;
    let time = new Date().getTime();
    let order = req.query.order?req.query.order:'desc';
    let httpUrl = `https://xueqiu.com/service/screener/screen?category=CN&size=10&order=${order}&order_by=${order_by}&only_count=0&page=${page}&_=${time}`;
    let result = await axios.get(httpUrl);
    res.json(result.data)
})

//行业
app.get('/api/choose/industries',async (req,res)=>{
    let time = new Date().getTime();
    let httpUrl =`https://xueqiu.com/service/screener/industries?category=CN&_=${time}`;
    let result = await axios.get(httpUrl);
    res.json(result.data);
})

// 地域
app.get('/api/choose/areas', async (req, res) =>{
    let time = new Date().getTime();
    let httpUrl = `https://xueqiu.com/service/screener/areas?_=${time}`;
    let result = await axios.get(httpUrl);
    res.json(result.data);
})
//获取条件设置值的范围大小
app.get('/api/choose/range', async (req, res) =>{
    let time = new Date().getTime();
    let field = req.query.field?req.query.field:'pettm';
    let httpUrl = `https://xueqiu.com/service/screener/values?category=CN&field=${field}&_=${time}`;
    let result = await axios.get(httpUrl);
    res.json(result.data);
})

app.listen(8080, () => {
    console.log('server start: ', 'http://localhost:8080');
})
