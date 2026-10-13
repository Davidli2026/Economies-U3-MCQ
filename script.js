const questions = [
  {
    date: '2020.01', number: 1,
    prompt: 'In 2014 the Irish Government allowed private sector bus operators to bid for public transport contracts for the first time. This is an example of',
    options: {
      A: { en: 'government failure', zh: '政府失灵' },
      B: { en: 'trade liberalisation', zh: '贸易自由化' },
      C: { en: 'competitive tendering', zh: '竞争性招标' },
      D: { en: 'regulation', zh: '监管' }
    },
    answer: 'C',
    explanation: 'Competitive tendering is when providers bid for the right to deliver a contract. Here, private bus operators competed to win public transport contracts.',
    explanationZh: '竞争性招标是指服务提供者通过投标竞争合同。此题中，私营巴士运营商竞标公共交通合同。'
  },
  {
    date: '2020.01', number: 2,
    prompt: 'The table shows the market share by value of retail sales of grocery stores in the UK. From the data it can be deduced that',
    table: {
      headers: ['Store', 'March 2016 (%)', 'March 2017 (%)'],
      rows: [['Tesco', '28.1', '27.6'], ['Sainsbury’s', '16.4', '16.1'], ['Asda', '16.2', '15.7'], ['Morrisons', '10.5', '10.4'], ['Co-op', '6.1', '6.1'], ['Aldi', '6.0', '6.8'], ['Others', '16.7', '17.3']]
    },
    options: {
      A: { en: 'the 3-firm concentration ratio was 50.7% in March 2016', zh: '2016 年 3 月的三企业集中度为 50.7%' },
      B: { en: 'the 5-firm concentration ratio was 87.3% in March 2016', zh: '2016 年 3 月的五企业集中度为 87.3%' },
      C: { en: 'the 3-firm concentration ratio was 49.4% in March 2017', zh: '2017 年 3 月的三企业集中度为 49.4%' },
      D: { en: 'the 5-firm concentration ratio was 76.6% in March 2017', zh: '2017 年 3 月的五企业集中度为 76.6%' }
    },
    answer: 'D',
    explanation: 'The five largest firms in March 2017 were Tesco, Sainsbury’s, Asda, Morrisons and Aldi. Their shares total 27.6 + 16.1 + 15.7 + 10.4 + 6.8 = 76.6%.',
    explanationZh: '2017 年 3 月市场份额最大的五家企业是 Tesco、Sainsbury’s、Asda、Morrisons 和 Aldi。合计为 27.6 + 16.1 + 15.7 + 10.4 + 6.8 = 76.6%。'
  },
  {
    date: '2020.01', number: 3,
    prompt: 'In 2016 workers in the USA were changing jobs less frequently than at any time since the 1970s. Which one of the following can be deduced from the above information?',
    options: {
      A: { en: 'There had been a decrease in the skills of the workforce', zh: '劳动力的技能水平有所下降' },
      B: { en: 'There had been a decrease in house prices and rents', zh: '房价和租金有所下降' },
      C: { en: 'There had been an increase in transferable skills', zh: '可迁移技能有所增加' },
      D: { en: 'There had been an increase in the number of job vacancies', zh: '职位空缺数量有所增加' }
    },
    answer: 'A',
    explanation: 'The mark scheme gives A. Less frequent job changing is consistent with lower transferable skills and reduced occupational mobility; the other options do not follow from the information given.',
    explanationZh: '评分标准的答案为 A。更少换工作与可迁移技能较弱、职业流动性较低相符；题干信息不能推出其他选项。'
  },
  {
    date: '2020.01', number: 4,
    prompt: 'The diagram shows a long-run average cost curve for a firm. Which one of the following must be true as output rises from point Q₁ to point Q₂?',
    figure: 'images/2020-jan/q04-lrac.png',
    options: {
      A: { en: 'There are diminishing returns', zh: '存在收益递减' },
      B: { en: 'There are economies of scale', zh: '存在规模经济' },
      C: { en: 'There are diseconomies of scale', zh: '存在规模不经济' },
      D: { en: 'There are falling total costs', zh: '总成本正在下降' }
    },
    answer: 'B',
    explanation: 'Between Q₁ and Q₂ the LRAC curve falls. Lower average cost as output increases indicates economies of scale.',
    explanationZh: '从 Q₁ 到 Q₂，长期平均成本（LRAC）曲线向下倾斜。产量增加时平均成本下降，说明存在规模经济。'
  },
  {
    date: '2020.01', number: 5,
    prompt: 'A monopoly is operating at its revenue maximising output. Which one of the following is true?',
    options: {
      A: { en: 'Marginal revenue is equal to marginal cost', zh: '边际收益等于边际成本' },
      B: { en: 'Average revenue is equal to average cost', zh: '平均收益等于平均成本' },
      C: { en: 'Average fixed costs are rising', zh: '平均固定成本正在上升' },
      D: { en: 'Marginal revenue is zero', zh: '边际收益为零' }
    },
    answer: 'D',
    explanation: 'Total revenue is maximised where marginal revenue equals zero: the next unit sold adds no further revenue.',
    explanationZh: '边际收益为零时总收益达到最大值；此时多销售一单位不会增加总收益。'
  },
  {
    date: '2020.01', number: 6,
    prompt: 'Which one of the following is most likely to cause the demand for labour to be elastic?',
    options: {
      A: { en: 'Labour costs form a high proportion of total costs', zh: '劳动力成本占总成本的比例较高' },
      B: { en: 'Labour cannot be easily replaced by capital', zh: '劳动力不容易被资本替代' },
      C: { en: 'Consumer demand for the final product is inelastic', zh: '消费者对最终产品的需求缺乏弹性' },
      D: { en: 'A long training period is needed once workers have been recruited', zh: '招聘员工后需要较长的培训时间' }
    },
    answer: 'A',
    explanation: 'When labour is a high share of total costs, a change in wage rates has a larger effect on firms’ costs, so firms are more likely to adjust their demand for labour.',
    explanationZh: '劳动力成本在总成本中占比较高时，工资变化对企业成本的影响更大，因此企业更可能相应调整劳动力需求。'
  },
  {
    date: '2020.10', number: 1,
    prompt: 'In 2018 the Competition and Markets Authority carried out an investigation into a proposed merger between two of the largest UK supermarket companies, Sainsbury’s and Asda. If approved, this type of merger would be an example of',
    options: {
      A: { en: 'conglomerate integration', zh: '混合多元化并购' },
      B: { en: 'horizontal integration', zh: '横向一体化' },
      C: { en: 'backward vertical integration', zh: '后向纵向一体化' },
      D: { en: 'forward vertical integration', zh: '前向纵向一体化' }
    },
    answer: 'B',
    explanation: 'Sainsbury’s and Asda are both supermarkets operating at the same stage of production in the same industry, so their merger is horizontal integration.',
    explanationZh: 'Sainsbury’s 和 Asda 都是处于同一行业、同一生产阶段的超市，因此两者合并属于横向一体化。'
  },
  {
    date: '2020.10', number: 2,
    prompt: 'The diagram shows a firm operating in a perfectly competitive market. The firm has the objective of profit maximisation. Which one of the following is true?',
    figure: 'images/2020-oct/q02-perfect-competition.png',
    figureAlt: 'Cost curves MC, ATC and AVC, with four possible market prices P1 to P4.',
    options: {
      A: { en: 'At a price of P₁ the firm will shut down in the short run', zh: '价格为 P₁ 时，企业将在短期内停产' },
      B: { en: 'At a price of P₂ the firm will cover fixed costs and variable costs', zh: '价格为 P₂ 时，企业可以弥补固定成本和可变成本' },
      C: { en: 'At a price of P₃ the firm will shut down in the long run', zh: '价格为 P₃ 时，企业将在长期内停产' },
      D: { en: 'At a price of P₄ the firm will make supernormal profits', zh: '价格为 P₄ 时，企业将获得超额利润' }
    },
    answer: 'D',
    explanation: 'At P₄, the profit-maximising price is above average total cost at the chosen output, so the firm earns supernormal profit.',
    explanationZh: '在 P₄ 价格下，利润最大化产量对应的价格高于平均总成本，因此企业获得超额利润。'
  },
  {
    date: '2020.10', number: 3,
    prompt: 'Which one of the following is most likely to cause the supply of engineers to the aerospace industry to be inelastic?',
    options: {
      A: { en: 'Jobs in the aerospace industry require a high level of skill', zh: '航空航天业的工作需要较高技能' },
      B: { en: 'Aerospace engineers are very responsive to changes in wage rates', zh: '航空航天工程师对工资变化反应非常敏感' },
      C: { en: 'The government provides support for training programmes', zh: '政府为培训项目提供支持' },
      D: { en: 'There is a fall in demand for aerospace industry products', zh: '航空航天业产品的需求下降' }
    },
    answer: 'A',
    explanation: 'A high skill requirement means it takes time to train and qualify new engineers, making the supply of aerospace engineers less responsive to wage changes.',
    explanationZh: '较高的技能要求意味着培养合格工程师需要时间，因此航空航天工程师的供给对工资变化反应较小，供给缺乏弹性。'
  },
  {
    date: '2020.10', number: 4,
    prompt: 'Which one of the following characteristics always applies to a highly contestable market?',
    options: {
      A: { en: 'There is a large number of small firms', zh: '市场中有大量小型企业' },
      B: { en: 'There are high sunk costs', zh: '存在较高的沉没成本' },
      C: { en: 'There are low barriers to entry', zh: '进入壁垒较低' },
      D: { en: 'There is imperfect information', zh: '信息不完全' }
    },
    answer: 'C',
    explanation: 'A highly contestable market has low barriers to entry and exit, allowing potential competitors to enter and challenge existing firms.',
    explanationZh: '高度可竞争市场的进入和退出壁垒较低，使潜在竞争者能够进入市场并挑战现有企业。'
  },
  {
    date: '2020.10', number: 5,
    prompt: 'In 2019 the minimum wage rate in Spain was increased by 22%. If the elasticity of demand for labour currently earning the minimum wage is −0.6, then the demand for these workers will',
    options: {
      A: { en: 'rise by 13.2%', zh: '上升 13.2%' },
      B: { en: 'fall by 13.2%', zh: '下降 13.2%' },
      C: { en: 'rise by 36.7%', zh: '上升 36.7%' },
      D: { en: 'fall by 36.7%', zh: '下降 36.7%' }
    },
    answer: 'B',
    explanation: 'Percentage change in labour demanded = elasticity × percentage change in wage = −0.6 × 22% = −13.2%.',
    explanationZh: '劳动力需求量的百分比变化 = 需求弹性 × 工资的百分比变化 = −0.6 × 22% = −13.2%，即下降 13.2%。'
  },
  {
    date: '2020.10', number: 6,
    prompt: 'The diagram shows a competitive labour market. Which one of the following would cause the increase in the wage rate from W to W₁ as shown in the diagram?',
    figure: 'images/2020-oct/q06-labour-market.png',
    figureAlt: 'Competitive labour market with labour demand shifting right from Demand to Demand 1, increasing equilibrium wage from W to W1.',
    options: {
      A: { en: 'An increase in firms’ costs of production', zh: '企业生产成本上升' },
      B: { en: 'A decrease in the productivity of labour', zh: '劳动力生产率下降' },
      C: { en: 'An increase in demand for the final product', zh: '最终产品的需求增加' },
      D: { en: 'A decrease in net migration', zh: '净移民人数减少' }
    },
    answer: 'C',
    explanation: 'Higher demand for the final product raises firms’ demand for labour. The labour-demand curve shifts right, increasing the equilibrium wage from W to W₁.',
    explanationZh: '最终产品需求增加会提高企业对劳动力的需求。劳动力需求曲线右移，使均衡工资从 W 上升到 W₁。'
  },
  {
    date: '2021.01', number: 1,
    prompt: 'Between 2009 and 2019 real house prices in Sydney, Australia rose by 40%. This price increase was more than in any other part of Australia. What might be the effect of this increase in house prices in Sydney on the mobility of labour?',
    options: {
      A: { en: 'A decrease in the geographical mobility of labour', zh: '劳动力的地理流动性下降' },
      B: { en: 'A decrease in the occupational mobility of labour', zh: '劳动力的职业流动性下降' },
      C: { en: 'An increase in the geographical mobility of labour', zh: '劳动力的地理流动性上升' },
      D: { en: 'An increase in the occupational mobility of labour', zh: '劳动力的职业流动性上升' }
    },
    answer: 'A',
    explanation: 'Higher house prices in Sydney relative to other Australian regions make it more costly for workers to move there, reducing geographical labour mobility.',
    explanationZh: '悉尼房价相对澳大利亚其他地区上涨，会提高劳动者迁往悉尼的成本，从而降低劳动力的地理流动性。'
  },
  {
    date: '2021.01', number: 2,
    prompt: 'The chart shows the market share of smartphone companies in India in quarter 4, 2019. What is the 4-firm concentration ratio?',
    figure: 'images/2021-jan/q02-smartphone-shares.png',
    figureAlt: 'Smartphone market shares in India, quarter 4 2019: Xiaomi 27%, Samsung 19%, Vivo 21%, Oppo 12%, Realme 8%, Others 13%.',
    options: {
      A: { en: '67%', zh: '67%' },
      B: { en: '79%', zh: '79%' },
      C: { en: '80%', zh: '80%' },
      D: { en: '87%', zh: '87%' }
    },
    answer: 'B',
    explanation: 'The four largest named firms are Xiaomi (27%), Vivo (21%), Samsung (19%) and Oppo (12%). Their shares add to 79%.',
    explanationZh: '四家市场份额最大的具名企业是 Xiaomi（27%）、Vivo（21%）、Samsung（19%）和 Oppo（12%），合计为 79%。'
  },
  {
    date: '2021.01', number: 3,
    prompt: 'Hairdressing salons are assumed to operate under conditions of monopolistic competition. Which one of the following will be true for a hairdressing salon in long-run equilibrium?',
    options: {
      A: { en: 'It is productively efficient', zh: '它具有生产效率' },
      B: { en: 'It makes supernormal profit', zh: '它获得超额利润' },
      C: { en: 'It is allocatively efficient', zh: '它具有配置效率' },
      D: { en: 'It makes normal profit', zh: '它获得正常利润' }
    },
    answer: 'D',
    explanation: 'Free entry in monopolistic competition removes supernormal profit in the long run, leaving firms earning normal profit.',
    explanationZh: '垄断竞争市场允许企业自由进入，长期超额利润会被竞争消除，因此企业获得正常利润。'
  },
  {
    date: '2021.01', number: 4,
    prompt: 'In 2017 the Centre for Economic Analysis estimated that the elasticity of supply of labour for car manufacturing in Poland was 1.3. Which one of the following would have caused the elasticity of the supply of labour to become more elastic?',
    options: {
      A: { en: 'A fall in net migration', zh: '净移民人数下降' },
      B: { en: 'A rise in the level of welfare benefits', zh: '福利待遇水平上升' },
      C: { en: 'A fall in income tax rates', zh: '所得税税率下降' },
      D: { en: 'A rise in trade union membership', zh: '工会会员人数上升' }
    },
    answer: 'C',
    explanation: 'Lower income tax increases the take-home reward from working, making more workers responsive to wage incentives and labour supply more elastic.',
    explanationZh: '所得税下降会提高工作的税后收入，使更多劳动者对工资激励作出反应，从而令劳动力供给更有弹性。'
  },
  {
    date: '2021.01', number: 5,
    prompt: 'In March 2020 the Angolan Government announced that it was privatising three state-owned textile factories. Which one of the following is the most likely effect of this privatisation?',
    options: {
      A: { en: 'A decrease in X-inefficiency', zh: 'X 非效率下降' },
      B: { en: 'A decrease in productive efficiency', zh: '生产效率下降' },
      C: { en: 'A decrease in consumer choice', zh: '消费者选择减少' },
      D: { en: 'A decrease in share ownership', zh: '股份持有减少' }
    },
    answer: 'A',
    explanation: 'Privatisation can strengthen the profit motive and competition, encouraging managers to reduce waste and X-inefficiency.',
    explanationZh: '私有化可能强化利润动机并增加竞争，促使管理者减少浪费和 X 非效率。'
  },
  {
    date: '2021.01', number: 6,
    prompt: 'The diagram shows a firm’s total revenue as output increases. Which one of the following best characterises such a firm?',
    figure: 'images/2021-jan/q06-total-revenue.png',
    figureAlt: 'A straight-line total revenue curve rising from the origin as output increases.',
    options: {
      A: { en: 'Marginal revenue is rising', zh: '边际收益递增' },
      B: { en: 'Marginal revenue is constant', zh: '边际收益不变' },
      C: { en: 'Marginal revenue is negative', zh: '边际收益为负' },
      D: { en: 'Marginal revenue is falling', zh: '边际收益递减' }
    },
    answer: 'B',
    explanation: 'Total revenue rises at a constant rate because its graph is a straight line. Marginal revenue, the change in total revenue per extra unit, is therefore constant.',
    explanationZh: '总收益曲线是直线，说明总收益以固定速率上升。因此，每多销售一单位带来的边际收益保持不变。'
  },
  {
    date: '2021.05', number: 1,
    prompt: 'Mara Phone is a new smartphone developed by the African conglomerate, Mara Group. The business is aiming to grow its market share by maximising its sales. Which one of the following conditions is necessary for Mara Group to maximise sales volume of this new phone without making a loss?',
    options: {
      A: { en: 'Marginal revenue equals marginal cost', zh: '边际收益等于边际成本' },
      B: { en: 'Average revenue equals average cost', zh: '平均收益等于平均成本' },
      C: { en: 'Marginal revenue equals zero', zh: '边际收益等于零' },
      D: { en: 'Average revenue equals marginal revenue', zh: '平均收益等于边际收益' }
    },
    answer: 'B',
    explanation: 'Sales-volume maximisation without making a loss occurs at the break-even output, where average revenue (price) equals average cost.',
    explanationZh: '不亏损的销售量最大化发生在盈亏平衡产量，此时平均收益（价格）等于平均成本。'
  },
  {
    date: '2021.05', number: 2,
    prompt: 'A Swedish company, Lantmännen, is an agricultural business owned by 25,000 farming partners. Which one of the following is the best description of this type of business?',
    options: {
      A: { en: 'State-owned enterprise', zh: '国有企业' },
      B: { en: 'Joint venture', zh: '合资企业' },
      C: { en: 'Conglomerate', zh: '综合企业集团' },
      D: { en: 'Co-operative', zh: '合作社' }
    },
    answer: 'D',
    explanation: 'A co-operative is owned and run for the benefit of its members. Lantmännen is owned by its farming partners.',
    explanationZh: '合作社由其成员共同拥有，并以成员利益为目标。Lantmännen 由农场合作伙伴共同拥有。'
  },
  {
    date: '2021.05', number: 3,
    prompt: 'Which one of the following diagrams illustrates a firm’s average fixed cost curve?',
    figure: 'images/2021-may/q03-afc-options.png',
    figureAlt: 'Four candidate cost curves labelled A to D. Curve B slopes downwards towards the horizontal axis.',
    options: {
      A: { en: 'Diagram A', zh: '图 A' },
      B: { en: 'Diagram B', zh: '图 B' },
      C: { en: 'Diagram C', zh: '图 C' },
      D: { en: 'Diagram D', zh: '图 D' }
    },
    answer: 'B',
    explanation: 'Average fixed cost falls as output increases because the fixed cost is spread across more units. This is the downward-sloping curve in diagram B.',
    explanationZh: '产量增加时，固定成本分摊到更多产品上，因此平均固定成本持续下降。图 B 显示了这种向下倾斜的曲线。'
  },
  {
    date: '2021.05', number: 4,
    prompt: 'Which one of the following will influence the elasticity of demand for labour?',
    options: {
      A: { en: 'The size of the population', zh: '人口规模' },
      B: { en: 'The level of welfare benefits', zh: '福利待遇水平' },
      C: { en: 'Labour costs as a percentage of total costs', zh: '劳动力成本占总成本的百分比' },
      D: { en: 'The rules determining the number of immigrants', zh: '决定移民人数的规定' }
    },
    answer: 'C',
    explanation: 'The proportion of total costs accounted for by labour costs is a determinant of the price elasticity of demand for labour.',
    explanationZh: '劳动力成本占总成本的比例，是影响劳动力需求价格弹性的因素之一。'
  },
  {
    date: '2021.05', number: 5,
    prompt: 'The table shows a firm’s total costs of producing textbooks. What would be the average variable cost at an output of 4,000 textbooks?',
    table: {
      headers: ['Output (textbooks)', 'Total costs ($)'],
      rows: [['0', '14,000'], ['1,000', '15,000'], ['2,000', '16,000'], ['3,000', '17,000'], ['4,000', '18,000'], ['5,000', '19,000']]
    },
    options: {
      A: { en: '$0.75', zh: '0.75 美元' },
      B: { en: '$1.00', zh: '1.00 美元' },
      C: { en: '$3.25', zh: '3.25 美元' },
      D: { en: '$4.50', zh: '4.50 美元' }
    },
    answer: 'B',
    explanation: 'Fixed costs are $14,000 (the cost at zero output). At 4,000 units, variable costs are $18,000 − $14,000 = $4,000, so AVC = $4,000 ÷ 4,000 = $1.00.',
    explanationZh: '固定成本为 14,000 美元（零产量时的总成本）。产量为 4,000 时，可变成本为 18,000 − 14,000 = 4,000 美元，因此平均可变成本 = 4,000 ÷ 4,000 = 1.00 美元。'
  },
  {
    date: '2021.05', number: 6,
    prompt: 'A farm producing wheat is operating in a monopolistically competitive market. Which one of the following will apply to this firm?',
    options: {
      A: { en: 'Allocative inefficiency in the long run', zh: '长期存在配置无效率' },
      B: { en: 'Productive efficiency in the short run', zh: '短期具有生产效率' },
      C: { en: 'Supernormal profit in the long run', zh: '长期获得超额利润' },
      D: { en: 'Allocative efficiency in the short run', zh: '短期具有配置效率' }
    },
    answer: 'A',
    explanation: 'In long-run monopolistic competition, firms earn normal profit but produce where price exceeds marginal cost, so they are allocatively inefficient.',
    explanationZh: '垄断竞争企业长期获得正常利润，但其产量下价格高于边际成本，因此配置无效率。'
  },
  {
    date: '2021.10', number: 1,
    prompt: 'In December 2020 Electronic Arts, an American video game producer, agreed to take over Codemasters, the producer of Formula One racing video games. Which one of the following is likely to be a benefit of this takeover for Electronic Arts?',
    options: {
      A: { en: 'An increase in contestability in the video games market', zh: '电子游戏市场的可竞争性提高' },
      B: { en: 'A decrease in total costs of production', zh: '总生产成本下降' },
      C: { en: 'An increase in competition in the video games market', zh: '电子游戏市场的竞争增加' },
      D: { en: 'A decrease in long-run average costs', zh: '长期平均成本下降' }
    },
    answer: 'D',
    explanation: 'A takeover may allow the firms to combine operations and achieve economies of scale, lowering long-run average costs.',
    explanationZh: '收购可能使两家公司整合经营并实现规模经济，从而降低长期平均成本。'
  },
  {
    date: '2021.10', number: 2,
    prompt: 'The chart shows the market share for mobile virtual network operators (MVNOs) in Japan for 2019. What was the five-firm concentration ratio for MVNOs in Japan for 2019?',
    figure: 'images/2021-oct/q02-mvno-shares.png',
    figureAlt: 'Japanese MVNO market shares in 2019: Rakuten 15.6%, IIJ 13.2%, UQ Communications 11.3%, NTT Communications 10.5%, K-Opticom 9.0%, Biglobe 4.6%, Others 35.8%.',
    options: {
      A: { en: '48.6%', zh: '48.6%' },
      B: { en: '50.6%', zh: '50.6%' },
      C: { en: '59.6%', zh: '59.6%' },
      D: { en: '86.4%', zh: '86.4%' }
    },
    answer: 'C',
    explanation: 'Add the five largest named operators: 15.6 + 13.2 + 11.3 + 10.5 + 9.0 = 59.6%. “Others” is not a single firm.',
    explanationZh: '将五家最大的具名运营商相加：15.6 + 13.2 + 11.3 + 10.5 + 9.0 = 59.6%。“其他”不是一家单独的企业。'
  },
  {
    date: '2021.10', number: 3,
    prompt: 'The diagram shows the effect of the introduction of a national minimum wage on the labour market for agricultural workers in South Africa. Which one of the following is the most likely impact of the introduction of the national minimum wage?',
    figure: 'images/2021-oct/q03-minimum-wage.png',
    figureAlt: 'Minimum wage W1 above equilibrium We, showing labour supplied N2 and labour demanded N1; the gap N1 to N2 is unemployment.',
    options: {
      A: { en: 'There will be N₁ to N₂ more agricultural workers employed', zh: '农业就业人数将从 N₁ 增加到 N₂' },
      B: { en: 'There will be an extension of demand for agricultural workers from Y to U', zh: '对农业工人的需求量将从 Y 扩大到 U' },
      C: { en: 'There will be a contraction of supply of agricultural workers from Y to V', zh: '农业工人的供给量将从 Y 减少到 V' },
      D: { en: 'There will be N₁N₂ unemployed agricultural workers', zh: '将有 N₁ 至 N₂ 数量的农业工人失业' }
    },
    answer: 'D',
    explanation: 'At the minimum wage W₁, labour supplied is N₂ while labour demanded is N₁. The excess supply of labour between N₁ and N₂ is unemployment.',
    explanationZh: '最低工资 W₁ 下，劳动力供给量为 N₂，需求量为 N₁。N₁ 到 N₂ 之间的劳动力超额供给即为失业。'
  },
  {
    date: '2021.10', number: 4,
    prompt: 'The table shows the total costs of producing sports footwear by a firm in the USA. Between which of the following outputs do diminishing returns start to set in?',
    table: {
      headers: ['Units of output', 'Total cost ($)'],
      rows: [['0', '12'], ['1', '16'], ['2', '19'], ['3', '22'], ['4', '27'], ['5', '33'], ['6', '40'], ['7', '48']]
    },
    options: {
      A: { en: '1–2 units', zh: '1–2 单位' },
      B: { en: '3–4 units', zh: '3–4 单位' },
      C: { en: '5–6 units', zh: '5–6 单位' },
      D: { en: '6–7 units', zh: '6–7 单位' }
    },
    answer: 'B',
    explanation: 'Marginal cost, measured by each extra unit’s increase in total cost, is 4, 3, 3, then 5. It starts rising between 3 and 4 units, indicating diminishing returns.',
    explanationZh: '每增加一单位产量所增加的总成本即边际成本，依次为 4、3、3、5。边际成本从第 3 至第 4 单位开始上升，表明收益递减开始。'
  },
  {
    date: '2021.10', number: 5,
    prompt: 'India’s net migration was −2.7 million in 2017. This caused a decrease in the supply of labour. Which other factor would also cause a decrease in India’s supply of labour?',
    options: {
      A: { en: 'An increase in the level of welfare benefits', zh: '福利待遇水平上升' },
      B: { en: 'A decrease in the productivity of labour', zh: '劳动力生产率下降' },
      C: { en: 'An increase in the size of the population', zh: '人口规模增加' },
      D: { en: 'A decrease in the price of capital', zh: '资本价格下降' }
    },
    answer: 'A',
    explanation: 'Higher welfare benefits may reduce the incentive for some people to enter or remain in work, decreasing labour supply.',
    explanationZh: '福利待遇提高可能削弱部分人进入或留在就业市场的动机，从而减少劳动力供给。'
  },
  {
    date: '2021.10', number: 6,
    prompt: 'Which one of the following combinations best describes a profit-maximising firm operating in a monopolistically competitive market in the long run?',
    options: {
      A: { en: 'Productively inefficient; normal profit', zh: '生产无效率；正常利润' },
      B: { en: 'Productively efficient; supernormal profit', zh: '生产有效率；超额利润' },
      C: { en: 'Allocatively inefficient; supernormal profit', zh: '配置无效率；超额利润' },
      D: { en: 'Allocatively efficient; normal profit', zh: '配置有效率；正常利润' }
    },
    answer: 'A',
    explanation: 'In long-run monopolistic competition, free entry removes supernormal profit, leaving normal profit. Firms do not produce at the minimum average-cost output, so they are productively inefficient.',
    explanationZh: '垄断竞争长期的自由进入会消除超额利润，使企业只获得正常利润。企业的产量并非平均成本最低点，因此生产无效率。'
  },
  {
    date: '2022.01', number: 1,
    prompt: 'In 2020 the Turkish airline AtlasGlobal ceased its operations. Which one of the following will cause a firm to shut down in the short-run?',
    options: {
      A: { en: 'Average revenue was below marginal revenue', zh: '平均收益低于边际收益' },
      B: { en: 'Average revenue equalled marginal cost', zh: '平均收益等于边际成本' },
      C: { en: 'Average revenue was below average variable cost', zh: '平均收益低于平均可变成本' },
      D: { en: 'Average revenue equalled average cost', zh: '平均收益等于平均成本' }
    },
    answer: 'C',
    explanation: 'In the short run, a firm shuts down when price (average revenue) is below average variable cost, because revenue cannot cover its variable costs.',
    explanationZh: '短期内，当价格（平均收益）低于平均可变成本时，企业会停产，因为收入不足以弥补可变成本。'
  },
  {
    date: '2022.01', number: 2,
    prompt: 'The diagram shows the short-run cost and revenue curves for a hairdresser operating in a monopolistically competitive market in Mumbai. Which one of the following can be deduced from the diagram?',
    figure: 'images/2022-01/q02-short-run-costs.png',
    figureAlt: 'Short-run cost and revenue curves for a hairdresser, showing output Q1, price P1 and average cost AC1.',
    options: {
      A: { en: 'At output Q₁ the firm is maximising its total revenue', zh: '产量为 Q₁ 时，企业的总收益最大化' },
      B: { en: 'At output Q₁ the firm is minimising its average cost', zh: '产量为 Q₁ 时，企业的平均成本最小化' },
      C: { en: 'At output Q₁ the firm is making normal profit', zh: '产量为 Q₁ 时，企业获得正常利润' },
      D: { en: 'At output Q₁ the firm is making supernormal profit', zh: '产量为 Q₁ 时，企业获得超额利润' }
    },
    answer: 'D',
    explanation: 'At Q₁, the price P₁ on the demand curve is above average cost AC₁. The firm therefore earns supernormal profit.',
    explanationZh: '在 Q₁ 产量下，需求曲线对应的价格 P₁ 高于平均成本 AC₁，因此企业获得超额利润。'
  },
  {
    date: '2022.01', number: 3,
    prompt: 'The table shows the number of international subscribers for Netflix and its total revenue for Q4 in the years 2017 to 2020. Which one of the following can be deduced from the table?',
    table: {
      headers: ['Period', 'International subscribers (millions)', 'Total revenue ($ million)'],
      rows: [['Q4 2017', '110.64', '3,286'], ['Q4 2018', '139.26', '4,187'], ['Q4 2019', '167.09', '5,467'], ['Q4 2020', '203.66', '6,644']]
    },
    options: {
      A: { en: 'Average revenue was $32.62 in Q4 2017', zh: '2017 年第四季度的平均收益为 32.62 美元' },
      B: { en: 'Average revenue was $29.70 in Q4 2018', zh: '2018 年第四季度的平均收益为 29.70 美元' },
      C: { en: 'Average revenue was $32.72 in Q4 2019', zh: '2019 年第四季度的平均收益为 32.72 美元' },
      D: { en: 'Average revenue was $30.07 in Q4 2020', zh: '2020 年第四季度的平均收益为 30.07 美元' }
    },
    answer: 'C',
    explanation: 'For Q4 2019, average revenue per international subscriber is $5,467 million ÷ 167.09 million = about $32.72.',
    explanationZh: '2019 年第四季度，每位国际订户的平均收益为 5,467 百万美元 ÷ 167.09 百万，即约 32.72 美元。'
  },
  {
    date: '2022.01', number: 4,
    prompt: 'Total revenue for American Airlines fell from $45.77 billion in 2019 to $17.34 billion in 2020. In response, American Airlines made 31,000 staff redundant. Which one of the following was the most likely reason for these staff redundancies?',
    options: {
      A: { en: 'The number of airline passengers rose', zh: '航空乘客人数上升' },
      B: { en: 'The derived demand for labour fell', zh: '劳动力的引致需求下降' },
      C: { en: 'Government employment subsidies to airlines increased', zh: '政府对航空公司的就业补贴增加' },
      D: { en: 'Taxation on airline employees decreased', zh: '航空公司员工的税收减少' }
    },
    answer: 'B',
    explanation: 'Falling airline revenue indicates lower demand for flights. Since labour demand is derived from demand for the service, the airline needed fewer workers.',
    explanationZh: '航空公司收入下降表明航班需求减少。劳动力需求源自对航空服务的需求，因此航空公司需要的员工减少。'
  },
  {
    date: '2022.01', number: 5,
    prompt: 'The diagram shows an increase in the minimum wage in British Columbia, Canada. In 2021 it rose from $14.60 to $15.20 per hour. Which one of the following is the most likely impact of this increase in the minimum wage on shop assistants in the retail industry in British Columbia?',
    figure: 'images/2022-01/q05-minimum-wage.png',
    figureAlt: 'Labour supply and demand with minimum wage lines at $14.60 and $15.20, and quantities Q1 to Q4.',
    options: {
      A: { en: 'Unemployment would rise to Q₁–Q₄', zh: '失业人数将增加至 Q₁–Q₄' },
      B: { en: 'Unemployment would rise to Q₂–Q₃', zh: '失业人数将增加至 Q₂–Q₃' },
      C: { en: 'The demand for labour would extend from Q₁ to Q₂', zh: '劳动力需求量将从 Q₁ 增加到 Q₂' },
      D: { en: 'The supply of labour would contract from Q₄ to Q₃', zh: '劳动力供给量将从 Q₄ 减少到 Q₃' }
    },
    answer: 'A',
    explanation: 'At the higher binding minimum wage of $15.20, labour supplied is Q₄ and labour demanded is Q₁. Unemployment is the excess supply, Q₁–Q₄.',
    explanationZh: '具有约束力的最低工资提高到 15.20 美元后，劳动力供给量为 Q₄，需求量为 Q₁。超额供给形成的失业为 Q₁–Q₄。'
  },
  {
    date: '2022.01', number: 6,
    prompt: 'A small fruit farm in Namibia is operating in a perfectly competitive market. Which of the following is true for such a firm in long-run equilibrium?',
    table: { headers: ['', 'Allocative efficiency', 'Profit'], rows: [['A', 'No', 'Supernormal'], ['B', 'No', 'Normal'], ['C', 'Yes', 'Supernormal'], ['D', 'Yes', 'Normal']] },
    options: {
      A: { en: 'No allocative efficiency; supernormal profit', zh: '没有配置效率；超额利润' },
      B: { en: 'No allocative efficiency; normal profit', zh: '没有配置效率；正常利润' },
      C: { en: 'Allocative efficiency; supernormal profit', zh: '具有配置效率；超额利润' },
      D: { en: 'Allocative efficiency; normal profit', zh: '具有配置效率；正常利润' }
    },
    answer: 'D',
    explanation: 'In long-run perfect competition, firms produce where price equals marginal cost (allocative efficiency) and entry or exit brings profit to the normal level.',
    explanationZh: '完全竞争市场长期均衡时，企业在价格等于边际成本处生产，实现配置效率；企业进入或退出会使利润回归正常水平。'
  },
  {
    date: '2022.05', number: 1,
    prompt: 'Ceteris paribus, which one of the following would reduce the geographical mobility of labour within a country?',
    options: {
      A: { en: 'An increase in relocation grants paid by the government', zh: '政府增加搬迁补助' },
      B: { en: 'An increase in the costs of relocating from one region to another', zh: '从一个地区迁往另一个地区的成本上升' },
      C: { en: 'More accurate information about job opportunities in different locations', zh: '关于不同地区就业机会的信息更加准确' },
      D: { en: 'Similar average house prices in different regions of the country', zh: '该国不同地区的平均房价相近' }
    },
    answer: 'B',
    explanation: 'Higher relocation costs make it more difficult for workers to move to jobs in another region, reducing geographical labour mobility.',
    explanationZh: '搬迁成本上升会增加劳动者前往其他地区就业的难度，从而降低劳动力的地理流动性。'
  },
  {
    date: '2022.05', number: 2,
    prompt: 'The diagram shows the long-run equilibrium for a restaurant in Bangkok, Thailand, operating in a monopolistically competitive market. Which one of the following can be deduced from the diagram?',
    figure: 'images/2022-05/q02-monopolistic-competition.png',
    figureAlt: 'Long-run equilibrium diagram for a monopolistically competitive restaurant, with demand tangent to average cost.',
    options: {
      A: { en: 'The firm is producing the allocatively efficient level of output at price P₁', zh: '企业以 P₁ 价格生产配置有效的产量' },
      B: { en: 'The firm will leave the industry if average costs fall', zh: '如果平均成本下降，企业将退出该行业' },
      C: { en: 'The firm is producing the productively efficient level of output Q₁', zh: '企业正在生产 Q₁ 这一生产有效的产量' },
      D: { en: 'The firm is making normal profit', zh: '企业获得正常利润' }
    },
    answer: 'D',
    explanation: 'In long-run monopolistic competition, the demand curve is tangent to average cost at the chosen output, so price equals average cost and the firm earns normal profit.',
    explanationZh: '垄断竞争的长期均衡中，需求曲线在企业选择的产量处与平均成本曲线相切，因此价格等于平均成本，企业获得正常利润。'
  },
  {
    date: '2022.05', number: 3,
    prompt: 'The table shows the total costs of a battery manufacturer at different levels of output. Which one of the following is the average variable cost at 300 units?',
    table: { headers: ['Output', 'Total costs (£)'], rows: [['0', '4,500'], ['100', '8,000'], ['200', '10,700'], ['300', '13,200'], ['400', '15,300']] },
    options: {
      A: { en: '£15', zh: '15 英镑' },
      B: { en: '£27', zh: '27 英镑' },
      C: { en: '£29', zh: '29 英镑' },
      D: { en: '£44', zh: '44 英镑' }
    },
    answer: 'C',
    explanation: 'Fixed costs are £4,500. At 300 units, variable costs are £13,200 − £4,500 = £8,700; AVC = £8,700 ÷ 300 = £29.',
    explanationZh: '固定成本为 4,500 英镑。产量为 300 时，可变成本为 13,200 − 4,500 = 8,700 英镑；平均可变成本 = 8,700 ÷ 300 = 29 英镑。'
  },
  {
    date: '2022.05', number: 4,
    prompt: 'The chart shows the market share, by revenue, for airlines operating domestic flights in the USA, February 2019–January 2020. Which one of the following is the five-firm concentration ratio for these airlines?',
    figure: 'images/2022-05/q04-airline-shares.png',
    figureAlt: 'Pie chart of US domestic airline revenue market shares, including American, Delta, Southwest, United and Alaska.',
    options: {
      A: { en: '66.9%', zh: '66.9%' },
      B: { en: '73.3%', zh: '73.3%' },
      C: { en: '77.9%', zh: '77.9%' },
      D: { en: '78.8%', zh: '78.8%' }
    },
    answer: 'B',
    explanation: 'The five largest shares are American 17.6%, Delta 17.5%, Southwest 16.9%, United 14.9% and Alaska 6.4%. Their total is 73.3%.',
    explanationZh: '五家最大企业的份额分别为 American 17.6%、Delta 17.5%、Southwest 16.9%、United 14.9% 和 Alaska 6.4%，合计为 73.3%。'
  },
  {
    date: '2022.05', number: 5,
    prompt: 'In January 2021 the UK Government set up a new national construction products regulator to ensure that homes are built from safe materials. Which one of the following would limit the impact of government intervention in the housing market?',
    options: {
      A: { en: 'Perfect mobility of resources', zh: '资源完全流动' },
      B: { en: 'A flexible labour market', zh: '灵活的劳动力市场' },
      C: { en: 'Perfect knowledge of the housing market', zh: '对住房市场拥有完全信息' },
      D: { en: 'Regulatory capture', zh: '监管俘获' }
    },
    answer: 'D',
    explanation: 'Regulatory capture occurs when a regulator acts in the interests of the industry it oversees rather than the public, weakening the intended impact of intervention.',
    explanationZh: '监管俘获是指监管机构偏向其所监管的行业利益，而不是公众利益，从而削弱政府干预原本希望达到的效果。'
  },
  {
    date: '2022.05', number: 6,
    prompt: 'Prior to 2016 there was a competitive labour market for nurses in Argentina. Following the introduction of a universal healthcare system there is now a monopsony employer of nurses in the country. Which one of the following combinations is the most likely impact?',
    table: { headers: ['', 'Wages', 'Number of employees'], rows: [['A', 'Lower', 'Lower'], ['B', 'Lower', 'Higher'], ['C', 'Higher', 'Lower'], ['D', 'Higher', 'Higher']] },
    options: {
      A: { en: 'Lower wages and fewer employees', zh: '工资较低，雇员较少' },
      B: { en: 'Lower wages and more employees', zh: '工资较低，雇员较多' },
      C: { en: 'Higher wages and fewer employees', zh: '工资较高，雇员较少' },
      D: { en: 'Higher wages and more employees', zh: '工资较高，雇员较多' }
    },
    answer: 'A',
    explanation: 'A monopsony employer faces an upward-sloping labour supply curve and chooses employment where marginal cost equals marginal revenue product. Compared with competition, it typically pays lower wages and employs fewer workers.',
    explanationZh: '买方垄断雇主面对向上倾斜的劳动力供给曲线，并在边际要素成本等于边际收益产品处决定雇佣量。与竞争市场相比，它通常支付较低工资并雇佣较少员工。'
  },
  {
    date: '2022.10', number: 1,
    prompt: 'Patent protection makes it difficult for new firms to enter the pharmaceutical industry. Which one of the following is also a barrier to entry for new firms?',
    options: {
      A: { en: 'Predatory pricing', zh: '掠夺性定价' },
      B: { en: 'Constant returns to scale', zh: '规模报酬不变' },
      C: { en: 'Low advertising costs', zh: '较低的广告成本' },
      D: { en: 'High supernormal profits', zh: '较高的超额利润' }
    },
    answer: 'A',
    explanation: 'Predatory pricing means setting prices very low, potentially below cost, to drive out or deter competitors. It can make entry difficult.',
    explanationZh: '掠夺性定价是将价格压得很低（有时低于成本），以迫使竞争者退出或阻止其进入，因此会形成进入壁垒。'
  },
  {
    date: '2022.10', number: 2,
    prompt: 'The diagram shows the short-run profit-maximising equilibrium of a street food seller in Beijing. Which one of the following can be deduced from the information provided?',
    figure: 'images/2022-10/q02-street-food.png',
    figureAlt: 'Street food seller at output 10 and price 80, with marginal cost, average total cost and demand curves.',
    options: {
      A: { en: 'The productively efficient level of output is being produced', zh: '企业正在生产具有生产效率的产量' },
      B: { en: 'The allocatively inefficient level of output is being produced', zh: '企业正在生产配置无效率的产量' },
      C: { en: 'There would be an incentive for new firms to enter the market', zh: '新企业有进入该市场的动机' },
      D: { en: 'Firms will always make supernormal profits in this market', zh: '该市场中的企业总是获得超额利润' }
    },
    answer: 'C',
    explanation: 'At the profit-maximising output of 10, the price of 80 is above average total cost, so the firm earns supernormal profit. This creates an incentive for new firms to enter.',
    explanationZh: '在利润最大化产量 10 处，价格 80 高于平均总成本，因此企业获得超额利润，这会吸引新企业进入。'
  },
  {
    date: '2022.10', number: 3,
    prompt: 'From September 2019 to September 2021 the US labour force participation rate fell. Which one of the following is most likely to have caused this fall in the supply of labour?',
    options: {
      A: { en: 'An increase in benefit payments', zh: '福利补助增加' },
      B: { en: 'An increase in net migration', zh: '净移民人数增加' },
      C: { en: 'An increase in the wage rate', zh: '工资率上升' },
      D: { en: 'An increase in productivity', zh: '生产率提高' }
    },
    answer: 'A',
    explanation: 'Higher benefit payments can reduce the financial incentive to work, causing some people to leave the labour force and reducing labour supply.',
    explanationZh: '福利补助提高可能降低工作的经济激励，使部分人退出劳动力市场，从而减少劳动力供给。'
  },
  {
    date: '2022.10', number: 4,
    prompt: 'A car manufacturer employs 40 engineers at a wage rate of $570 per week. To attract an additional worker, the car manufacturer must raise the wage rate for all engineers to $590 per week. What is the marginal cost of employing this additional worker?',
    options: {
      A: { en: '$20', zh: '20 美元' },
      B: { en: '$820', zh: '820 美元' },
      C: { en: '$1,390', zh: '1,390 美元' },
      D: { en: '$24,190', zh: '24,190 美元' }
    },
    answer: 'C',
    explanation: 'The new total wage bill is 41 × $590 = $24,190. The old bill was 40 × $570 = $22,800. Marginal cost is the $1,390 increase.',
    explanationZh: '新的工资总额为 41 × 590 = 24,190 美元；原工资总额为 40 × 570 = 22,800 美元。边际成本是两者之差 1,390 美元。'
  },
  {
    date: '2022.10', number: 5,
    prompt: 'Between February 2020 and February 2021 approximately 65,000 businesses shut down in New Zealand. The majority of these closures were caused by a fall in revenue as a result of the global health crisis. Which one of the following would cause a firm to shut down in the short-run?',
    options: {
      A: { en: 'Average revenue is above its average total cost of production', zh: '平均收益高于平均总成本' },
      B: { en: 'Average revenue is below its average total cost of production', zh: '平均收益低于平均总成本' },
      C: { en: 'Average revenue is above its average variable cost of production', zh: '平均收益高于平均可变成本' },
      D: { en: 'Average revenue is below its average variable cost of production', zh: '平均收益低于平均可变成本' }
    },
    answer: 'D',
    explanation: 'A firm shuts down in the short run if price (average revenue) falls below average variable cost, because operating would not cover variable costs.',
    explanationZh: '短期内，如果价格（平均收益）低于平均可变成本，企业就会停产，因为继续经营连可变成本都无法弥补。'
  },
  {
    date: '2022.10', number: 6,
    prompt: 'A monopolist decides to set its price at P₃, as shown in the diagram. Which one of the following business objectives is shown by this pricing decision?',
    figure: 'images/2022-10/q06-monopoly-objective.png',
    figureAlt: 'Monopoly diagram showing demand, marginal revenue, marginal cost, average cost, prices P1 to P3 and outputs Q1 to Q3.',
    options: {
      A: { en: 'Revenue maximisation', zh: '收益最大化' },
      B: { en: 'Sales volume maximisation', zh: '销售量最大化' },
      C: { en: 'Profit maximisation', zh: '利润最大化' },
      D: { en: 'Satisficing', zh: '满意化' }
    },
    answer: 'B',
    explanation: 'The price P₃ corresponds to output Q₃, where price equals average cost. The firm earns normal profit and sells the largest output it can produce without making a loss, which is sales volume maximisation.',
    explanationZh: '价格 P₃ 对应产量 Q₃，此处价格等于平均成本。企业获得正常利润，并在不亏损的前提下销售尽可能多的产品，这体现了销售量最大化。'
  },
  {
    date: '2023.01', number: 1,
    prompt: 'The diagram shows a short-run marginal cost curve for a small café in Thailand. Which one of the following is the reason why the MC curve slopes upwards from point X to point Y?',
    figure: 'images/2023-01/q01-short-run-marginal-cost.png',
    figureAlt: 'An upward-sloping short-run marginal cost curve from output X to output Y.',
    options: {
      A: { en: 'Decreasing returns to scale', zh: '规模报酬递减' },
      B: { en: 'Increasing fixed costs', zh: '固定成本增加' },
      C: { en: 'Diminishing returns', zh: '收益递减' },
      D: { en: 'Diseconomies of scale', zh: '规模不经济' }
    },
    answer: 'C',
    explanation: 'In the short run, at least one factor of production is fixed. Diminishing marginal returns mean additional variable inputs add progressively less output, so marginal cost rises.',
    explanationZh: '短期内至少有一种生产要素是固定的。边际收益递减意味着继续增加可变要素带来的新增产量逐渐减少，因此边际成本上升。'
  },
  {
    date: '2023.01', number: 2,
    prompt: 'The output of a textile manufacturer based in Botswana is 30,000 units of clothing per month. The firm’s total revenue is $78,000, its total costs are $57,800 and its total fixed costs are $30,800 per month. Which one of the following is the firm’s average variable cost at this level of output?',
    options: {
      A: { en: '$0.90', zh: '0.90 美元' },
      B: { en: '$1.03', zh: '1.03 美元' },
      C: { en: '$1.93', zh: '1.93 美元' },
      D: { en: '$2.60', zh: '2.60 美元' }
    },
    answer: 'A',
    explanation: 'Total variable cost = $57,800 − $30,800 = $27,000. Average variable cost = $27,000 ÷ 30,000 units = $0.90.',
    explanationZh: '总可变成本 = 57,800 − 30,800 = 27,000 美元。平均可变成本 = 27,000 ÷ 30,000 = 每件 0.90 美元。'
  },
  {
    date: '2023.01', number: 3,
    prompt: 'A survey conducted in 2021 found that 76% of US companies with factories in China were in the process of moving operations to other countries in southeast Asia. This would cause thousands of manufacturing workers in China to lose their jobs. Which one of the following government measures is most likely to increase the occupational mobility of labour?',
    options: {
      A: { en: 'An increase in unemployment benefits', zh: '提高失业救济' },
      B: { en: 'An increase in relocation grants for businesses', zh: '增加企业搬迁补助' },
      C: { en: 'An increase in training schemes', zh: '增加培训项目' },
      D: { en: 'An increase in the national minimum wage', zh: '提高国家最低工资' }
    },
    answer: 'C',
    explanation: 'Training schemes help workers gain the skills needed for different occupations, increasing occupational mobility.',
    explanationZh: '培训项目帮助劳动者获得从事其他职业所需的技能，从而提高劳动力的职业流动性。'
  },
  {
    date: '2023.01', number: 4,
    prompt: 'The diagram shows the short-run cost and revenue curves for a profit-maximising street food business in Sri Lanka. Which one of the following can be deduced from this diagram?',
    figure: 'images/2023-01/q04-street-food-costs.png',
    figureAlt: 'Street food firm cost and revenue curves with price Pe equal to average cost at output Qe.',
    options: {
      A: { en: 'The firm is dynamically efficient', zh: '企业具有动态效率' },
      B: { en: 'The firm is making normal profit', zh: '企业获得正常利润' },
      C: { en: 'The firm operates in a perfectly competitive market', zh: '企业处于完全竞争市场' },
      D: { en: 'The firm will shut down in the short-run', zh: '企业将在短期内停产' }
    },
    answer: 'B',
    explanation: 'At output Qₑ, the price Pₑ on the average revenue curve equals average cost. The firm therefore covers all opportunity costs and earns normal profit.',
    explanationZh: '在产量 Qₑ 处，平均收益曲线上的价格 Pₑ 等于平均成本。因此企业弥补了全部机会成本，获得正常利润。'
  },
  {
    date: '2023.01', number: 5,
    prompt: 'A monopolist changes its objective from profit maximisation to sales volume maximisation. Which one of the following is the most likely impact of this decision?',
    options: {
      A: { en: 'A fall in the number of workers employed by the firm', zh: '企业雇用的员工人数减少' },
      B: { en: 'An increase in the price of the good', zh: '商品价格上升' },
      C: { en: 'A fall in the firm’s total fixed costs', zh: '企业总固定成本下降' },
      D: { en: 'An increase in the firm’s output', zh: '企业产量增加' }
    },
    answer: 'D',
    explanation: 'A monopolist maximising sales volume chooses a higher output than a profit-maximising monopolist, usually charging a lower price.',
    explanationZh: '以销售量最大化为目标的垄断者会选择高于利润最大化时的产量，通常也会收取较低价格。'
  },
  {
    date: '2023.01', number: 6,
    prompt: 'The elasticity of demand for agricultural workers in South Africa is estimated to be −0.3. Which one of the following is the most likely reason for this value of the elasticity of demand for labour?',
    options: {
      A: { en: 'Labour cannot be easily replaced by capital', zh: '劳动力不容易被资本替代' },
      B: { en: 'Wage rates are relatively high in the agricultural industry', zh: '农业行业的工资率相对较高' },
      C: { en: 'Consumer demand for the final product is price elastic', zh: '消费者对最终产品的需求富有价格弹性' },
      D: { en: 'Productivity is relatively low in the agricultural industry', zh: '农业行业的生产率相对较低' }
    },
    answer: 'A',
    explanation: 'If labour cannot easily be substituted by machinery or other capital, firms have fewer alternatives when wages change, making labour demand inelastic.',
    explanationZh: '如果劳动力不容易被机器或其他资本替代，工资变化时企业可选择的替代方案较少，因此劳动力需求缺乏弹性。'
  },
  {
    date: '2023.05', number: 1,
    prompt: 'In 2022 the entertainment production companies Sony Picture Networks India and Zee Entertainment Enterprises Ltd signed an agreement to merge. Which one of the following best describes this type of merger?',
    options: {
      A: { en: 'Forward vertical integration', zh: '前向纵向一体化' },
      B: { en: 'Backward vertical integration', zh: '后向纵向一体化' },
      C: { en: 'Horizontal integration', zh: '横向一体化' },
      D: { en: 'Conglomerate integration', zh: '混合多元化并购' }
    },
    answer: 'C',
    explanation: 'Both companies operate in entertainment production, so they are at the same stage of production in the same industry. Their merger is horizontal integration.',
    explanationZh: '两家公司都从事娱乐节目制作，处于同一行业、同一生产阶段，因此这属于横向一体化。'
  },
  {
    date: '2023.05', number: 2,
    prompt: 'The diagram shows a long-run average cost curve for a firm. Which one of the following must be true as output rises from Q₁ to Q₂?',
    figure: 'images/2023-05/q02-long-run-average-cost.png',
    figureAlt: 'Long-run average cost curve rising as output moves from Q1, at the minimum, to Q2.',
    options: {
      A: { en: 'Marginal costs are falling', zh: '边际成本正在下降' },
      B: { en: 'There are economies of scale', zh: '存在规模经济' },
      C: { en: 'Marginal costs are constant', zh: '边际成本保持不变' },
      D: { en: 'There are diseconomies of scale', zh: '存在规模不经济' }
    },
    answer: 'D',
    explanation: 'Between Q₁ and Q₂ the long-run average cost curve rises as output increases. This is diseconomies of scale.',
    explanationZh: '从 Q₁ 到 Q₂，产量增加时长期平均成本上升，这就是规模不经济。'
  },
  {
    date: '2023.05', number: 3,
    prompt: 'A firm employs 50 workers in its factory. Each worker is paid a weekly wage of $1,500. To attract an additional worker the firm needs to raise the wage from $1,500 a week to $1,600 a week for each of its employees. Which one of the following is the marginal cost of employing the additional worker?',
    options: {
      A: { en: '$100', zh: '100 美元' },
      B: { en: '$6,600', zh: '6,600 美元' },
      C: { en: '$75,000', zh: '75,000 美元' },
      D: { en: '$81,600', zh: '81,600 美元' }
    },
    answer: 'B',
    explanation: 'The new wage bill is 51 × $1,600 = $81,600. The original wage bill was 50 × $1,500 = $75,000. Marginal cost is the difference: $6,600.',
    explanationZh: '新的工资总额为 51 × 1,600 = 81,600 美元；原工资总额为 50 × 1,500 = 75,000 美元。边际成本为两者之差 6,600 美元。'
  },
  {
    date: '2023.05', number: 4,
    prompt: 'The diagram shows the equilibrium output of a profit-maximising firm operating in a perfectly competitive market. Which one of the following can be deduced from this diagram?',
    figure: 'images/2023-05/q04-perfect-competition.png',
    figureAlt: 'Perfectly competitive firm where market price equals marginal and average revenue, below average cost at output Q.',
    table: { headers: ['', 'Profits of the firm in the short-run', 'Number of firms in the industry in the long-run'], rows: [['A', 'Loss', 'Increase'], ['B', 'Normal', 'Decrease'], ['C', 'Normal', 'Increase'], ['D', 'Loss', 'Decrease']] },
    options: {
      A: { en: 'Loss in the short run; number of firms increases in the long run', zh: '短期亏损；长期企业数量增加' },
      B: { en: 'Normal profit in the short run; number of firms decreases in the long run', zh: '短期获得正常利润；长期企业数量减少' },
      C: { en: 'Normal profit in the short run; number of firms increases in the long run', zh: '短期获得正常利润；长期企业数量增加' },
      D: { en: 'Loss in the short run; number of firms decreases in the long run', zh: '短期亏损；长期企业数量减少' }
    },
    answer: 'D',
    explanation: 'At output Q, price (AR) is below average cost, so the firm makes a loss. In the long run, firms leave the industry, reducing the number of firms.',
    explanationZh: '在产量 Q 处，价格（平均收益）低于平均成本，因此企业亏损。长期内企业会退出该行业，企业数量减少。'
  },
  {
    date: '2023.05', number: 5,
    prompt: 'A German electricity company aims to maximise its total revenue. At which one of the following would total revenue be maximised?',
    options: {
      A: { en: 'The level of output at which marginal cost is equal to marginal revenue', zh: '边际成本等于边际收益时的产量' },
      B: { en: 'The level of output at which average variable cost is equal to marginal cost', zh: '平均可变成本等于边际成本时的产量' },
      C: { en: 'The level of output at which average revenue is equal to zero', zh: '平均收益等于零时的产量' },
      D: { en: 'The level of output at which marginal revenue is equal to zero', zh: '边际收益等于零时的产量' }
    },
    answer: 'D',
    explanation: 'Total revenue is maximised at the output where marginal revenue is zero; beyond this point, selling additional units reduces total revenue.',
    explanationZh: '边际收益为零时总收益达到最大值；超过这一产量后，继续销售会使总收益下降。'
  },
  {
    date: '2023.05', number: 6,
    prompt: 'A diamond mining company is considering whether to set up operations in Botswana. Which one of the following would be a barrier to entry into this industry?',
    options: {
      A: { en: 'High level of government subsidies', zh: '政府补贴水平较高' },
      B: { en: 'High sunk costs', zh: '沉没成本较高' },
      C: { en: 'Low level of government regulation', zh: '政府监管程度较低' },
      D: { en: 'Low concentration ratio', zh: '集中度较低' }
    },
    answer: 'B',
    explanation: 'High sunk costs cannot be recovered if a firm exits, increasing the risk of entering the diamond mining industry and creating a barrier to entry.',
    explanationZh: '企业退出时无法收回高额沉没成本，这会增加进入钻石开采行业的风险，形成进入壁垒。'
  },
  {
    date: '2023.10', number: 1,
    prompt: 'It is estimated that Japan’s population of working age will fall from 65.3 million in 2017 to 60.8 million in 2025. Ceteris paribus, which one of the following might result from this fall in Japan’s population of working age?',
    options: {
      A: { en: 'A decrease in job vacancies', zh: '职位空缺减少' },
      B: { en: 'An increase in the rate of unemployment', zh: '失业率上升' },
      C: { en: 'A decrease in immigration into Japan', zh: '移民日本的人数减少' },
      D: { en: 'An increase in wage rates', zh: '工资率上升' }
    },
    answer: 'D',
    explanation: 'A smaller working-age population reduces labour supply. Ceteris paribus, this makes labour scarcer and is likely to put upward pressure on wages.',
    explanationZh: '劳动年龄人口减少会降低劳动力供给。在其他条件不变时，劳动力相对稀缺，工资可能因此上升。'
  },
  {
    date: '2023.10', number: 2,
    prompt: 'In 2022 the Government of Canada updated its competition policy in order to increase market contestability. Ceteris paribus, which one of the following would increase market contestability?',
    options: {
      A: { en: 'An increase in legal costs to start a business', zh: '开办企业的法律成本上升' },
      B: { en: 'An increase in legislation to control mergers', zh: '加强控制企业合并的立法' },
      C: { en: 'An increase in patent protection', zh: '加强专利保护' },
      D: { en: 'An increase in regulatory capture', zh: '监管俘获加剧' }
    },
    answer: 'B',
    explanation: 'Stronger merger controls can prevent dominant firms from reducing competition through takeovers, helping keep markets more contestable.',
    explanationZh: '加强企业合并管制可以防止大型企业通过收购削弱竞争，从而有助于维持市场的可竞争性。'
  },
  {
    date: '2023.10', number: 3,
    prompt: 'The diagram illustrates the profit-maximising output for a street food seller in Taiwan operating in a monopolistically competitive market. Which one of the following can be deduced from this information?',
    figure: 'images/2023-10/q03-monopolistic-competition.png',
    figureAlt: 'Monopolistically competitive street food seller at output Qs with price Ps above average cost ACs.',
    options: {
      A: { en: 'The street food seller is operating at the short-run equilibrium output', zh: '街头食品经营者处于短期均衡产量' },
      B: { en: 'The street food seller is operating at the long-run equilibrium output', zh: '街头食品经营者处于长期均衡产量' },
      C: { en: 'The street food seller is operating at the productively efficient level of output', zh: '街头食品经营者处于生产有效率的产量' },
      D: { en: 'The street food seller is operating at the allocatively efficient level of output', zh: '街头食品经营者处于配置有效率的产量' }
    },
    answer: 'A',
    explanation: 'At Qₛ, price Pₛ is above average cost ACₛ, so the firm earns supernormal profit. In monopolistic competition this is a short-run equilibrium; entry would erode the profit over time.',
    explanationZh: '在 Qₛ 处，价格 Pₛ 高于平均成本 ACₛ，企业获得超额利润。在垄断竞争中这是短期均衡；新企业进入会逐渐侵蚀超额利润。'
  },
  {
    date: '2023.10', number: 4,
    prompt: 'Big Bazaar is a large grocery retailer in India. It faces a downward-sloping average revenue curve and is making supernormal profits. In 2022 rental costs increased by an average of 6.5%. Ceteris paribus, which one of the following combinations indicates the impact of this increase in rental costs on Big Bazaar?',
    table: { headers: ['', 'Profit', 'Price'], rows: [['A', 'No change', 'No change'], ['B', 'Rise', 'Decrease'], ['C', 'Fall', 'No change'], ['D', 'No change', 'Decrease']] },
    options: {
      A: { en: 'Profit unchanged; price unchanged', zh: '利润不变；价格不变' },
      B: { en: 'Profit rises; price decreases', zh: '利润上升；价格下降' },
      C: { en: 'Profit falls; price unchanged', zh: '利润下降；价格不变' },
      D: { en: 'Profit unchanged; price decreases', zh: '利润不变；价格下降' }
    },
    answer: 'C',
    explanation: 'Higher rent raises fixed costs, reducing profit. It does not change marginal cost, so the profit-maximising output and price remain unchanged, ceteris paribus.',
    explanationZh: '租金上升会提高固定成本，从而降低利润。它不会改变边际成本，因此在其他条件不变时，利润最大化产量和价格保持不变。'
  },
  {
    date: '2023.10', number: 5,
    prompt: 'The table shows the total costs of a shirt manufacturer at different levels of output. Which one of the following is the average fixed cost if the shirt manufacturer is producing 10,000 shirts?',
    table: { headers: ['Output', 'Total costs ($)'], rows: [['0', '100,000'], ['5,000', '120,000'], ['10,000', '150,000'], ['15,000', '170,000'], ['20,000', '180,000']] },
    options: {
      A: { en: '$5', zh: '5 美元' },
      B: { en: '$6.67', zh: '6.67 美元' },
      C: { en: '$10', zh: '10 美元' },
      D: { en: '$20', zh: '20 美元' }
    },
    answer: 'C',
    explanation: 'Fixed costs are $100,000, the total cost at zero output. Average fixed cost at 10,000 shirts is $100,000 ÷ 10,000 = $10 per shirt.',
    explanationZh: '固定成本为 100,000 美元，即零产量时的总成本。生产 10,000 件时，平均固定成本 = 100,000 ÷ 10,000 = 每件 10 美元。'
  },
  {
    date: '2023.10', number: 6,
    prompt: 'In 2022 the average price of a standard cinema ticket in Johannesburg, South Africa, was R60 in the daytime and R105 in the evening. Which one of the following is the most likely reason for this price difference?',
    options: {
      A: { en: 'The demand for cinema tickets is more price inelastic in the daytime than in the evening', zh: '白天的电影票需求比晚上的需求更缺乏价格弹性' },
      B: { en: 'The demand for cinema tickets is more price elastic in the daytime than in the evening', zh: '白天的电影票需求比晚上的需求更富有价格弹性' },
      C: { en: 'The supply of cinema tickets is perfectly price elastic', zh: '电影票供给完全富有价格弹性' },
      D: { en: 'The supply of cinema tickets is more price elastic in the evening than in the daytime', zh: '晚上的电影票供给比白天更富有价格弹性' }
    },
    answer: 'B',
    explanation: 'A firm using price discrimination charges a lower price to the group with more elastic demand. Daytime customers are more price-sensitive, so their tickets are cheaper.',
    explanationZh: '实行价格歧视的企业会向需求弹性较高的群体收取较低价格。白天观众对价格更敏感，因此票价较低。'
  },
  {
    date: '2024.01', number: 1,
    prompt: 'In 2022 Canadian National Railway paid $27.2 billion to acquire Kansas City Southern, a Mexico–USA cross-border railway. Which one of the following best describes the acquisition?',
    options: {
      A: { en: 'Conglomerate integration', zh: '混合多元化并购' },
      B: { en: 'Forward vertical integration', zh: '前向纵向一体化' },
      C: { en: 'Horizontal integration', zh: '横向一体化' },
      D: { en: 'Backward vertical integration', zh: '后向纵向一体化' }
    },
    answer: 'C',
    explanation: 'Both companies operate railway services, so the acquisition combines firms at the same stage of production in the same industry: horizontal integration.',
    explanationZh: '两家公司都经营铁路运输服务，处于同一行业、同一生产阶段，因此这属于横向一体化。'
  },
  {
    date: '2024.01', number: 2,
    prompt: 'The table shows the quantity of shirts that would be sold at different selling prices by a textile manufacturer based in Botswana. Which one of the following would be the manufacturer’s marginal revenue if the price was reduced from $16 to $14?',
    table: { headers: ['Selling price ($)', 'Quantity demanded'], rows: [['18', '4,000'], ['16', '5,000'], ['14', '6,000'], ['12', '7,000']] },
    options: {
      A: { en: '$0', zh: '0 美元' },
      B: { en: '$4', zh: '4 美元' },
      C: { en: '$12', zh: '12 美元' },
      D: { en: '$14', zh: '14 美元' }
    },
    answer: 'B',
    explanation: 'At $16, total revenue is $80,000. At $14, total revenue is $84,000. Revenue rises by $4,000 as sales increase by 1,000 shirts, so marginal revenue is $4 per shirt.',
    explanationZh: '价格为 16 美元时，总收益为 80,000 美元；价格降至 14 美元时，总收益为 84,000 美元。销量增加 1,000 件，总收益增加 4,000 美元，因此边际收益为每件 4 美元。'
  },
  {
    date: '2024.01', number: 3,
    prompt: 'The diagram shows the short-run profit-maximising equilibrium for an agricultural business operating in a perfectly competitive market. Ceteris paribus, which one of the following is the most likely outcome in the long-run?',
    figure: 'images/2024-01/q03-perfect-competition.png',
    figureAlt: 'Perfectly competitive firm producing at Qe where price Pe is above average cost C, earning supernormal profit.',
    options: {
      A: { en: 'The agricultural business will make normal profit', zh: '农业企业将获得正常利润' },
      B: { en: 'The agricultural business will shut down', zh: '农业企业将停产' },
      C: { en: 'The agricultural business will increase its output', zh: '农业企业将增加产量' },
      D: { en: 'The agricultural business will increase its price', zh: '农业企业将提高价格' }
    },
    answer: 'A',
    explanation: 'The diagram shows price above average cost, so the firm earns supernormal profit in the short run. Entry by firms increases market supply and removes supernormal profit, leaving normal profit in the long run.',
    explanationZh: '图中价格高于平均成本，因此企业短期内获得超额利润。新企业进入会增加市场供给并消除超额利润，使长期利润回到正常水平。'
  },
  {
    date: '2024.01', number: 4,
    prompt: 'In 2022 Google’s global market share of the internet search engine market was 84%. Which one of the following is the most likely outcome of Google operating at its profit-maximising output?',
    options: {
      A: { en: 'Average revenue is equal to marginal cost', zh: '平均收益等于边际成本' },
      B: { en: 'Marginal revenue is greater than average revenue', zh: '边际收益大于平均收益' },
      C: { en: 'Marginal revenue is equal to total cost', zh: '边际收益等于总成本' },
      D: { en: 'Average revenue is greater than average cost', zh: '平均收益大于平均成本' }
    },
    answer: 'D',
    explanation: 'A firm with a very high market share is likely to have market power. At its profit-maximising output it is likely to earn supernormal profit, so average revenue (price) exceeds average cost.',
    explanationZh: '市场份额很高的企业通常拥有市场势力。在利润最大化产量下，它很可能获得超额利润，因此平均收益（价格）高于平均成本。'
  },
  {
    date: '2024.01', number: 5,
    prompt: 'In Australia the elasticity of demand for construction workers is estimated to be −0.18. Which one of the following factors is the most likely explanation of this elasticity of demand for construction workers?',
    options: {
      A: { en: 'The construction workers cannot be easily replaced by capital', zh: '建筑工人不容易被资本替代' },
      B: { en: 'The costs of employing construction workers are low', zh: '雇用建筑工人的成本较低' },
      C: { en: 'The productivity of construction workers is low', zh: '建筑工人的生产率较低' },
      D: { en: 'The majority of construction workers are members of trade unions', zh: '大多数建筑工人都是工会成员' }
    },
    answer: 'A',
    explanation: 'Demand for labour is more inelastic when there are few substitutes. If construction workers cannot be readily replaced by machinery or other capital, firms respond less to wage changes.',
    explanationZh: '可替代要素较少时，劳动力需求更缺乏弹性。如果建筑工人不容易被机器或其他资本替代，企业对工资变化的反应就较小。'
  },
  {
    date: '2024.01', number: 6,
    prompt: 'A cereal manufacturer lowers its price to deter new firms from entering the market while still covering its costs. Which one of the following best describes this pricing strategy?',
    options: {
      A: { en: 'Predatory pricing', zh: '掠夺性定价' },
      B: { en: 'Limit pricing', zh: '限制性定价' },
      C: { en: 'Price leadership', zh: '价格领导' },
      D: { en: 'Short-run profit maximisation', zh: '短期利润最大化' }
    },
    answer: 'B',
    explanation: 'Limit pricing involves setting a price low enough to discourage potential entrants while still covering costs. Predatory pricing typically involves pricing below cost to drive competitors out.',
    explanationZh: '限制性定价是将价格设得足够低，以阻止潜在企业进入，同时仍能弥补成本。掠夺性定价通常是把价格压到成本以下以迫使竞争者退出。'
  },
  {
    date: '2024.05', number: 1,
    prompt: 'In 2021, Koji Sato, the CEO of Toyota, stated that technical economies of scale were one of the main reasons for the company’s success. Which one of the following results from technical economies of scale?',
    options: {
      A: { en: 'An increase in purchasing economies', zh: '采购规模经济增加' },
      B: { en: 'A decrease in advertising costs', zh: '广告成本下降' },
      C: { en: 'An increase in short-run average costs', zh: '短期平均成本上升' },
      D: { en: 'A decrease in long-run average costs', zh: '长期平均成本下降' }
    },
    answer: 'D',
    explanation: 'Technical economies of scale allow a firm to use larger or more specialised machinery and production methods, reducing long-run average costs as output expands.',
    explanationZh: '技术规模经济使企业能够使用更大型或更专业化的机器和生产方式，随着产量扩大而降低长期平均成本。'
  },
  {
    date: '2024.05', number: 2,
    prompt: 'The table shows the costs for a small hairdressing business as it increases the number of haircuts. Which one of the following is the marginal cost of increasing the number of haircuts from 2 to 3?',
    table: { headers: ['Number of haircuts', 'Total fixed costs ($)', 'Total variable costs ($)'], rows: [['1', '50', '12'], ['2', '50', '18'], ['3', '50', '26'], ['4', '50', '36']] },
    options: {
      A: { en: '$4.00', zh: '4.00 美元' },
      B: { en: '$8.00', zh: '8.00 美元' },
      C: { en: '$8.66', zh: '8.66 美元' },
      D: { en: '$12.50', zh: '12.50 美元' }
    },
    answer: 'B',
    explanation: 'Marginal cost is the increase in total cost when output rises by one haircut. Variable cost rises from $18 to $26, so marginal cost is $8.',
    explanationZh: '边际成本是产量增加一单位时总成本的增量。可变成本从 18 美元升至 26 美元，因此边际成本为 8 美元。'
  },
  {
    date: '2024.05', number: 3,
    prompt: 'In 2022 the pharmaceutical company GlaxoSmithKline (GSK) demerged from the consumer health business Haleon. GSK’s shareholders believed that the businesses would be able to work more successfully as separate companies. Which one of the following is the most likely reason why GSK decided to demerge from Haleon?',
    options: {
      A: { en: 'To benefit from external economies of scale', zh: '从外部规模经济中获益' },
      B: { en: 'To diversify the business', zh: '实现业务多元化' },
      C: { en: 'To achieve diseconomies of scale', zh: '实现规模不经济' },
      D: { en: 'To focus on its core business', zh: '专注于核心业务' }
    },
    answer: 'D',
    explanation: 'A demerger can let each business specialise and focus on its own core activities, potentially improving management and performance.',
    explanationZh: '分拆可以让各项业务专业化并专注于自身核心活动，从而有可能改善管理和经营表现。'
  },
  {
    date: '2024.05', number: 4,
    prompt: 'The diagram shows the short-run costs and revenues for a farmer producing wheat in India. Which one of the following is most likely to occur in the long-run?',
    figure: 'images/2024-05/q04-wheat-market.png',
    figureAlt: 'Perfectly competitive wheat farmer with price above average cost at equilibrium output, earning supernormal profit.',
    options: {
      A: { en: 'Additional wheat farmers will enter the market', zh: '更多小麦种植者将进入市场' },
      B: { en: 'Some wheat farmers will leave the market', zh: '部分小麦种植者将退出市场' },
      C: { en: 'The wheat farmer will make supernormal profit', zh: '小麦种植者将获得超额利润' },
      D: { en: 'The wheat farmer will make a loss', zh: '小麦种植者将亏损' }
    },
    answer: 'A',
    explanation: 'At the profit-maximising output, price is above average cost, so wheat farmers earn supernormal profit. This attracts additional firms in the long run.',
    explanationZh: '在利润最大化产量下，价格高于平均成本，小麦种植者获得超额利润。这会吸引更多企业长期进入市场。'
  },
  {
    date: '2024.05', number: 5,
    prompt: 'A profit maximising firm decides to change its objective to revenue maximisation. Which one of the following combinations is the most likely impact of this decision?',
    table: { headers: ['', 'Supernormal profit', 'Price'], rows: [['A', 'No change', 'No change'], ['B', 'Increase', 'Increase'], ['C', 'Decrease', 'Decrease'], ['D', 'Increase', 'No change']] },
    options: {
      A: { en: 'Supernormal profit unchanged; price unchanged', zh: '超额利润不变；价格不变' },
      B: { en: 'Supernormal profit increases; price increases', zh: '超额利润增加；价格上升' },
      C: { en: 'Supernormal profit decreases; price decreases', zh: '超额利润减少；价格下降' },
      D: { en: 'Supernormal profit increases; price unchanged', zh: '超额利润增加；价格不变' }
    },
    answer: 'C',
    explanation: 'Revenue maximisation occurs at a higher output than profit maximisation. The firm charges a lower price, and the lower price-cost margin reduces supernormal profit.',
    explanationZh: '收益最大化对应的产量高于利润最大化时的产量。企业会降低价格，较低的价格成本差会使超额利润减少。'
  },
  {
    date: '2024.05', number: 6,
    prompt: 'A 2022 study found that the geographical mobility of labour in the USA has been decreasing for the last 30 years. Which one of the following is most likely to cause a decrease in the geographical mobility of labour?',
    options: {
      A: { en: 'An increase in the skills of the workforce', zh: '劳动力技能提高' },
      B: { en: 'An increase in relocation grants provided by the government', zh: '政府增加搬迁补助' },
      C: { en: 'An increase in average house prices and rents', zh: '平均房价和租金上升' },
      D: { en: 'An increase in the availability of affordable housing', zh: '可负担住房供应增加' }
    },
    answer: 'C',
    explanation: 'Higher house prices and rents make it more expensive for workers to move to another region, reducing geographical labour mobility.',
    explanationZh: '房价和租金上升会提高劳动者迁往其他地区的成本，从而降低劳动力的地理流动性。'
  },
  {
    date: '2024.10', number: 1,
    prompt: 'A pineapple producer in Costa Rica, operating in a perfectly competitive market, is currently making supernormal profits. Which one of the following is the most likely outcome in the long-run?',
    options: {
      A: { en: 'The producer will make more supernormal profit', zh: '生产者将获得更多超额利润' },
      B: { en: 'The producer’s output will decrease but industry output will increase', zh: '该生产者的产量会减少，但行业总产量会增加' },
      C: { en: 'The producer will leave the market', zh: '生产者将退出市场' },
      D: { en: 'The market concentration will increase', zh: '市场集中度将上升' }
    },
    answer: 'B',
    explanation: 'Supernormal profit attracts new firms. Entry increases industry supply and lowers the market price, reducing each existing producer’s output while total industry output rises.',
    explanationZh: '超额利润会吸引新企业进入。进入会增加行业供给并压低市场价格，使现有生产者各自减产，但行业总产量上升。'
  },
  {
    date: '2024.10', number: 2,
    prompt: 'In 2023 Cineworld sold tickets for standard seats to watch movies at £9.99 in the UK. Students only paid £7.99 for the same seats. Which one of the following best describes this pricing strategy?',
    options: {
      A: { en: 'Marginal cost pricing', zh: '边际成本定价' },
      B: { en: 'Limit pricing', zh: '限制性定价' },
      C: { en: 'Price discrimination', zh: '价格歧视' },
      D: { en: 'Predatory pricing', zh: '掠夺性定价' }
    },
    answer: 'C',
    explanation: 'The same cinema seat is sold at different prices to different customer groups. This is price discrimination, often based on differences in willingness to pay or demand elasticity.',
    explanationZh: '同一种影院座位以不同价格卖给不同顾客群体，这属于价格歧视，通常利用支付意愿或需求弹性的差异。'
  },
  {
    date: '2024.10', number: 3,
    prompt: 'In 2023 the Government of the Philippines introduced a maximum price for rice of 41 pesos ($0.72) per kilogram. Ceteris paribus, which one of the following is the most likely impact of this maximum price for rice on producers?',
    options: {
      A: { en: 'Producer surplus will increase', zh: '生产者剩余将增加' },
      B: { en: 'Fixed costs will decrease', zh: '固定成本将下降' },
      C: { en: 'Dynamic efficiency will increase', zh: '动态效率将提高' },
      D: { en: 'Average revenue will decrease', zh: '平均收益将下降' }
    },
    answer: 'D',
    explanation: 'A binding maximum price lowers the price producers can charge. Since average revenue equals price, average revenue decreases.',
    explanationZh: '具有约束力的最高限价会降低生产者可以收取的价格。由于平均收益等于价格，平均收益会下降。'
  },
  {
    date: '2024.10', number: 4,
    prompt: 'The table shows the total costs of a clothing manufacturer producing jeans at different levels of output. What is the average fixed cost per unit if the firm produces 20,000 pairs of jeans?',
    table: { headers: ['Output', 'Total costs ($)'], rows: [['0', '40,000'], ['10,000', '60,000'], ['20,000', '100,000'], ['30,000', '160,000'], ['40,000', '240,000']] },
    options: {
      A: { en: '$2', zh: '2 美元' },
      B: { en: '$3', zh: '3 美元' },
      C: { en: '$4', zh: '4 美元' },
      D: { en: '$5', zh: '5 美元' }
    },
    answer: 'A',
    explanation: 'Fixed costs are $40,000, the total costs at zero output. Average fixed cost at 20,000 pairs is $40,000 ÷ 20,000 = $2 per pair.',
    explanationZh: '固定成本为 40,000 美元，即零产量时的总成本。生产 20,000 条时，平均固定成本 = 40,000 ÷ 20,000 = 每条 2 美元。'
  },
  {
    date: '2024.10', number: 5,
    prompt: 'In 2002 the elasticity of demand for agricultural labour in South Africa was estimated to be −1.32. Which one of the following is most likely to influence the elasticity of demand for agricultural labour?',
    options: {
      A: { en: 'The cost of capital required for farming relative to the cost of agricultural labour', zh: '农业所需资本相对于农业劳动力的成本' },
      B: { en: 'The level of educational qualifications required to be an agricultural worker', zh: '成为农业工人所需的学历水平' },
      C: { en: 'The location of agricultural jobs in South Africa', zh: '南非农业岗位的地理位置' },
      D: { en: 'The occupational and the geographical mobility of labour', zh: '劳动力的职业和地理流动性' }
    },
    answer: 'A',
    explanation: 'The relative cost of capital affects how easily firms can substitute machinery for labour. Greater substitution possibilities make labour demand more elastic.',
    explanationZh: '资本的相对成本会影响企业用机器替代劳动力的难易程度。替代可能性越大，劳动力需求越富有弹性。'
  },
  {
    date: '2024.10', number: 6,
    prompt: 'In October 2023 Apple’s market share of the smartphone market in the USA was 56.41%. It faces a downward-sloping demand curve. Which one of the following diagrams would illustrate Apple’s total revenue curve?',
    figure: 'images/2024-10/q06-total-revenue-diagrams.png',
    figureAlt: 'Four candidate total revenue curves labelled A to D. Diagram D is an inverted U-shaped curve.',
    options: {
      A: { en: 'Diagram A', zh: '图 A' },
      B: { en: 'Diagram B', zh: '图 B' },
      C: { en: 'Diagram C', zh: '图 C' },
      D: { en: 'Diagram D', zh: '图 D' }
    },
    answer: 'D',
    explanation: 'With a downward-sloping demand curve, total revenue first rises as output increases, reaches a maximum when marginal revenue is zero, and then falls. This is the inverted U-shaped curve in diagram D.',
    explanationZh: '面对向下倾斜的需求曲线时，产量增加会先使总收益上升；边际收益为零时总收益达到最大，之后总收益下降。这是图 D 的倒 U 形曲线。'
  },
  {
    date: '2025.01', number: 1,
    prompt: 'Luxottica is a French–Italian company based in Italy. It sells sunglasses in an imperfectly competitive market. In 2022, its net profit was €2.28 billion. Which one of the following conditions is necessary for Luxottica to maximise its profits?',
    options: {
      A: { en: 'Marginal revenue is equal to marginal cost', zh: '边际收益等于边际成本' },
      B: { en: 'Average cost is equal to marginal cost', zh: '平均成本等于边际成本' },
      C: { en: 'Marginal cost is equal to zero', zh: '边际成本等于零' },
      D: { en: 'Marginal revenue is equal to zero', zh: '边际收益等于零' }
    },
    answer: 'A',
    explanation: 'A firm maximises profit at the output where marginal revenue equals marginal cost, provided marginal cost is rising through marginal revenue.',
    explanationZh: '企业在边际收益等于边际成本的产量处实现利润最大化，且边际成本应从下方向上穿过边际收益。'
  },
  {
    date: '2025.01', number: 2,
    prompt: 'Sony, an electronics company, and Honda, a vehicle manufacturing company, have collaborated to develop a new electric car. Which one of the following best describes this type of arrangement?',
    options: {
      A: { en: 'A co-operative', zh: '合作社' },
      B: { en: 'State-owned enterprise', zh: '国有企业' },
      C: { en: 'A joint venture', zh: '合资企业' },
      D: { en: 'Horizontal integration', zh: '横向一体化' }
    },
    answer: 'C',
    explanation: 'A joint venture is a business project undertaken jointly by two or more firms. Sony and Honda are collaborating on a new electric car.',
    explanationZh: '合资经营是由两家或多家企业共同开展的商业项目。Sony 和 Honda 正合作开发一款新型电动汽车。'
  },
  {
    date: '2025.01', number: 3,
    prompt: 'The elasticity of demand for labour for workers in the shipbuilding industry in France is estimated to be −0.88. Which one of the following is most likely to cause the demand for labour to be inelastic?',
    options: {
      A: { en: 'Labour can be easily substituted by capital', zh: '劳动力容易被资本替代' },
      B: { en: 'The workers are all members of a trade union', zh: '工人都是工会成员' },
      C: { en: 'There is a large supply of labour available to work in the industry', zh: '行业中有大量可供雇用的劳动力' },
      D: { en: 'Labour costs are a small percentage of total costs', zh: '劳动力成本占总成本的比例较小' }
    },
    answer: 'D',
    explanation: 'When labour costs are a small share of total costs, a change in wages has a relatively small effect on firms’ costs, so demand for labour tends to be inelastic.',
    explanationZh: '劳动力成本占总成本比例较小时，工资变化对企业总成本的影响较小，因此劳动力需求往往缺乏弹性。'
  },
  {
    date: '2025.01', number: 4,
    prompt: 'The diagram shows marginal cost, average total cost and average variable cost curves for a profit-maximising sweetcorn producer in Argentina operating in a perfectly competitive market. At which one of the following prices would the producer sell sweetcorn in the short-run but shut down in the long-run?',
    figure: 'images/2025-01/q04-perfect-competition-shutdown.png',
    figureAlt: 'Perfectly competitive producer cost curves and prices P1 to P4; P2 lies above minimum AVC and below minimum ATC.',
    options: {
      A: { en: 'P₁', zh: 'P₁' },
      B: { en: 'P₂', zh: 'P₂' },
      C: { en: 'P₃', zh: 'P₃' },
      D: { en: 'P₄', zh: 'P₄' }
    },
    answer: 'B',
    explanation: 'At P₂, price is above minimum AVC so the producer covers variable costs and continues in the short run. It is below minimum ATC, so the firm cannot cover all costs in the long run and will exit.',
    explanationZh: '在 P₂ 价格下，价格高于最低平均可变成本，企业能弥补可变成本，因此短期内继续生产。但价格低于最低平均总成本，长期无法弥补全部成本，企业会退出市场。'
  },
  {
    date: '2025.01', number: 5,
    prompt: 'In 2019 the European Union fined Qualcomm, a semiconductor manufacturer, €242 million for setting its price below its average variable cost. Which one of the following best describes this pricing strategy?',
    options: {
      A: { en: 'Marginal cost pricing', zh: '边际成本定价' },
      B: { en: 'Limit pricing', zh: '限制性定价' },
      C: { en: 'Predatory pricing', zh: '掠夺性定价' },
      D: { en: 'Price discrimination', zh: '价格歧视' }
    },
    answer: 'C',
    explanation: 'Predatory pricing involves setting a price below average variable cost to drive competitors out of the market or deter them from competing.',
    explanationZh: '掠夺性定价是将价格设在平均可变成本以下，以迫使竞争者退出市场或阻止其参与竞争。'
  },
  {
    date: '2025.01', number: 6,
    prompt: 'Which one of the following diagrams illustrates the total revenue curve for a profit-maximising firm operating in a perfectly competitive market?',
    figure: 'images/2025-01/q06-perfect-competition-revenue.png',
    figureAlt: 'Four candidate cost and revenue diagrams A to D; diagram B is an upward straight line from the origin.',
    options: {
      A: { en: 'Diagram A', zh: '图 A' },
      B: { en: 'Diagram B', zh: '图 B' },
      C: { en: 'Diagram C', zh: '图 C' },
      D: { en: 'Diagram D', zh: '图 D' }
    },
    answer: 'B',
    explanation: 'A perfectly competitive firm is a price taker, so price is constant as output changes. Total revenue (price × output) rises as a straight line from the origin.',
    explanationZh: '完全竞争企业是价格接受者，产量变化时价格保持不变。总收益等于价格乘以产量，因此表现为从原点出发的向上直线。'
  },
  {
    date: '2025.05', number: 1,
    prompt: 'Integris, a UK-based management services business, was founded in 2021 as a result of the merger of several businesses providing similar services. This enabled it to benefit from internal economies of scale. Which one of the following is an example of internal economies of scale?',
    options: {
      A: { en: 'Availability of a skilled labour force', zh: '能够获得熟练劳动力' },
      B: { en: 'Access to transport links', zh: '能够使用交通网络' },
      C: { en: 'Lower corporation tax', zh: '企业所得税较低' },
      D: { en: 'Purchasing supplies in bulk', zh: '批量采购原材料或用品' }
    },
    answer: 'D',
    explanation: 'A large firm can buy inputs in bulk and negotiate lower prices. This is an internal purchasing economy of scale that reduces average costs.',
    explanationZh: '大型企业可以批量采购投入品并协商更低价格。这属于内部采购规模经济，能够降低平均成本。'
  },
  {
    date: '2025.05', number: 2,
    prompt: 'A monopoly sets its price at the output where average revenue is equal to average cost. Which one of the following best describes this firm’s objective?',
    options: {
      A: { en: 'Revenue maximisation', zh: '收益最大化' },
      B: { en: 'Profit maximisation', zh: '利润最大化' },
      C: { en: 'Sales maximisation', zh: '销售量最大化' },
      D: { en: 'Profit satisficing', zh: '利润满意化' }
    },
    answer: 'C',
    explanation: 'Where AR equals AC, the firm earns normal profit. A monopolist maximising sales subject to a normal-profit constraint chooses this break-even output.',
    explanationZh: '平均收益等于平均成本时，企业获得正常利润。以正常利润为约束来最大化销售量的垄断者会选择这一盈亏平衡产量。'
  },
  {
    date: '2025.05', number: 3,
    prompt: 'In 2024, the Government of Japan decided to subsidise construction companies to modernise old homes in the city of Kyoto. Ceteris paribus, which one of the following is the most likely impact of this policy?',
    options: {
      A: { en: 'The price elasticity of supply of construction workers would increase', zh: '建筑工人的供给价格弹性会上升' },
      B: { en: 'The demand for construction workers would increase', zh: '建筑工人的需求会增加' },
      C: { en: 'The skills of construction workers would decrease', zh: '建筑工人的技能会下降' },
      D: { en: 'Wage rates for construction workers would decrease', zh: '建筑工人的工资率会下降' }
    },
    answer: 'B',
    explanation: 'The subsidy lowers firms’ costs and encourages more home-modernisation projects. Higher construction output raises the derived demand for construction workers.',
    explanationZh: '补贴降低了企业成本，并鼓励更多住房改造项目。建筑产出增加会提高对建筑工人的引致需求。'
  },
  {
    date: '2025.05', number: 4,
    prompt: 'The table shows the total costs of a garment manufacturer at different levels of output. Which one of the following is the average variable cost if the manufacturer is producing 12,000 items?',
    table: { headers: ['Output', 'Total costs ($)'], rows: [['0', '100,000'], ['6,000', '160,000'], ['12,000', '210,000'], ['18,000', '250,000'], ['24,000', '280,000']] },
    options: {
      A: { en: '$8.33', zh: '8.33 美元' },
      B: { en: '$9.17', zh: '9.17 美元' },
      C: { en: '$10.00', zh: '10.00 美元' },
      D: { en: '$17.50', zh: '17.50 美元' }
    },
    answer: 'B',
    explanation: 'Fixed costs are $100,000. At 12,000 items, variable costs are $210,000 − $100,000 = $110,000. AVC = $110,000 ÷ 12,000 = about $9.17.',
    explanationZh: '固定成本为 100,000 美元。产量为 12,000 件时，可变成本为 210,000 − 100,000 = 110,000 美元。平均可变成本 = 110,000 ÷ 12,000，约为 9.17 美元。'
  },
  {
    date: '2025.05', number: 5,
    prompt: 'The table shows the price for an adult ticket at a particular cinema in Dhaka in 2024. Which one of the following best describes the reason for this price difference?',
    table: { headers: ['Time', 'Price (BDT)'], rows: [['Afternoon', '300'], ['Evening', '450']] },
    options: {
      A: { en: 'Demand is more price elastic in the afternoon', zh: '下午的需求更富有价格弹性' },
      B: { en: 'Demand is more price inelastic in the afternoon', zh: '下午的需求更缺乏价格弹性' },
      C: { en: 'Supply is perfectly elastic in the evening', zh: '晚上的供给完全富有弹性' },
      D: { en: 'Supply is more elastic in the evening', zh: '晚上的供给更富有弹性' }
    },
    answer: 'A',
    explanation: 'The cinema charges a lower price in the afternoon, where demand is more price elastic. This is consistent with price discrimination between customer groups or viewing times.',
    explanationZh: '电影院在下午收取较低价格，说明下午的需求更富有价格弹性。这符合按顾客群体或观影时段进行价格歧视的做法。'
  },
  {
    date: '2025.05', number: 6,
    prompt: 'The diagram shows the total revenue curve for an imperfectly competitive business in Nepal selling mobile phones. Which one of the following can be deduced from the diagram at an output of 0X?',
    figure: 'images/2025-05/q06-total-revenue.png',
    figureAlt: 'Total revenue rises to a maximum at output X and then falls.',
    options: {
      A: { en: 'Marginal revenue is zero', zh: '边际收益为零' },
      B: { en: 'Marginal revenue is negative', zh: '边际收益为负' },
      C: { en: 'Marginal revenue is equal to one', zh: '边际收益等于一' },
      D: { en: 'Marginal revenue is maximised', zh: '边际收益达到最大' }
    },
    answer: 'A',
    explanation: 'At output 0X, total revenue reaches its maximum. The slope of the total revenue curve is zero there, so marginal revenue is zero.',
    explanationZh: '在产量 0X 处，总收益达到最大值。此处总收益曲线的斜率为零，因此边际收益为零。'
  },
  {
    date: '2025.10', number: 1,
    prompt: 'In 2025 the Government of Zimbabwe proposed the privatisation of the 36 nationalised water suppliers. Which one of the following is a potential benefit of this privatisation?',
    options: {
      A: { en: 'Increased efficiency resulting from the profit motive', zh: '利润动机带来的效率提高' },
      B: { en: 'Increased government control from state ownership', zh: '国有制带来的政府控制加强' },
      C: { en: 'Increased provision of public goods', zh: '公共物品供给增加' },
      D: { en: 'Increased job security for employees', zh: '员工工作保障增强' }
    },
    answer: 'A',
    explanation: 'Privatisation transfers ownership to the private sector. The profit motive can create incentives to reduce costs and improve efficiency.',
    explanationZh: '私有化将所有权转移到私营部门。利润动机可能促使企业降低成本并提高效率。'
  },
  {
    date: '2025.10', number: 2,
    prompt: 'The shareholders of a car manufacturer, who own the company, are separate from its management team, which makes the operational decisions. Assume that this manufacturer has a satisficing objective. Which one of the following best describes this objective?',
    options: {
      A: { en: 'Maximising profits and reducing costs', zh: '利润最大化并降低成本' },
      B: { en: 'Achieving an acceptable level of profit and sales', zh: '达到可接受的利润和销售水平' },
      C: { en: 'Minimising dividends to shareholders', zh: '股息支付尽可能少' },
      D: { en: 'Maximising total revenue and total costs', zh: '总收益和总成本都最大化' }
    },
    answer: 'B',
    explanation: 'Managers who do not own the business may seek satisfactory rather than maximum results, meeting acceptable targets for profit and sales.',
    explanationZh: '并非企业所有者的经理可能追求满意而非最大化的结果，即达到可接受的利润和销售目标。'
  },
  {
    date: '2025.10', number: 3,
    prompt: 'A hairdressing business in Sri Lanka is operating in a monopolistically competitive market. Which one of the following combinations would apply to such a business in long-run equilibrium?',
    table: { headers: ['', 'Profit', 'Allocatively efficient'], rows: [['A', 'Normal', 'No'], ['B', 'Supernormal', 'No'], ['C', 'Normal', 'Yes'], ['D', 'Supernormal', 'Yes']] },
    options: {
      A: { en: 'Normal profit; not allocatively efficient', zh: '正常利润；配置无效率' },
      B: { en: 'Supernormal profit; not allocatively efficient', zh: '超额利润；配置无效率' },
      C: { en: 'Normal profit; allocatively efficient', zh: '正常利润；配置有效率' },
      D: { en: 'Supernormal profit; allocatively efficient', zh: '超额利润；配置有效率' }
    },
    answer: 'A',
    explanation: 'In long-run monopolistic competition, entry removes supernormal profit so firms earn normal profit. Price remains above marginal cost, so firms are not allocatively efficient.',
    explanationZh: '垄断竞争长期均衡中的企业进入会消除超额利润，因此企业获得正常利润。价格仍高于边际成本，所以配置无效率。'
  },
  {
    date: '2025.10', number: 4,
    prompt: 'In January 2021 the UK Government appointed a new regulator to ensure that new houses are built from safe materials. Which one of the following would limit the impact of this government intervention in the housing market?',
    options: {
      A: { en: 'Perfect mobility of resources', zh: '资源完全流动' },
      B: { en: 'A flexible labour market', zh: '灵活的劳动力市场' },
      C: { en: 'Perfect knowledge of the housing market', zh: '对住房市场拥有完全信息' },
      D: { en: 'Regulatory capture', zh: '监管俘获' }
    },
    answer: 'D',
    explanation: 'Regulatory capture occurs when a regulator acts in the interests of the industry it oversees rather than the public, weakening the intended impact of intervention.',
    explanationZh: '监管俘获是指监管机构偏向其所监管行业的利益，而不是公众利益，从而削弱政府干预原本希望达到的效果。'
  },
  {
    date: '2025.10', number: 5,
    prompt: 'The table shows a manufacturer’s total costs at different levels of output. Which one of the following is the average variable cost for an output of 2,000 units?',
    table: { headers: ['Output', 'Total costs ($)'], rows: [['0', '500'], ['500', '10,500'], ['1,000', '19,500'], ['1,500', '27,500'], ['2,000', '38,500'], ['2,500', '50,500']] },
    options: {
      A: { en: '$19.00', zh: '19.00 美元' },
      B: { en: '$19.25', zh: '19.25 美元' },
      C: { en: '$20.00', zh: '20.00 美元' },
      D: { en: '$20.20', zh: '20.20 美元' }
    },
    answer: 'A',
    explanation: 'Fixed costs are $500. At 2,000 units, variable costs are $38,500 − $500 = $38,000. AVC = $38,000 ÷ 2,000 = $19.',
    explanationZh: '固定成本为 500 美元。产量为 2,000 时，可变成本为 38,500 − 500 = 38,000 美元。平均可变成本 = 38,000 ÷ 2,000 = 19 美元。'
  },
  {
    date: '2025.10', number: 6,
    prompt: 'The diagram shows the average revenue and marginal revenue curves for a café in China selling cups of coffee. It currently sells 1,000 cups at ¥40 per cup. Ceteris paribus, which one of the following would happen if the café increased its selling price by 15%?',
    figure: 'images/2025-10-int/q06-ar-mr-price-elasticity.png',
    figureAlt: 'Downward-sloping average revenue curve and steeper marginal revenue curve, with price ¥40 and quantity 1,000 marked.',
    options: {
      A: { en: 'Demand would become less price elastic', zh: '需求会变得更缺乏价格弹性' },
      B: { en: 'The price elasticity of demand would be constant', zh: '需求价格弹性保持不变' },
      C: { en: 'Total revenue would fall', zh: '总收益会下降' },
      D: { en: 'Total revenue would rise', zh: '总收益会上升' }
    },
    answer: 'C',
    explanation: 'At the current output, demand is price elastic. Raising price by 15% reduces quantity demanded proportionally more, so total revenue falls.',
    explanationZh: '在当前产量处，需求富有价格弹性。价格提高 15% 会使需求量按更大比例下降，因此总收益减少。'
  },
];

