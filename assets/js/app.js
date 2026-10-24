        document.addEventListener('DOMContentLoaded', function() {
            
            const archetypeData = {
                'archetype-1': {
                    title: '电商巨擘: 人设即信任，信任即销量',
                    description: '此类博主将个人IP与商业变现深度绑定，其播放量不仅是内容吸引力的体现，更是商业影响力的直接度量。他们成功的关键在于构建了超越商品本身的<strong>信任关系</strong>。',
                    caseTitle: '案例对比：“疯狂小杨哥” vs. “董宇辉”',
                    caseContent: '“小杨哥”通过“反向带货”的草根狂欢建立亲近感，而“董宇辉”则以“文化带货”的知识殿堂吸引精神共鸣。形式相反，但底层逻辑一致：通过极致人设，将粉丝关系从“消费者”提升到“信徒”，从而降低消费决策成本。'
                },
                'archetype-2': {
                    title: '机构玩家: 官方话语的“网感”革命',
                    description: '以政府机构、官方媒体为代表的账号，正在通过“去官方化”的内容表达，将枯燥信息包装成剧情短片、搞笑段子，实现宣传效果与用户好感度的双赢。',
                    caseTitle: '案例分析：“武汉交警”',
                    caseContent: '将交通法规融入平台原生内容，其播放量足以媲美顶级娱乐博主。这本质上是一次“公信力”的降维再造，用“网感”和“亲和力”替代传统权威，重新捕获了年轻用户的注意力。'
                },
                'archetype-3': {
                    title: '短剧出品方: 工业化“爽感”的流水线',
                    description: '以MCN或专业影视公司为主体，批量制造满足用户核心情绪需求的微短剧，实现流量的快速收割和高效变现。',
                    caseTitle: '核心逻辑：算法时代的“情绪蒙汗药”',
                    caseContent: '短剧完美迎合了抖音算法和用户心理的双重机制。它提供高密度、强冲突的剧情，给予用户无需深度思考的代理满足感，极易获得高完播率和互动率，从而被算法投入更大的流量池。'
                },
                'archetype-4': {
                    title: '垂类深耕者: 兴趣是最好的流量护城河',
                    description: '专注于特定领域，通过提供专业、有价值的内容，吸引并沉淀高度精准的粉丝群体，标志着抖音从“流量最大化”向“圈层精细化”演进。',
                    caseTitle: '核心逻辑：从“流量思维”到“圈层思维”',
                    caseContent: '垂类博主的单视频播放量可能不及顶级娱乐博主，但粉丝忠诚度和商业转化率更高。他们的“有效播放量”含金量极高，是“圈层经济”在抖音平台的最佳体现。'
                }
            };
            
            const strategyData = [
                {
                    type: '个人创作者',
                    content: '聚焦单一垂类，打造极致差异化人设，提供深度价值。',
                    flow: '优先在“内容池”通过优质内容破圈，积累原始粉丝，再寻求商业化。',
                    community: '建立高互动的小型社群，将公域粉丝引导至私域，建立深度信任。',
                    business: '广告/橱窗 -> 直播带货 -> 知识付费/咨询服务。'
                },
                {
                    type: '中小企业/品牌',
                    content: '参与或借势“造风”运动，将品牌理念融入文化话题；打造品牌自有人格化IP。',
                    flow: '投放与内容策略匹配的达人，利用“双池”算法，兼顾品牌曝光与销售转化。',
                    community: '建立官方粉丝群，进行精细化用户关系管理（CRM），提升复购率。',
                    business: '构建“短视频种草+直播/商品卡拔草”的内容电商闭环，实现品效销合一。'
                },
                {
                    type: '大型企业/MCN',
                    content: '矩阵化布局，覆盖多个垂类和内容形态（如短剧）；工业化生产精品内容。',
                    flow: '矩阵账号互相导流，系统性地在“内容池”和“交易池”发力，最大化流量获取效率。',
                    community: '规模化运营粉丝社群，通过分层管理，激活核心用户，放大IP影响力。',
                    business: '多元化变现，包括直播电商、品牌定制、IP授权、艺人经纪等。'
                }
            ];

            function initArchetypeRadarChart() {
                const ctx = document.getElementById('archetypeRadarChart').getContext('2d');
                new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ['商业变现力', '粉丝忠诚度', '内容生产成本', '破圈传播力', '政策风险'],
                        datasets: [
                            {
                                label: '电商巨擘',
                                data: [95, 85, 60, 80, 70],
                                fill: true,
                                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                                borderColor: 'rgb(249, 115, 22)',
                                pointBackgroundColor: 'rgb(249, 115, 22)',
                            },
                            {
                                label: '机构玩家',
                                data: [40, 70, 50, 85, 20],
                                fill: true,
                                backgroundColor: 'rgba(20, 184, 166, 0.2)',
                                borderColor: 'rgb(20, 184, 166)',
                                pointBackgroundColor: 'rgb(20, 184, 166)',
                            },
                             {
                                label: '短剧出品方',
                                data: [80, 50, 80, 90, 85],
                                fill: true,
                                backgroundColor: 'rgba(220, 38, 38, 0.2)',
                                borderColor: 'rgb(220, 38, 38)',
                                pointBackgroundColor: 'rgb(220, 38, 38)',
                            },
                             {
                                label: '垂类深耕者',
                                data: [75, 90, 70, 65, 30],
                                fill: true,
                                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                                borderColor: 'rgb(79, 70, 229)',
                                pointBackgroundColor: 'rgb(79, 70, 229)',
                            }
                        ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.r !== null) {
                                            label += context.parsed.r;
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            r: {
                                angleLines: {
                                    display: false
                                },
                                suggestedMin: 0,
                                suggestedMax: 100,
                                pointLabels: {
                                    font: {
                                        size: 13
                                    }
                                }
                            }
                        }
                    }
                });
            }

            function updateArchetypeContent(tabId) {
                const content = archetypeData[tabId];
                const container = document.getElementById('archetype-content');
                if (content) {
                    container.innerHTML = `
                        <div class="bg-stone-100 p-6 rounded-lg">
                            <h4 class="font-bold text-xl mb-2 text-orange-600">${content.title}</h4>
                            <p class="text-stone-700 text-sm mb-4">${content.description}</p>
                            <div class="border-t border-stone-300 pt-4">
                                <h5 class="font-semibold text-stone-800 mb-2">${content.caseTitle}</h5>
                                <p class="text-stone-600 text-sm">${content.caseContent}</p>
                            </div>
                        </div>
                    `;
                }
            }
            
            function initArchetypeTabs() {
                const tabButtons = document.querySelectorAll('.tab-button');
                tabButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        tabButtons.forEach(btn => btn.classList.remove('active-tab'));
                        button.classList.add('active-tab');
                        updateArchetypeContent(button.dataset.tab);
                    });
                });
                updateArchetypeContent('archetype-1');
            }

            function initZaofengChart() {
                const ctx = document.getElementById('zaofengChart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['#美拉德穿搭', '#了不起的中国智造', '#chiikawa'],
                        datasets: [{
                            label: '话题视频播放量(亿次)',
                            data: [66, 78, 72],
                            backgroundColor: [
                                'rgba(234, 88, 12, 0.6)',
                                'rgba(217, 119, 6, 0.6)',
                                'rgba(202, 138, 4, 0.6)'
                            ],
                            borderColor: [
                                'rgb(234, 88, 12)',
                                'rgb(217, 119, 6)',
                                'rgb(202, 138, 4)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        plugins: {
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: '“造风”运动话题播放量',
                                font: {
                                    size: 14
                                }
                            }
                        },
                        scales: {
                            x: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
            
            function populateStrategyTable() {
                const tbody = document.getElementById('strategy-table-body');
                let html = '';
                strategyData.forEach((row, index) => {
                    const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-stone-50';
                    html += `
                        <tr class="${bgColor} border-b hover:bg-amber-50">
                            <th scope="row" class="px-6 py-4 font-medium text-stone-900 whitespace-nowrap">${row.type}</th>
                            <td class="px-6 py-4">${row.content}</td>
                            <td class="px-6 py-4">${row.flow}</td>
                            <td class="px-6 py-4">${row.community}</td>
                            <td class="px-6 py-4">${row.business}</td>
                        </tr>
                    `;
                });
                tbody.innerHTML = html;
            }

            function initMobileNav() {
                const select = document.getElementById('mobile-nav');
                select.addEventListener('change', (e) => {
                    const targetId = e.target.value;
                    if (targetId) {
                        const targetElement = document.querySelector(targetId);
                        if(targetElement) {
                             window.scrollTo({
                                top: targetElement.offsetTop - document.getElementById('header').offsetHeight,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            }

            initArchetypeTabs();
            populateStrategyTable();
            initMobileNav();
            if (typeof Chart === 'undefined') {
                document.querySelectorAll('.chart-container').forEach(container => {
                    container.textContent = '图表组件加载失败，请检查网络后刷新。其他内容仍可阅读。';
                });
            } else {
                initArchetypeRadarChart();
                initZaofengChart();
            }
        });
