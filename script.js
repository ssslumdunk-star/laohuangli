// 积极的交易行为（100个）
const positiveActivities = [
    "制定详细交易计划", "学习价值投资理念", "研究企业基本面", "设置合理止损位", "分散投资组合",
    "记录交易心得", "复盘历史交易", "学习技术分析", "关注宏观经济", "阅读财报数据",
    "研究行业周期", "学习风险管理", "制定资金管理策略", "关注政策导向", "学习量化交易",
    "建立交易纪律", "培养耐心品质", "学习心理控制", "研究市场规律", "关注长期趋势",
    "学习财务分析", "研究估值模型", "关注现金流", "学习期权策略", "研究债券投资",
    "关注分红股票", "学习资产配置", "研究REITs", "关注ESG投资", "学习对冲策略",
    "研究商品投资", "学习外汇基础", "关注通胀数据", "研究利率影响", "学习经济指标",
    "关注央行政策", "研究产业政策", "学习国际贸易", "关注汇率变化", "研究地缘政治",
    "学习会计知识", "研究审计报告", "关注内控制度", "学习公司治理", "研究商业模式",
    "关注管理层变动", "学习并购重组", "研究分拆上市", "关注股权激励", "学习退市制度",
    "研究新股发行", "关注科创板", "学习创业板规则", "研究北交所", "关注港股通",
    "学习美股投资", "研究A+H股", "关注中概股", "学习ADR机制", "研究QFII动向",
    "关注社保基金", "学习险资配置", "研究公募基金", "关注私募动向", "学习ETF机制",
    "研究指数编制", "关注权重调整", "学习分级基金", "研究可转债", "关注优先股",
    "学习股指期货", "研究国债期货", "关注商品期货", "学习期权交易", "研究权证机制",
    "关注融资融券", "学习股票质押", "研究大宗交易", "关注减持规则", "学习停复牌制度",
    "研究信息披露", "关注年报季报", "学习业绩预告", "研究重大事项", "关注股东大会",
    "学习投票权利", "研究分红政策", "关注送转方案", "学习除权除息", "研究股本变动",
    "关注机构调研", "学习研报分析", "研究评级变化", "关注目标价位", "学习盈利预测",
    "研究行业比较", "关注同业对标", "学习竞争优势", "研究护城河", "关注创新能力"
];

// 消极的交易行为（30个）
const negativeActivities = [
    "频繁短线交易", "情绪化决策", "追涨杀跌操作", "满仓单一股票", "听信市场谣言",
    "盲目跟风投资", "不设止损位", "借钱炒股投资", "忽视风险控制", "夜盘重仓交易",
    "逆势盲目加仓", "恐慌性抛售", "贪婪过度持仓", "盲目抄底操作", "冲动性交易决策",
    "忽视基本面分析", "过度杠杆操作", "不关注政策风险", "盲目追逐热点", "相信内幕消息",
    "忽视止盈操作", "不分散投资风险", "过度交易频繁", "忽视资金管理", "违背交易纪律",
    "感情用事交易", "赌博心态投资", "急于求成心态", "忽视市场大势", "盲目相信推荐"
];