const STORAGE_KEY = 'economics-u3-quiz-v1';
const blankState = () => ({ completed: [], mistakes: {} });
const loadState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && Array.isArray(saved.completed) && saved.mistakes ? saved : blankState();
  } catch { return blankState(); }
};
let state = loadState();
let activeQuestions = [];
let activeMode = '6';
let reviewMode = false;
let submitted = false;
let feedbackMode = 'after-submit';
let sessionStartedAt = 0;

const el = selector => document.querySelector(selector);
const homeScreen = el('#home-screen');
const quizScreen = el('#quiz-screen');
const resultScreen = el('#result-screen');
const mistakesScreen = el('#mistakes-screen');
const form = el('#quiz');
const questionHost = el('#questions');
const shuffle = array => {
  const mixed = [...array];
  for (let index = mixed.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [mixed[index], mixed[other]] = [mixed[other], mixed[index]];
  }
  return mixed;
};
const questionId = question => `${question.date} Q${question.number}`;

function showAnswerFeedback(question, index, selected) {
  const correct = selected === question.answer;
  const correctOption = question.options[question.answer];
  const feedback = el(`#feedback-${index + 1}`);
  feedback.className = `feedback visible ${correct ? 'correct' : 'incorrect'}`;
  feedback.innerHTML = `<strong>${correct ? '答对了 · Correct' : `答错了 · 正确答案 ${question.answer}`}</strong><span class="feedback-en">${question.explanation}</span><span class="feedback-zh" lang="zh-CN">${correctOption.zh}。${question.explanationZh}</span>`;
  return correct;
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* The quiz still works if browser storage is unavailable. */ }
}

