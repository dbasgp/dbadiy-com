/* ===========================================================
   DBA DIY — router, i18n, transitions
   =========================================================== */

(function(){

  /* ============================================================
     i18n — Traditional Chinese (HK)
     ============================================================ */
  const T = {
    /* Home */
    'home.sub':                  '你的抽濕機，從選型到日常保養。請選擇主題。',
    'home.feature.tag':          '7 個步驟 · 最多人睇',
    'home.feature.title':        '安裝指南',
    'home.feature.desc':         '準備、吊裝、排水、風管、控制、電源、調試。',
    'home.feature.go':           '開始查看',
    'home.tile.models.title':    '型號',
    'home.tile.models.desc':     'UTC20 · 68 · 120',
    'home.tile.sizing.title':    '揀型號',
    'home.tile.sizing.desc':     '邊一款啱你',
    'home.tile.troubleshooting.title': '故障排除',
    'home.tile.troubleshooting.desc':  '出現異常',
    'home.tile.maintenance.title': '日常保養',
    'home.tile.maintenance.desc':  '濾網 · 蒸發器 · 排水',
    'home.tile.contact.title':   '聯絡我哋',
    'home.tile.contact.desc':    '新加坡 & 香港辦公室',
    'home.official.eyebrow':     '官方網站',
    'home.official.sg':          '新加坡',
    'home.official.hk':          '香港',
    'home.foot.copy':            '© 2026 DBA Electric',
    'home.foot.note':            '教學參考，並非工程認證。',

    /* Models */
    'models.eyebrow':            '三個尺寸，同一機身',
    'models.title':              'Ultra Thin 超薄系列',
    'models.desc':               '同一輕薄天花機身、同一控制系統、同一排水泵。按容量同面積揀就得。',
    'models.utc20.desc':         '200 – 400 平方呎 · 適合單一房間或工作室。',
    'models.utc68.tag':          'DBA-UTC68 · 熱銷',
    'models.utc68.desc':         '800 – 1000 平方呎 · 多數香港同新加坡單位嘅萬能首選。',
    'models.utc120.desc':        '1300 – 1500 平方呎 · 大型住宅及輕型商業空間。',
    'models.utc120.flange':      '⌀196 mm（雙進風口）',
    'models.spec.airflow':       '風量',
    'models.spec.sound':         '聲量',
    'models.spec.static':        '靜壓',
    'models.spec.flange':        '法蘭',
    'models.spec.body':          '機身尺寸',
    'models.feat.pump':          '✓ 內置 1.8 米排水泵',
    'models.feat.uv':            '✓ UV-C 紫外線消毒',
    'models.feat.filter':        '✓ 不鏽鋼濾網',
    'models.feat.wifi':          '✓ WiFi + Modbus',
    'models.feat.bearing':       '✓ NSK 軸承馬達',
    'models.feat.energy':        '✓ 香港能源標籤一級',
    'models.next':               '唔知揀邊個？',

    /* Sizing */
    'sizing.eyebrow':            '按面積同風管長度揀',
    'sizing.title':              '邊一款啱我？',
    'sizing.desc':               '先睇你要抽嘅面積，再睇最長嘅風管走線 — 每個 90° 彎位大概要扣 10 Pa 靜壓。',
    'sizing.q.heading':          '空間有幾大？',
    'sizing.s.area':             '400 平方呎以下',
    'sizing.s.note':             '工作室、單一房間、儲物房',
    'sizing.m.area':             '400 – 1000 平方呎',
    'sizing.m.note':             '大部分新加坡同香港住宅單位',
    'sizing.l.area':             '1000 – 1500 平方呎',
    'sizing.l.note':             '大型住宅、輕型商業、雙進風口',
    'sizing.xl.area':            '1500 平方呎以上',
    'sizing.xl.pick':            '聯絡我哋',
    'sizing.xl.note':            '可並聯多部，或者升級到工業機',
    'sizing.xl.cta':             '提交圖則 →',
    'sizing.tips.heading':       '以下情況要升一級',
    'sizing.tips.1':             '<strong>樓底高</strong> — 超過 3 米要按容積計算，唔可以只計平方呎。',
    'sizing.tips.2':             '<strong>風管走線長</strong> — 軟管超過 5 米，或者有 3 個或以上彎位。',
    'sizing.tips.3':             '<strong>開放式間隔</strong> — 一部機要應付廚房、客廳同書房。',
    'sizing.tips.4':             '<strong>有植物或晾衫</strong> — 兩者每日各自會增加 5–10 公升水氣。',
    'sizing.foot':               '夾埋兩個尺寸之間，揀大嗰個。六成負載運行靜啲，又耐用過全速跑。',

    /* Install hub */
    'install.eyebrow':           '出自官方 DBA UTC 安裝卡',
    'install.title':             '安裝指南',
    'install.desc':              '由淨係得一個天花，到部機運作起來 — 七個步驟。撳一個入去睇。',
    'install.step.prep.t':       '準備',
    'install.step.prep.d':       '通電測試、規劃、檢修口。',
    'install.step.hang.t':       '吊裝',
    'install.step.hang.d':       'M10 螺桿、水平、減震。',
    'install.step.drain.t':      '排水',
    'install.step.drain.d':      '水泵、止逆閥、存水彎。',
    'install.step.duct.t':       '風管',
    'install.step.duct.d':       '⌀146 / ⌀196 mm 法蘭。',
    'install.step.ctrl.t':       '控制',
    'install.step.ctrl.d':       'LCD 控制盒 + 訊號線。',
    'install.step.pow.t':        '電源',
    'install.step.pow.d':        '16 A 開關、2.5 mm²、接地。',
    'install.step.com.t':        '調試',
    'install.step.com.d':        '通電試機，正常先收工。',
    'install.start':             '由第 1 步開始',

    /* Step footer */
    'sf.next':                   '下一步',
    'sf.go':                     '進入',
    'sf.done':                   '完成',

    /* Install / Preparation */
    'ip.pill':                   '步驟 01 / 07',
    'ip.title':                  '準備',
    'ip.desc':                   '開箱、通電試機，然後規劃安裝。跳過試機可能令你之後拆返落嚟整一日。',
    'ip.chip.1':                 '5 分鐘試機',
    'ip.chip.2':                 '檢修口 ≥ 60 × 60 cm',
    'ip.chip.3':                 '正對機側維修口',
    'ip.bench.badge':            '必做',
    'ip.bench.title':            '吊裝前，做 5 分鐘通電試機',
    'ip.bench.lede':             '開箱後放喺地下或者工作枱上，做一次通電檢查。呢 5 分鐘可以幫你慳返一日嘅拆裝功夫。',
    'ip.bench.s1':               '<strong>開箱</strong> — 將機由紙箱取出，平放於地下，面板向上。包裝先暫時保留，方便有需要時退貨。',
    'ip.bench.s2':               '<strong>接上控制盒</strong> — 駁去機身對應嘅訊號端子，編號要一一對齊。',
    'ip.bench.s3':               '<strong>接上濕度感應器</strong> — 駁去專用端子，冇感應器讀數機係唔會運作除濕模式。',
    'ip.bench.s4':               '<strong>插上電源</strong> — 如果未鋪好專用線路，可暫用普通插座，足以通電就得。',
    'ip.bench.s5':               '<strong>開機</strong> — 風扇應該即時轉動，無延遲。如果唔轉，停止此處，先檢查。',
    'ip.bench.s6':               '<strong>強制壓縮機啟動</strong> — 將濕度設定調低，例如 40% RH，壓縮機應於 60 秒內啟動。',
    'ip.bench.s7':               '<strong>聽同感覺</strong> — 風扇要平穩，壓縮機要穩定，無撞擊、無金屬雜音。出風口應有暖風。',
    'ip.bench.s8':               '<strong>檢查面板</strong> — LCD 上面冇錯誤代碼，部機就可以開始安裝。',
    'ip.bench.ok':               '無錯誤代碼？可以開始安裝。',

    'ip.plan.heading':           '然後規劃，動工之前',
    'ip.plan.1':                 '<strong>確認天花夾層深度。</strong>UTC20 需要 200 mm、UTC68 需要 240 mm、UTC120 需要 310 mm — 仲要預留少少空隙，唔好俾機身貼住樓板。',
    'ip.plan.2':                 '<strong>定好吊裝位置。</strong>標出四條螺桿要固定喺樓板邊度，避開夾層入面已有嘅管線。',
    'ip.plan.3':                 '<strong>揀檢修口位置。</strong>正對機側維修板，最少 60 × 60 cm。唔可以偏。',
    'ip.plan.4':                 '<strong>提早規劃風管走線。</strong>畫出回風同送風路徑，標出彎位，計清楚數量 — 每個 90° 彎要扣大概 10 Pa。',

    'ip.kit.heading':            '安裝當日要準備',
    'ip.kit.1.t':                'M10 不鏽鋼螺桿 × 4',
    'ip.kit.1.d':                '連螺母、墊片、橡膠減震墊',
    'ip.kit.2.t':                '軟管或硬管',
    'ip.kit.2.d':                '配合機身法蘭尺寸（⌀146 / ⌀196）',
    'ip.kit.3.t':                'DN15 排水管',
    'ip.kit.3.d':                '連止逆閥同存水彎',
    'ip.kit.4.t':                '3 × 2.5 mm² 電線',
    'ip.kit.4.d':                '同一個獨立 16 A 空氣開關',
    'ip.kit.5.t':                '86 型暗盒',
    'ip.kit.5.d':                '用嚟安裝 LCD 控制盒',
    'ip.kit.6.t':                '水平儀同捲尺',
    'ip.kit.6.d':                '最後扭緊之前要校水平',

    'ip.warn.t':                 '一樣嘢千祈唔好跳過。',
    'ip.warn.b':                 '裝修期間千祈唔好開機。石膏粉、英泥灰、木屑全部會吸入蒸發器，唔少耐就會搞壞壓縮機。封住入風口，等房間清潔好先開。',

    /* Install / Hanging */
    'ih.pill':                   '步驟 02 / 07',
    'ih.title':                  '吊裝',
    'ih.desc':                   '四條螺桿、機身校水平、螺桿同機腳之間夾橡膠墊。做得啱，部機運行起來會聽唔到聲。',
    'ih.chip.1':                 '4 × M10 304 不鏽鋼螺桿',
    'ih.chip.2':                 '螺桿預留 ≥ 2 cm',
    'ih.chip.3':                 '橡膠減震墊',
    'ih.illu.slab':              '混凝土樓板',
    'ih.illu.fc':                '假天花',
    'ih.illu.rod':               'M10 螺桿',
    'ih.illu.washer':            '橡膠墊片',
    'ih.how.heading':            '吊裝步驟',
    'ih.how.1':                  '<strong>由樓板放下四條螺桿</strong>，M10 304 不鏽鋼。長度要夠，機腳之下仲要有最少 2 cm 預留，方便之後校水平。',
    'ih.how.2':                  '<strong>每條螺桿穿上一塊橡膠墊片</strong>，先入墊片再入機腳，螺母上面再加一塊。墊片用嚟隔離風扇震動，唔俾傳上樓板。',
    'ih.how.3':                  '<strong>將機升上螺桿</strong>，對齊機身上面標示 1–4 嘅定位孔。',
    'ih.how.4':                  '<strong>校水平</strong> — 用水平儀放喺機面頂部度測。內部水盤要平放，唔係嘅話冷凝水就會積喺錯誤位置。',
    'ih.how.5':                  '<strong>對角逐步扭緊螺母</strong>，扭到橡膠輕輕被壓 — 唔好壓到全平。',
    'ih.warn.t':                 '機身唔好貼住樓板。',
    'ih.warn.b':                 '幾毫米嘅接觸都會將風扇震動傳到上樓嘅結構。中間嗰格空隙就係靜音嘅關鍵。',

    /* Install / Drainage */
    'id.pill':                   '步驟 03 / 07',
    'id.title':                  '排水',
    'id.desc':                   '每部 UTC 都內置可將冷凝水提升 1.8 米嘅水泵。重力不再係限制 — 但止逆閥同存水彎係必要。',
    'id.chip.1':                 '1.8 米水泵提升',
    'id.chip.2':                 'DN15 出水',
    'id.chip.3':                 '止逆閥 + 存水彎',
    'id.illu.cv':                '止逆',
    'id.illu.utrap':             '存水彎',
    'id.illu.stack':             '去去水位',
    'id.path.heading':           '排水路徑',
    'id.path.1':                 '<strong>水泵出口處</strong> — 即裝止逆閥。係佢防止水喺水泵停運時倒流。',
    'id.path.2':                 '<strong>跟住接存水彎</strong>。打斷空氣柱，唔俾水泵抽空氣入嚟代替推水。',
    'id.path.3':                 '<strong>DN15 喉管</strong>接到最近嘅去水位。先垂直上升，再水平降落到地漏。',
    'id.path.4':                 '<strong>夾層位置要包保溫</strong> — 喉管入面有凍水，經過暖濕空氣會結冷凝水。',
    'id.path.5':                 '<strong>兩部機共用一條去水路線？</strong>每部各自垂直落，盡量低位先合流。千祈唔好上面 T 字接駁。',
    'id.sign.heading':           '驗收前',
    'id.sign.body':              '由檢修口慢慢倒一公升水入水盤。水泵幾秒內應該開始運作，將水抽走。觀察成條管路嘅接駁位起碼五分鐘 — 漏水通常喺呢段時間先出現。',

    /* Install / Ducting */
    'ic.pill':                   '步驟 04 / 07',
    'ic.title':                  '風管',
    'ic.desc':                   '風管內徑要對齊機身法蘭。收細係最常見嘅安裝錯誤 — 風量會跌、機會反覆短啟動、設定值永遠達唔到。',
    'ic.chip.1':                 'UTC20/68 · ⌀146 mm',
    'ic.chip.2':                 'UTC120 · ⌀196 mm',
    'ic.chip.3':                 '送風 1.5 – 3 m/s',
    'ic.layouts.heading':        '揀一個佈局',
    'ic.l1.t':                   '獨立式',
    'ic.l1.d':                   '回風同送風都直接通房間。最簡單嘅安裝，完全唔涉及空調系統。大部分住宅嘅預設選擇。',
    'ic.l2.t':                   '回風側併入',
    'ic.l2.d':                   '抽濕機並聯喺空調回風段。喺空氣到達冷卻盤之前先除濕 — 冷卻盤少結露、潛熱負荷下降。',
    'ic.l3.t':                   '送風側併入',
    'ic.l3.d':                   '抽濕機獨立由房間抽風，將乾風送入空調送風管。要加防回流風閘，唔俾空調壓力倒灌。',
    'ic.l4.t':                   '旁通迴路',
    'ic.l4.d':                   '由空調回風取氣，乾風送回空調送風。完整並聯迴路 — 適合想要獨立濕度控制配合製冷。',
    'ic.l5.t':                   '獨立式 + 新風',
    'ic.l5.d':                   '加多一條室外新風支管，接入回風側。新風一入嚟就被抽乾。適合密封式住宅，CO₂ 夜晚會慢慢升高。',
    'ic.l6.t':                   '多區域氣室',
    'ic.l6.d':                   '一部機、中央氣室、分支去每個房間。全屋抽濕方案，配合 UTC68 或 UTC120。每個分支加防回流風閘。',
    'ic.rules.heading':          '幾個原則',
    'ic.r1':                     '<strong>軟管 OK</strong> — 短距離（3 米以下、完全拉直、唔屈摺）冇問題。',
    'ic.r2':                     '<strong>3 米以上要轉硬管</strong> — 鍍鋅或硬 PE 管，輕度保溫。',
    'ic.r3':                     '<strong>送風口風速 1.5 – 3 m/s</strong> — 低過呢個範圍就太懶散，高過就會嘶嘶聲。',
    'ic.r4':                     '<strong>最大風檔時保持 ≥ 80%</strong> 標稱風量。低過就係風阻太大。',
    'ic.r5':                     '<strong>主風管要盡量少彎</strong>。每個 90° 大約扣 10 Pa。',
    'ic.warn.t':                 '唔好為咗遷就而收細法蘭。',
    'ic.warn.b':                 '如果夾層空間唔夠，重新諗走線 — 千祈唔好減細法蘭口徑。146 mm 法蘭減 25 mm，風量會跌約 30%。',

    /* Install / Controls */
    'ico.pill':                  '步驟 05 / 07',
    'ico.title':                 '控制',
    'ico.desc':                  'LCD 牆面控制盒附帶 8 米電線，安裝喺標準 86 型暗盒。訊號線有編號順序 — 對號入座，記得斷電先接駁。',
    'ico.chip.1':                '86 × 86 mm 暗盒',
    'ico.chip.2':                '附 8 米電線',
    'ico.chip.3':                '有編號訊號線',
    'ico.where.heading':         '控制盒安裝位置',
    'ico.w1':                    '<strong>公共牆面、視線清楚</strong> — 用緊呢個房間嘅人都可以見到。',
    'ico.w2':                    '<strong>離地 1.3 – 1.5 米。</strong>讀數易睇，又方便操作。',
    'ico.w3':                    '<strong>遠離門窗同氣流路徑。</strong>放喺送風氣流入面會讀到乾風，部機會以為達標而提早停。',
    'ico.w4':                    '<strong>86 × 86 mm 暗盒</strong>，齊牆面安裝。8 米電線要走線管，唔可以散喺天花夾層。',
    'ico.smart.heading':         'App + 智能家居',
    'ico.smart.body':            '每部 UTC 都附帶 WiFi 連線 — 配對 DBA App，可遙距開機、設定時段同查睇濕度紀錄。如要接駁 BMS，側板下面有 Modbus RS485 端口。乾接點輸入可俾窗磁或漏水探測器強制關機。',
    'ico.warn.t':                '接駁訊號線之前要先斷電。',
    'ico.warn.b':                '部機帶電時插拔控制盒，會燒控制板。安裝指南寫得好清楚：斷電、接線、再通電。',

    /* Install / Power */
    'ipw.pill':                  '步驟 06 / 07',
    'ipw.title':                 '電源',
    'ipw.desc':                  '專用迴路、確實接地。唔好同其他電器共用 — 壓縮機啟動電流會令共用嘅開關跳閘。',
    'ipw.chip.1':                '3 × 2.5 mm² 起跳',
    'ipw.chip.2':                '16 A 專用斷路器',
    'ipw.chip.3':                '正規接地',
    'ipw.wiring.heading':        '配線',
    'ipw.w1':                    '<strong>電線：</strong>由總配電箱至機身端子排，最少 3 × 2.5 mm²。走線超過 15 米要加大。',
    'ipw.w2':                    '<strong>斷路器：</strong>專用 16 A 空氣開關、C 型 MCB。如果當地法例要求就用 RCBO。',
    'ipw.w3':                    '<strong>接地：</strong>駁去機身嘅接地端子 — 唔係螺絲嗰個。用萬用表確認連續性。',
    'ipw.w4':                    '<strong>隔離開關：</strong>裝喺檢修口可以到達嘅位置，方便維修時可以本地切斷。',
    'ipw.order.heading':         '順序',
    'ipw.o1':                    '<strong>拉電線</strong> — 由配電箱拉到機身，穿入正規線管。多餘嘅線唔好捲喺機箱入面，喺機箱外面整齊地盤好。',
    'ipw.o2':                    '<strong>接駁線芯</strong> — 接到端子排上面對應嘅 L、N、地線端子，扭緊力度要夠。',
    'ipw.o3':                    '<strong>接駁訊號線</strong> — 斷路器仍然係關閉狀態。訊號線有編號，按編號接駁。',
    'ipw.o4':                    '<strong>裝返檢修板</strong> — 再通電。連鎖裝置就係保護下一個維修嘅人。',
    'ipw.o5':                    '<strong>由配電箱通電</strong> — 等控制盒亮起，再做調試檢查。',
    'ipw.warn.t':                '部機帶電時千祈唔好維修。',
    'ipw.warn.b':                '壓縮機啟動瞬間有幾百伏電壓，電容器即使跳閘後都可能仍然帶電。要先鎖斷電、驗證冇電、先打開維修。',

    /* Install / Commissioning */
    'icm.pill':                  '步驟 07 / 07',
    'icm.title':                 '調試',
    'icm.desc':                  '10 分鐘嘅試機觀察，可以分開一個乾淨利落嘅安裝同六星期之後嘅 callback。',
    'icm.chip.1':                '10 分鐘監察',
    'icm.chip.2':                '無錯誤代碼',
    'icm.chip.3':                '排水測試',
    'icm.test.heading':          '10 分鐘試機',
    'icm.t1':                    '<strong>通電。</strong>LCD 控制盒啟動 — 沒有錯誤代碼。',
    'icm.t2':                    '<strong>設為除濕模式</strong>，目標 50% RH。風扇應由低 → 中 → 高順暢遞升。',
    'icm.t3':                    '<strong>壓縮機應於 90 秒內啟動。</strong>沒有撞擊聲、沒有金屬雜音、風扇無突然變大聲。',
    'icm.t4':                    '<strong>喺送風口聽聲。</strong>無嘶嘶聲、無風閘抖動。如果有嘶聲，係風管收得太細。',
    'icm.t5':                    '<strong>觀察排水。</strong>水泵應於 5 分鐘內運轉一次。檢查管路上每個接駁位，再睇存水彎。',
    'icm.t6':                    '<strong>10 分鐘後，</strong>控制盒嘅濕度讀數應該開始下降。如果持平或者上升，要先排查風量問題，先唔好怪部機。',
    'icm.handoff.heading':       '交付',
    'icm.handoff.body':          '同戶主介紹三樣嘢，順序係：濾網位置（同點樣清洗）、控制盒點調目標濕度、點樣用 DBA App 配對。將安裝卡同用戶手冊交俾佢。喺控制盒後面寫低部機嘅機身編號 — 將來叫維修時，第一句就會問。',
    'icm.done.t':                '呢個就係一個乾淨利落嘅安裝。',
    'icm.done.b':                '一部正確調試嘅 UTC，配合每月清濾網同每年抹一次蒸發器，可以靜悄悄運行十年。',

    /* Troubleshooting */
    'ts.eyebrow':                '如果覺得有啲怪',
    'ts.title':                  '故障排除',
    'ts.desc':                   '大部分「壞咗」嘅抽濕機，其實係風量唔夠、濾網塞咗、或者排水卡咗。打電話之前先逐項試一次。',
    'ts.1.tag':                  '抽濕量低',
    'ts.1.title':                '冇以前咁多水',
    'ts.1.b1':                   '取出濾網 — 如果灰咗或者塞咗，用暖水沖洗、風乾、裝返。試多 24 小時。',
    'ts.1.b2':                   '用手背感應送風口風量，應有一定壓力。如果好弱，可能係風管塌咗或者屈到。',
    'ts.1.b3':                   '由檢修口睇蒸發器。室溫下蒸發器結霜 = 冷媒不足，叫維修。',
    'ts.1.b4':                   '確認房間冇持續增加濕度嘅來源 — 開窗、晾衫、植物。',
    'ts.2.tag':                  '噪音',
    'ts.2.title':                '天花傳出咯咯聲、撞擊聲或者嗡嗡聲',
    'ts.2.b1':                   '打開檢修口，睇下機身有冇貼住樓板。如果係，鬆螺母半圈 — 橡膠墊片要靠空隙先發揮減震作用。',
    'ts.2.b2':                   '檢查風管接駁。軟管同金屬法蘭鬆動會嗡嗡聲 — 用扣帶夾緊、加膠紙。',
    'ts.2.b3':                   '啟動時嘅撞擊聲係壓縮機正常。如果運作中持續撞擊 = 固定螺絲鬆咗或者冷媒問題。',
    'ts.3.tag':                  '滲水',
    'ts.3.title':                '天花或檢修口有水滴出嚟',
    'ts.3.b1':                   '先關電。',
    'ts.3.b2':                   '打開檢修口。如果水盤有水，水泵冇正常運作 — 檢查止逆閥同存水彎。',
    'ts.3.b3':                   '如果水喺送風管面，係風管表面結露 — 夾層段要加保溫。',
    'ts.3.b4':                   '如果水喺接駁位，重新打密封膠、夾緊扣帶。',
    'ts.4.tag':                  '面板',
    'ts.4.title':                'LCD 有錯誤代碼',
    'ts.4.intro':                '錯誤代碼都列喺出貨附帶嘅用戶手冊。最常見幾個：',
    'ts.4.b1':                   '<strong>E1 / E2</strong> — 感應器故障，通常係訊號線鬆咗。關電、重新插控制盒嘅連線。',
    'ts.4.b2':                   '<strong>E3</strong> — 防霜保護。部機會 30 分鐘後自動恢復。如果重複觸發，係房間太凍唔啱冷媒循環。',
    'ts.4.b3':                   '<strong>P1</strong> — 水泵冇排水。檢查排水管。',
    'ts.4.foot':                 '如果完整斷電 60 秒後重新通電都仲有錯誤，撥電話俾維修時，提供錯誤代碼同部機編號。',
    'ts.5.tag':                  '無電源',
    'ts.5.title':                '面板無光、部機無反應',
    'ts.5.b1':                   '檢查配電箱嘅斷路器。如果跳咗，重置一次。如果再跳，停手 — 真係有故障。',
    'ts.5.b2':                   '如果斷路器無事，檢查檢修口嗰個隔離開關。',
    'ts.5.b3':                   '兩者都正常但面板無光，可能係控制盒連線鬆咗 — 關電、重新插、再試。',
    'ts.6.tag':                  '異味',
    'ts.6.title':                '送風口傳出霉味',
    'ts.6.b1':                   '濾網 — 沖洗一次。八成嘅情況都係呢個原因。',
    'ts.6.b2':                   '連續開幾個循環 UV-C 燈（喺控制盒可以揀）。',
    'ts.6.b3':                   '如果仲係咁，預約年度蒸發器清潔 — 蒸發器本身會慢慢長生物膜。',
    'ts.next':                   '仲未搞掂？聯絡我哋',

    /* Maintenance */
    'mn.eyebrow':                '部機保養得好，用得十年',
    'mn.title':                  '日常保養',
    'mn.desc':                   '一年三項工作。每項都唔需要超過十分鐘。',
    'mn.m.cadence':              '每月',
    'mn.m.title':                '沖洗濾網',
    'mn.m.body':                 '打開檢修口、抽出不鏽鋼濾網、用暖水沖到水變清為止。風乾後裝返。',
    'mn.m.1':                    '唔好用洗潔精 — 會留下殘留物。',
    'mn.m.2':                    '如果有人吸煙或者燒香，要每兩星期清一次。',
    'mn.m.3':                    '千祈唔好裝返濕嘅濾網 — 第一日就會開始長生物膜。',
    'mn.q.cadence':              '每季',
    'mn.q.title':                '目測檢查',
    'mn.q.body':                 '由檢修口望入去五分鐘。睇下安裝後有冇嘢移咗位、變咗。',
    'mn.q.1':                    '排水管接駁位 — 有冇潮濕或者礦物結晶？',
    'mn.q.2':                    '送風管嘅保溫 — 完好同乾爽？',
    'mn.q.3':                    '螺桿螺母 — 用手指試下有冇鬆咗。',
    'mn.q.4':                    '面板顯示嘅濕度 vs 室內獨立濕度計 — 相差應該喺 3% 之內。',
    'mn.y.cadence':              '每年',
    'mn.y.title':                '蒸發器同排水保養',
    'mn.y.body':                 '先由斷路器關電。用軟毛刷掃蒸發器嘅鰭片，再用濕布抹 — 千祈唔好屈到鰭片。倒一公升水入水盤，驗證水泵仲清得快、止逆閥仍然密封。',
    'mn.y.1':                    '如果鰭片有油 — 例如廚房安裝 — 要用蒸發器清潔劑。',
    'mn.y.2':                    'UV-C 燈每 18 – 24 個月要換。',
    'mn.y.3':                    '韌體：順手喺 DBA App 入面睇下有冇更新。',
    'mn.warn.t':                 '如果你住廚房上層或者近海邊，',
    'mn.warn.b':                 '所有保養間隔都要減半。油煙同鹽霧令蒸發器積污速度快一倍。',

    /* Contact */
    'ct.eyebrow':                '提交圖則，回覆草圖建議',
    'ct.title':                  '聯絡我哋',
    'ct.desc':                   '俾我哋平面圖、樓底高度、想擺嘅位置。我哋會回覆一張草圖同初步型號建議 — 沒有承諾。',
    'ct.sg.region':              '新加坡',
    'ct.sg.org':                 'DBA Electric Pte. Ltd.',
    'ct.sg.addr':                'Block B, Cititech Industrial Building, 629 Aljunied Road, #07‑08, Singapore 389838',
    'ct.hk.region':              '香港',
    'ct.hk.org':                 '帝霸亞綠色科技（香港）有限公司',
    'ct.hk.addr':                '香港葵涌貢業街 10–14 號華發工業大廈 4 樓 4 室',
    'ct.note':                   '通常一個工作天內回覆。住宅同工業項目都歡迎。',
  };

  /* ============================================================
     Router config
     ============================================================ */
  const PAGES = {
    'home':                    { titleKey:null,                       titleEN:'dba<em>diy</em>',     crumb:'',                       parent:null },
    'models':                  { titleKey:'home.tile.models.title',    titleEN:'Models',              crumb:'',                       parent:'home' },
    'sizing':                  { titleKey:'home.tile.sizing.title',    titleEN:'Sizing',              crumb:'',                       parent:'home' },
    'troubleshooting':         { titleKey:'home.tile.troubleshooting.title', titleEN:'Troubleshooting', crumb:'',                  parent:'home' },
    'maintenance':             { titleKey:'home.tile.maintenance.title', titleEN:'Maintenance',       crumb:'',                       parent:'home' },
    'contact':                 { titleKey:'home.tile.contact.title',   titleEN:'Contact',             crumb:'',                       parent:'home' },
    'install':                 { titleKey:'install.title',             titleEN:'Installation',        crumb:'',                       parent:'home' },
    'install/preparation':     { titleKey:'ip.title',                  titleEN:'Preparation',         crumbKey:'sf.crumb.1', crumbEN:'Install · 01 / 07', parent:'install' },
    'install/hanging':         { titleKey:'ih.title',                  titleEN:'Hanging',             crumbKey:'sf.crumb.2', crumbEN:'Install · 02 / 07', parent:'install' },
    'install/drainage':        { titleKey:'id.title',                  titleEN:'Drainage',            crumbKey:'sf.crumb.3', crumbEN:'Install · 03 / 07', parent:'install' },
    'install/ducting':         { titleKey:'ic.title',                  titleEN:'Ducting',             crumbKey:'sf.crumb.4', crumbEN:'Install · 04 / 07', parent:'install' },
    'install/controls':        { titleKey:'ico.title',                 titleEN:'Controls',            crumbKey:'sf.crumb.5', crumbEN:'Install · 05 / 07', parent:'install' },
    'install/power':           { titleKey:'ipw.title',                 titleEN:'Power',               crumbKey:'sf.crumb.6', crumbEN:'Install · 06 / 07', parent:'install' },
    'install/commissioning':   { titleKey:'icm.title',                 titleEN:'Commissioning',       crumbKey:'sf.crumb.7', crumbEN:'Install · 07 / 07', parent:'install' },
  };

  T['sf.crumb.1'] = '安裝 · 01 / 07';
  T['sf.crumb.2'] = '安裝 · 02 / 07';
  T['sf.crumb.3'] = '安裝 · 03 / 07';
  T['sf.crumb.4'] = '安裝 · 04 / 07';
  T['sf.crumb.5'] = '安裝 · 05 / 07';
  T['sf.crumb.6'] = '安裝 · 06 / 07';
  T['sf.crumb.7'] = '安裝 · 07 / 07';

  /* ============================================================
     DOM refs
     ============================================================ */
  const screens   = document.querySelectorAll('.screen');
  const header    = document.getElementById('app-header');
  const titleEl   = document.getElementById('app-title');
  const crumbEl   = document.getElementById('hdr-crumb');
  const backBtn   = document.getElementById('back-btn');
  const langBtn   = document.getElementById('lang-toggle');

  /* ============================================================
     Language
     ============================================================ */
  let LANG = (function(){
    try {
      const stored = localStorage.getItem('dbadiy.lang');
      if (stored === 'en' || stored === 'zh') return stored;
    } catch(_){}
    // Fallback: detect HK/TW/CN browsers → zh
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('zh')) return 'zh';
    return 'en';
  })();

  function applyLang(lang){
    LANG = lang;
    try { localStorage.setItem('dbadiy.lang', lang); } catch(_){}
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : 'en');
    document.body.classList.toggle('lang-zh', lang === 'zh');
    langBtn.setAttribute('data-active', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      // Cache the original English on first run
      if (!el.hasAttribute('data-i18n-en')) {
        el.setAttribute('data-i18n-en', el.innerHTML);
      }
      if (lang === 'zh' && T[key] != null) {
        const val = T[key];
        if (val.includes('<')) el.innerHTML = val;
        else el.textContent = val;
      } else {
        el.innerHTML = el.getAttribute('data-i18n-en');
      }
    });

    // Re-apply header title for the current screen
    setHeader(currentId);
  }

  langBtn.addEventListener('click', () => {
    applyLang(LANG === 'en' ? 'zh' : 'en');
  });

  /* ============================================================
     Header
     ============================================================ */
  function setHeader(id){
    const meta = PAGES[id];
    if (id === 'home') {
      header.setAttribute('data-on', 'home');
      titleEl.innerHTML = 'dba<em>diy</em>';
      crumbEl.textContent = '';
      return;
    }
    header.removeAttribute('data-on');
    const title = (LANG === 'zh' && meta.titleKey && T[meta.titleKey]) ? T[meta.titleKey] : meta.titleEN;
    titleEl.textContent = title;
    if (meta.crumbKey) {
      crumbEl.textContent = (LANG === 'zh' && T[meta.crumbKey]) ? T[meta.crumbKey] : (meta.crumbEN || '');
    } else {
      crumbEl.textContent = '';
    }
  }

  /* ============================================================
     Stepper (install sub-screens)
     ============================================================ */
  function buildSteppers(){
    document.querySelectorAll('.stepper').forEach(stepper => {
      const active = parseInt(stepper.getAttribute('data-active') || '0', 10);
      stepper.innerHTML = '';
      for (let i = 0; i < 7; i++){
        const a = document.createElement('a');
        a.className = 'sd';
        if (i === active) a.classList.add('sd-active');
        if (i < active) a.classList.add('sd-done');
        const ids = ['install/preparation','install/hanging','install/drainage','install/ducting','install/controls','install/power','install/commissioning'];
        a.href = '#' + ids[i];
        a.setAttribute('aria-label', 'Step ' + (i+1));
        stepper.appendChild(a);
      }
    });
  }

  /* ============================================================
     Router
     ============================================================ */
  let currentId = 'home';

  function getHashId(){
    const raw = (location.hash || '').replace(/^#/, '');
    if (!raw) return 'home';
    return PAGES[raw] ? raw : 'home';
  }

  function show(id, direction){
    const next = document.querySelector(`.screen[data-screen="${id}"]`);
    if (!next) return;
    screens.forEach(s => s.classList.remove('active','slide-in-right','slide-in-left'));
    next.classList.add('active');
    if (direction > 0) next.classList.add('slide-in-right');
    else if (direction < 0) next.classList.add('slide-in-left');
    setHeader(id);
    // Reset window scroll for the new screen
    window.scrollTo({ top: 0 });
    currentId = id;
  }

  function navigate(id){
    if (!PAGES[id]) id = 'home';
    if (id === currentId) return;
    let direction = +1;
    if (id === 'home') direction = -1;
    else if (currentId !== 'home' && PAGES[currentId].parent === id) direction = -1;
    show(id, direction);
  }

  function goBack(){
    const meta = PAGES[currentId];
    if (!meta || !meta.parent) {
      location.hash = '#home';
      return;
    }
    location.hash = '#' + meta.parent;
  }

  backBtn.addEventListener('click', goBack);

  window.addEventListener('hashchange', () => navigate(getHashId()));

  // Intercept in-app anchor clicks for snappy nav
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const id = href.slice(1);
    if (!PAGES[id]) return;
    if (id === currentId) { e.preventDefault(); return; }
    e.preventDefault();
    if (location.hash === href) navigate(id);
    else location.hash = href;
  });

  /* ============================================================
     Haptic on tap + edge swipe back
     ============================================================ */
  document.addEventListener('click', (e) => {
    const tappable = e.target.closest('.tile, .step-card, .size-opt, .official-link, .contact-act, .sf-next, .sf-back, .next-link, #back-btn, .lang-toggle, .sd');
    if (!tappable) return;
    if (navigator.vibrate) navigator.vibrate(8);
  }, { passive: true });

  let touchStartX = 0, touchStartY = 0, touchStartT = 0;
  document.addEventListener('touchstart', (e) => {
    if (!e.touches[0]) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartT = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (currentId === 'home') return;
    if (!e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const dt = Date.now() - touchStartT;
    if (touchStartX < 32 && dx > 80 && Math.abs(dy) < 60 && dt < 600) {
      goBack();
    }
  }, { passive: true });

  /* ============================================================
     Boot
     ============================================================ */
  function boot(){
    buildSteppers();
    applyLang(LANG);
    show(getHashId(), 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
