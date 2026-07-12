const CARD_VERSION = "0.1.0";

const DEFAULT_CONFIG = {
  title: "Campervan Energy",
  model_url: "/local/campervan-energy/van.glb",
  render_url: "/local/campervan-energy/van-render.png",
  three_module_url: "https://unpkg.com/three@0.183.0/build/three.module.js",
  gltf_loader_url: "https://unpkg.com/three@0.183.0/examples/jsm/loaders/GLTFLoader.js",
  show_time: true,
  entities: {
    solar: {
      pv_voltage: "sensor.epever_pv_voltage",
      pv_current: "sensor.epever_pv_current",
      pv_power: "sensor.epever_pv_power",
      generated_today: "sensor.epever_energy_generated_today",
      generated_today_fallback: "sensor.solar_kwh",
      charging_mode: "sensor.epever_charging_mode_code",
      charger_status: "sensor.epever_charger_status_code",
      battery_status: "sensor.epever_battery_status_code",
      device_temperature: "sensor.epever_device_temperature",
      component_temperature: "sensor.epever_component_temperature",
      maximum_pv_voltage_today: "sensor.epever_max_pv_voltage_today",
      minimum_pv_voltage_today: "sensor.epever_min_pv_voltage_today"
    },
    alternator: {
      voltage: "sensor.charger_alternator_voltage",
      current: "sensor.charger_alternator_current",
      power: "sensor.charger_alternator_power"
    },
    hookup: {
      voltage: "sensor.charger_hookup_voltage",
      current: "sensor.charger_hookup_current",
      power: "sensor.charger_hookup_power"
    },
    bank: {
      state_of_charge: "sensor.fogstar_bms_state_of_charge",
      voltage: "sensor.fogstar_bms_voltage",
      current: "sensor.fogstar_bms_current",
      net_power: "sensor.battery_wattage",
      input_power: "sensor.battery_in_wattage",
      output_power: "sensor.battery_out_wattage",
      remaining_capacity: "sensor.fogstar_bms_remaining_capacity",
      remaining_time: "sensor.battery_remaining_time",
      charger_total_power: "sensor.charger_total_wattage",
      nominal_capacity: "sensor.fogstar_bms_nominal_capacity",
      cycles: "sensor.fogstar_bms_cycles",
      protection_flags: "sensor.fogstar_bms_protection_flags",
      fet_state: "sensor.fogstar_bms_fet_state",
      minimum_cell_voltage: "sensor.fogstar_bms_minimum_cell_voltage",
      maximum_cell_voltage: "sensor.fogstar_bms_maximum_cell_voltage",
      cell_voltage_delta: "sensor.fogstar_bms_cell_voltage_delta",
      highest_temperature: "sensor.fogstar_bms_highest_temperature",
      lowest_temperature: "sensor.fogstar_bms_lowest_temperature"
    },
    battery_1: {
      status: "sensor.battery_1_status",
      current: "sensor.battery_1_current",
      voltage: "sensor.battery_1_voltage",
      state_of_charge: "sensor.battery_1_state_of_charge",
      remaining_capacity: "sensor.battery_1_remaining_capacity",
      nominal_capacity: "sensor.battery_1_nominal_capacity",
      cycles: "sensor.battery_1_cycles",
      protection_flags: "sensor.battery_1_protection_flags",
      fet_state: "sensor.battery_1_fet_state",
      cell_1_voltage: "sensor.battery_1_cell_1_voltage",
      cell_2_voltage: "sensor.battery_1_cell_2_voltage",
      cell_3_voltage: "sensor.battery_1_cell_3_voltage",
      cell_4_voltage: "sensor.battery_1_cell_4_voltage",
      temperature_1: "sensor.battery_1_temperature_1",
      temperature_2: "sensor.battery_1_temperature_2",
      temperature_3: "sensor.battery_1_temperature_3"
    },
    battery_2: {
      status: "sensor.battery_2_status",
      current: "sensor.battery_2_current",
      voltage: "sensor.battery_2_voltage",
      state_of_charge: "sensor.battery_2_state_of_charge",
      remaining_capacity: "sensor.battery_2_remaining_capacity",
      nominal_capacity: "sensor.battery_2_nominal_capacity",
      cycles: "sensor.battery_2_cycles",
      protection_flags: "sensor.battery_2_protection_flags",
      fet_state: "sensor.battery_2_fet_state",
      cell_1_voltage: "sensor.battery_2_cell_1_voltage",
      cell_2_voltage: "sensor.battery_2_cell_2_voltage",
      cell_3_voltage: "sensor.battery_2_cell_3_voltage",
      cell_4_voltage: "sensor.battery_2_cell_4_voltage",
      temperature_1: "sensor.battery_2_temperature_1",
      temperature_2: "sensor.battery_2_temperature_2",
      temperature_3: "sensor.battery_2_temperature_3"
    },
    charger_1: {
      maximum_current_control: "input_number.charger_1_max_charge_current",
      battery_current: "sensor.charger_1_battery_current",
      internal_temperature: "sensor.charger_1_internal_temperature",
      state: "sensor.charger_1_charger_state",
      alarms: "sensor.charger_1_charger_alarms"
    },
    charger_2: {
      maximum_current_control: "input_number.charger_2_max_charge_current",
      battery_current: "sensor.charger_2_battery_current",
      internal_temperature: "sensor.charger_2_internal_temperature",
      state: "sensor.charger_2_charger_state",
      alarms: "sensor.charger_2_charger_alarms"
    },
    summary: {
      total_consumption_today: null,
      battery_input_kwh: "sensor.battery_input_kwh",
      battery_output_kwh: "sensor.battery_out_kwh"
    }
  }
};