// 中性的交易行为（170个）
const neutralActivities = [
    // 特定投资策略和风格
    "研究高股息股票", "寻找低估值机会", "分析高ROE公司", "关注高成长标的", "研究防御性资产",
    "寻找逆向投资机会", "分析价值陷阱风险", "关注均值回归机会", "研究动量效应", "分析反转信号",
    "寻找护城河企业", "研究竞争优势", "关注定价权公司", "分析网络效应", "研究规模效应",
    "寻找隐形冠军", "关注细分市场龙头", "研究利基市场", "分析寡头垄断行业", "关注转型升级机会",
    
    // 全球市场和区域机会
    "研究新兴市场机会", "关注发达市场配置", "分析汇率套利空间", "研究全球通胀趋势", "关注地缘政治影响",
    "分析央行政策分化", "研究跨境资本流动", "关注主权债务风险", "分析贸易战影响", "研究产业链转移",
    "关注ESG投资趋势", "分析碳中和机会", "研究绿色金融", "关注可持续发展", "分析环保升级",
    "研究数字化转型", "关注人工智能应用", "分析云计算趋势", "研究物联网机会", "关注元宇宙概念",
    
    // 宏观经济和周期研判
    "分析康德拉季耶夫周期", "研究基钦周期", "关注朱格拉周期", "分析美林时钟", "研究经济周期轮动",
    "关注通胀预期变化", "分析实际利率走势", "研究收益率曲线", "关注流动性周期", "分析信用周期",
    "研究大宗商品超级周期", "关注库存周期", "分析房地产周期", "研究人口红利", "关注技术创新周期",
    
    // 技术分析和量化指标
    "分析斐波那契回调", "研究波浪理论", "关注江恩理论", "分析道氏理论", "研究缠论结构",
    "关注黄金分割位", "分析支撑阻力位", "研究趋势线", "关注成交量价关系", "分析资金流向",
    "研究市场宽度指标", "关注恐慌指数VIX", "分析波动率微笑", "研究期权PCR比率", "关注融资融券余额",
    "分析北向资金流向", "研究大宗交易异动", "关注高频交易影响", "分析程序化交易", "研究算法交易",
    
    // 行业轮动和主题投资
    "研究消费升级趋势", "关注人口老龄化", "分析城镇化进程", "研究产业升级", "关注科技创新",
    "分析新能源革命", "研究生物医药突破", "关注军工现代化", "分析基建投资", "研究房地产政策",
    "关注教育改革", "分析医疗改革", "研究养老产业", "关注体育产业", "分析文娱消费",
    "研究新零售模式", "关注供应链金融", "分析产业互联网", "研究共享经济", "关注平台经济",
    
    // 特殊事件和催化剂
    "关注财报季预期", "分析分红季机会", "研究解禁压力", "关注定增影响", "分析并购重组",
    "研究IPO影响", "关注退市风险", "分析停牌复牌", "研究特别处理", "关注监管变化",
    "分析政策窗口", "研究会议催化", "关注数据发布", "分析事件驱动", "研究黑天鹅事件",
    
    // 资产配置和风险管理
    "研究资产相关性", "关注风险平价", "分析波动率目标", "研究尾部风险", "关注流动性风险",
    "分析信用风险", "研究操作风险", "关注模型风险", "分析集中度风险", "研究对手方风险",
    "关注久期风险", "分析凸性风险", "研究基差风险", "关注滚动风险", "分析再投资风险",
    
    // 另类投资和衍生品
    "研究可转债套利", "关注统计套利", "分析配对交易", "研究跨期套利", "关注跨品种套利",
    "分析期现套利", "研究日历价差", "关注垂直价差", "分析蝶式价差", "研究比率价差",
    "关注保护性看跌", "分析备兑开仓", "研究领子期权", "关注跨式期权", "分析宽跨式期权",
    
    // 心理和行为分析
    "研究投资者情绪", "关注市场预期", "分析羊群效应", "研究锚定效应", "关注确认偏误",
    "分析损失厌恶", "研究心理账户", "关注可得性偏误", "分析代表性偏误", "研究过度自信",
    "关注赌徒谬误", "分析沉没成本", "研究禀赋效应", "关注框架效应", "分析可用性启发"
];

// 所有行为的总集合
const allActivities = [
    ...positiveActivities,
    ...negativeActivities, 
    ...neutralActivities
];