function remainingQuestions() {
  const completed = new Set(state.completed);
  return questions.filter(question => !completed.has(questionId(question)));
}

function selectedMode() {
  return document.querySelector('input[name="mode"]:checked')?.value || '6';
}

function formatDuration(totalSeconds) {
  const seconds = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return hours
    ? `${hours}:${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}

function formatAverageDuration(totalSeconds) {
  const seconds = Math.max(0, Math.round(totalSeconds));
  if (seconds < 60) return `${seconds} 秒`;
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return remainder ? `${minutes} 分 ${remainder} 秒` : `${minutes} 分`;
}

function updateHome() {
  const remaining = remainingQuestions().length;
  const mistakeCount = Object.keys(state.mistakes).length;
  el('#bank-count').textContent = `共 ${questions.length} 道题`;
  el('#remaining-count').textContent = remaining;
  el('#completed-count').textContent = questions.length - remaining;
  el('#mistake-count').textContent = mistakeCount;
  el('#mistake-button-count').textContent = mistakeCount ? `(${mistakeCount})` : '';
  el('#continue-button').hidden = remaining === 0;
  el('#start-button').disabled = remaining === 0;
  if (remaining === 0) el('#mode-help').textContent = '题库中的题目都已完成。可以重新洗牌再练一轮，错题记录会保留。';
  else el('#mode-help').textContent = `题目会从未做题中随机抽取；不足所选题量时，本轮会做完剩余题目。目前还有 ${remaining} 道未做。`;
}

function showHome() {
  homeScreen.hidden = false;
  quizScreen.hidden = true;
  resultScreen.hidden = true;
  mistakesScreen.hidden = true;
  updateHome();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestions() {
  questionHost.innerHTML = activeQuestions.map((question, index) => `
    <article class="question" id="question-${index + 1}">
      <div class="question-head"><span class="q-number">${questionId(question)}</span><h2 class="q-prompt">${question.prompt}</h2></div>
      ${question.table ? `<table class="q-table"><thead><tr>${question.table.headers.map(header => `<th>${header}</th>`).join('')}</tr></thead><tbody>${question.table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}
      ${question.figure ? `<figure class="figure"><img src="${question.figure}" alt="${question.figureAlt || 'Diagram from the original examination paper.'}"><figcaption>Original exam diagram</figcaption></figure>` : ''}
      <div class="options">${Object.entries(question.options).map(([letter, option]) => `<label class="option"><input type="radio" name="q${index + 1}" value="${letter}"><span class="option-letter">${letter}</span><span class="option-copy"><span class="option-en">${option.en}</span><span class="option-zh" lang="zh-CN">${option.zh}</span></span></label>`).join('')}</div>
      <div class="feedback" id="feedback-${index + 1}" aria-live="polite"></div>
    </article>`).join('');
  updateProgress();
}