const CSS = `
:host {
  --ced-bg: #111111;
  --ced-surface: #1b1b1b;
  --ced-surface-2: #202020;
  --ced-surface-3: #242424;
  --ced-border: #343434;
  --ced-border-subtle: #2a2a2a;
  --ced-text: #f2f2f2;
  --ced-sub: #a7a7a7;
  --ced-muted: #777777;
  --ced-solar: #f59e0b;
  --ced-charge: #4caf50;
  --ced-discharge: #e85668;
  --ced-alt: #4b9cd3;
  --ced-hookup: #61b8c8;
  --ced-warning: #f0a72f;
  display: block;
  color: var(--ced-text);
  font-family: var(--primary-font-family, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}
* { box-sizing: border-box; }
.page {
  min-height: min(100vh, 1080px);
  background: var(--ced-bg);
  border-radius: 0;
  overflow: hidden;
  padding: 18px;
}
.header {
  height: 58px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  border-bottom: 1px solid var(--ced-border-subtle);
  margin-bottom: 16px;
}
.brand, .header-right {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--ced-sub);
  font-size: 13px;
}
.header-right { justify-content: flex-end; }
.van-icon {
  width: 28px;
  height: 28px;
  border: 1px solid var(--ced-border);
  border-radius: 7px;
  display: grid;
  place-items: center;
  color: var(--ced-charge);
}
h1 {
  font-size: 22px;
  line-height: 1;
  margin: 0;
  font-weight: 650;
  letter-spacing: 0;
}
.status-pill {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid var(--ced-border);
  border-radius: 999px;
  background: #181818;
  color: var(--ced-sub);
  white-space: nowrap;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--ced-charge);
}
.dot.warning { background: var(--ced-warning); }
.grid {
  display: grid;
  grid-template-columns: minmax(250px, 25%) minmax(420px, 1fr) minmax(280px, 25%);
  gap: 14px;
  align-items: stretch;
}
.column {
  display: grid;
  gap: 12px;
}
.center-column {
  grid-template-rows: minmax(420px, 1fr) auto;
}
.card, .van-stage, .controls, .history, .summary {
  background: var(--ced-surface);
  border: 1px solid var(--ced-border);
  border-radius: 14px;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
}
.card {
  padding: 16px;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  background: var(--accent, var(--ced-muted));
  opacity: 0.75;
}
.card.inactive {
  opacity: 0.58;
}
.card.active::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 20% 0%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 36%);
  opacity: 0.55;
}
.card-head, .row, .metric-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}
.label {
  color: var(--ced-sub);
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0;
}
.state {
  color: var(--ced-muted);
  font-size: 12px;
  white-space: nowrap;
}
.primary {
  margin-top: 16px;
  font-size: clamp(34px, 4.2vw, 58px);
  line-height: 0.95;
  font-weight: 620;
  font-variant-numeric: tabular-nums;
}
.unit {
  font-size: 0.42em;
  color: var(--ced-sub);
  margin-left: 5px;
  font-weight: 600;
}
.secondary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
}
.metric {
  min-width: 0;
}
.metric span {
  display: block;
  color: var(--ced-muted);
  font-size: 11px;
  margin-bottom: 4px;
}
.metric strong {
  display: block;
  color: var(--ced-text);
  font-size: 15px;
  font-weight: 620;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.van-stage {
  min-height: 430px;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.025), transparent 28%),
    radial-gradient(circle at 50% 55%, #232323, #151515 58%);
}
.van-render, .three-host {
  position: absolute;
  inset: 0;
}
.van-render {
  background-image: var(--render-url);
  background-repeat: no-repeat;
  background-size: min(78%, 760px) auto;
  background-position: center 54%;
  filter: drop-shadow(0 30px 28px rgba(0,0,0,0.35));
}
.three-host canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.flow {
  position: absolute;
  height: 2px;
  border-radius: 999px;
  opacity: 0;
  background: linear-gradient(90deg, transparent, var(--flow-color), transparent);
  transform-origin: left center;
}
.flow.active {
  opacity: 0.78;
  animation: flow 3.2s linear infinite;
}
.flow.solar { --flow-color: var(--ced-solar); left: 20%; top: 25%; width: 34%; transform: rotate(12deg); }
.flow.alternator-a { --flow-color: var(--ced-alt); left: 21%; top: 62%; width: 38%; transform: rotate(-6deg); }
.flow.alternator-b { --flow-color: var(--ced-alt); left: 26%; top: 68%; width: 32%; transform: rotate(-12deg); animation-delay: -1.4s; }
.flow.hookup { --flow-color: var(--ced-hookup); right: 23%; top: 61%; width: 26%; transform: rotate(188deg); }
.flow.output { --flow-color: var(--ced-discharge); left: 48%; top: 76%; width: 34%; transform: rotate(5deg); }
@keyframes flow {
  from { background-position: -180px 0; }
  to { background-position: 180px 0; }
}
.hotspot {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid var(--hotspot-color);
  background: #161616;
  box-shadow: 0 0 0 4px rgba(0,0,0,0.2);
  cursor: pointer;
}
.hotspot.active {
  box-shadow: 0 0 0 4px rgba(255,255,255,0.04), 0 0 18px color-mix(in srgb, var(--hotspot-color) 40%, transparent);
}
.hotspot.solar { --hotspot-color: var(--ced-solar); left: 43%; top: 30%; }
.hotspot.alternator { --hotspot-color: var(--ced-alt); left: 28%; top: 58%; }
.hotspot.hookup { --hotspot-color: var(--ced-hookup); right: 28%; top: 58%; }
.hotspot.battery { --hotspot-color: var(--ced-charge); left: 52%; top: 62%; }
.consumption {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  padding-top: 16px;
  border-top: 1px solid var(--ced-border-subtle);
}
.consumption .value {
  font-size: clamp(38px, 5vw, 76px);
  line-height: 0.9;
  font-weight: 650;
  font-variant-numeric: tabular-nums;
}
.battery-hero .primary {
  color: var(--ced-charge);
}
.battery-status {
  margin-top: 12px;
  color: var(--ced-sub);
  font-size: 15px;
}
.battery-strip {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px;
  margin-top: 10px;
  background: var(--ced-surface-2);
  border: 1px solid var(--ced-border-subtle);
  border-radius: 10px;
}
.soc-ring {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(var(--ced-charge) var(--soc), #333 0);
  color: var(--ced-text);
  font-weight: 700;
  font-size: 15px;
  font-variant-numeric: tabular-nums;
}
.soc-ring::before {
  content: "";
  position: absolute;
}
.strip-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}
.balance {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  background: #181818;
  border: 1px solid var(--ced-border-subtle);
}
.lower {
  display: grid;
  grid-template-columns: minmax(260px, 25%) 1fr;
  gap: 14px;
  margin-top: 14px;
}
.summary, .history, .controls {
  padding: 16px;
}
.summary-grid {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}
.chart {
  height: 170px;
  margin-top: 14px;
}
.chart svg {
  width: 100%;
  height: 100%;
  display: block;
}
.controls {
  margin-top: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.slider-row {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) minmax(160px, 260px) 64px;
  gap: 12px;
  align-items: center;
}
input[type="range"] {
  width: 100%;
  accent-color: var(--ced-charge);
}
button.detail-button {
  appearance: none;
  border: 1px solid var(--ced-border);
  background: #181818;
  color: var(--ced-sub);
  border-radius: 8px;
  padding: 7px 10px;
  cursor: pointer;
}
.drawer {
  position: absolute;
  top: 74px;
  right: 18px;
  width: min(420px, calc(100% - 36px));
  max-height: calc(100% - 92px);
  overflow: auto;
  z-index: 5;
  background: #181818;
  border: 1px solid var(--ced-border);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.45);
}
.drawer[hidden] { display: none; }
.drawer-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.drawer h2 {
  margin: 0;
  font-size: 16px;
}
.drawer-grid {
  display: grid;
  gap: 8px;
}
.unavailable {
  color: var(--ced-muted);
}
@media (max-width: 1100px) {
  .grid, .lower {
    grid-template-columns: 1fr;
  }
  .center-column {
    order: -1;
  }
  .controls {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 650px) {
  .page { padding: 12px; }
  .header {
    grid-template-columns: 1fr;
    height: auto;
    gap: 10px;
    padding-bottom: 12px;
  }
  .header h1 { text-align: left; }
  .header-right { justify-content: flex-start; flex-wrap: wrap; }
  .secondary, .strip-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .slider-row {
    grid-template-columns: 1fr;
  }
}
`;

class CampervanEnergyDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.config = DEFAULT_CONFIG;
    this._hass = undefined;
    this._rendered = false;
    this._drawer = null;
    this._history = null;
    this._historyRequestedAt = 0;
    this._threeStarted = false;
    this._timeTimer = null;
  }

  static getConfigElement() {
    return document.createElement("campervan-energy-dashboard-editor");
  }

  static getStubConfig() {
    return DEFAULT_CONFIG;
  }

  setConfig(config) {
    this.config = mergeConfig(DEFAULT_CONFIG, config || {});
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._rendered) this.render();
    this.updateDynamic();
    this.fetchHistory();
  }

  disconnectedCallback() {
    if (this._timeTimer) clearInterval(this._timeTimer);
    document.removeEventListener("visibilitychange", this._visibilityHandler);
  }

  render() {
    const renderUrl = `url("${this.config.render_url}")`;
    this.shadowRoot.innerHTML = `<style>${CSS}</style>
      <div class="page" style="--render-url: ${renderUrl}">
        <header class="header">
          <div class="brand">
            <div class="van-icon" aria-hidden="true">${iconVan()}</div>
            <span>Energy system</span>
          </div>
          <h1>${escapeHtml(this.config.title || "Campervan Energy")}</h1>
          <div class="header-right">
            <span class="status-pill"><span class="dot" data-status-dot></span><span data-system-status>Reading system</span></span>
            <span class="status-pill" data-time></span>
          </div>
        </header>
        <section class="grid">
          <div class="column">
            ${this.sourceCard("solar", "Solar", "Solar panels to EPEVER MPPT", "var(--ced-solar)")}
            ${this.sourceCard("alternator", "Alternator", "Two DC-to-DC chargers to battery", "var(--ced-alt)")}
            ${this.sourceCard("hookup", "Hookup", "230V charger to battery", "var(--ced-hookup)")}
          </div>
          <div class="column center-column">
            <div class="van-stage">
              <div class="van-render" data-van-render></div>
              <div class="three-host" data-three-host></div>
              <div class="flow solar" data-flow="solar"></div>
              <div class="flow alternator-a" data-flow="alternator"></div>
              <div class="flow alternator-b" data-flow="alternator"></div>
              <div class="flow hookup" data-flow="hookup"></div>
              <div class="flow output" data-flow="output"></div>
              <button class="hotspot solar" data-detail="solar" title="Solar panels"></button>
              <button class="hotspot alternator" data-detail="charger" title="Engine alternator"></button>
              <button class="hotspot hookup" data-detail="charger" title="Hookup socket"></button>
              <button class="hotspot battery" data-detail="battery" title="Battery compartment"></button>
              <div class="consumption">
                <div>
                  <div class="label">Van usage</div>
                  <div class="state">Total campervan consumption</div>
                </div>
                <div class="value"><span data-consumption>--</span><span class="unit">W</span></div>
              </div>
            </div>
          </div>
          <div class="column">
            ${this.batteryHero()}
            ${this.batteryComparison()}
          </div>
        </section>
        <section class="lower">
          ${this.todaySummary()}
          ${this.historyChart()}
        </section>
        ${this.controls()}
        <aside class="drawer" data-drawer hidden></aside>
      </div>`;
    this._rendered = true;
    this.bindEvents();
    this.updateClock();
    if (this.config.show_time !== false) {
      this._timeTimer = setInterval(() => this.updateClock(), 30000);
    }
    this.startThree();
    this.updateDynamic();
  }

  sourceCard(key, title, subtitle, accent) {
    return `<article class="card source-card" data-card="${key}" style="--accent: ${accent}">
      <div class="card-head">
        <div>
          <div class="label">${title}</div>
          <div class="state">${subtitle}</div>
        </div>
        <button class="detail-button" data-detail="${key === "solar" ? "solar" : "charger"}">Details</button>
      </div>
      <div class="primary"><span data-${key}-power>--</span><span class="unit">W</span></div>
      <div class="state" data-${key}-state>--</div>
      <div class="secondary">
        <div class="metric"><span>Voltage</span><strong data-${key}-voltage>--</strong></div>
        <div class="metric"><span>Current</span><strong data-${key}-current>--</strong></div>
        <div class="metric"><span>${key === "solar" ? "Today" : "Input"}</span><strong data-${key}-extra>--</strong></div>
      </div>
    </article>`;
  }

  batteryHero() {
    return `<article class="card battery-hero" data-card="battery" style="--accent: var(--ced-charge)">
      <div class="card-head">
        <div>
          <div class="label">Battery bank</div>
          <div class="state">Combined Fogstar bank</div>
        </div>
        <button class="detail-button" data-detail="battery">Health</button>
      </div>
      <div class="primary"><span data-bank-soc>--</span><span class="unit">%</span></div>
      <div class="battery-status" data-bank-status>--</div>
      <div class="secondary">
        <div class="metric"><span>Capacity</span><strong data-bank-capacity>--</strong></div>
        <div class="metric"><span>Voltage</span><strong data-bank-voltage>--</strong></div>
        <div class="metric"><span>Time</span><strong data-bank-time>--</strong></div>
      </div>
    </article>`;
  }

  batteryComparison() {
    return `<article class="card" style="--accent: var(--ced-border)">
      <div class="card-head">
        <div>
          <div class="label">Battery comparison</div>
          <div class="state" data-balance-status>--</div>
        </div>
      </div>
      ${this.batteryStrip("1")}
      ${this.batteryStrip("2")}
      <div class="balance">
        <div class="metric-row"><span class="state">SOC difference</span><strong data-soc-diff>--</strong></div>
        <div class="metric-row"><span class="state">Current share</span><strong data-current-share>--</strong></div>
      </div>
    </article>`;
  }

  batteryStrip(index) {
    return `<div class="battery-strip">
      <div class="soc-ring" data-battery-${index}-ring style="--soc: 0%">--</div>
      <div>
        <div class="row"><strong>Battery ${index}</strong><span class="state" data-battery-${index}-status>--</span></div>
        <div class="strip-grid">
          <div class="metric"><span>Capacity</span><strong data-battery-${index}-capacity>--</strong></div>
          <div class="metric"><span>Voltage</span><strong data-battery-${index}-voltage>--</strong></div>
          <div class="metric"><span>Current</span><strong data-battery-${index}-current>--</strong></div>
          <div class="metric"><span>SOC</span><strong data-battery-${index}-soc>--</strong></div>
        </div>
      </div>
    </div>`;
  }

  todaySummary() {
    return `<article class="summary">
      <div class="label">Today's energy</div>
      <div class="summary-grid">
        <div class="metric-row"><span class="state">Solar generated</span><strong data-today-solar>--</strong></div>
        <div class="metric-row"><span class="state">Total consumption</span><strong data-today-consumption>--</strong></div>
        <div class="metric-row"><span class="state">Battery energy in</span><strong data-today-in>--</strong></div>
        <div class="metric-row"><span class="state">Battery energy out</span><strong data-today-out>--</strong></div>
        <div class="metric-row"><span class="state">Net battery change</span><strong data-today-net>--</strong></div>
      </div>
    </article>`;
  }

  historyChart() {
    return `<article class="history">
      <div class="card-head">
        <div>
          <div class="label">Energy history</div>
          <div class="state">Last 24 hours from recorder statistics when available</div>
        </div>
        <span class="state" data-history-state>Waiting for data</span>
      </div>
      <div class="chart" data-chart>${emptyChart()}</div>
    </article>`;
  }

  controls() {
    return `<section class="controls">
      ${this.sliderControl("1")}
      ${this.sliderControl("2")}
    </section>`;
  }

  sliderControl(index) {
    return `<div class="slider-row">
      <div>
        <div class="label">Charger ${index} maximum current</div>
        <div class="state" data-charger-${index}-status>Battery charger input limit</div>
      </div>
      <input type="range" min="0" max="60" step="1" data-charger-slider="${index}" aria-label="Charger ${index} maximum current">
      <strong data-charger-${index}-value>--</strong>
    </div>`;
  }

  bindEvents() {
    this.shadowRoot.querySelectorAll("[data-detail]").forEach((el) => {
      el.addEventListener("click", () => this.openDrawer(el.dataset.detail));
    });
    this.shadowRoot.querySelectorAll("[data-charger-slider]").forEach((el) => {
      el.addEventListener("change", (event) => this.setChargerCurrent(event.currentTarget.dataset.chargerSlider, event.currentTarget.value));
      el.addEventListener("input", (event) => this.setText(`[data-charger-${event.currentTarget.dataset.chargerSlider}-value]`, `${event.currentTarget.value} A`));
    });
    this._visibilityHandler = () => {
      this._paused = document.hidden;
    };
    document.addEventListener("visibilitychange", this._visibilityHandler);
  }

  updateClock() {
    const el = this.shadowRoot.querySelector("[data-time]");
    if (!el) return;
    if (this.config.show_time === false) {
      el.hidden = true;
      return;
    }
    el.textContent = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date());
  }

  updateDynamic() {
    if (!this._hass || !this._rendered) return;
    const e = this.config.entities;
    const solarPower = this.num(e.solar.pv_power);
    const altPower = this.num(e.alternator.power);
    const hookupPower = this.num(e.hookup.power);
    const bankPower = this.num(e.bank.net_power);
    const outputPower = Math.abs(this.num(e.bank.output_power, Math.min(bankPower, 0)));
    const soc = this.num(e.bank.state_of_charge);
    const b1soc = this.num(e.battery_1.state_of_charge);
    const b2soc = this.num(e.battery_2.state_of_charge);
    const b1current = this.num(e.battery_1.current);
    const b2current = this.num(e.battery_2.current);

    this.updateSource("solar", solarPower, this.num(e.solar.pv_voltage), this.num(e.solar.pv_current), this.energy(e.solar.generated_today, e.solar.generated_today_fallback), solarPower > 10 ? "Charging" : "Inactive");
    const altState = altPower > 20 ? "Charging" : this.num(e.alternator.voltage) > 12.5 ? "Engine available" : "Engine off";
    this.updateSource("alternator", altPower, this.num(e.alternator.voltage), this.num(e.alternator.current), "2 chargers", altState);
    const hookupState = hookupPower > 20 ? "Charging" : this.num(e.hookup.voltage) > 100 ? "Connected" : "Disconnected";
    this.updateSource("hookup", hookupPower, this.num(e.hookup.voltage), this.num(e.hookup.current), "Battery charger", hookupState);

    this.setText("[data-consumption]", fmtNum(outputPower, 0));
    this.setText("[data-bank-soc]", fmtNum(soc, 0));
    this.setText("[data-bank-capacity]", this.entityText(e.bank.remaining_capacity, "Ah", 0));
    this.setText("[data-bank-voltage]", this.entityText(e.bank.voltage, "V", 2));
    this.setText("[data-bank-time]", cleanTime(this.state(e.bank.remaining_time)));
    this.setText("[data-bank-status]", batteryStatus(bankPower, outputPower));

    this.updateBattery("1", e.battery_1);
    this.updateBattery("2", e.battery_2);
    const diff = Math.abs(b1soc - b2soc);
    const totalCurrent = Math.abs(b1current) + Math.abs(b2current);
    const share1 = totalCurrent > 0 ? Math.abs(b1current) / totalCurrent * 100 : null;
    const balance = diff < 3 ? "Balanced" : diff < 8 ? "Minor imbalance" : "Check battery balance";
    this.setText("[data-balance-status]", balance);
    this.setText("[data-soc-diff]", Number.isFinite(diff) ? `${fmtNum(diff, 1)} %` : "--");
    this.setText("[data-current-share]", Number.isFinite(share1) ? `${fmtNum(share1, 0)} / ${fmtNum(100 - share1, 0)} %` : "--");

    this.setText("[data-today-solar]", this.energy(e.solar.generated_today, e.solar.generated_today_fallback));
    this.setText("[data-today-consumption]", this.entityText(e.summary.total_consumption_today, "kWh", 2));
    this.setText("[data-today-in]", this.entityText(e.summary.battery_input_kwh, "kWh", 2));
    this.setText("[data-today-out]", this.entityText(e.summary.battery_output_kwh, "kWh", 2));
    const net = this.num(e.summary.battery_input_kwh) - this.num(e.summary.battery_output_kwh);
    this.setText("[data-today-net]", Number.isFinite(net) ? `${fmtNum(net, 2)} kWh` : "--");

    this.updateSlider("1", e.charger_1.maximum_current_control);
    this.updateSlider("2", e.charger_2.maximum_current_control);
    this.setText("[data-system-status]", this.systemStatus());
    this.shadowRoot.querySelector("[data-status-dot]")?.classList.toggle("warning", this.systemStatus() !== "System OK");

    this.toggleActive("solar", solarPower > 10);
    this.toggleActive("alternator", altPower > 20);
    this.toggleActive("hookup", hookupPower > 20);
    this.toggleActive("output", outputPower > 20);
    this.shadowRoot.querySelector(".hotspot.battery")?.classList.toggle("active", Math.abs(bankPower) > 20);
  }

  updateSource(key, power, voltage, current, extra, state) {
    this.setText(`[data-${key}-power]`, fmtNum(Math.max(0, power), 0));
    this.setText(`[data-${key}-voltage]`, Number.isFinite(voltage) ? `${fmtNum(voltage, voltage > 50 ? 0 : 1)} V` : "--");
    this.setText(`[data-${key}-current]`, Number.isFinite(current) ? `${fmtNum(current, 1)} A` : "--");
    this.setText(`[data-${key}-extra]`, extra);
    this.setText(`[data-${key}-state]`, state);
    const active = power > 10;
    this.shadowRoot.querySelector(`[data-card="${key}"]`)?.classList.toggle("active", active);
    this.shadowRoot.querySelector(`[data-card="${key}"]`)?.classList.toggle("inactive", !active);
    this.shadowRoot.querySelector(`.hotspot.${key === "alternator" ? "alternator" : key}`)?.classList.toggle("active", active);
  }

  updateBattery(index, entityMap) {
    const soc = this.num(entityMap.state_of_charge);
    this.setText(`[data-battery-${index}-ring]`, Number.isFinite(soc) ? `${fmtNum(soc, 0)}%` : "--");
    const ring = this.shadowRoot.querySelector(`[data-battery-${index}-ring]`);
    if (ring) ring.style.setProperty("--soc", `${Math.max(0, Math.min(100, soc || 0))}%`);
    this.setText(`[data-battery-${index}-status]`, this.state(entityMap.status) || "--");
    this.setText(`[data-battery-${index}-capacity]`, this.entityText(entityMap.remaining_capacity, "Ah", 0));
    this.setText(`[data-battery-${index}-voltage]`, this.entityText(entityMap.voltage, "V", 2));
    this.setText(`[data-battery-${index}-current]`, this.entityText(entityMap.current, "A", 1));
    this.setText(`[data-battery-${index}-soc]`, this.entityText(entityMap.state_of_charge, "%", 0));
  }

  updateSlider(index, entityId) {
    const value = this.num(entityId);
    const slider = this.shadowRoot.querySelector(`[data-charger-slider="${index}"]`);
    if (slider && Number.isFinite(value) && document.activeElement !== slider) slider.value = value;
    this.setText(`[data-charger-${index}-value]`, Number.isFinite(value) ? `${fmtNum(value, 0)} A` : "--");
  }

  async setChargerCurrent(index, value) {
    const entityId = this.config.entities[`charger_${index}`]?.maximum_current_control;
    if (!this._hass || !entityId) return;
    await this._hass.callService("input_number", "set_value", {
      entity_id: entityId,
      value: Number(value)
    });
  }

  async fetchHistory() {
    if (!this._hass || !this._rendered) return;
    const now = Date.now();
    if (now - this._historyRequestedAt < 300000) return;
    this._historyRequestedAt = now;
    const e = this.config.entities;
    const ids = [
      e.solar.generated_today,
      e.summary.battery_input_kwh,
      e.summary.battery_output_kwh,
      e.alternator.power,
      e.hookup.power
    ].filter(Boolean);
    try {
      const start = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const end = new Date().toISOString();
      const result = await this._hass.callWS({
        type: "recorder/statistics_during_period",
        start_time: start,
        end_time: end,
        statistic_ids: ids,
        period: "hour",
        types: ["mean", "sum", "state"]
      });
      this._history = result;
      this.setText("[data-history-state]", "Recorder statistics");
      this.renderChartFromStats(result, ids);
    } catch (error) {
      this.setText("[data-history-state]", "Live snapshot fallback");
      this.renderSnapshotChart();
    }
  }

  renderChartFromStats(stats, ids) {
    const series = ids.map((id) => {
      const rows = stats?.[id] || [];
      return rows.map((row) => Number(row.sum ?? row.mean ?? row.state ?? 0)).filter(Number.isFinite);
    });
    this.shadowRoot.querySelector("[data-chart]").innerHTML = chartSvg(series, ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"]);
  }

  renderSnapshotChart() {
    const e = this.config.entities;
    const series = [
      [this.num(e.solar.pv_power)],
      [this.num(e.bank.input_power)],
      [this.num(e.bank.output_power)],
      [this.num(e.alternator.power)],
      [this.num(e.hookup.power)]
    ];
    this.shadowRoot.querySelector("[data-chart]").innerHTML = chartSvg(series, ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"]);
  }

  openDrawer(type) {
    const drawer = this.shadowRoot.querySelector("[data-drawer]");
    if (!drawer) return;
    drawer.hidden = false;
    const close = `<button class="detail-button" data-close-drawer>Close</button>`;
    const title = type === "battery" ? "Battery health" : type === "solar" ? "Solar diagnostics" : "Charger diagnostics";
    drawer.innerHTML = `<div class="drawer-head"><h2>${title}</h2>${close}</div><div class="drawer-grid">${this.drawerRows(type)}</div>`;
    drawer.querySelector("[data-close-drawer]").addEventListener("click", () => { drawer.hidden = true; });
  }

  drawerRows(type) {
    const e = this.config.entities;
    if (type === "solar") {
      return rows(this, [
        ["Charging mode", e.solar.charging_mode],
        ["Charger status", e.solar.charger_status],
        ["Battery status", e.solar.battery_status],
        ["Controller temp", e.solar.device_temperature, "°C"],
        ["Component temp", e.solar.component_temperature, "°C"],
        ["Max PV today", e.solar.maximum_pv_voltage_today, "V"],
        ["Min PV today", e.solar.minimum_pv_voltage_today, "V"]
      ]);
    }
    if (type === "charger") {
      return rows(this, [
        ["Charger 1 state", e.charger_1.state],
        ["Charger 1 current", e.charger_1.battery_current, "A"],
        ["Charger 1 temp", e.charger_1.internal_temperature, "°C"],
        ["Charger 1 alarms", e.charger_1.alarms],
        ["Charger 2 state", e.charger_2.state],
        ["Charger 2 current", e.charger_2.battery_current, "A"],
        ["Charger 2 temp", e.charger_2.internal_temperature, "°C"],
        ["Charger 2 alarms", e.charger_2.alarms]
      ], true);
    }
    return rows(this, [
      ["Protection", e.bank.protection_flags],
      ["Cell delta", e.bank.cell_voltage_delta, "V"],
      ["High temp", e.bank.highest_temperature, "°C"],
      ["Low temp", e.bank.lowest_temperature, "°C"],
      ["Cycles", e.bank.cycles],
      ["FET state", e.bank.fet_state],
      ["Battery 1 cells", [e.battery_1.cell_1_voltage, e.battery_1.cell_2_voltage, e.battery_1.cell_3_voltage, e.battery_1.cell_4_voltage], "V"],
      ["Battery 2 cells", [e.battery_2.cell_1_voltage, e.battery_2.cell_2_voltage, e.battery_2.cell_3_voltage, e.battery_2.cell_4_voltage], "V"],
      ["Battery 1 temps", [e.battery_1.temperature_1, e.battery_1.temperature_2, e.battery_1.temperature_3], "°C"],
      ["Battery 2 temps", [e.battery_2.temperature_1, e.battery_2.temperature_2, e.battery_2.temperature_3], "°C"]
    ]);
  }

  toggleActive(name, active) {
    this.shadowRoot.querySelectorAll(`[data-flow="${name}"]`).forEach((el) => el.classList.toggle("active", active));
  }

  systemStatus() {
    const flags = this.state(this.config.entities.bank.protection_flags);
    if (flags && flags !== "OK") return "Check battery";
    return "System OK";
  }

  state(entityId) {
    const state = entityId ? this._hass?.states?.[entityId]?.state : undefined;
    if (!state || state === "unknown" || state === "unavailable") return "";
    return state;
  }

  num(entityId, fallback = NaN) {
    const value = Number(this.state(entityId));
    return Number.isFinite(value) ? value : fallback;
  }

  entityText(entityId, unit, decimals = 1) {
    const value = this.num(entityId);
    return Number.isFinite(value) ? `${fmtNum(value, decimals)} ${unit}` : "--";
  }

  energy(entityId, fallbackId) {
    const value = this.num(entityId);
    if (Number.isFinite(value)) return `${fmtNum(value / (value > 100 ? 1000 : 1), 2)} ${value > 100 ? "kWh" : "kWh"}`;
    const fallback = this.num(fallbackId);
    return Number.isFinite(fallback) ? `${fmtNum(fallback, 2)} kWh` : "--";
  }

  setText(selector, value) {
    const el = this.shadowRoot.querySelector(selector);
    if (el) el.textContent = value || "--";
  }

  async startThree() {
    if (this._threeStarted || !this.config.model_url) return;
    this._threeStarted = true;
    const host = this.shadowRoot.querySelector("[data-three-host]");
    if (!host) return;
    try {
      const THREE = await import(this.config.three_module_url);
      const loaderModule = await import(this.config.gltf_loader_url);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, host.clientWidth / host.clientHeight, 0.1, 100);
      camera.position.set(3.8, 2.1, 4.5);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(host.clientWidth, host.clientHeight);
      host.appendChild(renderer.domElement);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x222222, 2.2));
      const key = new THREE.DirectionalLight(0xffffff, 2.8);
      key.position.set(4, 5, 6);
      scene.add(key);
      const loader = new loaderModule.GLTFLoader();
      loader.load(this.config.model_url, (gltf) => {
        const model = gltf.scene;
        model.rotation.y = -0.65;
        scene.add(model);
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.scale.multiplyScalar(3 / size);
      });
      const animate = () => {
        if (!document.hidden) {
          scene.rotation.y = Math.sin(Date.now() / 9000) * 0.08;
          renderer.render(scene, camera);
        }
        requestAnimationFrame(animate);
      };
      animate();
      const resize = new ResizeObserver(() => {
        camera.aspect = host.clientWidth / host.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(host.clientWidth, host.clientHeight);
      });
      resize.observe(host);
    } catch (error) {
      host.remove();
    }
  }

  getCardSize() {
    return 12;
  }
}