// 投资大师语录（中英文对照）
const investorQuotes = [
    {
        chinese: "在别人贪婪时恐惧，在别人恐惧时贪婪。",
        english: "Be fearful when others are greedy and greedy when others are fearful.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "我们最喜欢的持有期是永远。",
        english: "Our favorite holding period is forever.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "风险来自于你不知道自己在做什么。",
        english: "Risk comes from not knowing what you're doing.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "时间是优质投资的朋友，却是劣质投资的敌人。",
        english: "Time is the friend of the wonderful business, the enemy of the mediocre.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "价格是你付出的，价值是你得到的。",
        english: "Price is what you pay, value is what you get.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "市场在短期内是投票机，但在长期内是称重机。",
        english: "In the short run, the market is a voting machine but in the long run, it is a weighing machine.",
        author: "本杰明·格雷厄姆"
    },
    {
        chinese: "投资的第一规则是不要亏钱，第二规则是不要忘记第一规则。",
        english: "Rule No. 1: Never lose money. Rule No. 2: Don't forget rule No. 1.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "要想成功，你必须有耐心等待合适的机会。",
        english: "You do things when the opportunities come along. I've had periods in my life when I've had a bundle of ideas come along, and I've had long dry spells.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "多样化是对无知的保护，对那些知道自己在做什么的人来说并没有什么意义。",
        english: "Diversification is protection against ignorance. It makes little sense if you know what you are doing.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "不要投资你不理解的业务。",
        english: "Never invest in a business you cannot understand.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "股票市场是一个将钱从急躁的人转移给有耐心的人的机制。",
        english: "The stock market is a device for transferring money from the impatient to the patient.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "我从不试图在股市赚钱，我假设明天股市就要关门了，五年之后才重新开放。",
        english: "I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for five years.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "只有当潮水退去时，你才知道谁在裸体游泳。",
        english: "Only when the tide goes out do you discover who's been swimming naked.",
        author: "沃伦·巴菲特"
    },
    {
        chinese: "最好的投资机会通常来自于被忽视或误解的公司。",
        english: "The best investment opportunities usually arise from companies that are neglected or misunderstood.",
        author: "彼得·林奇"
    },
    {
        chinese: "不要预测市场，要让市场来告诉你它的走向。",
        english: "Don't forecast the market; let the market tell you where it's going.",
        author: "杰西·利弗摩尔"
    },
    {
        chinese: "投资成功的关键不在于你知道多少，而在于你能诚实地承认你不知道什么。",
        english: "The key to investment success is not knowing how much you know, but being able to honestly acknowledge what you don't know.",
        author: "本杰明·格雷厄姆"
    },
    {
        chinese: "市场可能在很长时间内保持非理性，时间超过你保持偿付能力的时间。",
        english: "The market can remain irrational longer than you can remain solvent.",
        author: "约翰·梅纳德·凯恩斯"
    },
    {
        chinese: "如果你不能承受股价下跌50%，你就不应该投资股票。",
        english: "If you can't handle a 50% drop in your stock, you shouldn't own stocks.",
        author: "彼得·林奇"
    },
    {
        chinese: "投资者最大的敌人不是股市，而是自己。",
        english: "The investor's chief problem - and even his worst enemy - is likely to be himself.",
        author: "本杰明·格雷厄姆"
    },
    {
        chinese: "复利是世界第八大奇迹，理解它的人能够获得它，不理解它的人要付出代价。",
        english: "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.",
        author: "阿尔伯特·爱因斯坦"
    },
    {
        chinese: "真正的投资者乐见股价下跌，因为这意味着他们能以更低的价格买到更多股票。",
        english: "The real money in investing will have to be made—as most of it has been in the past—not out of buying and selling, but out of owning and holding securities.",
        author: "本杰明·格雷厄姆"
    },
    {
        chinese: "不要因为一只股票便宜就买入，除非它真的有价值。",
        english: "Don't bottom fish. Buy a stock because it's cheap, but not because it's cheapest.",
        author: "彼得·林奇"
    },
    {
        chinese: "投资的艺术在于知道什么时候切断损失，什么时候让利润奔跑。",
        english: "The art of investing is knowing when to cut your losses and when to let your profits run.",
        author: "威廉·奥尼尔"
    },
    {
        chinese: "耐心、纪律和理性是投资成功的三大支柱。",
        english: "Patience, discipline and rationality are the three pillars of investment success.",
        author: "约翰·博格"
    },
    
    // 道家智慧语录
    {
        chinese: "无为而无不为，静中观市场之动。",
        english: "Act without forcing, achieve without striving. In stillness, observe the market's movement.",
        author: "老子·《道德经》"
    },
    {
        chinese: "知足不辱，知止不殆，可以长久。",
        english: "Know when enough is enough to avoid disgrace, know when to stop to avoid danger, and you can endure.",
        author: "老子·《道德经》"
    },
    {
        chinese: "大道至简，繁华看淡皆是道。投资之道，亦在去繁就简。",
        english: "The Great Way is simple. See through complexity to find the Way. The path of investment lies in simplicity.",
        author: "道家智慧"
    },
    {
        chinese: "水善利万物而不争，投资者当效水之德。",
        english: "Water benefits all things and does not compete. Investors should emulate the virtue of water.",
        author: "老子·《道德经》"
    },
    {
        chinese: "知其白，守其黑，为天下式。明其盈，守其虚，富贵无期。",
        english: "Know the white but keep to the black, be a pattern for the world. Know fullness but keep to emptiness, wealth has no limit.",
        author: "老子·《道德经》"
    },
    {
        chinese: "天地不仁，以万物为刍狗。市场不仁，涨跌皆是常理。",
        english: "Heaven and Earth are impartial, treating all things as grass and dogs. Markets are impartial, rises and falls are natural law.",
        author: "老子·《道德经》"
    },
    {
        chinese: "致虚极，守静笃。万物并作，吾以观复。",
        english: "Attain the utmost emptiness, maintain perfect stillness. All things flourish, and I observe their return.",
        author: "老子·《道德经》"
    },
    {
        chinese: "圣人不积，既以为人己愈有，既以与人己愈多。",
        english: "The sage does not accumulate. The more he helps others, the more he benefits himself.",
        author: "老子·《道德经》"
    },
    {
        chinese: "反者道之动，弱者道之用。盛极必衰，否极泰来。",
        english: "Reversal is the movement of the Way; yielding is the way of the Way. What reaches extremes will decline, what reaches bottom will rise.",
        author: "老子·《道德经》"
    },
    {
        chinese: "善者不辩，辩者不善。知者不博，博者不知。",
        english: "The good do not argue, those who argue are not good. The wise are not learned, the learned are not wise.",
        author: "老子·《道德经》"
    },
    {
        chinese: "大智若愚，大巧若拙。投资大道，返璞归真。",
        english: "Great wisdom appears foolish, great skill appears clumsy. The great way of investing returns to simplicity.",
        author: "老子·《道德经》"
    },
    {
        chinese: "上善若水，厚德载物。投资如水，顺势而为。",
        english: "The highest good is like water, virtue carries all things. Investment is like water, follow the flow.",
        author: "老子·《道德经》"
    },
    {
        chinese: "夫唯不争，故天下莫能与之争。不争之德，乃投资之上策。",
        english: "Only by not competing can no one compete with you. The virtue of non-competition is the highest strategy in investment.",
        author: "老子·《道德经》"
    },
    {
        chinese: "道生一，一生二，二生三，三生万物。市场变化，皆有其道。",
        english: "The Way begets one, one begets two, two begets three, three begets all things. Market changes all follow the Way.",
        author: "老子·《道德经》"
    },
    {
        chinese: "柔胜刚，弱胜强。天下莫不知，莫能行。",
        english: "The soft overcomes the hard, the weak overcomes the strong. Everyone knows this, but none can practice it.",
        author: "老子·《道德经》"
    }
];

