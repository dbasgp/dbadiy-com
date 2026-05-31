/* ===========================================================
   DBA DIY — router, i18n, transitions
   =========================================================== */

(function(){

  /* ============================================================
     i18n — Traditional Chinese (formal written style)
     ============================================================ */
  const T = {
    /* Home */
    'home.feature.tag':          '7 個步驟。安裝前必讀',
    'home.feature.title':        '安裝指南',
    'home.feature.desc':         '主機及跟機配件、準備、吊裝、排水、風管、控制、電源、驗收測試。',
    'home.feature.go':           '開始查看',
    'home.tile.models.title':    '產品概覽',
    'home.tile.models.desc':     '技術參數、功能',
    'home.product.tag':          'UTC20 · 55 · 68 · 120',
    'home.product.go':           '查看規格',
    'ov.specs.title':            '產品技術參數',
    'home.official.eyebrow':     '官方網站',
    'home.official.sg':          '新加坡',
    'home.official.hk':          '香港',
    'home.foot.copy':            '© 2026 DBA Electric',
    'home.foot.note':            '教學參考，並非工程認證。',

    /* Models */
    'models.eyebrow':            '四種尺寸，同一輕薄機身',
    'models.title':              'Ultra Thin 超薄系列',
    'models.desc':               '同一天花機身、同一控制系統、內置排水泵。容量由 20 至 120 L/day。',
    'models.utc20.desc':         '單一房間或工作室規格。R410A 冷媒，單進風口。',
    'models.utc55.desc':         '介於 UTC20 與 UTC68 之間的中型款。採用 R32 冷媒（輕度可燃）。',
    'models.utc55.refr':         'R32 · 0.3 kg（輕度可燃）',
    'models.utc68.tag':          'DBA-UTC68 · 熱銷',
    'models.utc68.desc':         '全屋抽濕首選。R410A 冷媒，單進風口。',
    'models.utc120.desc':        '大型住宅及輕型商業空間。R410A 冷媒，雙進風口設計。',
    'models.spec.capacity':      '抽濕量',
    'models.spec.psupply':       '電源',
    'models.spec.prated':        '額定功率',
    'models.spec.pmax':          '最大功率',
    'models.spec.crated':        '額定電流',
    'models.spec.cmax':          '最大電流',
    'models.spec.airflow':       '最大風量',
    'models.spec.static':        '靜壓',
    'models.spec.noise':         '聲壓（3米）',
    'models.spec.cover':         '建議面積',
    'models.spec.flange':        '進/出風口口徑',
    'models.spec.drainsize':     '排水口尺寸',
    'models.spec.refrigerant':   '冷媒',
    'models.spec.optemp':        '運作溫度',
    'models.spec.pump':          '排水泵揚程',
    'models.spec.weight':        '淨重',
    'models.spec.size':          '尺寸（長×闊×高）',
    'models.spec.certs':         '認證',
    'models.grp.perf':           '性能',
    'models.grp.power':          '電氣參數',
    'models.grp.connect':        '排水與風管',
    'models.grp.physical':       '機身與認證',
    'models.utc68.popular':      'UTC68 · 熱銷',
    'models.utc20.energy':       '香港一級能源標籤',
    'models.utc55.r32badge':     'R32 · A2L',
    'models.utc120.twin':        '雙進風 ⌀196',
    'models.shared.h':           '所有 UTC 系列共通配置',
    'models.share.pump.t':       '1.8 米排水揚程',
    'models.share.pump.d':       '內置水泵與止回閥；DN15 排水口。',
    'models.share.uv.t':         'UV-C 殺菌燈',
    'models.share.uv.d':         '選配紫外光燈，可去除 99.9% 空氣中細菌。',
    'models.share.filter.t':     '不鏽鋼濾網',
    'models.share.filter.d':     '可水洗。建議每兩星期清潔一次。',
    'models.share.wifi.t':       'WiFi 與 RS485 Modbus',
    'models.share.wifi.d':       '塗鴉智能 App · BMS / PLC 經 RS485 通訊 9600 bps。',
    'models.share.dry.t':        '乾接點遠端控制',
    'models.share.dry.d':        '可接 BMS 聯動、消防停機、漏水感應器輸入。',
    'models.share.cert.t':       'CE · CB · RoHS · ISO 9001',
    'models.share.cert.d':       '全系列具多區國際認證。',
    'models.marquee.tag':        '簡約設計',
    'models.marquee.t':          '20 cm 超薄機身，完全隱藏天花。',
    'models.catfeat.house.t':    '一機抽濕全屋',
    'models.catfeat.house.d':    '由天花夾層分風管至每個房間，一台 UTC68 或 UTC120 已可覆蓋整個單位。',
    'models.catfeat.uv.t':       'UV-C 紫外線殺菌',
    'models.catfeat.uv.d':       '選配紫外光燈，可滅除 99.9% 流經蒸發器的空氣細菌與病毒。',
    'models.catfeat.lcd.t':      '面板 · App · BMS 整合',
    'models.catfeat.lcd.d':      '86×86 LCD 控制面板，2.4 GHz 塗鴉智能 App，並支援 RS485 Modbus 接入 BMS / PLC。',
    'models.catfeat.pump.t':     '1.8 米排水揚程 · DN15',
    'models.catfeat.pump.d':     '內置水泵與止回閥，可將冷凝水提升至 1.8 米送往最近的排水立管。',
    'models.catfeat.motor.t':    '金屬鑄造電機',
    'models.catfeat.motor.d':    '採用日本 NSK 軸承及金屬機殼 — 運轉低溫、極之安靜，使用壽命長達十年。',
    'models.catfeat.quiet.t':    '40 dB 寧靜運轉',
    'models.catfeat.quiet.d':    '機底多重避震墊隔離壓縮機振動，無傳到結構板。',
    'models.next':               '查看安裝指南',

    /* Install hub */
    'install.eyebrow':           '參考自官方 DBA UTC 安裝卡',
    'install.title':             '安裝指南',
    'install.step.parts.t':      '主機及跟機配件',
    'install.step.parts.d':      '機身結構、接口位置、開箱配件清單。',
    'install.step.prep.t':       '準備工作',
    'install.step.prep.d':       '通電測試、規劃。',
    'install.step.hang.t':       '吊裝',
    'install.step.hang.d':       'M10 螺桿、水平、減震。',
    'install.step.drain.t':      '排水',
    'install.step.drain.d':      '水泵揚程 1.8 米。',
    'install.step.duct.t':       '風管',
    'install.step.duct.d':       '⌀146 / ⌀196 mm 法蘭。',
    'install.step.ctrl.t':       '控制',
    'install.step.ctrl.d':       '控制面板、濕度感應器。',
    'install.step.pow.t':        '電源',
    'install.step.pow.d':        '13 A 220 V、2.5 mm²。',
    'install.marquee.t':         'DBA 天花式抽濕系統',
    'id.fig.pump':               '自動抽水排水 — 揚程可達 1.8 米，內置止回閥。',
    'ico.fig.lcd':               '86×86 mm 牆面 LCD 控制板用作日常操作；塗鴉智能 App 可遙距控制；RS485 Modbus 可接 BMS。',
    'install.step.com.t':        '驗收測試',
    'cases.eyebrow':             '實際工程',
    'cases.title':               '工程案例',
    'cases.desc':                '點擊卡片展開，查看項目相片與簡要說明。',
    'cases.c1.t':                '住宅項目 — 太古城單位',
    'cases.c1.s':                '2 × UTC68 · 雙風管 · 假天花檢修口',
    'cases.c1.n':                '客戶希望客廳完全看不到出風格柵。兩台 UTC68 隱藏於假天花，由線型風口出風；檢修口設於廚房一側方便日後保養。',
    'cases.c2.t':                '商業項目 — 中環辦公室',
    'cases.c2.s':                'UTC120 · 長距離排水 · BMS 整合',
    'cases.c2.n':                '開放式辦公室、單管 HVAC 系統難以處理濕氣。UTC120 安裝於走廊天花夾層，排水管走 12 米至最近污水管，中途加裝助力存水彎。',
    'cases.c3.t':                '儲物項目 — 紅磡迷你倉',
    'cases.c3.s':                'UTC20 × 4 · 並聯運行 · 集中控制',
    'cases.c3.n':                '四台 UTC20 分佈於迷你倉樓層，各自接駁短風管至獨立分區，入口設集中 LCD 控制板供操作員使用。',
    'cases.c4.t':                '私人項目 — 西貢別墅酒窖',
    'cases.c4.s':                'UTC55 · 低濕度設定 · 靜音排水',
    'cases.c4.n':                '私人酒窖全年維持 55% 相對濕度。UTC55 配獨立排水路徑及機身吸音包覆，於試酒區旁靜音運行。',
    'install.step.com.d':        '通電測試、排水測試。',
    'install.start':             '由第 1 步開始',

    /* Step footer */
    'sf.next':                   '下一步',
    'sf.go':                     '進入',
    'sf.done':                   '完成',

    /* Install / Preparation */
    'ip.pill':                   '步驟 02 / 08',
    'ip.title':                  '準備',
    'ip.desc':                   '安裝前，請在地面通電試機。確保抽濕機運作正常。',
    'ip.chip.1':                 '10 分鐘試機',
    'ip.chip.2':                 '檢修口 450 / 600 mm',
    'ip.chip.3':                 '維修板方向',
    'ip.bench.badge':            '必做',
    'ip.bench.title':            '吊裝前，進行 10 分鐘通電試機',
    'ip.bench.lede':             '開箱後將抽濕機置於地面或工作枱上，進行 10 分鐘通電檢查。（安裝前後，機器均必須通電測試。）',
    'ip.bench.s1':               '<strong>開箱</strong> — 打開紙箱，將抽濕機平放於地面。包裝請暫時保留，以便有需要時退貨。',
    'ip.bench.s2':               '<strong>LCD 控制面板</strong> — LCD 控制面板信號線連接機身端子 4-7。',
    'ip.bench.s3':               '<strong>溫濕度感應器</strong> — 溫濕度感應器連接機身端子 1-3。',
    'ip.bench.s4':               '<strong>通電</strong> — 可暫用接地的 220-240V 插座。',
    'ip.bench.s5':               '<strong>開機</strong> — 風扇即時運轉，壓縮機於 3 秒延遲後啟動（請確保抽濕機處於抽濕模式）。',
    'ip.bench.s6':               '<strong>強制啟動壓縮機</strong> — 確保抽濕機濕度目標設為 40% RH 或以下。（如濕度目標高於環境濕度，壓縮機無法啟動）',
    'ip.bench.s7':               '<strong>抽濕模式下運行超過 10 分鐘</strong> — 留意風扇和壓縮機運作時有沒有異常聲響。出風口有暖風吹出代表抽濕功能正常。亦可將溫濕度感應器靠近出風口，LCD 控制面板顯示的濕度值會逐漸下降。<span class="warn-inline">出風口內有金屬風機，切勿將手或物件伸入出風口。</span>',
    'ip.bench.s8':               '<strong>檢查 LCD 控制面板</strong> — 確保 LCD 控制面板顯示及操作正常，無顯示故障代碼。',
    'ip.bench.ok':               '沒有錯誤代碼？可以開始安裝。',

    'ip.plan.heading':           '開工之前，請確保：',
    'ip.plan.1':                 '<strong>確認天花夾層高度</strong> — UTC20 需要 200mm、UTC68 需要 240mm、UTC120 需要 310mm — 並上下預留 2-30mm 空隙，避免機身貼合樓板及假天花。',
    'ip.plan.2':                 '<strong>確定吊裝位置</strong> — 標出四條螺桿固定於樓板的位置，避開樓板內已有的管線。',
    'ip.plan.3':                 '<strong>選定檢修口位置</strong> — 尺寸建議採用 450 × 450 mm 或 600 × 600 mm，正對著機身的維修板那一面（即排水出口側）。',
    'ip.plan.4':                 '<strong>提早規劃風喉路徑</strong> — 繪出回風與送風路徑，標出彎位並計算數量，每個 90° 彎位約扣減 10 Pa。',

    'ip.kit.heading':            '安裝所需材料',
    'ip.kit.intro':              '推薦吊裝配件，材質皆為 304 不鏽鋼：',
    'ip.kit.1.t':                'M10 膨脹螺絲 × 4',
    'ip.kit.1.d':                '將螺桿固定於混凝土樓板',
    'ip.kit.2.t':                'M10 螺桿 × 4',
    'ip.kit.2.d':                '主要承重螺桿（切至所需長度，一般 1–2 米）',
    'ip.kit.3.t':                'M10 六角螺母 × 12',
    'ip.kit.3.d':                '用於調節高度、校正水平與鎖緊',
    'ip.kit.4.t':                'M10 平墊片 × 12',
    'ip.kit.4.d':                '分散負載、保護表面',
    'ip.kit.5.t':                'M10 防鬆墊圈 × 12',
    'ip.kit.5.d':                '防止螺母因震動而鬆脫',
    'ip.kit.6.t':                '橡膠減震墊',
    'ip.kit.6.d':                '裝於機身吊耳，使運行更靜音',
    'ip.kit.7.t':                '軟管 + 硬管',
    'ip.kit.7.d':                '一般走線用鋁箔軟管；較長段使用鍍鋅硬管',
    'ip.kit.8.t':                '500 - 1000 mm 靜音風管',
    'ip.kit.8.d':                '機身法蘭與硬管之間的防震靜音軟管',
    'ip.kit.9.t':                '保溫排水管',
    'ip.kit.9.d':                '連同上行存水彎（止回閥已內置於機身）',
    'ip.kit.10.t':               '3 × 2.5 mm² 電線',
    'ip.kit.10.d':               '以及一個獨立 13A 220V 電源插座',
    'ip.kit.11.t':               '86 型暗盒',
    'ip.kit.11.d':               '用以安裝 LCD 控制盒（隨附 8 米線）',
    'ip.kit.12.t':               '水平儀與捲尺',
    'ip.kit.12.d':               '最後鎖緊之前需要校正水平',

    'ip.warn.t':                 '此事切勿忽略。',
    'ip.warn.b':                 '裝修期間切勿開機。石膏粉、英泥灰、木屑都會被吸入蒸發器，不久後便會損壞壓縮機。請封住入風口，待房間清潔完成後再啟動。',

    'ip.bench.fig':              '通電試機前，先把控制盒（端子 4–7）和溫濕度感應器（端子 1–3）接好。',

    /* Install / Hanging */
    'ih.pill':                   '步驟 03 / 08',
    'ih.title':                  '吊裝',
    'ih.desc':                   'M10 螺桿吊掛式固定抽濕機，保持機身水平。',
    'ih.chip.1':                 '4 × M10 304 不鏽鋼螺桿',
    'ih.chip.2':                 '抽濕機上下預留 ≥ 2 cm',
    'ih.chip.3':                 '橡膠減震墊',
    'ih.how.heading':            '吊裝步驟',
    'ih.how.1':                  '<strong>在混凝土天花固定四條 M10 不鏽鋼螺桿</strong>，可使用配送的定孔紙板標記鑽孔位置。抽濕機上下需預留至少 2 cm，方便之後校正水平。',
    'ih.how.2':                  '<strong>建議螺桿套上橡膠墊片</strong>，上下夾緊抽濕機機腳，防止震動傳至樓板。',
    'ih.how.3':                  '<strong>將抽濕機提升至螺桿上</strong>，對齊機身四角的安裝孔位。',
    'ih.how.4':                  '<strong>用水平儀放於機頂或機底測量</strong>，確保抽濕機水平。',
    'ih.orient.heading':         '安裝位置及方向 — 鑽孔之前先確定',
    'ih.orient.1':               '<strong>天花檢修口</strong> — 必須面向機身維修側板。切勿將機身維修側板朝向牆壁，以免影響日後維修保養。',
    'ih.orient.2':               '<strong>回風口與出風口</strong> — 位於機身兩端，兩端均需要預留最少 0.5 米空間，方便接駁風管。',
    'ih.orient.3':               '<strong>排水泵出口</strong> — 位於機身維修側板下方。',
    'ih.orient.4':               '<strong>有線控制盒、電源線、緊急按鈕</strong> — 位於出風口左側。',
    'ih.hatch.heading':          '檢修口',
    'ih.hatch.1':                '<strong>檢修口尺寸建議：450 × 450 mm、450 × 600 mm 或 600 × 600 mm</strong>，位置需正對著機身維修側板。',
    'ih.hatch.4':                '<strong>濾網每 3–6 個月清洗一次</strong> — 天花檢修口每年都會使用，確保檢修口設計實用。',

    'ih.fig.clear':              '橡膠墊片置於螺桿與機腳之間，將震動阻隔於結構之外。',

    /* Install / Drainage */
    'id.pill':                   '步驟 04 / 08',
    'id.title':                  '排水',
    'id.desc':                   'UTC 系列內置自動排水泵，揚程達 1.8 米。',
    'id.chip.1':                 '揚程 1.8 米排水泵',
    'id.chip.4':                 '機身排水口 DN15 規格',
    'id.chip.2':                 '內置止回閥',
    'id.chip.3':                 '上行存水彎',
    'id.path.heading':           '排水要求',
    'id.path.1':                 '<strong>內置止回閥</strong> — 不需額外加裝。可防止冷凝水倒流入機內。',
    'id.path.2':                 '<strong>加裝上行存水彎</strong> — 可隔絕排水管的空氣與異味。',
    'id.path.3':                 '<strong>排水管需套保溫棉</strong> — 可防止水管表面產生冷凝水。',
    'id.path.4':                 '<strong>機身排水口需要先連接軟管</strong> — 可防止機器的震動傳導到水管上。切勿用硬管接駁機身排水口。',
    'id.path.5':                 '<strong>共用排水管</strong> — 多條排水管可於低位匯合到主排水管。切勿於頂部 T 字接駁。',
    'id.cycle.heading':          '水泵運作邏輯',
    'id.cycle.body':             '機器運轉期間，內置水泵以 <strong>開啟 3 分鐘、關閉 5 分鐘</strong> 循環運作。如排水堵塞或水泵故障，LCD 控制面板會顯示故障代碼 <strong>E3</strong>（水滿保護）。',
    'id.sign.heading':           '驗收前',
    'id.sign.body':              '從檢修口慢慢倒入 1–2 公升水至水盤。通電開機，水泵應於一分鐘內啟動並將水抽走。然後觀察整段管路的接駁位至少五分鐘，確保沒有任何漏水的可能。',

    'id.fig':                    '內置水泵可將冷凝水提升至 1.8米。加裝上行存水彎，阻隔倒流與異味。',

    /* Install / Ducting */
    'ic.pill':                   '步驟 05 / 08',
    'ic.title':                  '風管',
    'ic.desc':                   '一般走線使用軟性鋁箔風管；較長或硬管段使用鍍鋅硬管。機身法蘭與硬管之間必須透過 300–500 mm 軟管段連接 — 用以隔絕壓縮機震動傳入室內。',
    'ic.chip.1':                 '300–500 mm 軟管段',
    'ic.chip.2':                 '主風管總長 10 米內',
    'ic.chip.3':                 '150 mm 或 200 mm 直徑風管',
    'ic.r1':                     '優先選用鋁箔軟風管，安裝方便、靜音。較長的管段可改用鍍鋅硬管。',
    'ic.r2':                     '主風管總長度（送風 + 回風）建議 10 米內。超過此長度，風量會損耗而下降。（DBA-UTC20主風管總長度建議不超過5米。）',
    'ic.r3':                     '送風與回風出風口各最多 5 個。建議分支風管直徑 75 mm 內。',
    'ic.r4':                     '機身法蘭連接 300–500 mm 軟管，防止機器的震動傳導到風管。切勿將硬管直接連接至法蘭。',
    'ic.r5':                     '安裝靜音風管，300–500 mm 軟管段可採用靜音風管代替，進一步降低風聲。',
    'ic.r6':                     '出風口附近避免急彎，建議在第一個分支之前有 1 米的直管。',

    'ic.fig.flex':               '機身法蘭與硬管之間預留 300–500 mm 軟管段，吸收壓縮機震動。第一個分支之前保留 1 米直管，每個分支裝設手動風量調節閥。',
    'ic.fig.layout':             '典型佈局：機身兩側各接主風管，兩端的風量分配箱再分送多個分支；檢修口正對維修板一面。',

    /* Install / Controls */
    'ico.pill':                  '步驟 06 / 08',
    'ico.title':                 '控制',
    'ico.desc':                  '所有訊號接駁均須於斷電狀態下進行。',
    'ico.chip.1':                'LCD 控制面板（8 米信號線）',
    'ico.chip.2':                '溫濕度感應器（5 米信號線）',
    'ico.chip.3':                '乾接點開關機',
    'ico.chip.4':                '漏水感應線',
    'ico.where.heading':         '控制面板及溫濕度感應器安裝位置',
    'ico.w1':                    '控制面板尺寸為 86 × 86 mm，建議安裝於牆身，方便查看及調整目標濕度。',
    'ico.w2':                    '溫濕度感應器可安裝於回風口或房間天花暗角，切勿放置於出風口。',

    'ico.term.heading':          '控制盒 — 端子說明',
    'ico.term.intro':            '控制盒位於機器出風口左側。<strong>端子 1–7</strong> 為溫濕度感應器與控制面板的低壓訊號。<strong>端子 8–13 為被動乾接點輸入</strong> — 切勿對任何端子施加外部電壓，否則會對主板造成損壞。',
    'ico.t1.t':                  '溫濕度感應器',
    'ico.t1.d':                  '<strong>GND</strong> · <strong>+5V</strong> · <strong>DATA</strong>。溫濕度感應器配備 5 米信號線，亦可使用其他多芯屏蔽信號線，建議長度不超過 20 米。',
    'ico.t2.t':                  'LCD控制面板',
    'ico.t2.d':                  '<strong>RX</strong> · <strong>TX</strong> · <strong>+5V</strong> · <strong>GND</strong>。控制面板配備 8 米信號線，亦可使用其他多芯屏蔽信號線，建議長度不超過 20 米。',
    'ico.t3.t':                  '遠端開關（乾接點）',
    'ico.t3.d':                  '以任何 <strong>無電壓</strong> 的開關短接兩個端子 — 第三方開關控制。<br><strong>NO</strong>（預設）：短接 = 開機、開路 = 關機。<br><strong>NC</strong>：短接 = 關機、開路 = 開機（可於控制面板高級參數上切換，操作詳情請諮詢 DBA 客服）。',
    'ico.t4.t':                  '漏水感應線信號輸入',
    'ico.t4.d':                  '接駁標準漏水感應線，線上任何位置遇水即觸發故障代碼 <strong>E7</strong> 並自動停機。',
    'ico.t5.t':                  '運行狀態指示燈',
    'ico.t5.d':                  '當運行狀態正常時，綠燈常亮。當發生故障時，紅燈常亮。燈組的電源輸出為 <strong>220V 6A</strong>，可自行連接指示燈的兩組電源輸出。（請在斷電情況下進行）',

    'ico.comm.heading':          'RS485 Modbus 與 WiFi App',
    'ico.comm.rs485':            '<strong>RS485 Modbus</strong> — A/B 端口位於 LCD 控制面板後方，與 GND/+5V/TX/RX 並排。<strong>9600 bps</strong>。標準 Modbus RTU 暫存器對應，可接入 BMS、HMI 或 PLC。',
    'ico.comm.wifi':             '<strong>手機 App 控制（塗鴉智能 App）</strong> — 手機連接 2.4 GHz WiFi（不可使用 5 GHz）。長按面板上的風速按鈕，直至 WiFi 圖示閃爍，然後於 App 內添加裝置。',
    'ico.comm.status':           '<strong>狀態指示燈及緊急停止按鈕</strong> — 位於機身後側電源線出線口旁，方便本地查看機器狀態及就地緊急停機。',
    'ico.warn.t':                '切勿對端子 8–13 施加任何電壓。',
    'ico.warn.b':                '端子 8–13 為被動乾接點輸入。任何外部電源（即使只有 5V）都會反饋至主板，燒毀控制器。只可接無電壓的開關、感應探頭或感應線。',

    'rs485.dl':                  '下載 RS485 通訊協議 PDF',
    'ico.warn2.t':               '接駁任何訊號線之前必須斷電。',
    'ico.warn2.b':                '機器帶電時插拔控制盒會燒毀控制板。安裝指南註明：斷電、接線、再通電。',

    'ico.fig.term':              '機身後側的三組端子：感應器（1–3）、控制盒（4–7）以及兩組無源乾接點輸入（8–13）。',

    /* Install / Power */
    'ipw.pill':                  '步驟 07 / 08',
    'ipw.title':                 '電源',
    'ipw.desc':                  '採用專用迴路，壓縮機啟動電流大，與其他電器共用迴路容易跳閘。',
    'ipw.chip.1':                '220V 13A',
    'ipw.chip.2':                '3 × 2.5 mm²',
    'ipw.chip.3':                '16 A 專用斷路器',
    'ipw.wiring.heading':        '配線要求',
    'ipw.w1':                    '<strong>電線</strong> — 由配電箱拉至機身端子排，最少 3 × 2.5 mm²。',
    'ipw.w2':                    '<strong>斷路器</strong> — 專用 16 A C 型 MCB。如當地法例要求，可改用 RCBO。',
    'ipw.w4':                    '<strong>隔離開關</strong> — 裝於檢修口附近，方便日後維修時就地切斷電源。',
    'ipw.warn.t':                '機器帶電時切勿打開機殼。',
    'ipw.warn.b':                '壓縮機啟動瞬間電壓可達數百伏，跳閘後電容器仍可能殘留電壓。維修前先關掉斷路器、確認無電，再打開機殼。',

    /* Install / Commissioning */
    'icm.pill':                  '步驟 08 / 08',
    'icm.title':                 '驗收測試',
    'icm.desc':                  '安裝完成後，必須再次通電測試。',
    'icm.chip.1':                '出風口有暖風',
    'icm.chip.2':                '無異常噪音',
    'icm.chip.3':                '無故障代碼',
    'icm.chip.4':                '排水測試',
    'icm.test.heading':          '通電測試 10 分鐘',
    'icm.t1':                    '<strong>通電。</strong>確認 LCD 控制面板沒有顯示故障代碼。',
    'icm.t2':                    '<strong>設為抽濕模式。</strong>將目標濕度設定低於環境濕度，壓縮機才會啟動。',
    'icm.t3':                    '<strong>壓縮機應於 90 秒內啟動。</strong>數分鐘後檢查出風口是否有暖空氣排出。',
    'icm.t4':                    '<strong>於機器下方及出入風口聆聽。</strong>確認無金屬雜音、無異常風噪。',
    'icm.t5':                    '<strong>10 分鐘後，</strong>LCD 控制面板的濕度讀數應開始下降。',
    'icm.t6':                    '<strong>再次測試排水。</strong>斷電後打開維修側板，倒入 1 公升水至水盤內，水泵應於 5 分鐘內運轉一次。檢查排水管路上每個接駁位，確保沒有漏水。',
    'icm.handoff.heading':       '驗收',
    'icm.handoff.body':          '安裝後，戶主只需學會幾件事：濾網位置（以及清洗方法）、LCD 控制面板的操作方式、DBA App 的配對方法。請保留說明書、訂單，並記錄機身編號，日後致電維修時可更快得到協助。',
    'icm.done.t':                '請再次確認所有安裝指引及建議均已完成。',
    'icm.done.b':                '一台正確安裝的天花抽濕機，配合定期維護保養，可長期高效穩定運作。',


    /* Home / Manual tile */
    'home.manual.tag':           '8 章 · 官方手冊',
    'home.manual.title':         '操作說明',
    'home.manual.desc':          '安全、產品結構、控制面板、操作、應用程式配對、保養、保修。',
    'home.manual.go':            '開啟手冊',

    /* Home / Cases tile */
    'home.cases.tag':            '實際工程 · 案例分享',
    'home.cases.title':          '工程案例',
    'home.cases.desc':           '住宅、商業、儲物、酒窖 — 完工項目的相片與簡要說明。',
    'home.cases.go':             '查看案例',

    /* Manual hub */
    'manual.eyebrow':            '出自官方 DBA UTC 產品手冊',
    'manual.title':              '操作說明',
    'manual.desc':               '八章內容，由淺入深 — LCD控制面板、操作、App、保養、RS485、故障排除、注意事項、保修。',
    'manual.start':              '從第 1 章開始',
    'manual.step.safety.t':      '注意事項',
    'manual.step.safety.d':      '接地、冷媒、R32 注意事項。',
    'manual.step.ctrl.t':        'LCD控制面板',
    'manual.step.ctrl.d':        '圖示與按鍵說明。',
    'manual.step.op.t':          '操作',
    'manual.step.op.d':          '模式、定時、除霜、風速。',
    'manual.step.app.t':         'App 配對',
    'manual.step.app.d':         'Tuya Smart · 2.4 GHz WiFi。',
    'manual.step.maint.t':       '日常保養',
    'manual.step.maint.d':       '濾網、蒸發器、排水 — 三個週期。',
    'manual.step.rs485.t':       'RS485 Modbus',
    'manual.step.rs485.d':       'RS485 接線、Modbus RTU 通訊協議。',
    'manual.step.ts.t':          '故障排除',
    'manual.step.ts.d':          '症狀、故障代碼、何時致電維修。',
    'manual.step.war.t':         '保修',
    'manual.step.war.d':         '一年有限保修、申索方法、不保項目。',

    /* Manual / Safety */
    'ipt.pill':                  '步驟 01 / 08',
    'mf.crumb.1':                '操作說明 · 01 / 08',
    'mf.crumb.2':                '操作說明 · 02 / 08',
    'mf.crumb.3':                '操作說明 · 03 / 08',
    'mf.crumb.4':                '操作說明 · 04 / 08',
    'mf.crumb.5':                '操作說明 · 05 / 08',
    'mf.crumb.6':                '操作說明 · 06 / 08',
    'mf.crumb.7':                '操作說明 · 07 / 08',
    'mf.crumb.8':                '操作說明 · 08 / 08',
    'um.safety.pill':            '第 07 章 / 08',
    'um.safety.title':           '注意事項',
    'um.safety.desc':            '請務必仔細閱讀並遵守以下安全指示。操作不當可能導致觸電、火災或設備損壞。',
    'um.safety.chip.1':          '220-240V 接地',
    'um.safety.chip.2':          '禁用拖板',
    'um.safety.chip.3':          'R32 輕微可燃',
    'um.safety.general.heading': '通則',
    'um.safety.g1':              '<strong>不適合無人看管的小童</strong>或身體、感官、智力能力受限的人士使用。請看管小童，避免他們將機器當作玩具。',
    'um.safety.g2':              '<strong>必須使用具接地的 220-240V ~ 50Hz 插座。</strong>切勿改動插頭、切勿使用拖板或轉接器 — 容易過熱。',
    'um.safety.g3':              '<strong>維修、清潔或搬動前先斷電。</strong>拔插頭時應握住插頭主體，切勿拉扯電線。',
    'um.safety.g4':              '<strong>按當地法規安裝。</strong>強烈建議由合資格技術員專業安裝。',
    'um.safety.g5':              '<strong>切勿將手或物件伸入入風口或出風口。</strong>內部有金屬風機。風口須保持暢通。',
    'um.safety.g6':              '<strong>切勿暴露於易燃氣體、腐蝕物質、大量灰塵或直接水浸。</strong>不適用於爆炸性或高度腐蝕的環境。',
    'um.safety.g7':              '<strong>電源線損壞</strong>必須由原廠、其指定服務商或同等資格人士更換。',
    'um.safety.g8':              '<strong>運作異常</strong>（異響、異味、冒煙）— 立即切斷電源並聯絡售後。',
    'um.safety.ref.heading':     '冷媒 — R410A 與 R32',
    'um.safety.ref.intro':       '冷媒類型印於機身銘牌。如機型使用 R32 或 R290，請注意以下事項：',
    'um.safety.r1':              '<strong>僅由合資格人員</strong>進行安裝與維修。',
    'um.safety.r2':              '<strong>安裝、操作、儲存</strong>於通風良好的環境。',
    'um.safety.r3':              '<strong>切勿以非原廠建議的方式</strong>加速除霜或清潔。',
    'um.safety.r4':              '<strong>切勿刺穿或燒毀</strong>冷媒迴路。',
    'um.safety.r5':              '<strong>報廢時</strong>按當地法規處置。',
    'um.safety.warn.t':          '不遵守上述指示',
    'um.safety.warn.b':          '可能引致電擊、火災或設備損毀。請妥善保留此手冊以供日後參考。',

    /* Manual / Overview */
    'um.overview.title':         '主機及跟機配件',
    'um.overview.desc':          '機身結構、接口位置、開箱配件清單。安裝時可以同時開啟此頁參考。',
    'um.overview.pkg.heading':   '隨機配件',
    'um.overview.p1':            '<strong>抽濕機主機</strong> — 配備 5 米電源線、英式三腳插頭。',
    'um.overview.p2':            '<strong>LCD 控制面板</strong> — 配備 8 米信號線，尺寸 86×86 mm。',
    'um.overview.p3':            '<strong>溫濕度感應器</strong> — 配備 5 米信號線，插入端子 1–3。',
    'um.overview.p4':            '<strong>遙控器</strong> — 隨附兩粒 AAA 電池。',
    'um.overview.p5':            '<strong>安裝指南卡</strong> — 牆掛標記板，列明所有關鍵尺寸。',
    'um.overview.fig.iso':       '立體圖 — 入風口於機身一端，出風口於相反一端，維修板與線控盒位於長邊。',
    'um.overview.fig.top':       '俯視圖 — 四角為吊裝支架，排水出口於一邊，線控盒於另一邊。',
    'um.overview.parts.heading': '主要部件',
    'um.overview.x1':            '<strong>入風口與出風口</strong> — 位於機身兩端，氣流方向印於機身頂部。',
    'um.overview.x2':            '<strong>隔塵網</strong> — 位於維修板側，打開蓋板後抽出清洗。需定期清洗。',
    'um.overview.x3':            '<strong>機身維修側板</strong> — 對應假天花的檢修口，方便日後維修保養。',
    'um.overview.x4':            '<strong>排水口</strong> — 位於機身底部，維修板同一邊，規格 DN15。',
    'um.overview.x5':            '<strong>線控盒</strong> — 出風口旁的小蓋板，內含 13 端子排。',
    'um.overview.x6':            '<strong>電源線出線口</strong> — 位於機身側板，旁設緊急停止按鈕與狀態指示燈。',

    /* Manual / Controls */
    'um.controls.pill':          '第 01 章 / 08',
    'um.controls.title':         'LCD控制面板',
    'um.controls.desc':          '線控面板能完成所有操作 — 開關、模式、風速、目標濕度、時鐘、定時、UV。畫面上 11 個圖示顯示機器狀態。',
    'um.controls.icons.heading': '顯示圖示',
    'um.ic.1.t':                 'WiFi 連線',
    'um.ic.1.d':                 'App已連線或處於配對模式。',
    'um.ic.2.t':                 '主板通訊異常',
    'um.ic.2.d':                 '面板與主板通訊出現故障。',
    'um.ic.3.t':                 '除霜中',
    'um.ic.3.d':                 '自動除霜程序執行中。',
    'um.ic.4.t':                 '定時',
    'um.ic.4.d':                 '已啟用每日開／關機定時。',
    'um.ic.5.t':                 '時間顯示',
    'um.ic.5.d':                 '顯示當前的時間。',
    'um.ic.6.t':                 '濕度',
    'um.ic.6.d':                 '顯示當前環境濕度（%RH）。',
    'um.ic.7.t':                 '溫度',
    'um.ic.7.d':                 '當前環境溫度（°C）。',
    'um.ic.8.t':                 '風速',
    'um.ic.8.d':                 '設有兩檔風速，按風速鍵切換。',
    'um.ic.9.t':                 '抽濕模式',
    'um.ic.9.d':                 '抽濕模式下，圖標常亮。',
    'um.ic.10.t':                'UV-C殺菌燈',
    'um.ic.10.d':                'UV-C殺菌燈開啟後，圖標常亮。',
    'um.ic.11.t':                '電源指示',
    'um.ic.11.d':                '機器處於開機狀態。',
    'um.controls.btn.heading':   '按鍵',
    'um.controls.b1':            '<strong>電源</strong> — 待機 ↔ 運行。開機後風扇預設為高速。',
    'um.controls.b2':            '<strong>風速</strong> — 切換高速 / 低速，指示燈顯示當前等級。',
    'um.controls.b3':            '<strong>模式（M）</strong> — 切換除濕／送風。<strong>長按 3 秒</strong>進入時鐘與定時設定。',
    'um.controls.b4':            '<strong>▲ / 濕度設定</strong> — 按下進入設定模式，再以 ▲ / ▼ 調整目標（10 – 95% RH）。5 秒無操作自動確認。',
    'um.controls.b5':            '<strong>▼ / UV 燈</strong> — 短按開／關 UV 燈（限有此配置的型號）。',
    'um.controls.note.t':        '壓縮機延遲啟動',
    'um.controls.note.b':        '每當啟動條件成立，風扇立即運轉，壓縮機於 3 秒後啟動。屬設計延遲，並非故障。',

    /* Manual / Operation */
    'um.operation.pill':         '第 02 章 / 08',
    'um.operation.title':        '操作',
    'um.operation.desc':         '模式、定時、風速、除霜、水泵循環 — 日常運行的所有細節。',
    'um.op.power.heading':       '開機 / 關機',
    'um.op.p1':                  '<strong>待機狀態下：</strong>按電源鍵 → 機器啟動，風扇預設高速。',
    'um.op.p2':                  '<strong>運行中：</strong>按電源鍵 → 進入待機，按鍵與部份圖示熄滅。',
    'um.op.p3':                  '當環境濕度高於目標濕度，風扇立即運轉，壓縮機 3 秒後啟動。',
    'um.op.mode.heading':        '運作模式',
    'um.op.mode.intro':          '按模式鍵（M）切換抽濕或通風模式。',
    'um.op.m1':                  '<strong>抽濕模式</strong>（開機預設）— 壓縮機按目標濕度 %RH 循環運作。',
    'um.op.m2':                  '<strong>通風模式</strong> — 只開風扇，壓縮機停止運作。',
    'um.op.fan.heading':         '風速切換',
    'um.op.fan.body':            '開機後風扇預設高速。按風速鍵可在高速與低速之間切換，面板風速指示條顯示當前風速。',
    'um.op.clock.heading':       '時鐘與定時',
    'um.op.c1':                  '<strong>長按模式鍵（M）3 秒</strong>進入時鐘設定。',
    'um.op.c2':                  '<strong>▲ / ▼ 調整小時，</strong>按 M 鍵移至分鐘。',
    'um.op.c3':                  '<strong>再按 M 鍵設定開機時間</strong>（自動開機）。',
    'um.op.c4':                  '<strong>再按 M 鍵設定關機時間</strong>（自動關機）。',
    'um.op.c5':                  '<strong>5 秒無操作</strong>自動退出設定並儲存。',
    'um.op.c6':                  '設定完成後，機器每天會按照同一組開／關機時間自動運作。如欲取消，將開機與關機時間都設為 <strong>00:00</strong>。',
    'um.op.pump.heading':        '水泵循環',
    'um.op.pump.body':           '機器運作期間，內置水泵自動以<strong>啟動 3 分鐘、停 5 分鐘</strong>循環。如排水堵塞，面板會顯示故障代碼 <strong>E3</strong>（水滿保護）。',
    'um.op.defrost.heading':     '自動除霜',
    'um.op.d1':                  '<strong>進入除霜：</strong>壓縮機連續運作 <strong>25 分鐘</strong>，且蒸發器溫度持續 30 秒低於 −1°C。',
    'um.op.d2':                  '<strong>除霜中：</strong>壓縮機停止，風扇維持高速，面板顯示除霜圖示。',
    'um.op.d3':                  '<strong>退出除霜：</strong>最多 <strong>8 分鐘</strong>，或除霜超過 3 分鐘後蒸發器升至 ≥ 5°C。',
    'um.op.d4':                  '<strong>感應器故障（E1）：</strong>改用定時除霜 — 壓縮機 25 分鐘 / 除霜 8 分鐘。',
    'um.op.warn.t':              '壓縮機重啟保護',
    'um.op.warn.b':              '壓縮機停止後，需待 3 分鐘才會自動重啟。此延遲保護壓縮機 — 請勿以斷電方式「強制」啟動。',

    /* Manual / App */
    'um.app.pill':               '第 03 章 / 08',
    'um.app.title':              'App 配對',
    'um.app.desc':               '連接 Tuya Smart 應用程式以遠端控制。手機需連接 2.4 GHz WiFi — 5 GHz 無法配對。',
    'um.app.steps.heading':      '配對步驟',
    'um.app.s1':                 '<strong>從 App Store 或 Play 商店下載</strong> Tuya Smart 應用程式並註冊帳號。',
    'um.app.s2':                 '<strong>開啟手機藍牙，</strong>並連接 <strong>2.4 GHz WiFi</strong> 網絡（不是 5 GHz）。',
    'um.app.s3':                 '<strong>讓機器進入配對模式：</strong>開機後長按風速鍵，直至面板的 WiFi 圖示閃爍。',
    'um.app.s4':                 '<strong>於 App 點選「新增裝置」</strong> — Tuya 會自動搜尋抽濕機。',
    'um.app.s5':                 '<strong>輸入 WiFi 名稱及密碼。</strong>App 完成新增後會自動打開遠端控制介面。',
    'um.app.note.t':             '第三方服務',
    'um.app.note.b':             'App 功能依賴網絡狀況與 Tuya 雲端服務。如因您的網絡、路由器或 Tuya 平台中斷而影響使用，生產商不承擔責任。',

    /* Manual / Maintenance */
    'um.rs485.pill':             '第 04 章 / 08',
    'um.maint.pill':             '第 05 章 / 08',
    'um.rs485.title':            'RS485 Modbus 連接',
    'um.rs485.desc':             'RS485 Modbus 通訊協議規格，適用於接入 BMS、HMI 或 PLC。',
    'um.ts.pill':                '第 06 章 / 08',
    'um.maint.title':            '保養與故障代碼',
    'um.maint.desc':             '大部份「壞了」的機器，其實是濾網髒了或排水阻塞。定期保養可使機器長期維持滿效。',
    'um.maint.filter.heading':   '清洗濾網',
    'um.maint.f1':               '<strong>每兩星期檢查一次，</strong>多塵環境每星期或每日一次。',
    'um.maint.f2':               '<strong>輕拍或吸塵</strong>清除灰塵，亦可用 ≤ 40°C 暖水加少量中性洗潔精浸洗。',
    'um.maint.f3':               '<strong>沖洗後完全風乾</strong>才裝回。切勿曝曬或加熱 — 會令網狀變形。',
    'um.maint.f4':               '<strong>切勿在未裝濾網的情況下運行機器。</strong>',
    'um.maint.body.heading':     '機身清潔',
    'um.maint.b1':               '<strong>用乾淨的軟布乾抹。</strong>較髒時可使用中性清潔劑，再以濕布抹淨。',
    'um.maint.b2':               '<strong>切勿使用溶劑、磨砂粉或拋光劑</strong> — 會損壞外觀。',
    'um.maint.b3':               '<strong>切勿以水沖洗機身。</strong>進水會導致絕緣失效及觸電風險。',
    'um.maint.b4':               '<strong>清潔或保養前必須先斷電並拔插。</strong>',
    'um.maint.codes.heading':    '故障代碼',
    'um.fc.1.t':                 '蒸發器溫度感應器故障',
    'um.fc.1.d':                 '機器改用定時除霜，需更換蒸發器感應器。',
    'um.fc.2.t':                 '溫濕度感應器故障',
    'um.fc.2.d':                 '感應器讀數無效，無法執行除濕。',
    'um.fc.3.t':                 '水滿保護',
    'um.fc.3.d':                 '水盤或水管堵塞 — 檢查水泵與存水彎。',
    'um.fc.4.t':                 '低冷媒壓力保護',
    'um.fc.4.d':                 '懷疑漏冷媒 — 請致電維修。',
    'um.fc.7.t':                 '水浸感應器觸發',
    'um.fc.7.d':                 '感應線檢測到水浸，機器在問題解除前保持停機。',
    'um.fc.8.t':                 '排氣高溫保護',
    'um.fc.8.d':                 '壓縮機過熱 — 檢查氣流與蒸發器。',
    'um.fc.9.t':                 '排氣溫度感應器故障',
    'um.fc.9.d':                 '感應器無效，需專業維修。',
    'um.maint.normal.t':         '屬正常現象',
    'um.maint.normal.b':         '運作及停機時偶有雪種流動聲，屬正常現象。出風口在抽濕模式下吹出暖風，亦屬正常現象。',
    'um.maint.warn.t':           '切勿自行拆開機器',
    'um.maint.warn.b':           '如清洗隔塵網及檢查排水無法解決問題，請聯絡DBA售後服務。',

    /* Manual / Warranty */
    'um.warranty.pill':          '第 08 章 / 08',
    'um.warranty.title':         '有限保修',
    'um.warranty.desc':          '由 2024 年 1 月 1 日起生效。以下為原廠保修卡的摘要 — 申索時請出示正本保修卡。',
    'um.warranty.cover.heading': '保修範圍',
    'um.warranty.c1':            '<strong>由原裝購買日起一年</strong>，於正常使用情況下因物料或工藝缺陷引致的故障。',
    'um.warranty.c2':            '<strong>由原廠決定</strong>是修理還是更換有缺陷的產品或部件。',
    'um.warranty.c3':            '<strong>適用條件：</strong>機器必須按本手冊正確安裝、使用與保養。',
    'um.warranty.excl.heading':  '不在保修範圍',
    'um.warranty.e1':            '<strong>冷媒、配件、消耗品</strong>（如濾網）、運輸、安裝、拆除或人工費用。',
    'um.warranty.e2':            '<strong>因安裝、操作或保養不當</strong>，或未按指示使用引致的損壞。',
    'um.warranty.e3':            '<strong>未經授權的維修或改裝、</strong>誤用或濫用。',
    'um.warranty.e4':            '<strong>環境因素</strong> — 腐蝕、冷凍、進水、天災。',
    'um.warranty.e5':            '<strong>更換的零件</strong>不會延長原有保修期。',
    'um.warranty.claim.heading': '申索方法',
    'um.warranty.cl1':           '<strong>於保修期內提出</strong>，並附有效購買證明。',
    'um.warranty.cl2':           '<strong>由原廠或授權服務商</strong>執行維修服務。',
    'um.warranty.cl3':           '<strong>如需運送維修</strong>，包裝、運費及運輸風險由客戶承擔。',
    'um.warranty.contact.heading':'維修聯絡',
    'um.warranty.k1':            '<strong>香港</strong> — Debiasia Green Technology (HK) Co. Ltd. · +852 2541 1611 · dba@dba.hk',
    'um.warranty.k2':            '<strong>新加坡</strong> — DBA Electric Pte. Ltd. · +65 6772 9962 · dba@dba.sg',
    'um.warranty.note':          '在法律允許的最大範圍內，原廠的總責任不會超過產品的原始購買價。原廠保留隨時修改本保修條款的權利，恕不另行通知。',

    /* Troubleshooting */
    'ts.eyebrow':                '如感覺異常',
    'ts.title':                  '故障排除',
    'ts.desc':                   '大部份故障是由隔塵網或排水管堵塞導致。定期保養可使機器長期維持高效穩定的運作狀態。',
    'ts.code.e1.t':              '蒸發器感應器故障',
    'ts.code.e1.d':              '機器改用定時除霜，需更換蒸發器溫度感應器。',
    'ts.code.e2.t':              '溫濕度感應器故障',
    'ts.code.e2.d':              '溫濕度感應器讀數無效，檢查信號線是否正確連接。',
    'ts.code.e3.t':              '水滿保護',
    'ts.code.e3.d':              '水盤或水管堵塞。請檢查水泵出口、存水彎與管路斜度。',
    'ts.code.e4.t':              '雪種低壓保護',
    'ts.code.e4.d':              '懷疑漏雪種，請聯絡DBA售後服務。',
    'ts.code.e7.t':              '漏水感應線觸發停機保護',
    'ts.code.e7.d':              '感應線偵測到水浸，機器自動停機。找出漏水點並處理後代碼自動消除。',
    'ts.code.e8.t':              '排氣高溫保護',
    'ts.code.e8.d':              '壓縮機過熱 — 檢查隔塵網及出入風口是否堵塞。',
    'ts.code.e9.t':              '排氣溫度感應器故障',
    'ts.code.e9.d':              '溫度感應器故障，請聯絡DBA售後服務。',
    'ts.1.tag':                  '抽濕量低',
    'ts.1.title':                '抽水量比以前少',
    'ts.1.b1':                   '取出濾網 — 如灰污或堵塞，請以暖水沖洗、風乾、裝回。再試 24 小時。',
    'ts.1.b2':                   '以手背感應送風口風量，應有一定壓力。如風弱，可能風管塌陷或屈摺。',
    'ts.1.b3':                   '從檢修口檢查蒸發器。室溫下蒸發器結霜 = 冷媒不足，請致電維修。',
    'ts.1.b4':                   '確認房間沒有持續增加濕度的來源 — 開窗、晾衣、植物。',
    'ts.2.tag':                  '噪音',
    'ts.2.title':                '天花傳出咯咯聲、撞擊聲或嗡嗡聲',
    'ts.2.b1':                   '打開檢修口，檢查機身是否貼合樓板。如有，請鬆開螺母半圈 — 橡膠墊片需要空隙才能發揮減震作用。',
    'ts.2.b2':                   '檢查風管接駁。軟管與金屬法蘭鬆動會產生嗡嗡聲 — 請以扣帶夾緊並加上膠紙。',
    'ts.2.b3':                   '啟動時的撞擊聲為壓縮機正常情況。如運作中持續撞擊 = 固定螺絲鬆動或冷媒問題。',
    'ts.3.tag':                  '滲水',
    'ts.3.title':                '天花或檢修口有水滴出',
    'ts.3.b1':                   '請先關閉電源。',
    'ts.3.b2':                   '打開檢修口。如水盤有水，代表水泵未正常運作 — 請檢查止回閥與存水彎。',
    'ts.3.b3':                   '如水位於送風管上方，代表風管表面結露 — 夾層段需要加裝保溫。',
    'ts.3.b4':                   '如水位於接駁位，請重新打密封膠並夾緊扣帶。',
    'ts.4.tag':                  '面板',
    'ts.4.title':                'LCD 出現錯誤代碼',
    'ts.4.intro':                '出自官方手冊。出現代碼時，先將斷路器關閉 60 秒再通電，確認是否為真實故障。',
    'ts.4.b1':                   '<strong>E1</strong> — 蒸發器盤管溫度感應器故障。機器會切換至定時除霜模式。重新插接感應器，如持續出現，請聯絡維修。',
    'ts.4.b2':                   '<strong>E2</strong> — 溫濕度感應器故障。機器無法調控。請重新插接 5 米感應器線於端子 1–3。',
    'ts.4.b3':                   '<strong>E3</strong> — 水滿保護。水盤或水泵未能清空。請檢查水泵出口、存水彎與管路斜度。',
    'ts.4.b4':                   '<strong>E4</strong> — 冷媒低壓保護。請聯絡維修 — 切勿反覆重置。',
    'ts.4.b5':                   '<strong>E7</strong> — 漏水感應器觸發。找出並清理漏水後，代碼會自動消除。',
    'ts.4.b6':                   '<strong>E8</strong> — 排氣高溫保護。通常為風量受阻 — 請檢查濾網與風管。',
    'ts.4.b7':                   '<strong>E9</strong> — 排氣溫度感應器故障。請聯絡維修。',
    'ts.4.foot':                 '如完整斷電後重新通電仍持續出現錯誤，請致電維修並提供錯誤代碼及機身編號。',
    'ts.5.tag':                  '無電源',
    'ts.5.title':                '面板無光、機器無反應',
    'ts.5.b1':                   '檢查配電箱的斷路器。如已跳閘，重置一次。如再跳閘，請停止 — 真有故障。',
    'ts.5.b2':                   '如斷路器正常，請檢查檢修口的隔離開關。',
    'ts.5.b3':                   '兩者皆正常但面板無光，可能為控制盒連線鬆動 — 請關電、重新插入、再試。',
    'ts.6.tag':                  '異味',
    'ts.6.title':                '送風口傳出霉味',
    'ts.6.b1':                   '濾網 — 沖洗一次。八成情況的原因便是於此。',
    'ts.6.b2':                   '連續運行數個循環 UV-C 燈（於控制盒可選擇）。',
    'ts.6.b3':                   '如仍有異味，請預約年度蒸發器清潔 — 蒸發器本身會逐漸滋生生物膜。',
    'ts.next':                   '仍未解決？請聯絡我們 — 聯絡方式位於主頁底部。',

    /* Maintenance */
    'mn.eyebrow':                '機器保養得宜，可用十年',
    'mn.title':                  '日常保養',
    'mn.desc':                   '',
    'mn.m.cadence':              '每3-6個月',
    'mn.m.title':                '清洗隔塵網',
    'mn.m.body':                 '建議至少每3個月檢查一次。隔塵網位於入風口位置。',
    'mn.m.1':                    '打開隔塵網蓋板，抽出隔塵網。',
    'mn.m.2':                    '水洗或用吸塵機去除塵埃，完全風乾後再裝。',
    'mn.m.3':                    '商用或塵埃多的環境：建議每月檢查。',
    'mn.y.cadence':              '每年',
    'mn.y.title':                '蒸發器與排水保養',
    'mn.y.body':                 '如使用環境惡劣或沒有定期保養，有機會導致蒸發器堵塞致抽濕效能下降，或排水堵塞導致漏水。建議每年安排一次上門檢查，DBA技術人員會檢測抽濕性能，水泵，水位感應器等等的部件，確保抽濕及排水運作正常。',
    'mn.y.1':                    '請勿使用溶劑、磨砂粉或拋光劑 — 會損壞表面。',
    'mn.y.2':                    '只可以軟毛刷抹拭蒸發器鰭片。切勿屈到鰭片。',
    'mn.warn.t':                 '如住於廚房上層或臨近海邊，',
    'mn.warn.b':                 '所有保養間隔均需減半。油煙與鹽霧令蒸發器積污速度加快一倍。',

    /* Contact (inline on home) */
    'ct.title':                  '聯絡我們',
    'ct.sg.region':              '新加坡',
    'ct.sg.org':                 'DBA Electric Pte. Ltd.',
    'ct.sg.addr':                'Block B, Cititech Industrial Building, 629 Aljunied Road, #07‑08, Singapore 389838',
    'ct.hk.region':              '香港',
    'ct.hk.org':                 '迪比亞環保科技(香港)有限公司',
    'ct.hk.addr':                '香港葵涌工業街 10–14 號華發工業大廈後座 4 樓 04 室',
    'ct.note':                   '一般於一個工作日內回覆。住宅與工業項目皆歡迎洽詢。',
  };

  /* Crumb labels for install sub-screens */
  T['sf.crumb.1'] = '安裝 · 01 / 08';
  T['sf.crumb.2'] = '安裝 · 02 / 08';
  T['sf.crumb.3'] = '安裝 · 03 / 08';
  T['sf.crumb.4'] = '安裝 · 04 / 08';
  T['sf.crumb.5'] = '安裝 · 05 / 08';
  T['sf.crumb.6'] = '安裝 · 06 / 08';
  T['sf.crumb.7'] = '安裝 · 07 / 08';
  T['sf.crumb.8'] = '安裝 · 08 / 08';

  /* ============================================================
     Router config
     ============================================================ */
  const PAGES = {
    'home':                    { titleKey:null,                              titleEN:'dba<em>diy</em>',     crumb:'',                       parent:null },
    'overview/specs':          { titleKey:'ov.specs.title',                  titleEN:'Technical specs',     crumb:'',                       parent:'home' },
    'install':                 { titleKey:'install.title',                   titleEN:'Installation',        crumb:'',                       parent:'home' },
    'install/parts':           { titleKey:'um.overview.title',               titleEN:'Parts & accessories', crumbKey:'sf.crumb.1', crumbEN:'Install · 01 / 08', parent:'install' },
    'install/preparation':     { titleKey:'ip.title',                        titleEN:'Preparation',         crumbKey:'sf.crumb.2', crumbEN:'Install · 02 / 08', parent:'install' },
    'install/hanging':         { titleKey:'ih.title',                        titleEN:'Hanging',             crumbKey:'sf.crumb.3', crumbEN:'Install · 03 / 08', parent:'install' },
    'install/drainage':        { titleKey:'id.title',                        titleEN:'Drainage',            crumbKey:'sf.crumb.4', crumbEN:'Install · 04 / 08', parent:'install' },
    'install/ducting':         { titleKey:'ic.title',                        titleEN:'Ducting',             crumbKey:'sf.crumb.5', crumbEN:'Install · 05 / 08', parent:'install' },
    'install/controls':        { titleKey:'ico.title',                       titleEN:'Controls',            crumbKey:'sf.crumb.6', crumbEN:'Install · 06 / 08', parent:'install' },
    'install/power':           { titleKey:'ipw.title',                       titleEN:'Power',               crumbKey:'sf.crumb.7', crumbEN:'Install · 07 / 08', parent:'install' },
    'install/commissioning':   { titleKey:'icm.title',                       titleEN:'Acceptance test',     crumbKey:'sf.crumb.8', crumbEN:'Install · 08 / 08', parent:'install' },
    'manual':                  { titleKey:'manual.title',                    titleEN:'User Manual',         crumb:'',                       parent:'home' },
    'manual/controls':         { titleKey:'um.controls.title',               titleEN:'LCD control panel',   crumbKey:'mf.crumb.1', crumbEN:'Manual · 01 / 08', parent:'manual' },
    'manual/operation':        { titleKey:'um.operation.title',              titleEN:'Operation',           crumbKey:'mf.crumb.2', crumbEN:'Manual · 02 / 08', parent:'manual' },
    'manual/app':              { titleKey:'um.app.title',                    titleEN:'App pairing',         crumbKey:'mf.crumb.3', crumbEN:'Manual · 03 / 08', parent:'manual' },
    'manual/rs485':            { titleKey:'um.rs485.title',                  titleEN:'RS485 Modbus',        crumbKey:'mf.crumb.4', crumbEN:'Manual · 04 / 08', parent:'manual' },
    'manual/maintenance':      { titleKey:'mn.title',                        titleEN:'Routine maintenance', crumbKey:'mf.crumb.5', crumbEN:'Manual · 05 / 08', parent:'manual' },
    'manual/troubleshooting':  { titleKey:'ts.title',                        titleEN:'Troubleshooting',     crumbKey:'mf.crumb.6', crumbEN:'Manual · 06 / 08', parent:'manual' },
    'manual/safety':           { titleKey:'um.safety.title',                 titleEN:'Safety notes',        crumbKey:'mf.crumb.7', crumbEN:'Manual · 07 / 08', parent:'manual' },
    'manual/warranty':         { titleKey:'um.warranty.title',               titleEN:'Warranty',            crumbKey:'mf.crumb.8', crumbEN:'Manual · 08 / 08', parent:'manual' },
  };

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
  const STEPPER_SETS = {
    install: ['install/parts','install/preparation','install/hanging','install/drainage','install/ducting','install/controls','install/power','install/commissioning'],
    manual:  ['manual/controls','manual/operation','manual/app','manual/rs485','manual/maintenance','manual/troubleshooting','manual/safety','manual/warranty'],
  };

  function buildSteppers(){
    document.querySelectorAll('.stepper').forEach(stepper => {
      const active = parseInt(stepper.getAttribute('data-active') || '0', 10);
      const set = stepper.getAttribute('data-set') || 'install';
      const ids = STEPPER_SETS[set] || STEPPER_SETS.install;
      stepper.innerHTML = '';
      for (let i = 0; i < ids.length; i++){
        const a = document.createElement('a');
        a.className = 'sd';
        if (i === active) a.classList.add('sd-active');
        if (i < active) a.classList.add('sd-done');
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
     Haptic + edge swipe back
     ============================================================ */
  document.addEventListener('click', (e) => {
    const tappable = e.target.closest('.tile, .step-card, .official-link, .contact-act, .sf-next, .sf-back, .next-link, #back-btn, .lang-toggle, .sd');
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
