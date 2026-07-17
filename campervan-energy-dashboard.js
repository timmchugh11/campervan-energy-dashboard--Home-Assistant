const CARD_VERSION = "0.3.0";

const DEFAULT_CONFIG = {
  title: "Campervan Energy Dashboard",
  model_url: "/local/van_power/van.glb",
  render_url: "",
  three_module_url: "/local/van_power/vendor/three/build/three.module.js",
  gltf_loader_url: "/local/van_power/vendor/three/examples/jsm/loaders/GLTFLoader.js",
  show_time: true,
  entities: {
    solar: {
      pv_voltage: null,
      pv_current: null,
      pv_power: null,
      generated_today: null,
      generated_today_fallback: null,
      charging_mode: null,
      charger_status: null,
      battery_status: null,
      device_temperature: null,
      component_temperature: null,
      maximum_pv_voltage_today: null,
      minimum_pv_voltage_today: null
    },
    alternator: {
      voltage: null,
      current: null,
      power: null,
      charger_1: {
        voltage: null,
        current: null,
        power: null
      },
      charger_2: {
        voltage: null,
        current: null,
        power: null
      }
    },
    hookup: {
      voltage: null,
      current: null,
      power: null,
      charger_1: {
        voltage: null,
        current: null,
        power: null
      },
      charger_2: {
        voltage: null,
        current: null,
        power: null
      }
    },
    bank: {
      state_of_charge: null,
      voltage: null,
      current: null,
      net_power: null,
      input_power: null,
      output_power: null,
      remaining_capacity: null,
      remaining_time: null,
      charger_total_power: null,
      nominal_capacity: null,
      cycles: null,
      protection_flags: null,
      fet_state: null,
      minimum_cell_voltage: null,
      maximum_cell_voltage: null,
      cell_voltage_delta: null,
      highest_temperature: null,
      lowest_temperature: null
    },
    battery_1: {
      status: null,
      current: null,
      voltage: null,
      state_of_charge: null,
      remaining_capacity: null,
      nominal_capacity: null,
      cycles: null,
      protection_flags: null,
      fet_state: null,
      cell_1_voltage: null,
      cell_2_voltage: null,
      cell_3_voltage: null,
      cell_4_voltage: null,
      temperature_1: null,
      temperature_2: null,
      temperature_3: null
    },
    battery_2: {
      status: null,
      current: null,
      voltage: null,
      state_of_charge: null,
      remaining_capacity: null,
      nominal_capacity: null,
      cycles: null,
      protection_flags: null,
      fet_state: null,
      cell_1_voltage: null,
      cell_2_voltage: null,
      cell_3_voltage: null,
      cell_4_voltage: null,
      temperature_1: null,
      temperature_2: null,
      temperature_3: null
    },
    charger_1: {
      maximum_current_control: null,
      battery_current: null,
      internal_temperature: null,
      state: null,
      alarms: null
    },
    charger_2: {
      maximum_current_control: null,
      battery_current: null,
      internal_temperature: null,
      state: null,
      alarms: null
    },
    summary: {
      total_consumption_today: null,
      solar_total: null,
      battery_input_total: null,
      battery_output_total: null
    }
  }
};

const entityField = (path, label, domains = ["sensor"]) => ({ path, label, domains });

const ENTITY_EDITOR_GROUPS = [
  {
    title: "Solar",
    fields: [
      entityField("entities.solar.pv_voltage", "PV voltage"),
      entityField("entities.solar.pv_current", "PV current"),
      entityField("entities.solar.pv_power", "PV power"),
      entityField("entities.solar.generated_today", "Energy generated today"),
      entityField("entities.solar.generated_today_fallback", "Generated today fallback"),
      entityField("entities.solar.charging_mode", "Charging mode"),
      entityField("entities.solar.charger_status", "Charger status"),
      entityField("entities.solar.battery_status", "Battery status"),
      entityField("entities.solar.device_temperature", "Device temperature"),
      entityField("entities.solar.component_temperature", "Component temperature"),
      entityField("entities.solar.maximum_pv_voltage_today", "Maximum PV voltage today"),
      entityField("entities.solar.minimum_pv_voltage_today", "Minimum PV voltage today")
    ]
  },
  {
    title: "Alternator",
    fields: [
      entityField("entities.alternator.voltage", "Combined voltage"),
      entityField("entities.alternator.current", "Combined current"),
      entityField("entities.alternator.power", "Combined power"),
      entityField("entities.alternator.charger_1.voltage", "Charger 1 voltage"),
      entityField("entities.alternator.charger_1.current", "Charger 1 current"),
      entityField("entities.alternator.charger_1.power", "Charger 1 power"),
      entityField("entities.alternator.charger_2.voltage", "Charger 2 voltage"),
      entityField("entities.alternator.charger_2.current", "Charger 2 current"),
      entityField("entities.alternator.charger_2.power", "Charger 2 power")
    ]
  },
  {
    title: "Hookup",
    fields: [
      entityField("entities.hookup.voltage", "Combined voltage"),
      entityField("entities.hookup.current", "Combined current"),
      entityField("entities.hookup.power", "Combined power"),
      entityField("entities.hookup.charger_1.voltage", "Charger 1 voltage"),
      entityField("entities.hookup.charger_1.current", "Charger 1 current"),
      entityField("entities.hookup.charger_1.power", "Charger 1 power"),
      entityField("entities.hookup.charger_2.voltage", "Charger 2 voltage"),
      entityField("entities.hookup.charger_2.current", "Charger 2 current"),
      entityField("entities.hookup.charger_2.power", "Charger 2 power")
    ]
  },
  {
    title: "Battery bank",
    fields: [
      entityField("entities.bank.state_of_charge", "State of charge"),
      entityField("entities.bank.voltage", "Voltage"),
      entityField("entities.bank.current", "Current"),
      entityField("entities.bank.net_power", "Net power"),
      entityField("entities.bank.input_power", "Input power"),
      entityField("entities.bank.output_power", "Output power"),
      entityField("entities.bank.remaining_capacity", "Remaining capacity"),
      entityField("entities.bank.remaining_time", "Remaining time"),
      entityField("entities.bank.charger_total_power", "Total charger power"),
      entityField("entities.bank.nominal_capacity", "Nominal capacity"),
      entityField("entities.bank.cycles", "Cycles"),
      entityField("entities.bank.protection_flags", "Protection flags"),
      entityField("entities.bank.fet_state", "FET state"),
      entityField("entities.bank.minimum_cell_voltage", "Minimum cell voltage"),
      entityField("entities.bank.maximum_cell_voltage", "Maximum cell voltage"),
      entityField("entities.bank.cell_voltage_delta", "Cell voltage delta"),
      entityField("entities.bank.highest_temperature", "Highest temperature"),
      entityField("entities.bank.lowest_temperature", "Lowest temperature")
    ]
  },
  ...[1, 2].map((index) => ({
    title: `Battery ${index}`,
    fields: [
      entityField(`entities.battery_${index}.status`, "Status"),
      entityField(`entities.battery_${index}.current`, "Current"),
      entityField(`entities.battery_${index}.voltage`, "Voltage"),
      entityField(`entities.battery_${index}.state_of_charge`, "State of charge"),
      entityField(`entities.battery_${index}.remaining_capacity`, "Remaining capacity"),
      entityField(`entities.battery_${index}.nominal_capacity`, "Nominal capacity"),
      entityField(`entities.battery_${index}.cycles`, "Cycles"),
      entityField(`entities.battery_${index}.protection_flags`, "Protection flags"),
      entityField(`entities.battery_${index}.fet_state`, "FET state"),
      entityField(`entities.battery_${index}.cell_1_voltage`, "Cell 1 voltage"),
      entityField(`entities.battery_${index}.cell_2_voltage`, "Cell 2 voltage"),
      entityField(`entities.battery_${index}.cell_3_voltage`, "Cell 3 voltage"),
      entityField(`entities.battery_${index}.cell_4_voltage`, "Cell 4 voltage"),
      entityField(`entities.battery_${index}.temperature_1`, "Temperature 1"),
      entityField(`entities.battery_${index}.temperature_2`, "Temperature 2"),
      entityField(`entities.battery_${index}.temperature_3`, "Temperature 3")
    ]
  })),
  ...[1, 2].map((index) => ({
    title: `Charger ${index}`,
    fields: [
      entityField(`entities.charger_${index}.maximum_current_control`, "Maximum current control", ["input_number", "number"]),
      entityField(`entities.charger_${index}.battery_current`, "Battery current"),
      entityField(`entities.charger_${index}.internal_temperature`, "Internal temperature"),
      entityField(`entities.charger_${index}.state`, "State"),
      entityField(`entities.charger_${index}.alarms`, "Alarms")
    ]
  })),
  {
    title: "Energy summary",
    fields: [
      entityField("entities.summary.total_consumption_today", "Total consumption today"),
      entityField("entities.summary.solar_total", "Solar total"),
      entityField("entities.summary.battery_input_total", "Battery input total"),
      entityField("entities.summary.battery_output_total", "Battery output total")
    ]
  }
];