// 基于日期的确定性哈希函数
function dateHash(dateString, seed = 0) {
    let hash = 0;
    const str = dateString + seed.toString();
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // 转换为32位整数
    }
    return Math.abs(hash);
}

// 基于日期获取确定的元素
function getDateBasedItems(array, count, dateString, seed = 0) {
    const items = [];
    const usedIndices = new Set();
    
    for (let i = 0; i < count && items.length < array.length; i++) {
        const hash = dateHash(dateString, seed + i);
        let index = hash % array.length;
        
        // 如果索引已经使用过，寻找下一个可用的索引
        while (usedIndices.has(index) && usedIndices.size < array.length) {
            index = (index + 1) % array.length;
        }
        
        if (!usedIndices.has(index)) {
            usedIndices.add(index);
            items.push(array[index]);
        }
    }
    
    return items;
}

// 基于日期获取单个确定元素
function getDateBasedItem(array, dateString, seed = 0) {
    const hash = dateHash(dateString, seed);
    return array[hash % array.length];
}

// 十二时辰计算工具
function getCurrentShichen(date = new Date()) {
    const hour = date.getHours();
    const shichens = [
        { name: '子时', description: '夜半', time: '23:00-1:00', range: [23, 1] },
        { name: '丑时', description: '鸡鸣', time: '1:00-3:00', range: [1, 3] },
        { name: '寅时', description: '平旦', time: '3:00-5:00', range: [3, 5] },
        { name: '卯时', description: '日出', time: '5:00-7:00', range: [5, 7] },
        { name: '辰时', description: '食时', time: '7:00-9:00', range: [7, 9] },
        { name: '巳时', description: '隅中', time: '9:00-11:00', range: [9, 11] },
        { name: '午时', description: '日中', time: '11:00-13:00', range: [11, 13] },
        { name: '未时', description: '日昳', time: '13:00-15:00', range: [13, 15] },
        { name: '申时', description: '晡时', time: '15:00-17:00', range: [15, 17] },
        { name: '酉时', description: '日入', time: '17:00-19:00', range: [17, 19] },
        { name: '戌时', description: '黄昏', time: '19:00-21:00', range: [19, 21] },
        { name: '亥时', description: '人定', time: '21:00-23:00', range: [21, 23] }
    ];
    
    // 特殊处理子时（跨天）
    if (hour >= 23 || hour < 1) return shichens[0];
    
    // 其他时辰
    for (let i = 1; i < shichens.length; i++) {
        const [start, end] = shichens[i].range;
        if (hour >= start && hour < end) {
            return shichens[i];
        }
    }
    
    return shichens[0]; // 默认返回子时
}

