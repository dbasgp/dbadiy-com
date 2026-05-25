/* ===========================================================
   DBA DIY — router, i18n, transitions
   =========================================================== */

(function(){

  /* ============================================================
     i18n — Traditional Chinese (formal written style)
     ============================================================ */
  const T = {
    /* Home */
    'home.feature.tag':          '7 個步驟 · 最受歡迎',
    'home.feature.title':        '安裝指南',
    'home.feature.desc':         '準備、吊裝、排水、風管、控制、電源、調試。',
    'home.feature.go':           '開始查看',
    'home.tile.models.title':    '型號',
    'home.tile.models.desc':     'UTC20 · 55 · 68 · 120',
    'home.tile.troubleshooting.title': '故障排除',
    'home.tile.troubleshooting.desc':  '出現異常時',
    'home.tile.maintenance.title': '日常保養',
    'home.tile.maintenance.desc':  '濾網 · 蒸發器 · 排水',
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
    'models.spec.suction':       '最大吸氣壓力',
    'models.spec.discharge':     '最大排氣壓力',
    'models.spec.refrigerant':   '冷媒',
    'models.spec.optemp':        '運作溫度',
    'models.spec.pump':          '排水泵最大揚程',
    'models.spec.weight':        '淨重',
    'models.spec.size':          '產品尺寸',
    'models.spec.certs':         '認證',
    'models.feat.pump':          '✓ 內置 1.8 米排水泵及止回閥',
    'models.feat.uv':            '✓ UV-C 燈（如配備）',
    'models.feat.filter':        '✓ 可清洗濾網',
    'models.feat.wifi':          '✓ WiFi（塗鴉智能 App）',
    'models.feat.modbus':        '✓ RS485 Modbus 9600 bps',
    'models.feat.leak':          '✓ 漏水感應器輸入',
    'models.feat.remote':        '✓ 乾接點遠端開關',
    'models.feat.cert':          '✓ CE · CB · RoHS',
    'models.next':               '查看安裝指南',

    /* Install hub */
    'install.eyebrow':           '參考自官方 DBA UTC 安裝卡',
    'install.title':             '安裝指南',
    'install.desc':              '由空白天花到部機正常運作 — 七個步驟。請點選一個項目進入。',
    'install.step.prep.t':       '準備',
    'install.step.prep.d':       '通電測試、規劃、檢修口。',
    'install.step.hang.t':       '吊裝',
    'install.step.hang.d':       'M10 螺桿、水平、減震。',
    'install.step.drain.t':      '排水',
    'install.step.drain.d':      '水泵、止回閥、存水彎。',
    'install.step.duct.t':       '風管',
    'install.step.duct.d':       '⌀146 / ⌀196 mm 法蘭。',
    'install.step.ctrl.t':       '控制',
    'install.step.ctrl.d':       '面板、感應器、Modbus、WiFi。',
    'install.step.pow.t':        '電源',
    'install.step.pow.d':        '16 A 開關、2.5 mm²、接地。',
    'install.step.com.t':        '調試',
    'install.step.com.d':        '通電試機，正常後完成。',
    'install.start':             '由第 1 步開始',

    /* Step footer */
    'sf.next':                   '下一步',
    'sf.go':                     '進入',
    'sf.done':                   '完成',

    /* Install / Preparation */
    'ip.pill':                   '步驟 01 / 07',
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
    'ip.kit.1.t':                'M10 套筒膨脹螺絲 × 4',
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

    /* Install / Hanging */
    'ih.pill':                   '步驟 02 / 07',
    'ih.title':                  '吊裝',
    'ih.desc':                   '四條螺桿、機身校正水平、螺桿與機腳之間夾橡膠墊。安裝正確，運行時幾乎聽不到聲音。',
    'ih.chip.1':                 '4 × M10 304 不鏽鋼螺桿',
    'ih.chip.2':                 '螺桿預留 ≥ 2 cm',
    'ih.chip.3':                 '橡膠減震墊',
    'ih.illu.slab':              '混凝土樓板',
    'ih.illu.fc':                '假天花',
    'ih.illu.rod':               'M10 螺桿',
    'ih.illu.washer':            '橡膠墊片',
    'ih.how.heading':            '吊裝步驟',
    'ih.how.1':                  '<strong>從樓板放下四條螺桿</strong>，M10 304 不鏽鋼。長度需足夠，機腳下方仍需預留至少 2 cm，方便之後校正水平。',
    'ih.how.2':                  '<strong>每條螺桿穿上一塊橡膠墊片</strong>，先放墊片再放機腳，螺母上方再加一塊。墊片用以隔絕風扇震動，防止傳至樓板。',
    'ih.how.3':                  '<strong>將機提升至螺桿上</strong>，對齊機身上標示 1–4 的定位孔。',
    'ih.how.4':                  '<strong>校正水平</strong> — 用水平儀放於機面頂部測量。內部水盤需平放，否則冷凝水會積聚於錯誤位置。',
    'ih.how.5':                  '<strong>對角逐步鎖緊螺母</strong>，鎖至橡膠輕微被壓縮即可 — 不要完全壓平。',
    'ih.orient.heading':         '方向 — 鑽孔之前先確定',
    'ih.orient.intro':           '機身並非對稱，每一面各司其職。請於 <strong>鑽孔之前</strong> 確定安裝方向，因為這會決定檢修口、風管開口與排水路徑的位置。',
    'ih.orient.1':               '<strong>維修板那一面</strong> — 必須朝向已規劃的天花檢修口。濾網由此側抽出，電氣艙亦由此側開啟。<strong>切勿朝向牆壁</strong>，否則完全失去維修通道。',
    'ih.orient.2':               '<strong>進風口與出風口</strong> — 位於機身兩端。回風與送風的走線需從一開始就配合此佈局。',
    'ih.orient.3':               '<strong>排水泵出口</strong> — 位於其中一個長邊。排水路徑需於該側保持暢通。',
    'ih.orient.4':               '<strong>有線控制盒與背面</strong> — 狀態指示燈、緊急停止按鈕、電源線出口均在背面，切勿緊貼結構面。',
    'ih.hatch.heading':          '檢修口與保養空間',
    'ih.hatch.intro':            '官方手冊明確規定：檢修口必須 <strong>正對維修板那一面</strong>（即排水出口側）。不可偏離 — 維修員需要由此抽出濾網、檢查排水。',
    'ih.hatch.1':                '<strong>檢修口尺寸：450 × 450 mm 或 600 × 600 mm</strong>，方形，正對維修板。600 mm 更便於日後維修。',
    'ih.hatch.2':                '<strong>機身四周於天花夾層內留 ≥ 450 mm 空間</strong> — 方便拆下側板與接近排水管。',
    'ih.hatch.3':                '<strong>機身與樓板及假天花之間留 ≥ 10 mm 空隙</strong> — 防震必須。',
    'ih.hatch.4':                '<strong>每 3 – 6 個月需保養</strong> — 濾網、蒸發器檢查、排水確認 — 檢修口會經常使用，請確保實用。',
    'ih.orient.warn.t':          '若維修板朝向牆壁，安裝即為錯誤。',
    'ih.orient.warn.b':          '無法更換濾網、無法開啟維修板、無法處理排水 — 必須整台拆下重裝。請於螺母鎖緊之前發現並糾正。',
    'ih.warn.t':                 '機身不可貼合樓板。',
    'ih.warn.b':                 '即使數毫米的接觸亦會將風扇震動直接傳至上層結構。中間的空隙正是靜音的關鍵。',

    /* Install / Drainage */
    'id.pill':                   '步驟 03 / 07',
    'id.title':                  '排水',
    'id.desc':                   'UTC 系列內置可將冷凝水提升 1.8 米的水泵，止回閥已整合於機內。只需加裝上行存水彎並接好排水管即可。',
    'id.chip.1':                 '1.8 米水泵提升',
    'id.chip.2':                 '止回閥內置',
    'id.chip.3':                 '加裝上行存水彎',
    'id.illu.builtin':           '止回閥內置',
    'id.illu.utrap':             '上行存水彎',
    'id.illu.stack':             '通往排水位',
    'id.path.heading':           '排水路徑',
    'id.path.1':                 '<strong>止回閥已內置於機身</strong> — 不需額外加裝。可防止水泵停止時冷凝水倒流。',
    'id.path.2':                 '<strong>加裝上行存水彎</strong>，依官方安裝卡所示。可隔絕排水管的空氣與異味，避免回流至天花夾層。',
    'id.path.3':                 '<strong>連接保溫排水管</strong>由出水口至最近的排水位。先垂直上升（最多 1.8 米），再水平降落至去水位。',
    'id.path.4':                 '<strong>夾層段需包覆保溫</strong> — 喉管內為冷凝水，經過暖濕空氣會結露於天花面板。',
    'id.path.5':                 '<strong>兩台機共用排水路徑？</strong>每台各自垂直落下，於低位才合流。切勿於頂部 T 字接駁。',
    'id.cycle.heading':          '水泵運作週期',
    'id.cycle.body':             '機器運轉期間，內置水泵以 <strong>3 分鐘啟動、5 分鐘停止</strong> 的循環運作。如排水堵塞，LCD 會顯示故障代碼 <strong>E3</strong>（水滿保護）。',
    'id.sign.heading':           '驗收前',
    'id.sign.body':              '從檢修口慢慢倒入一公升水至水盤。水泵應於一分鐘內啟動並將水抽走。然後觀察整段管路的接駁位至少五分鐘 — 漏水通常於此時段內出現。',

    /* Install / Ducting */
    'ic.pill':                   '步驟 04 / 07',
    'ic.title':                  '風管',
    'ic.desc':                   '一般走線使用軟性鋁箔風管；較長或硬管段使用鍍鋅硬管。機身法蘭與硬管之間 <strong>必須</strong> 透過 300–500 mm 軟管段連接 — 用以隔絕壓縮機震動傳入室內。',
    'ic.chip.1':                 '300–500 mm 軟管段',
    'ic.chip.2':                 '主風管總長 ≤ 10 m',
    'ic.chip.3':                 '送風 1.5 – 3 m/s',
    'ic.rules.heading':          '官方規定',
    'ic.r1':                     '<strong>軟性鋁箔風管</strong> 為預設選擇 — 輕巧、安裝方便、靜音。較長或較硬路段可改用鍍鋅硬管。',
    'ic.r2':                     '<strong>主風管總長度（送風 + 回風）≤ 10 米。</strong>超過此長度，風量會下降，機器運作吃力。',
    'ic.r3':                     '<strong>送風與回風出風口各最多 5 個。</strong>分支風管直徑 ≥ 75 mm。',
    'ic.r4':                     '<strong>300–500 mm 軟管段</strong>於機身法蘭處 — 防震必須。切勿將硬管直接連接至法蘭。',
    'ic.r5':                     '<strong>1 米直管</strong>位於第一個分支之前。出風口附近避免急彎。',
    'ic.r6':                     '<strong>每個送風口加裝風量調節閥</strong> — 平衡分支，分支間壓力差 ≤ 15%。',
    'ic.r7':                     '<strong>離天花樓板及假天花 ≥ 10 mm。</strong>機身切不可貼合結構。',
    'ic.r8':                     '<strong>送風口風速 1.5 – 3 m/s</strong> — 低於此範圍會感到風弱，高於此範圍會產生嘶嘶聲。',
    'ic.layouts.heading':        '常見佈局',
    'ic.l1.t':                   '獨立式',
    'ic.l1.d':                   '回風與送風皆直接通往房間。最簡單的安裝方式，完全不涉及空調系統。為多數住宅的預設選擇。',
    'ic.l2.t':                   '回風側併入',
    'ic.l2.d':                   '抽濕機並聯於空調回風段。於空氣到達冷卻盤之前先進行除濕 — 冷卻盤較少結露，潛熱負荷下降。',
    'ic.l3.t':                   '送風側併入',
    'ic.l3.d':                   '抽濕機獨立由房間抽風，將乾風送入空調送風管。需加裝防回流風閘，防止空調壓力倒灌。',
    'ic.l4.t':                   '旁通迴路',
    'ic.l4.d':                   '由空調回風取氣，乾風送回空調送風。完整並聯迴路 — 適合需要獨立濕度控制配合製冷的情況。',
    'ic.l5.t':                   '獨立式 + 新風',
    'ic.l5.d':                   '額外加一條室外新風支管，接入回風側。新風一進入即被抽乾。適合密封式住宅，CO₂ 於夜間會逐漸上升。',
    'ic.l6.t':                   '多區域氣室',
    'ic.l6.d':                   '一台機、中央氣室、分支通往每個房間。全屋抽濕方案，配合 UTC68 或 UTC120。每個分支加裝防回流風閘。',
    'ic.warn.t':                 '省略軟管段，後悔莫及。',
    'ic.warn.b':                 '機身法蘭與硬管之間的 300–500 mm 軟管段，正是吸收壓縮機震動的關鍵。沒有它，整間房屋的出風口都會嗡嗡作響。',

    /* Install / Controls */
    'ico.pill':                  '步驟 05 / 07',
    'ico.title':                 '控制',
    'ico.desc':                  'LCD 牆面控制盒附帶 8 米電線，安裝於標準 86 型暗盒。所有訊號接駁均須於斷電狀態下進行。',
    'ico.chip.1':                '86 × 86 mm 暗盒',
    'ico.chip.2':                '附 8 米電線',
    'ico.chip.3':                '13 個端子',
    'ico.where.heading':         '控制盒安裝位置',
    'ico.w1':                    '<strong>公共牆面、視線清楚</strong> — 房間內所有人都可以見到。',
    'ico.w2':                    '<strong>離地 1.3 – 1.5 米。</strong>讀數易於閱讀，操作亦方便。',
    'ico.w3':                    '<strong>遠離門窗與氣流路徑。</strong>位於送風氣流內會讀到乾風，機器會以為已達標而提早停止。',
    'ico.w4':                    '<strong>86 × 86 mm 暗盒</strong>，齊牆面安裝。8 米電線需穿入線管，不可散落於天花夾層內。',

    'ico.term.heading':          '有線控制端子',
    'ico.term.intro':            '位於機身側板下方。<strong>端子 1–7</strong> 為感應器與控制盒的低壓訊號。<strong>端子 8–13 為被動乾接點輸入</strong> — 切勿施加外部電壓，否則會反饋至主機板造成損壞。',
    'ico.t1.t':                  '溫濕度感應器',
    'ico.t1.d':                  'GND · +5V · DATA。隨附的 5 米感應器線接駁於此。沒有有效讀數，機器不會進入除濕模式。',
    'ico.t2.t':                  '有線控制盒',
    'ico.t2.d':                  'RX · TX · +5V · GND。隨附的 8 米 LCD 控制盒線接駁於此。控制盒安裝於標準 86 × 86 mm 暗盒。',
    'ico.t3.t':                  '遠端開關（乾接點）',
    'ico.t3.d':                  '以任何 <strong>無電壓</strong> 的開關短接兩個端子 — BMS 連鎖、火警關機、按鈕。<strong>NO</strong>（預設）：短接 = 開機、開路 = 關機。<strong>NC</strong>：短接 = 關機、開路 = 開機（可於控制盒上切換）。',
    'ico.t4.t':                  '漏水感應器',
    'ico.t4.d':                  '將標準漏水偵測線的兩條黑色感應線接駁至此。線上任何位置遇水即觸發故障代碼 <strong>E7</strong> 並自動停機。',
    'ico.t5.t':                  '預留端子',
    'ico.t5.d':                  '預留作日後擴展 — 沒有原廠指示時切勿接駁。',

    'ico.comm.heading':          'RS485 與 WiFi',
    'ico.comm.rs485':            '<strong>RS485 Modbus</strong> — A/B 端口位於 LCD 控制盒後方，與 GND/+5V/TX/RX 並排。<strong>9600 bps</strong>。標準 Modbus RTU 暫存器對應，可接入 BMS、HMI 或 PLC。',
    'ico.comm.wifi':             '<strong>WiFi（塗鴉智能 App）</strong> — 手機連接 2.4 GHz WiFi（並非 5 GHz）。長按面板上的風速按鈕，直至 WiFi 圖示閃爍，然後於 App 內添加裝置。',
    'ico.comm.status':           '<strong>機身背面設有狀態指示 LED 與緊急停止按鈕</strong>，鄰近電源線出口 — 用於本地診斷及快速本地切斷。',

    'ico.warn.t':                '切勿向端子 8–13 施加電壓。',
    'ico.warn.b':                '此等為被動乾接點輸入。任何外部電源 — 即使是 5 V — 都會反饋至主機板，燒毀控制器。只可使用無電壓的開關、感應器或偵測線。',
    'ico.warn2.t':               '接駁任何訊號線之前必須斷電。',
    'ico.warn2.b':                '機器帶電時插拔控制盒會燒毀控制板。安裝指南註明：斷電、接線、再通電。',

    /* Install / Power */
    'ipw.pill':                  '步驟 06 / 07',
    'ipw.title':                 '電源',
    'ipw.desc':                  '專用迴路、確實接地。請勿與其他電器共用 — 壓縮機啟動電流會令共用的開關跳閘。',
    'ipw.chip.1':                '3 × 2.5 mm² 起跳',
    'ipw.chip.2':                '16 A 專用斷路器',
    'ipw.chip.3':                '標準接地',
    'ipw.wiring.heading':        '配線',
    'ipw.w1':                    '<strong>電線：</strong>由總配電箱至機身端子排，最少 3 × 2.5 mm²。走線長度超過 15 米需加大。',
    'ipw.w2':                    '<strong>斷路器：</strong>專用 16 A 空氣開關、C 型 MCB。如當地法例要求，則使用 RCBO。',
    'ipw.w3':                    '<strong>接地：</strong>接至機身的接地端子 — 並非螺絲處。請以萬用表確認連續性。',
    'ipw.w4':                    '<strong>隔離開關：</strong>裝於檢修口可達的位置，方便日後維修時於本地切斷。',
    'ipw.order.heading':         '步驟順序',
    'ipw.o1':                    '<strong>拉設電線</strong> — 由配電箱拉至機身，穿入規格線管。多餘的線勿捲於機箱內，應於機箱外整齊盤好。',
    'ipw.o2':                    '<strong>接駁線芯</strong> — 接至端子排上對應的 L、N、地線端子，鎖緊力度需足夠。',
    'ipw.o3':                    '<strong>接駁訊號線</strong> — 斷路器仍保持關閉狀態。訊號線有編號，按編號接駁。',
    'ipw.o4':                    '<strong>重新裝上檢修板</strong> — 再進行通電。連鎖裝置是保護下一個維修人員的關鍵。',
    'ipw.o5':                    '<strong>從配電箱通電</strong> — 待控制盒啟動，再進行調試檢查。',
    'ipw.warn.t':                '機器帶電時切勿維修。',
    'ipw.warn.b':                '壓縮機啟動瞬間有數百伏電壓，電容器即使於跳閘後仍可能帶電。請先鎖斷電源、確認無電，再進行打開維修。',

    /* Install / Commissioning */
    'icm.pill':                  '步驟 07 / 07',
    'icm.title':                 '調試',
    'icm.desc':                  '10 分鐘的試機觀察，是一個乾淨利落的安裝與六星期後 callback 的分別。',
    'icm.chip.1':                '10 分鐘監察',
    'icm.chip.2':                '無錯誤代碼',
    'icm.chip.3':                '排水測試',
    'icm.test.heading':          '10 分鐘試機',
    'icm.t1':                    '<strong>通電。</strong>LCD 控制盒啟動 — 無錯誤代碼。',
    'icm.t2':                    '<strong>設為除濕模式</strong>，目標 50% RH。風扇應由低 → 中 → 高順暢遞升。',
    'icm.t3':                    '<strong>壓縮機應於 90 秒內啟動。</strong>無撞擊聲、無金屬雜音、風扇無突然變大。',
    'icm.t4':                    '<strong>於送風口聆聽。</strong>無嘶嘶聲、無風閘抖動。如有嘶聲，代表風管過細。',
    'icm.t5':                    '<strong>觀察排水。</strong>水泵應於 5 分鐘內運轉一次。檢查管路上每個接駁位，然後檢查存水彎。',
    'icm.t6':                    '<strong>10 分鐘後，</strong>控制盒的濕度讀數應開始下降。如保持不變或上升，應先檢查風量問題，不可立即歸咎於機器。',
    'icm.handoff.heading':       '交付',
    'icm.handoff.body':          '向戶主介紹三件事，順序為：濾網位置（以及清洗方法）、控制盒目標濕度的調整方式、DBA App 的配對方法。將安裝卡與用戶手冊交予戶主。於控制盒後方記錄機身編號 — 日後致電維修時，首要查詢便是此編號。',
    'icm.done.t':                '此即為一個乾淨利落的安裝。',
    'icm.done.b':                '一台正確調試的 UTC，配合每月清洗濾網與每年抹拭蒸發器，可以靜悄悄運行十年。',

    /* Troubleshooting */
    'ts.eyebrow':                '如感覺異常',
    'ts.title':                  '故障排除',
    'ts.desc':                   '多數「壞了」的抽濕機，其實是風量不足、濾網堵塞、或排水停滯。致電前請先逐項檢查一次。',
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
    'mn.desc':                   '一年三項工作。每項皆不超過十分鐘。',
    'mn.m.cadence':              '每 2 星期',
    'mn.m.title':                '清潔濾網',
    'mn.m.body':                 '官方建議：濾網 <strong>至少每兩星期</strong> 檢查一次。打開檢修口、抽出濾網。輕拍或用吸塵機去除塵埃，或以暖水（≤ 40 °C）配少量中性洗潔劑清洗，沖乾淨，完全風乾後再裝回。',
    'mn.m.1':                    '塵埃多的環境：每星期檢查，或必要時每日檢查。',
    'mn.m.2':                    '切勿讓濾網接觸直射陽光或熱源 — 會變形。',
    'mn.m.3':                    '切勿裝回潮濕的濾網 — 第一日便會開始滋生生物膜，風量會下降。',
    'mn.q.cadence':              '每季',
    'mn.q.title':                '目視檢查',
    'mn.q.body':                 '從檢修口觀察五分鐘。檢查安裝後有否移位或變化。',
    'mn.q.1':                    '排水管接駁位 — 是否有潮濕或礦物結晶？',
    'mn.q.2':                    '送風管的保溫 — 是否完好乾爽？',
    'mn.q.3':                    '螺桿螺母 — 以手指試探有否鬆動。',
    'mn.q.4':                    '面板顯示的濕度 vs 室內獨立濕度計 — 差異應於 3% 之內。',
    'mn.y.cadence':              '每年',
    'mn.y.title':                '蒸發器與排水保養',
    'mn.y.body':                 '先從斷路器關閉電源。以柔軟、潔淨、乾燥的布料抹拭機殼 — 若有頑垢，可用蘸有溫和清潔劑的布抹拭，再以清水濕布擦淨。<strong>切勿以流水沖洗機身</strong> — 會導致絕緣失效，存在觸電風險。倒入一公升水至水盤，確認水泵仍能迅速清空。',
    'mn.y.1':                    '請勿使用溶劑、磨砂粉或拋光劑 — 會損壞表面。',
    'mn.y.2':                    '只可以軟毛刷抹拭蒸發器鰭片。切勿屈到鰭片。',
    'mn.y.3':                    '如機型配備 UV-C 燈，每 18 – 24 個月需更換。',
    'mn.warn.t':                 '如住於廚房上層或臨近海邊，',
    'mn.warn.b':                 '所有保養間隔均需減半。油煙與鹽霧令蒸發器積污速度加快一倍。',

    /* Contact (inline on home) */
    'ct.title':                  '聯絡我們',
    'ct.desc':                   '請提供平面圖、樓底高度、以及預定的安裝位置。我們會以草圖回覆建議的佈局與初步選型 — 無任何承諾。',
    'ct.sg.region':              '新加坡',
    'ct.sg.org':                 'DBA Electric Pte. Ltd.',
    'ct.sg.addr':                'Block B, Cititech Industrial Building, 629 Aljunied Road, #07‑08, Singapore 389838',
    'ct.hk.region':              '香港',
    'ct.hk.org':                 '迪比亞環保科技(香港)有限公司',
    'ct.hk.addr':                '香港葵涌工業街 10–14 號華發工業大廈後座 4 樓 04 室',
    'ct.note':                   '一般於一個工作日內回覆。住宅與工業項目皆歡迎洽詢。',
  };

  /* Crumb labels for install sub-screens */
  T['sf.crumb.1'] = '安裝 · 01 / 07';
  T['sf.crumb.2'] = '安裝 · 02 / 07';
  T['sf.crumb.3'] = '安裝 · 03 / 07';
  T['sf.crumb.4'] = '安裝 · 04 / 07';
  T['sf.crumb.5'] = '安裝 · 05 / 07';
  T['sf.crumb.6'] = '安裝 · 06 / 07';
  T['sf.crumb.7'] = '安裝 · 07 / 07';

  /* ============================================================
     Router config
     ============================================================ */
  const PAGES = {
    'home':                    { titleKey:null,                              titleEN:'dba<em>diy</em>',     crumb:'',                       parent:null },
    'models':                  { titleKey:'home.tile.models.title',          titleEN:'Models',              crumb:'',                       parent:'home' },
    'troubleshooting':         { titleKey:'home.tile.troubleshooting.title', titleEN:'Troubleshooting',     crumb:'',                       parent:'home' },
    'maintenance':             { titleKey:'home.tile.maintenance.title',     titleEN:'Maintenance',         crumb:'',                       parent:'home' },
    'install':                 { titleKey:'install.title',                   titleEN:'Installation',        crumb:'',                       parent:'home' },
    'install/preparation':     { titleKey:'ip.title',                        titleEN:'Preparation',         crumbKey:'sf.crumb.1', crumbEN:'Install · 01 / 07', parent:'install' },
    'install/hanging':         { titleKey:'ih.title',                        titleEN:'Hanging',             crumbKey:'sf.crumb.2', crumbEN:'Install · 02 / 07', parent:'install' },
    'install/drainage':        { titleKey:'id.title',                        titleEN:'Drainage',            crumbKey:'sf.crumb.3', crumbEN:'Install · 03 / 07', parent:'install' },
    'install/ducting':         { titleKey:'ic.title',                        titleEN:'Ducting',             crumbKey:'sf.crumb.4', crumbEN:'Install · 04 / 07', parent:'install' },
    'install/controls':        { titleKey:'ico.title',                       titleEN:'Controls',            crumbKey:'sf.crumb.5', crumbEN:'Install · 05 / 07', parent:'install' },
    'install/power':           { titleKey:'ipw.title',                       titleEN:'Power',               crumbKey:'sf.crumb.6', crumbEN:'Install · 06 / 07', parent:'install' },
    'install/commissioning':   { titleKey:'icm.title',                       titleEN:'Commissioning',       crumbKey:'sf.crumb.7', crumbEN:'Install · 07 / 07', parent:'install' },
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