const EDITOR_GROUPS = [
  {
    title: "Optional visuals",
    fields: [
      { path: "render_url", label: "Fallback image URL", selector: { text: {} } },
      { path: "model_url", label: "Custom GLB/GLTF model URL", selector: { text: {} } },
      { path: "three_module_url", label: "Three.js module URL", selector: { text: {} } },
      { path: "gltf_loader_url", label: "GLTFLoader module URL", selector: { text: {} } }
    ]
  },
  ...ENTITY_EDITOR_GROUPS
];

const CSS = `
:host {
  --ced-bg: #111111;
  --ced-surface: #1c1c1c;
  --ced-surface-2: #202020;
  --ced-surface-3: #242424;
  --ced-border: #303030;
  --ced-border-subtle: #272727;
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
  height: var(--ced-available-height, calc(100vh - 120px));
  min-height: 0;
  background: var(--ced-bg);
  border-radius: 0;
  overflow: hidden;
  padding: 10px 14px;
  display: grid;
  grid-template-rows: minmax(0, 1fr) clamp(170px, 23%, 250px) 58px;
  gap: 8px;
}
.header {
  height: 46px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 1px solid var(--ced-border);
  margin-bottom: 0;
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
  border-radius: 2px;
  display: grid;
  place-items: center;
  color: var(--ced-charge);
}
h1 {
  font-size: 19px;
  line-height: 1;
  margin: 0 0 0 20px;
  font-weight: 600;
  letter-spacing: 0;
}
.status-pill {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid var(--ced-border);
  border-radius: 2px;
  background: transparent;
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
  gap: 8px;
  align-items: stretch;
  min-height: 0;
}
.column {
  display: grid;
  gap: 8px;
  min-height: 0;
}
.grid > .column:first-child {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}
.grid > .column:last-child {
  grid-template-rows: minmax(0, 0.9fr) minmax(0, 1.1fr);
}
.center-column {
  grid-template-rows: minmax(0, 1fr);
}
.card, .van-stage, .controls, .history, .summary {
  background: var(--ced-surface);
  border: 1px solid var(--ced-border);
  border-radius: 3px;
  box-shadow: none;
}
.card {
  padding: 13px 14px 12px;
  position: relative;
  overflow: hidden;
  min-height: 0;
}
.card::before {
  display: none;
}
.card.inactive {
  opacity: 0.56;
}
.card.active::after {
  display: none;
}
.card-head, .row, .metric-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}
.label {
  color: var(--ced-sub);
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 650;
  letter-spacing: 0;
}
.state {
  color: var(--ced-muted);
  font-size: 12px;
  white-space: nowrap;
}
.primary {
  margin-top: 14px;
  font-size: clamp(32px, 3.7vw, 52px);
  line-height: 0.95;
  font-weight: 560;
  font-variant-numeric: tabular-nums;
}
.source-card.active .primary {
  color: var(--accent);
}
.dual-input-card .primary {
  margin-top: 8px;
  font-size: clamp(30px, 3.2vw, 46px);
}
.dual-input-card .secondary {
  margin-top: 8px;
}
.dual-input-card {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  grid-template-rows: auto auto auto minmax(0, 1fr);
  column-gap: 18px;
}
.dual-input-card .card-head {
  grid-column: 1 / -1;
  grid-row: 1;
}
.dual-input-card > .primary {
  grid-column: 1;
  grid-row: 2;
}
.dual-input-card > .primary + .state {
  grid-column: 1;
  grid-row: 3;
}
.dual-input-card > .secondary {
  grid-column: 1;
  grid-row: 4;
  align-self: start;
}
.dual-input-card > .charger-breakdown {
  grid-column: 2;
  grid-row: 2 / 5;
  align-self: center;
  margin: 0;
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
  margin-top: 12px;
}
.source-card .secondary {
  grid-template-columns: 1fr;
  gap: 8px;
}
.source-meta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.charger-breakdown {
  display: grid;
  gap: 5px;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--ced-border-subtle);
}
.charger-input-row {
  display: grid;
  grid-template-columns: 58px 50px minmax(0, 1fr);
  column-gap: 6px;
  row-gap: 2px;
  align-items: baseline;
  min-width: 0;
  font-size: 11px;
}
.charger-input-row .charger-name {
  color: var(--ced-sub);
  font-weight: 650;
}
.charger-input-row .charger-power {
  color: var(--ced-text);
  font-weight: 650;
  font-variant-numeric: tabular-nums;
}
.charger-input-row .charger-electrical,
.charger-input-row .charger-state {
  color: var(--ced-muted);
  white-space: nowrap;
}
.charger-input-row .charger-electrical {
  grid-column: 2 / 4;
  grid-row: 2;
  font-size: 10px;
}
.charger-input-row .charger-state {
  grid-column: 3;
  grid-row: 1;
  text-align: right;
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
  font-weight: 580;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.entity-value {
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: inherit;
  cursor: pointer;
  text-align: inherit;
}
.entity-value:hover,
.entity-value:focus-visible {
  outline: none;
}
.van-stage {
  height: 100%;
  min-height: 0;
  position: relative;
  overflow: hidden;
  background: #111111;
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
  z-index: 1;
}
.van-silhouette {
  position: absolute;
  left: 9%;
  right: 9%;
  top: 19%;
  height: 52%;
  z-index: 0;
  opacity: 0.88;
}
.van-silhouette svg {
  width: 100%;
  height: 100%;
  display: block;
  filter: drop-shadow(0 28px 26px rgba(0,0,0,0.36));
}
.van-stage.model-loaded .van-silhouette,
.van-stage.model-loaded .model-state {
  display: none;
}
.three-host canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.three-host {
  z-index: 2;
  transform: translate(9%, -2%);
}
.flow {
  display: none !important;
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
  z-index: 4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 220ms ease;
}
.hotspot.active {
  opacity: 1;
  pointer-events: auto;
  box-shadow: 0 0 0 4px rgba(255,255,255,0.04), 0 0 18px color-mix(in srgb, var(--hotspot-color) 40%, transparent);
}
.hotspot.solar { --hotspot-color: var(--ced-solar); left: 49%; top: 43%; }
.hotspot.alternator { --hotspot-color: var(--ced-alt); left: 38%; top: 67%; }
.hotspot.hookup { --hotspot-color: var(--ced-hookup); right: 39%; top: 58%; }
.hotspot.battery { --hotspot-color: var(--ced-charge); left: 56%; top: 57%; }
.model-state {
  position: absolute;
  left: 24px;
  top: 20px;
  z-index: 4;
  color: var(--ced-muted);
  font-size: 12px;
}
.model-views {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 4;
  display: inline-flex;
  padding: 3px;
  gap: 2px;
  background: #171717;
  border: 1px solid var(--ced-border);
  border-radius: 3px;
}
.model-views button {
  appearance: none;
  border: 0;
  border-radius: 2px;
  background: transparent;
  color: var(--ced-muted);
  min-height: 28px;
  padding: 0 10px;
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}
.model-views button:hover {
  color: var(--ced-text);
  background: #202020;
}
.model-views button.active {
  color: var(--ced-text);
  background: #2a2a2a;
}
.battery-power-readout {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  padding-top: 12px;
  border-top: 1px solid #383b3e;
  z-index: 4;
}
.battery-power-readout .value {
  font-size: clamp(36px, 4.4vw, 66px);
  line-height: 0.9;
  font-weight: 650;
  font-variant-numeric: tabular-nums;
  color: var(--ced-text);
  transition: color 180ms ease;
}
.battery-power-readout.charging .value {
  color: var(--ced-charge);
}
.battery-power-readout.discharging .value {
  color: var(--ced-discharge);
}
.battery-hero .primary {
  color: var(--ced-charge);
}
.battery-metrics {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.battery-time {
  grid-column: 1 / -1;
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
  padding: 12px 4px;
  margin-top: 6px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--ced-border-subtle);
  border-radius: 0;
}
.soc-ring {
  width: 64px;
  height: auto;
  min-height: 38px;
  border-radius: 0;
  display: grid;
  place-items: center start;
  background: none;
  border: 0;
  color: var(--ced-charge);
  font-weight: 700;
  font-size: 16px;
  font-variant-numeric: tabular-nums;
}
.strip-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}
.balance {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 0;
  background: transparent;
  border: 0;
  border-top: 1px solid var(--ced-border-subtle);
}
.lower {
  display: grid;
  grid-template-columns: minmax(260px, 25%) 1fr;
  gap: 8px;
  margin-top: 0;
  min-height: 0;
}
.summary, .history, .controls {
  padding: 12px 14px;
  min-height: 0;
}
.summary-grid {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}
.chart {
  height: calc(100% - 46px);
  min-height: 88px;
  margin-top: 10px;
}
.chart svg {
  width: 100%;
  height: 100%;
  display: block;
}
.controls {
  margin-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  padding: 12px 16px;
  align-items: center;
}
.legend {
  display: flex;
  gap: 14px;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 8px;
  color: var(--ced-muted);
  font-size: 11px;
}
.legend span {
  display: inline-flex;
  gap: 6px;
  align-items: center;
}
.legend i {
  width: 9px;
  height: 9px;
  border-radius: 2px;
  display: inline-block;
  background: var(--legend-color);
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
.model-detail-panel {
  position: absolute;
  top: 52px;
  left: 14px;
  width: min(420px, calc(100% - 28px));
  max-height: calc(100% - 142px);
  overflow: auto;
  z-index: 5;
  background: #171717;
  border: 1px solid var(--ced-border);
  border-radius: 0 3px 3px 3px;
  padding: 14px;
  animation: model-detail-drop 160ms ease-out;
}
.model-detail-panel[hidden] { display: none; }
@keyframes model-detail-drop {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}
.model-detail-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.model-detail-panel h2 {
  margin: 0;
  font-size: 14px;
  font-weight: 650;
}
.model-detail-grid {
  display: grid;
  gap: 8px;
}
.model-detail-close {
  appearance: none;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 0;
  background: transparent;
  color: var(--ced-muted);
  font: inherit;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.model-detail-close:hover {
  color: var(--ced-text);
  background: #242424;
}
.unavailable {
  color: var(--ced-muted);
}
@media (max-width: 1100px) {
  .page {
    height: auto;
    min-height: 0;
    overflow: visible;
    grid-template-rows: auto auto auto;
  }
  .grid, .lower {
    grid-template-columns: 1fr;
  }
  .grid {
    grid-template-rows: auto;
  }
  .grid > .column:first-child,
  .grid > .column:last-child,
  .center-column {
    grid-template-rows: none;
    grid-auto-rows: auto;
  }
  .center-column {
    order: -1;
    min-height: min(62vh, 560px);
  }
  .van-stage {
    height: auto;
    min-height: min(62vh, 560px);
  }
  .card {
    min-height: 190px;
    overflow: visible;
  }
  .source-card:not(.dual-input-card) {
    min-height: 250px;
  }
  .dual-input-card {
    min-height: 220px;
  }
  .lower {
    grid-template-rows: auto auto;
  }
  .history {
    min-height: 280px;
  }
  .chart {
    height: 210px;
    min-height: 210px;
  }
  .controls {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 650px) {
  .page {
    padding: 8px;
    gap: 8px;
  }
  .header {
    display: none;
  }
  .grid, .column, .lower {
    gap: 8px;
  }
  .center-column,
  .van-stage {
    min-height: 126px;
  }
  .three-host,
  .van-render,
  .van-silhouette,
  .model-state,
  .model-views,
  .model-detail-panel {
    display: none !important;
  }
  .battery-power-readout {
    left: 12px;
    right: 12px;
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    gap: 10px;
  }
  .battery-power-readout .value {
    font-size: 40px;
    white-space: nowrap;
  }
  .secondary {
    grid-template-columns: repeat(2, 1fr);
  }
  .strip-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .battery-strip {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 8px;
  }
  .slider-row {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 6px 10px;
  }
  .slider-row > div {
    grid-column: 1 / -1;
  }
  .slider-row input {
    grid-column: 1;
  }
  .slider-row strong {
    grid-column: 2;
  }
  .dual-input-card {
    display: block;
  }
  .dual-input-card > .charger-breakdown {
    margin-top: 12px;
  }
  .controls {
    padding: 10px;
  }
  .history {
    min-height: 270px;
  }
  .legend {
    justify-content: flex-start;
    gap: 8px;
  }
}
`;