// 获取下一个时辰的开始时间
function getNextShichenTime(date = new Date()) {
    const now = new Date(date);
    const hour = now.getHours();
    let nextHour;
    
    // 计算下一个时辰的开始小时
    if (hour >= 23 || hour < 1) nextHour = 1;
    else if (hour >= 1 && hour < 3) nextHour = 3;
    else if (hour >= 3 && hour < 5) nextHour = 5;
    else if (hour >= 5 && hour < 7) nextHour = 7;
    else if (hour >= 7 && hour < 9) nextHour = 9;
    else if (hour >= 9 && hour < 11) nextHour = 11;
    else if (hour >= 11 && hour < 13) nextHour = 13;
    else if (hour >= 13 && hour < 15) nextHour = 15;
    else if (hour >= 15 && hour < 17) nextHour = 17;
    else if (hour >= 17 && hour < 19) nextHour = 19;
    else if (hour >= 19 && hour < 21) nextHour = 21;
    else nextHour = 23;
    
    const nextTime = new Date(now);
    nextTime.setHours(nextHour, 0, 0, 0);
    
    // 如果计算出的时间已经过了，说明是明天
    if (nextTime <= now) {
        nextTime.setDate(nextTime.getDate() + 1);
    }
    
    return nextTime;
}

// 农历转换工具
function getLunarDate(date) {
    // 简化的农历转换算法（基于公历日期计算近似农历）
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // 农历月份名称
    const lunarMonths = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                      '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                      '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    
    // 天干地支
    const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const zodiacAnimals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    
    // 简化计算（实际农历计算非常复杂，这里使用近似算法）
    const baseYear = 1900;
    const yearOffset = year - baseYear;
    
    // 计算天干地支年
    const stemIndex = (yearOffset + 0) % 10;
    const branchIndex = (yearOffset + 0) % 12;
    const stem = heavenlyStems[stemIndex];
    const branch = earthlyBranches[branchIndex];
    const zodiac = zodiacAnimals[branchIndex];
    
    // 简化的农历月日计算（基于日期哈希）
    const dateHash = year * 10000 + month * 100 + day;
    const lunarMonthIndex = Math.abs(dateHash % 12);
    const lunarDayIndex = Math.abs(dateHash % 30);
    
    const lunarMonth = lunarMonths[lunarMonthIndex];
    const lunarDay = lunarDays[lunarDayIndex];
    
    return {
        year: `${stem}${branch}年`,
        zodiac: `${zodiac}年`,
        month: `${lunarMonth}月`,
        day: lunarDay
    };
}