function startSession(mode = selectedMode(), { resetProgress = false, review = false } = {}) {
  if (resetProgress) {
    state.completed = [];
    saveState();
  }
  reviewMode = review;
  activeMode = mode;
  const source = review ? questions.filter(question => state.mistakes[questionId(question)]) : remainingQuestions();
  if (!source.length) {
    if (review) { showMistakes(); return; }
    updateHome();
    return;
  }
  const amount = mode === 'all' ? source.length : Math.min(Number(mode), source.length);
  activeQuestions = shuffle(source).slice(0, amount);
  submitted = false;
  resultScreen.hidden = true;
  mistakesScreen.hidden = true;
  homeScreen.hidden = true;
  quizScreen.hidden = false;
  form.reset();
  renderQuestions();
  sessionStartedAt = performance.now();
  const learnerName = el('#learner-name').value.trim();
  const sessionDescription = review ? `错题复习 · ${amount} 道` : mode === 'all' ? `一战到底 · ${amount} 道未做题` : `${amount} 道题 · 随机抽题`;
  el('#session-label').textContent = learnerName ? `${learnerName} · ${sessionDescription}` : sessionDescription;
  el('#status').textContent = '请为每道题选择一个答案。';
  el('#submit').disabled = false;
  el('#submit').innerHTML = '提交本轮答案 <span aria-hidden="true">→</span>';
  el('#progress').setAttribute('aria-valuemax', amount);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
  const answered = activeQuestions.filter((_, index) => form.querySelector(`input[name="q${index + 1}"]:checked`)).length;
  el('#answered-count').textContent = `${answered} / ${activeQuestions.length} 已作答`;
  el('#progress').setAttribute('aria-valuenow', answered);
  el('#progress span').style.width = `${activeQuestions.length ? answered / activeQuestions.length * 100 : 0}%`;
}