function mergeConfig(base, extra) {
  const output = Array.isArray(base) ? [...base] : { ...base };
  for (const [key, value] of Object.entries(extra || {})) {
    if (value && typeof value === "object" && !Array.isArray(value) && base[key] && typeof base[key] === "object") {
      output[key] = mergeConfig(base[key], value);
    } else {
      output[key] = value;
    }
  }
  return output;
}

function fmtNum(value, decimals = 0) {
  if (!Number.isFinite(value)) return "--";
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function batteryStatus(netPower, outputPower) {
  if (netPower > 20) return `Charging at ${fmtNum(Math.abs(netPower), 0)} W`;
  if (netPower < -20) return `Discharging at ${fmtNum(outputPower || Math.abs(netPower), 0)} W`;
  return "Battery idle";
}

function cleanTime(value) {
  if (!value) return "--";
  return value.replace(" remaining", "");
}

function rows(card, values, hideUnavailable = false) {
  return values.map(([label, entity, unit]) => {
    let value;
    if (Array.isArray(entity)) {
      value = entity.map((id) => card.entityText(id, unit || "", unit ? 3 : 1).replace(` ${unit}`, "")).filter((item) => item !== "--").join(" / ");
      if (value && unit) value += ` ${unit}`;
    } else {
      value = unit ? card.entityText(entity, unit, unit === "V" ? 3 : 1) : card.state(entity);
    }
    if (!value || value === "--") {
      if (hideUnavailable) return "";
      value = `<span class="unavailable">--</span>`;
    } else {
      value = escapeHtml(value);
    }
    return `<div class="metric-row"><span class="state">${escapeHtml(label)}</span><strong>${value}</strong></div>`;
  }).join("");
}

function chartSvg(series, colors) {
  const width = 900;
  const height = 170;
  const padding = 22;
  const flat = series.flat().filter(Number.isFinite);
  const max = Math.max(1, ...flat);
  const count = Math.max(...series.map((item) => item.length), 1);
  const groupWidth = (width - padding * 2) / count;
  const barWidth = Math.max(3, groupWidth / (series.length + 1));
  let bars = "";
  series.forEach((values, seriesIndex) => {
    const normalized = values.length > 1 ? values : Array.from({ length: 12 }, (_, i) => i === 11 ? values[0] || 0 : 0);
    normalized.forEach((value, index) => {
      const h = Math.max(2, (Math.abs(value) / max) * (height - padding * 2));
      const x = padding + index * groupWidth + seriesIndex * barWidth;
      const y = height - padding - h;
      bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${Math.max(2, barWidth - 2).toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${colors[seriesIndex]}" opacity="0.82"/>`;
    });
  });
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Energy history chart">
    <g stroke="#2a2a2a" stroke-width="1">
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}"/>
      <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}"/>
      <line x1="${padding}" y1="${height / 2}" x2="${width - padding}" y2="${height / 2}" opacity="0.7"/>
    </g>
    ${bars}
  </svg>`;
}

function emptyChart() {
  return chartSvg([[0], [0], [0], [0], [0]], ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"]);
}

function iconVan() {
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 15V8.8c0-1 .8-1.8 1.8-1.8h9.7c.7 0 1.3.3 1.7.9L20 13v2"/>
    <path d="M3 15h18"/>
    <path d="M7 17.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"/>
    <path d="M17 17.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"/>
    <path d="M6 10h5"/>
    <path d="M13 10h3"/>
  </svg>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

customElements.define("campervan-energy-dashboard", CampervanEnergyDashboard);
console.info(`%c CAMPERVAN-ENERGY-DASHBOARD %c ${CARD_VERSION} `, "color: white; background: #4caf50; font-weight: 700;", "color: white; background: #1b1b1b; font-weight: 700;");