// 更新日期显示
function updateDate() {
    const now = new Date();
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const weekday = days[now.getDay()];
    
    // 获取农历日期和当前时辰
    const lunar = getLunarDate(now);
    const shichen = getCurrentShichen(now);
    
    document.getElementById('dateNumber').textContent = day;
    document.getElementById('dateText').textContent = `${year}年${month}月`;
    document.getElementById('weekday').textContent = `星期${weekday}`;
    document.getElementById('lunarDate').textContent = `农历${lunar.month}${lunar.day}`;
    document.getElementById('lunarYear').textContent = `${lunar.year} ${lunar.zodiac}`;
    document.getElementById('shichenInfo').innerHTML = `
        <span class="shichen-name">${shichen.name}</span>
        <span class="shichen-desc">${shichen.description}</span>
        <span class="shichen-time">${shichen.time}</span>
    `;
}

// 更新运势内容
function updateFortune() {
    const now = new Date();
    const shichen = getCurrentShichen(now);
    
    // 基于日期和时辰创建唯一标识符
    const dateString = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    const shichenString = `${dateString}-${shichen.name}`;
    
    // 基于时辰确定宜做事情的数量（3-5项）
    const favorableCount = (dateHash(shichenString, 100) % 3) + 3;
    // "宜"只从积极行为和中性行为中选择，避免显著负面行为
    const favorablePool = [...positiveActivities, ...neutralActivities];
    const selectedFavorable = getDateBasedItems(favorablePool, favorableCount, shichenString, 1);
    const favorableList = document.getElementById('favorableList');
    favorableList.innerHTML = '';
    selectedFavorable.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        favorableList.appendChild(li);
    });
    
    // 基于时辰确定忌做事情的数量（3-5项）
    const unfavorableCount = (dateHash(shichenString, 200) % 3) + 3;
    // "忌"从所有行为中选择，但优先选择负面行为，确保与宜做的不重复
    const usedActivities = new Set(selectedFavorable);
    const availableActivities = allActivities.filter(activity => !usedActivities.has(activity));
    
    // 优先从负面行为中选择忌做的事情
    const availableNegative = negativeActivities.filter(activity => !usedActivities.has(activity));
    const availableOthers = availableActivities.filter(activity => !negativeActivities.includes(activity));
    
    // 先从负面行为中选择，不够的话再从其他行为中补充
    let selectedUnfavorable = [];
    if (availableNegative.length >= unfavorableCount) {
        selectedUnfavorable = getDateBasedItems(availableNegative, unfavorableCount, shichenString, 2);
    } else {
        selectedUnfavorable = [...availableNegative];
        const remainingCount = unfavorableCount - availableNegative.length;
        if (remainingCount > 0) {
            const additionalItems = getDateBasedItems(availableOthers, remainingCount, shichenString, 3);
            selectedUnfavorable = selectedUnfavorable.concat(additionalItems);
        }
    }
    
    const unfavorableList = document.getElementById('unfavorableList');
    unfavorableList.innerHTML = '';
    selectedUnfavorable.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        unfavorableList.appendChild(li);
    });
    
    // 基于时辰生成投资箴言
    const todayQuote = getDateBasedItem(investorQuotes, shichenString, 3);
    document.getElementById('dailyAdvice').innerHTML = `
        <div class="quote-content">
            <div class="quote-chinese">"${todayQuote.chinese}"</div>
            <div class="quote-english">"${todayQuote.english}"</div>
            <div class="quote-author">—— ${todayQuote.author}</div>
        </div>
    `;
}

// 更新倒计时显示
function updateCountdown() {
    const now = new Date();
    const nextShichenTime = getNextShichenTime(now);
    const timeDiff = nextShichenTime - now;
    
    if (timeDiff <= 0) {
        // 时辰已经更新，重新获取数据
        updateDate();
        updateFortune();
        return;
    }
    
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('countHours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countMinutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('countSeconds').textContent = seconds.toString().padStart(2, '0');
}

// 初始化页面
function init() {
    updateDate();
    updateFortune();
    updateCountdown();
    
    // 每秒更新倒计时
    setInterval(() => {
        updateCountdown();
    }, 1000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);