function showResults(score, durationSeconds) {
  resultScreen.hidden = false;
  el('#result-score').textContent = `${score} / ${activeQuestions.length}`;
  el('#total-time').textContent = formatDuration(durationSeconds);
  el('#average-time').textContent = formatAverageDuration(durationSeconds / activeQuestions.length);
  el('#result-title').textContent = reviewMode ? '错题复习完成' : '本轮答题结果';
  const remaining = remainingQuestions().length;
  el('#result-message').textContent = remaining
    ? `本轮答对 ${score} 道，答错 ${activeQuestions.length - score} 道。还有 ${remaining} 道未做题，可继续抽题。`
    : `本轮答对 ${score} 道，答错 ${activeQuestions.length - score} 道。题库已全部完成，可以重新洗牌再练。`;
  el('#result-continue').hidden = remaining === 0;
  el('#result-mistakes').textContent = Object.keys(state.mistakes).length ? `查看错题本 (${Object.keys(state.mistakes).length})` : '错题本为空';
  el('#result-mistakes').disabled = Object.keys(state.mistakes).length === 0;
  el('#result-shuffle').hidden = false;
  updateHome();
  resultScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showMistakes() {
  homeScreen.hidden = true;
  quizScreen.hidden = true;
  resultScreen.hidden = true;
  mistakesScreen.hidden = false;
  const mistakeIds = Object.keys(state.mistakes);
  el('#mistakes-intro').textContent = mistakeIds.length
    ? `共记录 ${mistakeIds.length} 道错题。答错次数和最近一次选项会保存在本机；在错题复习中答对后，该题会从错题本移除。`
    : '目前还没有错题记录。完成练习后，答错的题目会自动加入这里。';
  el('#mistakes-list').innerHTML = mistakeIds.length ? mistakeIds.map(id => {
    const question = questions.find(item => questionId(item) === id);
    if (!question) return '';
    const record = state.mistakes[id];
    const lastOption = question.options[record.lastChoice];
    const lastChoice = lastOption ? `${record.lastChoice} ${lastOption.en} / ${lastOption.zh}` : '—';
    const lastDate = record.lastWrongAt ? new Date(record.lastWrongAt).toLocaleDateString('zh-CN') : '';
    return `<article class="mistake-item"><div><strong>${id}</strong><p>${question.prompt}</p><small>答错 ${record.count} 次 · 最近错选：${lastChoice}${lastDate ? ` · ${lastDate}` : ''}</small></div><button class="remove-mistake text-button danger-text" type="button" data-id="${id}">移出</button></article>`;
  }).join('') : '<div class="empty-state">错题本还是空的<br><span>错题会在每轮提交后自动记录。</span></div>';
  el('#review-mistakes').hidden = mistakeIds.length === 0;
  el('#clear-mistakes').hidden = mistakeIds.length === 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

el('#start-button').addEventListener('click', () => startSession());
document.querySelectorAll('input[name="feedback-mode"]').forEach(input => input.addEventListener('change', () => {
  feedbackMode = document.querySelector('input[name="feedback-mode"]:checked').value;
}));
el('#continue-button').addEventListener('click', () => startSession());
el('#shuffle-button').addEventListener('click', () => startSession(selectedMode(), { resetProgress: true }));
el('#mistakes-button').addEventListener('click', showMistakes);
el('#back-button').addEventListener('click', showHome);
el('#mistakes-back').addEventListener('click', showHome);
el('#result-home').addEventListener('click', showHome);
el('#result-continue').addEventListener('click', () => startSession());
el('#result-shuffle').addEventListener('click', () => startSession(selectedMode(), { resetProgress: true }));
el('#result-mistakes').addEventListener('click', showMistakes);
el('#review-mistakes').addEventListener('click', () => startSession('all', { review: true }));
el('#clear-mistakes').addEventListener('click', () => {
  state.mistakes = {};
  saveState();
  showMistakes();
});
el('#mistakes-list').addEventListener('click', event => {
  const button = event.target.closest('.remove-mistake');
  if (!button) return;
  delete state.mistakes[button.dataset.id];
  saveState();
  showMistakes();
});
el('#quiz').addEventListener('change', event => {
  updateProgress();
  if (feedbackMode !== 'immediate' || submitted || !event.target.matches('input[type="radio"]')) return;
  const index = Number(event.target.name.slice(1)) - 1;
  showAnswerFeedback(activeQuestions[index], index, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (submitted) return;
  const missing = [];
  activeQuestions.forEach((question, index) => {
    const selected = form.querySelector(`input[name="q${index + 1}"]:checked`);
    el(`#question-${index + 1}`).classList.toggle('unanswered', !selected);
    if (!selected) missing.push(index + 1);
  });
  if (missing.length) {
    el('#status').textContent = `请先完成第 ${missing.join('、')} 题。`;
    el(`#question-${missing[0]}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  let score = 0;
  activeQuestions.forEach((question, index) => {
    const selected = form.querySelector(`input[name="q${index + 1}"]:checked`).value;
    const correct = selected === question.answer;
    const id = questionId(question);
    if (correct) {
      score++;
      if (reviewMode) delete state.mistakes[id];
    } else {
      const previous = state.mistakes[id];
      state.mistakes[id] = { count: (previous?.count || 0) + 1, lastChoice: selected, lastWrongAt: new Date().toISOString() };
    }
    showAnswerFeedback(question, index, selected);
    el(`#question-${index + 1}`).classList.remove('unanswered');
    if (!reviewMode && !state.completed.includes(id)) state.completed.push(id);
  });
  submitted = true;
  saveState();
  el('#status').textContent = '答案和中英解析已显示在各题下方。';
  el('#submit').disabled = true;
  form.querySelectorAll('input').forEach(input => { input.disabled = true; });
  const durationSeconds = (performance.now() - sessionStartedAt) / 1000;
  showResults(score, durationSeconds);
});

updateHome();
