/* ===========================================================
   DBA DIY — router, i18n, transitions
   =========================================================== */

(function(){

  /* ============================================================
     i18n — Traditional Chinese (formal written style)
     ============================================================ */
  const T = {
    /* Home */
    'home.sub':                  '您的抽濕機，從選型到日常保養。請選擇主題。',
    'home.feature.tag':          '7 個步驟 · 最受歡迎',
    'home.feature.title':        '安裝指南',
    'home.feature.desc':         '準備、吊裝、排水、風管、控制、電源、調試。',
    'home.feature.go':           '開始查看',
    'home.tile.models.title':    '型號',
    'home.tile.models.desc':     'UTC20 · 68 · 120',
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
    'models.eyebrow':            '三種尺寸，同一機身',
    'models.title':              'Ultra Thin 超薄系列',
    'models.desc':               '同一輕薄天花機身、同一控制系統、同一排水泵。按容量與面積選擇即可。',
    'models.utc20.desc':         '200 – 400 平方呎 · 適合單一房間或工作室。',
    'models.utc68.tag':          'DBA-UTC68 · 熱銷',
    'models.utc68.desc':         '800 – 1000 平方呎 · 多數香港與新加坡住宅單位的萬能首選。',
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
    'install.step.drain.d':      '水泵、止逆閥、存水彎。',
    'install.step.duct.t':       '風管',
    'install.step.duct.d':       '⌀146 / ⌀196 mm 法蘭。',
    'install.step.ctrl.t':       '控制及信號輸出',
    'install.step.ctrl.d':       'LCD 控制盒、訊號輸入及輸出。',
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
    'ip.desc':                   '開箱、通電試機，然後規劃安裝。跳過試機可能導致之後需要拆下重裝整整一天。',
    'ip.chip.1':                 '5 分鐘試機',
    'ip.chip.2':                 '檢修口 ≥ 60 × 60 cm',
    'ip.chip.3':                 '正對機側維修口',
    'ip.bench.badge':            '必做',
    'ip.bench.title':            '吊裝前，先進行 5 分鐘通電試機',
    'ip.bench.lede':             '開箱後置於地面或工作枱上，進行一次通電檢查。這 5 分鐘可以節省日後拆裝的時間。',
    'ip.bench.s1':               '<strong>開箱</strong> — 將機從紙箱取出，平放於地面，面板向上。包裝請暫時保留，以便有需要時退貨。',
    'ip.bench.s2':               '<strong>連接控制盒</strong> — 接駁至機身對應的訊號端子，編號需一一對齊。',
    'ip.bench.s3':               '<strong>連接濕度感應器</strong> — 接駁至專用端子。沒有感應器讀數，機器不會運行除濕模式。',
    'ip.bench.s4':               '<strong>插入電源</strong> — 若專用線路尚未鋪設，可暫用普通插座，足以通電即可。',
    'ip.bench.s5':               '<strong>開機</strong> — 風扇應即時轉動，無延遲。若沒有轉動，請先停止並檢查。',
    'ip.bench.s6':               '<strong>強制啟動壓縮機</strong> — 將濕度設定調低，例如 40% RH，壓縮機應於 60 秒內啟動。',
    'ip.bench.s7':               '<strong>聆聽與感覺</strong> — 風扇應平穩運行，壓縮機應穩定運作，沒有撞擊聲或金屬雜音。出風口應有暖風。',
    'ip.bench.s8':               '<strong>檢查面板</strong> — LCD 上沒有錯誤代碼，即可開始安裝。',
    'ip.bench.ok':               '沒有錯誤代碼？可以開始安裝。',

    'ip.plan.heading':           '然後規劃，動工之前',
    'ip.plan.1':                 '<strong>確認天花夾層深度。</strong>UTC20 需要 200 mm、UTC68 需要 240 mm、UTC120 需要 310 mm — 並預留少量空隙，避免機身貼合樓板。',
    'ip.plan.2':                 '<strong>確定吊裝位置。</strong>標出四條螺桿固定於樓板的位置，避開夾層內已有的管線。',
    'ip.plan.3':                 '<strong>選定檢修口位置。</strong>正對機側維修板，至少 60 × 60 cm。不可偏離。',
    'ip.plan.4':                 '<strong>提早規劃風管走線。</strong>繪出回風與送風路徑，標出彎位並計算數量 — 每個 90° 彎位約扣 10 Pa。',

    'ip.kit.heading':            '安裝當日需要準備',
    'ip.kit.1.t':                'M10 不鏽鋼螺桿 × 4',
    'ip.kit.1.d':                '連同螺母、墊片、橡膠減震墊',
    'ip.kit.2.t':                '軟管或硬管',
    'ip.kit.2.d':                '配合機身法蘭尺寸（⌀146 / ⌀196）',
    'ip.kit.3.t':                'DN15 排水管',
    'ip.kit.3.d':                '連同止逆閥與存水彎',
    'ip.kit.4.t':                '3 × 2.5 mm² 電線',
    'ip.kit.4.d':                '以及一個獨立 16 A 空氣開關',
    'ip.kit.5.t':                '86 型暗盒',
    'ip.kit.5.d':                '用以安裝 LCD 控制盒',
    'ip.kit.6.t':                '水平儀與捲尺',
    'ip.kit.6.d':                '最後鎖緊之前需要校正水平',

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
    'ih.warn.t':                 '機身不可貼合樓板。',
    'ih.warn.b':                 '即使數毫米的接觸亦會將風扇震動直接傳至上層結構。中間的空隙正是靜音的關鍵。',

    /* Install / Drainage */
    'id.pill':                   '步驟 03 / 07',
    'id.title':                  '排水',
    'id.desc':                   '每台 UTC 均內置可將冷凝水提升 1.8 米的水泵。重力不再是限制 — 但止逆閥與存水彎為必需。',
    'id.chip.1':                 '1.8 米水泵提升',
    'id.chip.2':                 'DN15 出水',
    'id.chip.3':                 '止逆閥 + 存水彎',
    'id.illu.cv':                '止逆',
    'id.illu.utrap':             '存水彎',
    'id.illu.stack':             '通向去水位',
    'id.path.heading':           '排水路徑',
    'id.path.1':                 '<strong>水泵出口處</strong> — 即時加裝止逆閥。可防止水於水泵停止時倒流。',
    'id.path.2':                 '<strong>隨後接駁存水彎。</strong>截斷空氣柱，防止水泵抽入空氣而無法推動水流。',
    'id.path.3':                 '<strong>DN15 喉管</strong>接至最近的去水位。先垂直上升，再水平下降至排水口。',
    'id.path.4':                 '<strong>夾層位置需包覆保溫</strong> — 喉管內為冷水，經過暖濕空氣會產生冷凝水。',
    'id.path.5':                 '<strong>兩台機共用一條去水路徑？</strong>每台各自垂直落下，盡量於低位合流。切勿於頂部 T 字接駁。',
    'id.sign.heading':           '驗收前',
    'id.sign.body':              '從檢修口慢慢倒入一公升水至水盤。水泵應於數秒內啟動並將水抽走。然後觀察整段管路的每個接駁位至少五分鐘 — 漏水通常於此時段內出現。',

    /* Install / Ducting */
    'ic.pill':                   '步驟 04 / 07',
    'ic.title':                  '風管',
    'ic.desc':                   '風管內徑需對齊機身法蘭。收細是最常見的安裝錯誤 — 風量會下降、機器反覆短啟動、設定值永遠無法達到。',
    'ic.chip.1':                 'UTC20/68 · ⌀146 mm',
    'ic.chip.2':                 'UTC120 · ⌀196 mm',
    'ic.chip.3':                 '送風 1.5 – 3 m/s',
    'ic.layouts.heading':        '選擇佈局',
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
    'ic.rules.heading':          '幾個原則',
    'ic.r1':                     '<strong>軟管可用</strong> — 短距離（3 米以下、完全拉直、無屈摺）沒有問題。',
    'ic.r2':                     '<strong>3 米以上需轉用硬管</strong> — 鍍鋅或硬 PE 管，輕度保溫。',
    'ic.r3':                     '<strong>送風口風速 1.5 – 3 m/s</strong> — 低於此範圍會感覺風弱，高於此範圍會產生嘶嘶聲。',
    'ic.r4':                     '<strong>最大風檔時需保持 ≥ 80%</strong> 標稱風量。低於此即代表風阻過大。',
    'ic.r5':                     '<strong>主風管應盡量減少彎位</strong>。每個 90° 約扣 10 Pa。',
    'ic.warn.t':                 '不可為遷就空間而收細法蘭。',
    'ic.warn.b':                 '若夾層空間不足，應重新規劃走線 — 切勿縮小法蘭口徑。146 mm 法蘭收細 25 mm，風量會下降約 30%。',

    /* Install / Controls & Signal Output */
    'ico.pill':                  '步驟 05 / 07',
    'ico.title':                 '控制及信號輸出',
    'ico.desc':                  'LCD 牆面控制盒附帶 8 米電線，安裝於標準 86 型暗盒。訊號線按編號順序排列 — 對號入座，並於斷電狀態下進行接駁。',
    'ico.chip.1':                '86 × 86 mm 暗盒',
    'ico.chip.2':                '附 8 米電線',
    'ico.chip.3':                '有編號訊號線',
    'ico.where.heading':         '控制盒安裝位置',
    'ico.w1':                    '<strong>公共牆面、視線清楚</strong> — 房間內所有人都可以見到。',
    'ico.w2':                    '<strong>離地 1.3 – 1.5 米。</strong>讀數易於閱讀，操作亦方便。',
    'ico.w3':                    '<strong>遠離門窗與氣流路徑。</strong>位於送風氣流內會讀到乾風，機器會以為已達標而提早停止。',
    'ico.w4':                    '<strong>86 × 86 mm 暗盒</strong>，齊牆面安裝。8 米電線需穿入線管，不可散落於天花夾層內。',

    'ico.cs.heading':            '控制及信號輸出',
    'ico.cs.in.heading':         '輸入與遠端控制',
    'ico.cs.in.dry':             '<strong>乾接點遠端開關</strong> — 將兩個端子以任何開關短接（窗磁、漏水探測器、感應接點）即可強制停機，或接駁瞬時按鈕作手動開關。',
    'ico.cs.in.rs485':           '<strong>RS485 / Modbus</strong> — 半雙工串口位於側板下方。標準 Modbus RTU 暫存器對應，可接入 BMS、HMI 或 PLC 系統。',
    'ico.cs.in.wifi':            '<strong>WiFi + DBA App</strong> — 首次通電進行配對。遠端開機、定時、設定目標濕度、查閱濕度紀錄、故障時推送通知。',

    'ico.cs.out.heading':        '信號輸出',
    'ico.cs.out.intro':          '端子排上設有兩組 220 V · 6 A AC 信號輸出，由機器控制。可直接接駁指示燈、BMS LED 或小型繼電器。',
    'ico.cs.out.err.t':          '故障指示',
    'ico.cs.out.err.d':          '當有故障代碼啟動時，輸出帶電。可接駁紅色指示燈。',
    'ico.cs.out.ok.t':           '正常運作指示',
    'ico.cs.out.ok.d':           '機器正常運作時，輸出帶電。可接駁綠色指示燈。',

    'ico.warn.t':                '接駁訊號線之前須先斷電。',
    'ico.warn.b':                '機器帶電時插拔控制盒會燒毀控制板。安裝指南註明：斷電、接線、再通電。',

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
    'ts.3.b2':                   '打開檢修口。如水盤有水，代表水泵未正常運作 — 請檢查止逆閥與存水彎。',
    'ts.3.b3':                   '如水位於送風管上方，代表風管表面結露 — 夾層段需要加裝保溫。',
    'ts.3.b4':                   '如水位於接駁位，請重新打密封膠並夾緊扣帶。',
    'ts.4.tag':                  '面板',
    'ts.4.title':                'LCD 出現錯誤代碼',
    'ts.4.intro':                '錯誤代碼皆列於出貨附帶的用戶手冊。最常見的幾個：',
    'ts.4.b1':                   '<strong>E1 / E2</strong> — 感應器故障，通常為訊號線鬆動。請關電並重新插入控制盒連線。',
    'ts.4.b2':                   '<strong>E3</strong> — 防霜保護。機器會於 30 分鐘後自動恢復。如重複觸發，代表房間過冷，不適合冷媒循環。',
    'ts.4.b3':                   '<strong>P1</strong> — 水泵未能排水。請檢查排水管。',
    'ts.4.foot':                 '如完整斷電 60 秒後重新通電仍有錯誤，請致電維修時提供錯誤代碼與機身編號。',
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
    'mn.m.cadence':              '每月',
    'mn.m.title':                '沖洗濾網',
    'mn.m.body':                 '打開檢修口、抽出不鏽鋼濾網、以暖水沖洗至水清。風乾後裝回。',
    'mn.m.1':                    '請勿使用洗潔精 — 會留下殘留物。',
    'mn.m.2':                    '如有人吸煙或燒香，請每兩星期清洗一次。',
    'mn.m.3':                    '切勿裝回潮濕的濾網 — 自第一日便會開始滋生生物膜。',
    'mn.q.cadence':              '每季',
    'mn.q.title':                '目視檢查',
    'mn.q.body':                 '從檢修口觀察五分鐘。檢查安裝後有否移位或變化。',
    'mn.q.1':                    '排水管接駁位 — 是否有潮濕或礦物結晶？',
    'mn.q.2':                    '送風管的保溫 — 是否完好乾爽？',
    'mn.q.3':                    '螺桿螺母 — 以手指試探有否鬆動。',
    'mn.q.4':                    '面板顯示的濕度 vs 室內獨立濕度計 — 差異應於 3% 之內。',
    'mn.y.cadence':              '每年',
    'mn.y.title':                '蒸發器與排水保養',
    'mn.y.body':                 '先從斷路器關閉電源。以軟毛刷掃蒸發器鰭片，然後以濕布抹拭 — 切勿屈到鰭片。倒入一公升水至水盤，確認水泵仍能迅速排水、止逆閥仍然密封。',
    'mn.y.1':                    '如鰭片有油污（廚房安裝），需使用蒸發器清潔劑。',
    'mn.y.2':                    'UV-C 燈每 18 – 24 個月需要更換。',
    'mn.y.3':                    '韌體：可同時於 DBA App 內檢查是否有更新。',
    'mn.warn.t':                 '如住於廚房上層或臨近海邊，',
    'mn.warn.b':                 '所有保養間隔均需減半。油煙與鹽霧令蒸發器積污速度加快一倍。',

    /* Contact (inline on home) */
    'ct.title':                  '聯絡我們',
    'ct.desc':                   '請提供平面圖、樓底高度、以及預定的安裝位置。我們會以草圖回覆建議的佈局與初步選型 — 無任何承諾。',
    'ct.sg.region':              '新加坡',
    'ct.sg.org':                 'DBA Electric Pte. Ltd.',
    'ct.sg.addr':                'Block B, Cititech Industrial Building, 629 Aljunied Road, #07‑08, Singapore 389838',
    'ct.hk.region':              '香港',
    'ct.hk.org':                 '帝霸亞綠色科技（香港）有限公司',
    'ct.hk.addr':                '香港葵涌貢業街 10–14 號華發工業大廈 4 樓 4 室',
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
    'install/controls':        { titleKey:'ico.title',                       titleEN:'Control & signal output', crumbKey:'sf.crumb.5', crumbEN:'Install · 05 / 07', parent:'install' },
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