const DASHBOARD_BUILD = "20260717-layout3";

class CampervanEnergyDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.config = DEFAULT_CONFIG;
    this._hass = undefined;
    this._rendered = false;
    this._drawer = null;
    this._history = null;
    this._dailyEnergy = null;
    this._historyRequestedAt = 0;
    this._threeStarted = false;
    this._selectedModelView = "overview";
    this._timeTimer = null;
    this._viewportHandler = () => {
      this.updateViewportHeight();
      if (!window.matchMedia("(max-width: 650px)").matches) this.startThree();
    };
    this._viewportObserver = null;
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
    window.removeEventListener("resize", this._viewportHandler);
    window.visualViewport?.removeEventListener("resize", this._viewportHandler);
    this._viewportObserver?.disconnect();
    document.removeEventListener("visibilitychange", this._visibilityHandler);
  }

  updateViewportHeight() {
    const page = this.shadowRoot?.querySelector(".page");
    if (!page) return;
    const rect = this.getBoundingClientRect();
    const viewport = window.visualViewport;
    const viewportBottom = viewport
      ? viewport.offsetTop + viewport.height
      : document.documentElement.clientHeight;
    const available = Math.max(0, Math.floor(viewportBottom - Math.max(rect.top, 0) - 8));
    page.style.setProperty("--ced-available-height", `${available}px`);
  }

  render() {
    const renderUrl = this.config.render_url ? `url("${this.config.render_url}")` : "none";
    this.shadowRoot.innerHTML = `<style>${CSS}</style>
      <div class="page" style="--render-url: ${renderUrl}">
        <section class="grid">
          <div class="column">
            ${this.sourceCard("solar", "Solar", "Solar charging input", "var(--ced-solar)")}
            ${this.sourceCard("alternator", "Alternator", "Vehicle charging input", "var(--ced-alt)")}
            ${this.sourceCard("hookup", "Shore power", "Mains charging input", "var(--ced-hookup)")}
          </div>
          <div class="column center-column">
            <div class="van-stage">
              <div class="model-state" data-model-state>${this.config.model_url ? "Loading custom van model" : "Generic van overview"}</div>
              <div class="van-silhouette" aria-hidden="true">${vanSilhouette()}</div>
              <div class="van-render" data-van-render></div>
              <div class="three-host" data-three-host></div>
              <div class="model-views" aria-label="Van system view">
                <button class="active" data-model-view="overview">Overview</button>
                <button data-model-view="solar">Solar</button>
                <button data-model-view="engine">Engine</button>
                <button data-model-view="hookup">Hookup</button>
                <button data-model-view="battery">Battery</button>
              </div>
              <aside class="model-detail-panel" data-model-detail hidden></aside>
              <div class="battery-power-readout" data-battery-power-readout>
                <div>
                  <div class="label">Battery power</div>
                  <div class="state" data-consumption-state>Net battery charge or discharge</div>
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
      </div>`;
    this._rendered = true;
    window.removeEventListener("resize", this._viewportHandler);
    window.addEventListener("resize", this._viewportHandler, { passive: true });
    window.visualViewport?.removeEventListener("resize", this._viewportHandler);
    window.visualViewport?.addEventListener("resize", this._viewportHandler, { passive: true });
    this._viewportObserver?.disconnect();
    this._viewportObserver = new ResizeObserver(this._viewportHandler);
    this._viewportObserver.observe(this);
    requestAnimationFrame(() => {
      this.updateViewportHeight();
      requestAnimationFrame(() => this.updateViewportHeight());
    });
    this.bindEvents();
    this.updateClock();
    if (this.config.show_time !== false) {
      this._timeTimer = setInterval(() => this.updateClock(), 30000);
    }
    this.startThree();
    this.updateDynamic();
  }

  sourceCard(key, title, subtitle, accent) {
    return `<article class="card source-card ${key === "solar" ? "" : "dual-input-card"}" data-card="${key}" style="--accent: ${accent}">
      <div class="card-head">
        <div>
          <div class="label">${title}</div>
          <div class="state">${subtitle}</div>
        </div>
      </div>
      <div class="primary"><span data-${key}-power>--</span><span class="unit">W</span></div>
      <div class="state" data-${key}-state>--</div>
      <div class="secondary">
        <div class="source-meta">
          <div class="metric"><span>Voltage</span><strong data-${key}-voltage>--</strong></div>
          <div class="metric"><span>Current</span><strong data-${key}-current>--</strong></div>
        </div>
        ${key === "solar" ? `<div class="metric"><span>Generated today</span><strong data-${key}-extra>--</strong></div>` : ""}
      </div>
      ${key === "solar" ? "" : this.chargerBreakdown(key)}
    </article>`;
  }

  chargerBreakdown(source) {
    const indexes = ["1", "2"].filter((index) => hasConfiguredEntity(this.config.entities[source]?.[`charger_${index}`]));
    if (!indexes.length) return "";
    return `<div class="charger-breakdown" aria-label="${source} by charger">
      ${indexes.map((index) => `<div class="charger-input-row">
        <span class="charger-name">Charger ${index}</span>
        <strong class="charger-power" data-${source}-charger-${index}-power>--</strong>
        <span class="charger-electrical" data-${source}-charger-${index}-electrical>--</span>
        <span class="charger-state" data-${source}-charger-${index}-state>--</span>
      </div>`).join("")}
    </div>`;
  }

  batteryHero() {
    return `<article class="card battery-hero" data-card="battery" style="--accent: var(--ced-charge)">
      <div class="card-head">
        <div>
          <div class="label">Battery bank</div>
          <div class="state">Combined battery storage</div>
        </div>
      </div>
      <div class="primary"><span data-bank-soc>--</span><span class="unit">%</span></div>
      <div class="battery-status" data-bank-status>--</div>
      <div class="secondary battery-metrics">
        <div class="metric"><span>Capacity</span><strong data-bank-capacity>--</strong></div>
        <div class="metric"><span>Voltage</span><strong data-bank-voltage>--</strong></div>
        <div class="metric battery-time"><span>Time</span><strong data-bank-time>--</strong></div>
      </div>
    </article>`;
  }

  batteryComparison() {
    const indexes = ["1", "2"].filter((index) => hasConfiguredEntity(this.config.entities[`battery_${index}`]));
    if (!indexes.length) return "";
    return `<article class="card" style="--accent: var(--ced-border)">
      <div class="card-head">
        <div>
          <div class="label">Battery comparison</div>
          <div class="state" data-comparison-status>--</div>
        </div>
      </div>
      ${indexes.map((index) => this.batteryStrip(index)).join("")}
      ${indexes.length > 1 ? `<div class="balance">
        <div class="metric-row"><span class="state">SOC difference</span><strong data-soc-diff>--</strong></div>
        <div class="metric-row"><span class="state">Current share</span><strong data-current-share>--</strong></div>
      </div>` : ""}
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
        </div>
      </div>
    </div>`;
  }

  todaySummary() {
    return `<article class="summary">
      <div class="label">Today's energy</div>
      <div class="summary-grid">
        <div class="metric-row"><span class="state">Solar generated</span><strong data-today-solar>--</strong></div>
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
      <div class="legend">
        <span><i style="--legend-color:#f59e0b"></i>Solar</span>
        <span><i style="--legend-color:#4caf50"></i>Battery in</span>
        <span><i style="--legend-color:#e85668"></i>Battery out</span>
        <span><i style="--legend-color:#4b9cd3"></i>Alternator</span>
        <span><i style="--legend-color:#61b8c8"></i>Hookup</span>
      </div>
      <div class="chart" data-chart>${emptyChart()}</div>
    </article>`;
  }

  controls() {
    const indexes = ["1", "2"].filter((index) => this.config.entities[`charger_${index}`]?.maximum_current_control);
    if (!indexes.length) return "";
    return `<section class="controls">
      ${indexes.map((index) => this.sliderControl(index)).join("")}
    </section>`;
  }

  sliderControl(index) {
    return `<div class="slider-row">
      <div>
        <div class="label">Charger ${index} maximum current</div>
        <div class="state" data-charger-${index}-status>Battery charger input limit</div>
      </div>
      <input type="range" min="10" max="50" step="1" data-charger-slider="${index}" aria-label="Charger ${index} maximum current">
      <strong data-charger-${index}-value>--</strong>
    </div>`;
  }

  bindEvents() {
    if (!this._entityClickBound) {
      this._entityClickBound = true;
      this.addEventListener("click", (event) => {
        const value = event.composedPath().find((node) => node?.dataset?.entityId);
        const entityId = value?.dataset?.entityId;
        if (!entityId) return;
        event.preventDefault();
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent("hass-more-info", {
          detail: { entityId },
          bubbles: true,
          composed: true
        }));
      });
    }
    this.shadowRoot.querySelectorAll("[data-charger-slider]").forEach((el) => {
      el.addEventListener("change", (event) => this.setChargerCurrent(event.currentTarget.dataset.chargerSlider, event.currentTarget.value));
      el.addEventListener("input", (event) => this.setText(`[data-charger-${event.currentTarget.dataset.chargerSlider}-value]`, `${event.currentTarget.value} A`));
    });
    this.shadowRoot.querySelectorAll("[data-model-view]").forEach((el) => {
      el.addEventListener("click", () => this.selectModelView(el.dataset.modelView));
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

  selectModelView(view) {
    this._selectedModelView = view;
    this.shadowRoot.querySelectorAll("[data-model-view]").forEach((el) => {
      el.classList.toggle("active", el.dataset.modelView === view);
    });
    this._modelController?.focus(view);
    const detail = { solar: "solar", engine: "charger", hookup: "charger", battery: "battery" }[view];
    if (detail) this.openModelDetail(detail);
    else this.closeModelDetail();
  }

  updateDynamic() {
    if (!this._hass || !this._rendered) return;
    const e = this.config.entities;
    const solarPower = this.num(e.solar.pv_power);
    const altInputs = this.chargerSourceValues(e.alternator);
    const hookupInputs = this.chargerSourceValues(e.hookup);
    const altPower = sumSourceValues(altInputs, "power", this.num(e.alternator.power));
    const altCurrent = sumSourceValues(altInputs, "current", this.num(e.alternator.current));
    const altVoltage = averageReportingVoltage(altInputs, this.num(e.alternator.voltage));
    const hookupPower = sumSourceValues(hookupInputs, "power", this.num(e.hookup.power));
    const hookupCurrent = sumSourceValues(hookupInputs, "current", this.num(e.hookup.current));
    const hookupVoltage = averageReportingVoltage(hookupInputs, this.num(e.hookup.voltage));
    const bankPower = this.num(e.bank.net_power);
    const outputPower = Math.abs(this.num(e.bank.output_power, Math.min(bankPower, 0)));
    const soc = this.num(e.bank.state_of_charge);
    const b1soc = this.num(e.battery_1.state_of_charge);
    const b2soc = this.num(e.battery_2.state_of_charge);
    const b1current = this.num(e.battery_1.current);
    const b2current = this.num(e.battery_2.current);

    this.updateSource("solar", solarPower, this.num(e.solar.pv_voltage), this.num(e.solar.pv_current), this.energy(e.solar.generated_today, e.solar.generated_today_fallback), solarPower > 10 ? "Charging" : "Inactive");
    const altState = altPower > 20 ? "Charging" : altVoltage > 12.5 ? "Engine available" : "Engine off";
    this.updateSource("alternator", altPower, altVoltage, altCurrent, "2 charger inputs", altState);
    this.updateChargerBreakdown("alternator", altInputs);
    const hookupState = hookupPower > 20 ? "Charging" : hookupVoltage > 5 ? "Connected" : "Disconnected";
    this.updateSource("hookup", hookupPower, hookupVoltage, hookupCurrent, "2 charger inputs", hookupState);
    this.updateChargerBreakdown("hookup", hookupInputs);

    this.setEntityValue("[data-consumption]", e.bank.net_power, Number.isFinite(bankPower) ? fmtNum(bankPower, 0) : "--");
    this.setText("[data-consumption-state]", batteryPowerText(bankPower));
    const batteryPowerReadout = this.shadowRoot.querySelector("[data-battery-power-readout]");
    batteryPowerReadout?.classList.toggle("charging", bankPower > 20);
    batteryPowerReadout?.classList.toggle("discharging", bankPower < -20);
    this.setEntityValue("[data-bank-soc]", e.bank.state_of_charge, this.state(e.bank.state_of_charge));
    this.setEntityText("[data-bank-capacity]", e.bank.remaining_capacity, "Ah", 0);
    this.setEntityText("[data-bank-voltage]", e.bank.voltage, "V", 2);
    this.setEntityValue("[data-bank-time]", e.bank.remaining_time, cleanTime(this.state(e.bank.remaining_time)));
    this.setText("[data-bank-status]", batteryStatus(bankPower, outputPower));

    this.updateBattery("1", e.battery_1);
    this.updateBattery("2", e.battery_2);
    const bankCharging = bankPower > 20;
    this._modelPowerState = {
      solar: bankCharging && solarPower > 10,
      engine: bankCharging && altPower > 20,
      hookup: hookupVoltage > 5,
      battery: bankPower < -20
    };
    this._modelController?.setPowerState?.(this._modelPowerState);
    const diff = Math.abs(b1soc - b2soc);
    const totalCurrent = Math.abs(b1current) + Math.abs(b2current);
    const share1 = totalCurrent > 0 ? Math.abs(b1current) / totalCurrent * 100 : null;
    const balance = diff < 3 ? "Balanced" : diff < 8 ? "Minor imbalance" : "Check battery balance";
    this.setText("[data-comparison-status]", `${operatingState(bankPower)} · ${balance}`);
    this.setText("[data-soc-diff]", Number.isFinite(diff) ? `${fmtNum(diff, 1)} %` : "--");
    this.setText("[data-current-share]", Number.isFinite(share1) ? `${fmtNum(share1, 0)} / ${fmtNum(100 - share1, 0)} %` : "--");

    this.updateDailySummary();

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
    const entities = this.config.entities[key] || {};
    const powerId = key === "solar" ? entities.pv_power : entities.power;
    const voltageId = key === "solar" ? entities.pv_voltage : entities.voltage;
    const currentId = key === "solar" ? entities.pv_current : entities.current;
    this.setEntityValue(`[data-${key}-power]`, powerId, fmtNum(Math.max(0, power), 0));
    const active = power > 10;
    const hasVoltage = Number.isFinite(voltage) && Math.abs(voltage) > 0.05;
    const hasCurrent = Number.isFinite(current) && Math.abs(current) > 0.05;
    this.setEntityValue(`[data-${key}-voltage]`, voltageId, active || hasVoltage ? `${fmtNum(voltage, voltage > 50 ? 0 : 1)} V` : "--");
    this.setEntityValue(`[data-${key}-current]`, currentId, active || hasCurrent ? `${fmtNum(current, 1)} A` : "--");
    this.setEntityValue(`[data-${key}-extra]`, key === "solar" ? (entities.generated_today || entities.generated_today_fallback) : null, extra);
    this.setText(`[data-${key}-state]`, state);
    this.shadowRoot.querySelector(`[data-card="${key}"]`)?.classList.toggle("active", active);
    this.shadowRoot.querySelector(`[data-card="${key}"]`)?.classList.toggle("inactive", !active);
    this.shadowRoot.querySelector(`.hotspot.${key === "alternator" ? "alternator" : key}`)?.classList.toggle("active", active);
  }

  chargerSourceValues(sourceMap) {
    return ["1", "2"].map((index) => {
      const entities = sourceMap[`charger_${index}`] || {};
      return {
        index,
        entities,
        voltage: this.num(entities.voltage),
        current: this.num(entities.current),
        power: this.num(entities.power)
      };
    });
  }

  updateChargerBreakdown(source, inputs) {
    inputs.forEach((input) => {
      const hasPower = Number.isFinite(input.power);
      const hasVoltage = Number.isFinite(input.voltage) && input.voltage > 0.05;
      const hasCurrent = Number.isFinite(input.current) && Math.abs(input.current) > 0.05;
      const connectedThreshold = source === "alternator" ? 12.5 : 5;
      const state = input.power > 20 ? "Charging" : input.voltage > connectedThreshold ? "Available" : "Off";
      this.setEntityValue(`[data-${source}-charger-${input.index}-power]`, input.entities.power, hasPower ? `${fmtNum(Math.max(0, input.power), 0)} W` : "--");
      const electrical = [
        hasVoltage ? `${fmtNum(input.voltage, 1)} V` : "--",
        hasCurrent ? `${fmtNum(input.current, 1)} A` : "--"
      ].join(" · ");
      const electricalIds = [input.entities.voltage, input.entities.current].filter(Boolean);
      this.setEntityValue(`[data-${source}-charger-${input.index}-electrical]`, electricalIds[0], electrical);
      this.setText(`[data-${source}-charger-${input.index}-state]`, state);
    });
  }

  updateBattery(index, entityMap) {
    const soc = this.num(entityMap.state_of_charge);
    const rawSoc = this.state(entityMap.state_of_charge);
    this.setEntityValue(`[data-battery-${index}-ring]`, entityMap.state_of_charge, rawSoc !== undefined ? `${rawSoc}%` : "--");
    const ring = this.shadowRoot.querySelector(`[data-battery-${index}-ring]`);
    if (ring) ring.style.setProperty("--soc", `${Math.max(0, Math.min(100, soc || 0))}%`);
    this.setText(`[data-battery-${index}-status]`, "", true);
    this.setEntityText(`[data-battery-${index}-capacity]`, entityMap.remaining_capacity, "Ah", 0);
    this.setEntityText(`[data-battery-${index}-voltage]`, entityMap.voltage, "V", 2);
    this.setEntityText(`[data-battery-${index}-current]`, entityMap.current, "A", 1);
  }

  updateSlider(index, entityId) {
    const value = this.num(entityId);
    const slider = this.shadowRoot.querySelector(`[data-charger-slider="${index}"]`);
    if (slider && Number.isFinite(value) && document.activeElement !== slider) slider.value = value;
    this.setEntityValue(`[data-charger-${index}-value]`, entityId, Number.isFinite(value) ? `${fmtNum(value, 0)} A` : "--");
  }

  async setChargerCurrent(index, value) {
    const entityId = this.config.entities[`charger_${index}`]?.maximum_current_control;
    if (!this._hass || !entityId) return;
    const domain = entityId.split(".")[0];
    if (!['input_number', 'number'].includes(domain)) return;
    await this._hass.callService(domain, "set_value", {
      entity_id: entityId,
      value: Number(value)
    });
  }

  updateDailySummary() {
    const values = this._dailyEnergy || {};
    const text = (value) => Number.isFinite(value) ? `${fmtNum(value, 2)} kWh` : "--";
    const summary = this.config.entities.summary;
    this.setEntityValue("[data-today-solar]", summary.solar_total, text(values.solar));
    this.setEntityValue("[data-today-in]", summary.battery_input_total, text(values.batteryIn));
    this.setEntityValue("[data-today-out]", summary.battery_output_total, text(values.batteryOut));
    const net = Number.isFinite(values.batteryIn) && Number.isFinite(values.batteryOut)
      ? values.batteryIn - values.batteryOut
      : NaN;
    this.setEntityValue("[data-today-net]", summary.battery_input_total, text(net));
  }

  async fetchHistory() {
    if (!this._hass || !this._rendered) return;
    const now = Date.now();
    if (now - this._historyRequestedAt < 300000) return;
    this._historyRequestedAt = now;
    const e = this.config.entities;
    const powerIds = [
      e.solar.pv_power,
      e.bank.input_power,
      e.bank.output_power,
      e.alternator.power,
      e.hookup.power
    ].filter(Boolean);
    const energyIds = [
      e.summary.solar_total,
      e.summary.battery_input_total,
      e.summary.battery_output_total
    ].filter(Boolean);
    const historyStart = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const end = new Date();
    const dayStart = new Date();
    dayStart.setHours(0, 0, 0, 0);
    const baselineStart = new Date(dayStart.getTime() - 60 * 60 * 1000);

    const [historyResult, energyResult] = await Promise.allSettled([
      this._hass.callWS({
        type: "history/history_during_period",
        start_time: historyStart.toISOString(),
        end_time: end.toISOString(),
        entity_ids: powerIds,
        include_start_time_state: true,
        significant_changes_only: false,
        minimal_response: false,
        no_attributes: true
      }),
      this._hass.callWS({
        type: "recorder/statistics_during_period",
        start_time: baselineStart.toISOString(),
        end_time: end.toISOString(),
        statistic_ids: energyIds,
        period: "hour",
        types: ["sum", "state"]
      })
    ]);

    if (historyResult.status === "fulfilled") {
      this._history = historyResult.value;
      this.setText("[data-history-state]", "Recorder history");
      this.renderChartFromHistory(historyResult.value, powerIds, historyStart);
    } else {
      console.error("Campervan power history failed", historyResult.reason);
      this.setText("[data-history-state]", "Live snapshot fallback");
      this.renderSnapshotChart();
    }

    if (energyResult.status === "fulfilled") {
      const stats = energyResult.value;
      const dailyDelta = (id) => {
        const current = this.num(id);
        const rows = stats?.[id] || [];
        const rowTime = (row) => typeof row.start === "number" ? row.start : Date.parse(row.start);
        const baselineRows = rows.filter((row) => rowTime(row) <= dayStart.getTime());
        const baselineRow = baselineRows.at(-1) || rows[0];
        const baseline = Number(baselineRow?.state ?? baselineRow?.sum);
        if (!Number.isFinite(current) || !Number.isFinite(baseline)) return NaN;
        return Math.max(0, current >= baseline ? current - baseline : current);
      };
      this._dailyEnergy = {
        solar: dailyDelta(e.summary.solar_total),
        batteryIn: dailyDelta(e.summary.battery_input_total),
        batteryOut: dailyDelta(e.summary.battery_output_total)
      };
      this.updateDailySummary();
    } else {
      console.error("Campervan daily energy statistics failed", energyResult.reason);
    }
  }

  renderChartFromHistory(history, ids, start) {
    const hourMs = 60 * 60 * 1000;
    const series = ids.map((id, entityIndex) => {
      let rows = history?.[id];
      if (!rows && Array.isArray(history)) {
        rows = history.find((group) => group?.[0]?.entity_id === id);
      }
      const buckets = Array.from({ length: 24 }, () => []);
      (rows || []).forEach((row) => {
        const value = Number(row.state ?? row.s);
        const rawTime = row.last_updated ?? row.last_changed ?? row.lu ?? row.lc;
        const timestamp = typeof rawTime === "number" ? rawTime * 1000 : Date.parse(rawTime);
        const bucket = Math.floor((timestamp - start.getTime()) / hourMs);
        if (Number.isFinite(value) && bucket >= 0 && bucket < 24) buckets[bucket].push(Math.max(0, value));
      });
      return buckets.map((values) => values.length
        ? values.reduce((sum, value) => sum + value, 0) / values.length
        : 0);
    });
    const labels = Array.from({ length: 24 }, (_, index) => {
      const time = new Date(start.getTime() + index * hourMs);
      return `${String(time.getHours()).padStart(2, "0")}:00`;
    });
    this.shadowRoot.querySelector("[data-chart]").innerHTML = chartSvg(series, ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"], labels);
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

  openModelDetail(type) {
    const panel = this.shadowRoot.querySelector("[data-model-detail]");
    if (!panel) return;
    panel.hidden = false;
    const close = `<button class="model-detail-close" data-close-model-detail title="Close" aria-label="Close">&times;</button>`;
    const title = type === "battery" ? "Battery health" : type === "solar" ? "Solar diagnostics" : "Charger diagnostics";
    panel.innerHTML = `<div class="model-detail-head"><h2>${title}</h2>${close}</div><div class="model-detail-grid">${this.detailRows(type)}</div>`;
    panel.querySelector("[data-close-model-detail]").addEventListener("click", () => this.closeModelDetail());
  }

  closeModelDetail() {
    const panel = this.shadowRoot.querySelector("[data-model-detail]");
    if (panel) panel.hidden = true;
  }

  detailRows(type) {
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
    if (state === undefined || state === null || state === "" || state === "unknown" || state === "unavailable") return undefined;
    return state;
  }

  num(entityId, fallback = NaN) {
    const raw = this.state(entityId);
    if (raw === undefined) return fallback;
    const value = Number(raw);
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

  setText(selector, value, allowEmpty = false) {
    const el = this.shadowRoot.querySelector(selector);
    if (el) el.textContent = allowEmpty ? String(value ?? "") : value || "--";
  }

  setEntityValue(selector, entityId, value) {
    const el = this.shadowRoot.querySelector(selector);
    if (!el) return;
    if (!entityId || value === undefined || value === null || value === "" || value === "--") {
      el.textContent = value || "--";
      return;
    }
    el.innerHTML = entityButton(entityId, value);
  }

  setEntityText(selector, entityId, unit, decimals = 1) {
    this.setEntityValue(selector, entityId, this.entityText(entityId, unit, decimals));
  }

  async startThree() {
    if (
      this._threeStarted ||
      !this.config.model_url ||
      !this.config.three_module_url ||
      !this.config.gltf_loader_url ||
      window.matchMedia("(max-width: 650px)").matches
    ) return;
    this._threeStarted = true;
    const host = this.shadowRoot.querySelector("[data-three-host]");
    if (!host) return;
    try {
      const THREE = await import(this.config.three_module_url);
      const loaderModule = await import(this.config.gltf_loader_url);
      const T = normalizeThree(THREE);
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(35, host.clientWidth / host.clientHeight, 0.1, 100);
      const view = { rotationY: 0.62, pitch: -0.15, radius: 8.2, lookAtY: 0 };
      camera.position.set(
        Math.sin(view.rotationY) * view.radius,
        3.3 + view.pitch * 6,
        Math.cos(view.rotationY) * view.radius
      );
      camera.lookAt(0, view.lookAtY, 0);
      const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(host.clientWidth, host.clientHeight);
      host.appendChild(renderer.domElement);
      scene.add(new T.AmbientLight(0xffffff, 1.0));
      const key = new T.DirectionalLight(0xffffff, 1.5);
      key.position.set(4, 5, 6);
      scene.add(key);
      const renderScene = () => renderer.render(scene, camera);
      const loader = new loaderModule.GLTFLoader();
      loader.load(this.config.model_url, (gltf) => {
        const model = gltf.scene;
        model.rotation.y = 0;
        scene.add(model);
        const box = new T.Box3().setFromObject(model);
        const size = box.getSize(new T.Vector3()).length();
        const center = box.getCenter(new T.Vector3());
        model.position.sub(center);
        model.position.y += 0.34;
        model.scale.multiplyScalar(7.4 / size);
        model.updateMatrixWorld(true);
        const setAssetGroupVisible = (group, visible) => {
          model.traverse((object) => {
            if (object.userData?.asset_group === group) object.visible = visible;
          });
        };
        model.traverse((object) => {
          if (object.userData?.default_hidden) object.visible = false;
        });
        const defaultPosition = camera.position.clone();
        const currentTarget = new T.Vector3(0, view.lookAtY, 0);
        const defaultTarget = currentTarget.clone();
        const originalMaterials = new Map();
        const solarLight = new T.SpotLight(0xf59e0b, 0, 4, Math.PI / 3, 0.55, 2);
        const engineLight = new T.SpotLight(0x4b9cd3, 0, 3, Math.PI / 3, 0.6, 2);
        const batteryLight = new T.SpotLight(0x4caf50, 0, 3, Math.PI / 3, 0.6, 2);
        const hookupWashLight = new T.SpotLight(0x61b8c8, 0, 5, Math.PI / 3, 0.55, 2);
        const solarTarget = new T.Object3D();
        const engineTarget = new T.Object3D();
        const batteryTarget = new T.Object3D();
        const hookupWashTarget = new T.Object3D();
        solarLight.position.set(-0.63, 4.25, -1.82);
        engineLight.position.set(-0.6, 2.25, 2.55);
        batteryLight.position.set(1.45, 1.45, -2.33);
        hookupWashLight.position.set(1.5, 3.1, -3.15);
        solarTarget.position.set(-0.63, 2.87, -1.82);
        engineTarget.position.set(-0.6, 1.05, 2.55);
        batteryTarget.position.set(0.42, 1.41, -2.33);
        hookupWashTarget.position.set(0.15, 1.35, -2.55);
        solarLight.target = solarTarget;
        engineLight.target = engineTarget;
        batteryLight.target = batteryTarget;
        hookupWashLight.target = hookupWashTarget;
        model.add(
          solarLight,
          engineLight,
          batteryLight,
          hookupWashLight,
          solarTarget,
          engineTarget,
          batteryTarget,
          hookupWashTarget
        );

        const restoreHighlights = () => {
          originalMaterials.forEach((material, mesh) => { mesh.material = material; });
          originalMaterials.clear();
          solarLight.intensity = 0;
          engineLight.intensity = 0;
          batteryLight.intensity = 0;
          hookupWashLight.intensity = 0;
        };
        const highlightNodes = (names, color) => {
          model.traverse((object) => {
            if (!names.some((name) => object.name === name || object.name.startsWith(name))) return;
            object.traverse((child) => {
              if (!child.isMesh || originalMaterials.has(child)) return;
              originalMaterials.set(child, child.material);
              const materials = Array.isArray(child.material) ? child.material : [child.material];
              const highlighted = materials.map((material) => {
                const clone = material.clone();
                if (clone.emissive) {
                  clone.emissive.setHex(color);
                  clone.emissiveIntensity = 0.65;
                } else if (clone.color) {
                  clone.color.setHex(color);
                }
                return clone;
              });
              child.material = Array.isArray(child.material) ? highlighted : highlighted[0];
            });
          });
        };
        const nodeCenter = (names, fallback) => {
          const objects = [];
          model.traverse((object) => {
            if (names.some((name) => object.name === name || object.name.startsWith(name))) objects.push(object);
          });
          if (!objects.length) return model.localToWorld(fallback.clone());
          const bounds = new T.Box3();
          objects.forEach((object) => bounds.expandByObject(object));
          if (bounds.isEmpty()) return model.localToWorld(fallback.clone());
          return bounds.getCenter(new T.Vector3());
        };
        const chargerCenter = model.worldToLocal(nodeCenter(
          ["EV_CHARGER_POLE_PRO_ROOT"],
          new T.Vector3(1.5, 1.2, -3.15)
        ).clone());
        hookupWashTarget.position.copy(chargerCenter);
        hookupWashLight.position.copy(chargerCenter).add(new T.Vector3(1.4, 2.1, 1.2));
        const applyHighlight = (name) => {
          if (name === "solar") solarLight.intensity = 8;
          if (name === "engine") engineLight.intensity = 4.2;
          if (name === "hookup") {
            setAssetGroupVisible("EV_CHARGER_AND_CABLE", true);
            hookupWashLight.intensity = 6;
            highlightNodes(["Hookup"], 0x61b8c8);
          }
          if (name === "battery") batteryLight.intensity = 4.2;
        };
        let activeView = "overview";
        let powerState = this._modelPowerState || {};
        let restPulseFrame = 0;
        const stopRestPulse = () => {
          if (restPulseFrame) cancelAnimationFrame(restPulseFrame);
          restPulseFrame = 0;
        };
        const startRestPulse = () => {
          stopRestPulse();
          if (activeView !== "overview" || (!powerState.solar && !powerState.engine && !powerState.hookup)) return;
          const pulse = (now) => {
            if (!this.isConnected || activeView !== "overview" || (!powerState.solar && !powerState.engine && !powerState.hookup)) {
              restPulseFrame = 0;
              return;
            }
            const phase = (Math.sin(now / 500) + 1) / 2;
            if (powerState.solar) solarLight.intensity = 6.5 + phase * 3.5;
            if (powerState.engine) engineLight.intensity = 3.2 + phase * 3;
            if (powerState.hookup) hookupWashLight.intensity = 4.5 + phase * 3;
            renderScene();
            restPulseFrame = requestAnimationFrame(pulse);
          };
          restPulseFrame = requestAnimationFrame(pulse);
        };
        const applyRestHighlights = () => {
          setAssetGroupVisible("EV_CHARGER_AND_CABLE", false);
          ["solar", "engine", "hookup", "battery"].forEach((name) => {
            if (powerState[name]) applyHighlight(name);
          });
          startRestPulse();
        };
        const moveCamera = (position, target) => {
          const fromPosition = camera.position.clone();
          const fromTarget = currentTarget.clone();
          const started = performance.now();
          const frame = (now) => {
            const progress = Math.min(1, (now - started) / 420);
            const eased = 1 - Math.pow(1 - progress, 3);
            camera.position.lerpVectors(fromPosition, position, eased);
            currentTarget.lerpVectors(fromTarget, target, eased);
            camera.lookAt(currentTarget);
            renderScene();
            if (progress < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        };
        const focus = (name) => {
          activeView = name;
          stopRestPulse();
          restoreHighlights();
          setAssetGroupVisible("EV_CHARGER_AND_CABLE", false);
          if (name === "overview") {
            applyRestHighlights();
            moveCamera(defaultPosition, defaultTarget);
            return;
          }
          const presets = {
            solar: {
              target: nodeCenter(["Cube_Material_0"], new T.Vector3(-0.6, 2.8, -1.8)),
              offset: new T.Vector3(3.8, 4.5, 3.3),
              highlight: () => applyHighlight("solar")
            },
            engine: {
              target: model.localToWorld(new T.Vector3(-0.6, 1.15, 2.15)),
              offset: new T.Vector3(3.5, 2.2, 4.2),
              highlight: () => applyHighlight("engine")
            },
            hookup: {
              target: nodeCenter(["Hookup"], new T.Vector3(-1.67, 0.6, -3.5)),
              offset: new T.Vector3(-3.8, 2.1, -3.6),
              highlight: () => applyHighlight("hookup")
            },
            battery: {
              target: nodeCenter(["Small Door"], new T.Vector3(0.42, 1.41, -2.33)),
              offset: new T.Vector3(3.8, 2.0, -3.8),
              highlight: () => applyHighlight("battery")
            }
          };
          const preset = presets[name];
          if (!preset) return;
          preset.highlight();
          moveCamera(preset.target.clone().add(preset.offset), preset.target);
        };
        const setPowerState = (nextState) => {
          powerState = nextState || {};
          if (activeView !== "overview") return;
          restoreHighlights();
          applyRestHighlights();
          renderScene();
        };
        this._modelController = { focus, setPowerState };
        setPowerState(this._modelPowerState);
        if (this._selectedModelView !== "overview") focus(this._selectedModelView);
        camera.lookAt(currentTarget);
        this.shadowRoot.querySelector(".van-stage")?.classList.add("model-loaded");
        this.setText("[data-model-state]", "", true);
        renderScene();
      }, undefined, (error) => {
        console.error("Custom van model failed to load", error);
        this.setText("[data-model-state]", "Using generic van illustration");
      });
      renderScene();
      const resize = new ResizeObserver(() => {
        camera.aspect = host.clientWidth / host.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(host.clientWidth, host.clientHeight);
        renderScene();
      });
      resize.observe(host);
    } catch (error) {
      console.error("Custom 3D renderer failed to start", error);
      host.remove();
      this.setText("[data-model-state]", "Using generic van illustration");
    }
  }

  getCardSize() {
    return 12;
  }
}

class CampervanEnergyDashboardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._userConfig = { type: "custom:campervan-energy-dashboard" };
    this._config = mergeConfig(DEFAULT_CONFIG, this._userConfig);
    this._hass = undefined;
  }

  setConfig(config) {
    this._userConfig = JSON.parse(JSON.stringify({
      type: "custom:campervan-energy-dashboard",
      ...(config || {})
    }));
    this._config = mergeConfig(DEFAULT_CONFIG, this._userConfig);
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    this.applyForms();
  }

  valueAtPath(path) {
    return path.split(".").reduce((value, key) => value?.[key], this._config);
  }

  updatePath(path, value) {
    const keys = path.split(".");
    this.setPathValue(this._config, keys, value || null);
    if (value) this.setPathValue(this._userConfig, keys, value);
    else this.deletePathValue(this._userConfig, keys);
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: this._userConfig },
      bubbles: true,
      composed: true
    }));
  }

  setPathValue(target, keys, value) {
    let cursor = target;
    keys.slice(0, -1).forEach((key) => {
      if (!cursor[key] || typeof cursor[key] !== "object") cursor[key] = {};
      cursor = cursor[key];
    });
    cursor[keys[keys.length - 1]] = value;
  }

  deletePathValue(target, keys) {
    const parents = [];
    let cursor = target;
    for (const key of keys.slice(0, -1)) {
      if (!cursor[key] || typeof cursor[key] !== "object") return;
      parents.push([cursor, key]);
      cursor = cursor[key];
    }
    delete cursor[keys[keys.length - 1]];
    parents.reverse().forEach(([parent, key]) => {
      if (!Object.keys(parent[key]).length) delete parent[key];
    });
  }

  selectorFor(field) {
    if (field.selector) return field.selector;
    const domains = field.domains || [];
    return {
      entity: domains.length ? { domain: domains.length === 1 ? domains[0] : domains } : {}
    };
  }

  applyForms() {
    this.shadowRoot?.querySelectorAll("ha-form[data-path]").forEach((form) => {
      const path = form.dataset.path;
      const field = EDITOR_GROUPS.flatMap((group) => group.fields).find((item) => item.path === path);
      if (!field) return;
      form.hass = this._hass;
      form.data = { value: this.valueAtPath(path) || "" };
      form.schema = [{ name: "value", label: field.label, selector: this.selectorFor(field) }];
      form.computeLabel = (schema) => schema.label || schema.name;
      if (form.dataset.bound === "true") return;
      form.dataset.bound = "true";
      form.addEventListener("value-changed", (event) => {
        this.updatePath(path, event.detail?.value?.value || "");
      });
    });
  }

  render() {
    const groups = EDITOR_GROUPS.map((group, index) => `
      <details class="group" ${index < 4 ? "open" : ""}>
        <summary>${escapeHtml(group.title)} <span>${group.fields.length}</span></summary>
        <div class="grid">
          ${group.fields.map((field) => `<ha-form data-path="${escapeHtml(field.path)}"></ha-form>`).join("")}
        </div>
      </details>
    `).join("");
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; color: var(--primary-text-color); }
        .editor { display: grid; gap: 12px; padding: 8px 0 4px; }
        .intro { color: var(--secondary-text-color); font-size: 13px; line-height: 1.45; }
        .group { border: 1px solid var(--divider-color); border-radius: 12px; overflow: hidden; background: var(--card-background-color); }
        summary { cursor: pointer; padding: 13px 14px; font-weight: 700; user-select: none; }
        summary span { float: right; color: var(--secondary-text-color); font-size: 12px; font-weight: 500; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; padding: 2px 14px 16px; }
        ha-form { display: block; min-width: 0; }
      </style>
      <div class="editor">
        <div class="intro">Choose the entity for each reading. Entity pickers are filtered to compatible Home Assistant domains. The built-in van illustration needs no external assets; custom images and 3D models are optional.</div>
        ${groups}
      </div>
    `;
    this.applyForms();
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

function hasConfiguredEntity(value) {
  if (typeof value === "string") return value.includes(".");
  if (!value || typeof value !== "object") return false;
  return Object.values(value).some(hasConfiguredEntity);
}

function fmtNum(value, decimals = 0) {
  if (!Number.isFinite(value)) return "--";
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function sumSourceValues(inputs, key, fallback = NaN) {
  const values = inputs.map((input) => input[key]).filter(Number.isFinite);
  return values.length ? values.reduce((sum, value) => sum + value, 0) : fallback;
}

function averageReportingVoltage(inputs, fallback = NaN) {
  const values = inputs.map((input) => input.voltage).filter((value) => Number.isFinite(value) && value > 0.05);
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : fallback;
}

function batteryStatus(netPower, outputPower) {
  if (netPower > 20) return `Charging at ${fmtNum(Math.abs(netPower), 0)} W`;
  if (netPower < -20) return `Discharging at ${fmtNum(outputPower || Math.abs(netPower), 0)} W`;
  return "Battery idle";
}

function batteryPowerText(netPower) {
  if (netPower < -20) return "Battery supplying van";
  if (netPower > 20) return "Battery charging";
  return "Battery idle";
}

function operatingState(netPower) {
  if (netPower > 20) return "Charging";
  if (netPower < -20) return "Discharging";
  return "Idle";
}

function cleanTime(value) {
  if (!value) return "--";
  return value.replace(" remaining", "");
}

function rows(card, values, hideUnavailable = false) {
  return values.map(([label, entity, unit]) => {
    let value;
    if (Array.isArray(entity)) {
      const rendered = entity.map((id) => {
        const text = card.entityText(id, unit || "", unit ? 3 : 1).replace(` ${unit}`, "");
        return text === "--" ? "" : entityButton(id, `${text}${unit ? ` ${unit}` : ""}`);
      }).filter(Boolean);
      value = rendered.join(" <span class=\"entity-separator\">/</span> ");
    } else {
      const text = unit ? card.entityText(entity, unit, unit === "V" ? 3 : 1) : card.state(entity);
      value = text ? entityButton(entity, text) : text;
    }
    if (!value || value === "--") {
      if (hideUnavailable) return "";
      value = `<span class="unavailable">--</span>`;
    } else if (!value.includes("data-entity-id")) {
      value = escapeHtml(value);
    }
    return `<div class="metric-row"><span class="state">${escapeHtml(label)}</span><strong>${value}</strong></div>`;
  }).join("");
}

function entityButton(entityId, value) {
  if (!entityId) return escapeHtml(value);
  return `<button type="button" class="entity-value" data-entity-id="${escapeHtml(entityId)}" title="Show ${escapeHtml(entityId)} in Home Assistant">${escapeHtml(value)}</button>`;
}

function chartSvg(series, colors, labels = []) {
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
  const labelIndexes = labels.length ? [0, 6, 12, 18, 23] : [];
  const axisLabels = labelIndexes.map((index) => {
    const x = padding + (index + 0.5) * groupWidth;
    const anchor = index === 0 ? "start" : index === 23 ? "end" : "middle";
    return `<text x="${x.toFixed(1)}" y="${height - 5}" text-anchor="${anchor}" fill="#777" font-size="10">${escapeHtml(labels[index])}</text>`;
  }).join("");
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Energy history chart">
    <g stroke="#2a2a2a" stroke-width="1">
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}"/>
      <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}"/>
      <line x1="${padding}" y1="${height / 2}" x2="${width - padding}" y2="${height / 2}" opacity="0.7"/>
    </g>
    ${bars}
    ${axisLabels}
  </svg>`;
}

function emptyChart() {
  return chartSvg([[0], [0], [0], [0], [0]], ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"]);
}

function normalizeThree(module) {
  return {
    AmbientLight: module.AmbientLight || module.AmbientLight2,
    Box3: module.Box3 || module.Box32,
    DirectionalLight: module.DirectionalLight || module.DirectionalLight2,
    Object3D: module.Object3D || module.Object3D2,
    PerspectiveCamera: module.PerspectiveCamera || module.PerspectiveCamera2,
    Scene: module.Scene || module.Scene2,
    SpotLight: module.SpotLight || module.SpotLight2,
    Vector3: module.Vector3 || module.Vector32,
    WebGLRenderer: module.WebGLRenderer
  };
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

function vanSilhouette() {
  return `<svg viewBox="0 0 900 420" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="vanBody" x1="0" x2="1">
        <stop offset="0" stop-color="#2a2a2a"/>
        <stop offset="0.55" stop-color="#343434"/>
        <stop offset="1" stop-color="#242424"/>
      </linearGradient>
      <linearGradient id="glass" x1="0" x2="1">
        <stop offset="0" stop-color="#151515"/>
        <stop offset="1" stop-color="#222"/>
      </linearGradient>
    </defs>
    <ellipse cx="455" cy="345" rx="345" ry="34" fill="#0e0e0e" opacity="0.75"/>
    <path d="M145 280 L180 178 C188 154 208 139 234 137 L540 118 C581 116 616 132 641 164 L735 286 Z" fill="url(#vanBody)" stroke="#555" stroke-width="3"/>
    <path d="M230 158 L366 149 L366 224 L198 232 L217 174 C220 166 223 161 230 158 Z" fill="url(#glass)" stroke="#444" stroke-width="2"/>
    <path d="M386 148 L535 140 C563 139 586 150 604 172 L646 226 L386 224 Z" fill="url(#glass)" stroke="#444" stroke-width="2"/>
    <path d="M135 281 H756 L726 318 H116 Z" fill="#202020" stroke="#4a4a4a" stroke-width="3"/>
    <path d="M246 125 L545 108" stroke="#3d3d3d" stroke-width="8" stroke-linecap="round"/>
    <rect x="274" y="102" width="210" height="17" rx="5" fill="#252525" stroke="#4a4a4a"/>
    <circle cx="247" cy="318" r="48" fill="#111" stroke="#5a5a5a" stroke-width="6"/>
    <circle cx="247" cy="318" r="20" fill="#2b2b2b"/>
    <circle cx="604" cy="318" r="48" fill="#111" stroke="#5a5a5a" stroke-width="6"/>
    <circle cx="604" cy="318" r="20" fill="#2b2b2b"/>
    <path d="M667 236 H734" stroke="#666" stroke-width="5" stroke-linecap="round"/>
    <path d="M153 244 H203" stroke="#666" stroke-width="5" stroke-linecap="round"/>
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

if (!customElements.get("campervan-energy-dashboard-editor")) {
  customElements.define("campervan-energy-dashboard-editor", CampervanEnergyDashboardEditor);
}
if (!customElements.get("campervan-energy-dashboard")) {
  customElements.define("campervan-energy-dashboard", CampervanEnergyDashboard);
}
window.campervanEnergyDashboardBuild = DASHBOARD_BUILD;
console.info(`%c CAMPERVAN-ENERGY-DASHBOARD %c ${CARD_VERSION} `, "color: white; background: #4caf50; font-weight: 700;", "color: white; background: #1b1b1b; font-weight: 700;");
